"""
AI School Handbook Assistant — FastAPI Backend

Architecture:
  Next.js frontend  →  FastAPI backend  →  ChromaDB  →  OpenAI embeddings + chat

Migrated from hbycwyh2008/ai_school_handbook (Node.js) to FastAPI + Next.js.
"""

import os
import shutil
import tempfile
from pathlib import Path
from typing import Any

from typing import Annotated

from dotenv import load_dotenv
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from prompts.system_prompt import NOT_FOUND_ANSWER
from services.chroma_client import clear_collection, get_ingest_status, upsert_chunks
from services.chunk_text import chunk_text
from services.embed_chunks import embed_texts
from services.generate_answer import generate_answer
from services.parse_handbook import parse_handbook
from services.retrieve_chunks import retrieve_chunks
from services.safety_check import safety_check
from utils.format_sources import format_sources_from_chunks

load_dotenv()

app = FastAPI(title="AI School Handbook Assistant")

frontend_origin = os.getenv("FRONTEND_ORIGIN", "http://localhost:3000")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_origin],
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = Path(__file__).parent / "data" / "handbook" / "uploads"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
MAX_FILES = 20


class AskRequest(BaseModel):
    question: str


class AskResponse(BaseModel):
    answer: str
    sources: list[dict[str, Any]]
    found: bool
    safety: dict[str, Any] | None = None


class IngestResponse(BaseModel):
    success: bool
    chunksStored: int | None = None
    sources: list[dict[str, Any]] | None = None
    sourceTitle: str | None = None
    message: str


@app.get("/api/health")
def health() -> dict:
    return {"ok": True}


@app.get("/api/ingest/status")
async def ingest_status() -> dict:
    return await get_ingest_status()


@app.post("/api/ingest", response_model=IngestResponse)
async def ingest(
    files: Annotated[list[UploadFile], File()] = [],
    replaceExisting: str = Form(default="true"),
    filePath: str | None = Form(default=None),
    sourceTitle: str | None = Form(default=None),
) -> IngestResponse:
    replace_existing = replaceExisting.lower() != "false"
    upload_files = [file for file in files if file.filename]

    if not upload_files and not filePath:
        raise HTTPException(status_code=400, detail="Provide at least one file or filePath.")

    all_chunks: list[dict] = []
    source_summaries: list[dict[str, Any]] = []

    try:
        if upload_files:
            if len(upload_files) > MAX_FILES:
                raise HTTPException(status_code=400, detail=f"Maximum {MAX_FILES} files allowed.")

            for upload in upload_files:
                suffix = Path(upload.filename or "handbook.txt").suffix
                with tempfile.NamedTemporaryFile(delete=False, suffix=suffix, dir=UPLOAD_DIR) as tmp:
                    shutil.copyfileobj(upload.file, tmp)
                    temp_path = tmp.name

                title = upload.filename or "Handbook"
                parsed = await parse_handbook(temp_path, title)
                text = parsed if isinstance(parsed, str) else parsed.get("text", "")
                num_pages = None if isinstance(parsed, str) else parsed.get("num_pages")
                chunks = chunk_text(text, {"source_title": title, "num_pages": num_pages})
                all_chunks.extend(chunks)
                source_summaries.append({"name": title, "chunks": len(chunks)})
                Path(temp_path).unlink(missing_ok=True)
        else:
            resolved = Path(filePath or "").resolve()
            title = sourceTitle or "School Handbook"
            parsed = await parse_handbook(str(resolved), title)
            text = parsed if isinstance(parsed, str) else parsed.get("text", "")
            num_pages = None if isinstance(parsed, str) else parsed.get("num_pages")
            chunks = chunk_text(text, {"source_title": title, "num_pages": num_pages})
            all_chunks.extend(chunks)
            source_summaries.append({"name": title, "chunks": len(chunks)})

        if not all_chunks:
            raise HTTPException(status_code=400, detail="No content extracted from the provided file(s).")

        embeddings = await embed_texts([chunk["text"] for chunk in all_chunks])

        if replace_existing:
            await clear_collection()

        await upsert_chunks(all_chunks, embeddings)

        message = (
            f"Ingested {len(source_summaries)} files. {len(all_chunks)} chunks stored."
            if len(source_summaries) > 1
            else "Handbook ingested successfully."
        )

        return IngestResponse(
            success=True,
            chunksStored=len(all_chunks),
            sources=source_summaries,
            sourceTitle=source_summaries[0]["name"] if len(source_summaries) == 1 else None,
            message=message,
        )
    except HTTPException:
        raise
    except Exception as err:
        raise HTTPException(status_code=500, detail=str(err)) from err


@app.post("/api/ask", response_model=AskResponse)
async def ask(request: AskRequest) -> AskResponse:
    question = request.question.strip()
    if not question:
        raise HTTPException(status_code=400, detail="question is required")

    try:
        safety = safety_check(question)
        chunks = await retrieve_chunks(question, 6)

        if not chunks:
            return AskResponse(answer=NOT_FOUND_ANSWER, sources=[], found=False)

        ai_result = await generate_answer(question, chunks)
        sources = format_sources_from_chunks(chunks) if ai_result.get("found") else []

        return AskResponse(
            answer=ai_result.get("answer", NOT_FOUND_ANSWER),
            sources=sources,
            found=bool(ai_result.get("found")),
            safety={"suspicious": True} if safety.get("suspicious") else None,
        )
    except Exception as err:
        return AskResponse(
            answer=NOT_FOUND_ANSWER,
            sources=[],
            found=False,
        )


@app.get("/")
def root() -> dict:
    return {
        "status": "ok",
        "message": "AI School Handbook Assistant backend is running.",
    }

import os
from pathlib import Path

import chromadb
from chromadb.api import ClientAPI

HOST = os.getenv("CHROMA_HOST", "127.0.0.1")
PORT = int(os.getenv("CHROMA_PORT", "8100"))
COLLECTION_NAME = os.getenv("CHROMA_COLLECTION", "school_handbook")
CHROMA_MODE = os.getenv("CHROMA_MODE", "embedded").lower()
PERSIST_PATH = os.getenv(
    "CHROMA_PERSIST_PATH",
    str(Path(__file__).resolve().parent.parent / "chroma_data"),
)

_client: ClientAPI | None = None


def get_client() -> ClientAPI:
    global _client
    if _client is None:
        if CHROMA_MODE == "http":
            _client = chromadb.HttpClient(host=HOST, port=PORT)
        else:
            Path(PERSIST_PATH).mkdir(parents=True, exist_ok=True)
            _client = chromadb.PersistentClient(path=PERSIST_PATH)
    return _client


def get_collection():
    return get_client().get_or_create_collection(name=COLLECTION_NAME)


async def ensure_collection():
    return get_collection()


async def clear_collection() -> None:
    try:
        get_client().delete_collection(name=COLLECTION_NAME)
    except Exception as err:
        message = str(err).lower()
        if "does not exist" in message or "could not be found" in message or "not found" in message:
            return
        raise


async def upsert_chunks(chunks: list[dict], embeddings: list[list[float]]) -> None:
    collection = get_collection()
    collection.upsert(
        ids=[chunk["id"] for chunk in chunks],
        embeddings=embeddings,
        documents=[chunk["text"] for chunk in chunks],
        metadatas=[chunk.get("metadata", {}) for chunk in chunks],
    )


async def query_chunks(query_embedding: list[float], n_results: int = 4) -> list[dict]:
    collection = get_collection()
    result = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results,
        include=["documents", "metadatas", "distances"],
    )

    docs = result.get("documents", [[]])[0]
    metadatas = result.get("metadatas", [[]])[0]

    return [
        {
            "text": text or "",
            "metadata": metadatas[index] if index < len(metadatas) else {},
        }
        for index, text in enumerate(docs)
    ]


async def get_ingest_status() -> dict:
    try:
        collection = get_collection()
        count = collection.count()
        return {"hasData": count > 0, "count": count}
    except Exception:
        return {"hasData": False, "count": 0}

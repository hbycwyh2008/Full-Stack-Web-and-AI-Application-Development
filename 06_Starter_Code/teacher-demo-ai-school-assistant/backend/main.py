"""
AI School Assistant — Teacher Demo Backend (FastAPI)

DATA FLOW
=========
User question
  -> Next.js frontend
  -> FastAPI POST /ask
  -> Search sample_handbook.txt
  -> generate_answer() placeholder
  -> Answer + source
  -> Frontend displays result

This demo is intentionally small. It is a teaching model, not a production app.
There is NO real LLM API call yet and NO real API key. The generate_answer()
function is a clearly marked placeholder that students will replace later.
"""

from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="AI School Assistant Demo")

# Allow the local Next.js frontend (http://localhost:3000) to call this backend.
# In a real app, you would restrict origins more carefully.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Path to the one sample document this demo answers from.
HANDBOOK_PATH = Path(__file__).parent / "sample_handbook.txt"


class AskRequest(BaseModel):
    """The shape of the request body the frontend sends."""

    question: str


class AskResponse(BaseModel):
    """The shape of the response body we send back to the frontend."""

    answer: str
    source: str


def load_handbook() -> str:
    """Read the sample school handbook from disk."""
    return HANDBOOK_PATH.read_text(encoding="utf-8")


def retrieve_context(question: str, handbook: str) -> tuple[str, str]:
    """
    A very simple retrieval function.

    It splits the handbook into sections (separated by blank lines) and returns
    the section that shares the most words with the question. This is a
    beginner-friendly stand-in for real document search / vector search.

    Returns a tuple of (matched_section_text, source_title).
    """
    sections = [s.strip() for s in handbook.split("\n\n") if s.strip()]

    question_words = {word.lower() for word in question.split() if len(word) > 2}

    best_section = ""
    best_title = ""
    best_score = 0

    for section in sections:
        # The first line of each section is treated as its title/heading.
        lines = section.split("\n")
        title = lines[0].strip()
        section_words = {word.lower().strip(".,!?") for word in section.split()}

        # Score = how many question words appear in this section.
        score = len(question_words & section_words)

        if score > best_score:
            best_score = score
            best_section = section
            best_title = title

    return best_section, best_title


def generate_answer(question: str, context: str) -> str:
    """
    Placeholder for a real LLM API call.

    In the full project, this function would call an LLM API using the question
    and the retrieved context, and ask the model to answer ONLY from the context
    and to say "I don't know" if the answer is not present.

    For now, it returns a simple grounded response based on the retrieved text.
    """
    # TODO: In the full AI School Assistant, replace the lines below with a real
    # LLM API call. Example (pseudo-code):
    #   prompt = build_prompt(question, context)
    #   return llm_client.complete(prompt)
    return (
        "Based on the school handbook, here is what I found:\n\n"
        f"{context}\n\n"
        "(This is a placeholder answer. A real version would use an LLM to "
        "summarize this for your specific question.)"
    )


@app.post("/ask", response_model=AskResponse)
def ask(request: AskRequest) -> AskResponse:
    """Receive a question, find a relevant handbook section, and answer."""
    question = request.question.strip()

    # Error handling: empty question.
    if not question:
        raise HTTPException(status_code=400, detail="Please enter a question.")

    try:
        handbook = load_handbook()
    except FileNotFoundError:
        # Error handling: unexpected server problem (missing document file).
        raise HTTPException(
            status_code=500, detail="The handbook document could not be loaded."
        )

    context, source_title = retrieve_context(question, handbook)

    # Error handling: no relevant section found.
    if not context:
        return AskResponse(
            answer="I don't know based on the school handbook. Please try rephrasing your question.",
            source="No matching section found",
        )

    answer = generate_answer(question, context)
    return AskResponse(answer=answer, source=f"Student Handbook — {source_title}")


@app.get("/")
def health() -> dict:
    """A simple health check so you can confirm the server is running."""
    return {"status": "ok", "message": "AI School Assistant Demo backend is running."}

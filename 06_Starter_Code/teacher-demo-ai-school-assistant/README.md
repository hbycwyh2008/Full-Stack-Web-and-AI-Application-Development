# Teacher Demo — AI School Assistant

> This demo is intentionally small. It is a teaching model, not a production application.

## 1. What This Demo Does
A user types a question about school policies (like "What is the late homework policy?"). The app finds a relevant section in a sample school handbook and returns an answer plus the source. It is a tiny version of the final AI School Assistant.

## 2. Why It Exists
Students study this demo to understand the full-stack architecture before building their own version. It shows how a frontend, a backend, a document, and an (eventual) LLM fit together — responsibly and with sources.

## 3. Architecture
```text
Next.js frontend  →  FastAPI backend  →  sample_handbook.txt  →  generate_answer() placeholder
```
- **Frontend:** minimal Next.js (plain React).
- **Backend:** FastAPI with one endpoint, `POST /ask`.
- **Document:** one local text file, `sample_handbook.txt`.
- **AI:** a clearly marked placeholder — no real LLM call yet.

## 4. Data Flow
```text
User question
→ Next.js frontend
→ FastAPI POST /ask
→ Search sample_handbook.txt
→ generate_answer() placeholder
→ Answer + source
→ Frontend displays result
```

## 5. How to Run the Backend
```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate
# Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
Check http://localhost:8000 — you should see a status message. The interactive API docs are at http://localhost:8000/docs.

## 6. How to Run the Frontend
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:3000. Make sure the backend is running first.

## 7. What Is Still a Placeholder
- `generate_answer()` in `backend/main.py` does **not** call a real LLM. It returns a simple grounded response based on the matched handbook section.
- The retrieval function is a simple word-overlap search, not a real vector search.
- `python-dotenv` is included in `backend/requirements.txt` for the later real-LLM version (so it can read a key from `.env`), but the **current demo does not call a real LLM**.

## 8. Where a Real LLM API Call Would Go Later
Inside `generate_answer()` in `backend/main.py`. The `TODO` comment marks the exact spot. In the full project, this function would build a prompt from the question and retrieved context, call an LLM API (using a key from `.env`), and return the model's answer.

## 9. How This Connects to the Final AI School Assistant
This demo is the skeleton of the final project. The final version adds a real LLM call, better document retrieval (possibly a vector store), more documents, and a nicer UI — but the architecture and data flow stay the same.

## 10. What Students Should Notice
- The frontend calls **FastAPI**, not Next.js API routes.
- The backend answers from a **document** and names its **source** (responsible, honest AI).
- There is **no real API key** in the code; secrets live in `.env` (ignored by Git).
- Error handling covers empty questions, no match found, and server errors.

## Security
- `.env.example` shows the variable name only. Copy it to `.env` locally and never commit `.env`.
- `.gitignore` already ignores `.env`, `node_modules`, `.next`, `__pycache__`, and `.pytest_cache`.

## Troubleshooting

### Frontend cannot connect to backend
Make sure FastAPI is running at `http://localhost:8000`.

### CORS error
Check that the backend allows `http://localhost:3000`.

### Empty or irrelevant answer
Try asking about late homework, exam review, AI usage, or project submission.

# Starter Code: FastAPI Backend

The production backend for the AI School Assistant is in **`../ai-school-assistant/backend/`**.

Use that project for the full RAG API. For Phase 5 exercises, students can:

1. Study `../ai-school-assistant/backend/main.py` — routes, CORS, file upload
2. Study `../ai-school-assistant/backend/services/` — chunking, embeddings, ChromaDB, LLM
3. Build a simpler API (one endpoint, no RAG) before the capstone

## Run the full backend

```bash
cd ../ai-school-assistant
docker compose up -d

cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp ../.env.example .env
uvicorn main:app --reload --port 8000
```

API docs: http://localhost:8000/docs

## Key endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/health` | Health check |
| POST | `/api/ingest` | Upload and index handbook |
| POST | `/api/ask` | RAG question answering |

## Key services

| Module | Purpose |
|---|---|
| `services/chunk_text.py` | Split handbook into chunks |
| `services/embed_chunks.py` | OpenAI embeddings |
| `services/chroma_client.py` | ChromaDB storage and query |
| `services/retrieve_chunks.py` | Vector search |
| `services/generate_answer.py` | LLM answer generation |

---

Source code in this folder is licensed under the MIT License unless otherwise stated.

# AI School Handbook Assistant

Full-stack RAG application for the **Full-Stack Web and AI Application Development** course.

Migrated from [hbycwyh2008/ai_school_handbook](https://github.com/hbycwyh2008/ai_school_handbook) and restructured to match the course architecture:

```text
Next.js frontend  →  FastAPI backend  →  ChromaDB  →  OpenAI embeddings + chat
```

## Features

- Upload handbook files (`.pdf`, `.docx`, `.txt`, `.md`)
- Chunk text, embed with OpenAI, store in **ChromaDB**
- Ask questions via `POST /api/ask`
- Grounded answers with source citations
- Not-found behavior when evidence is insufficient
- Basic prompt-injection checks

## Project Structure

```text
ai-school-assistant/
├── docker-compose.yml      # ChromaDB on port 8100
├── .env.example
├── backend/                # FastAPI
│   ├── main.py
│   ├── services/
│   └── data/sample_handbook.txt
└── frontend/               # Next.js
    └── app/page.js
```

## Quick Start

### Option A — Embedded ChromaDB (recommended, no Docker)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp ../.env.example .env    # add your OPENAI_API_KEY
uvicorn main:app --reload --port 8000
```

ChromaDB data is stored locally in `backend/chroma_data/` (`CHROMA_MODE=embedded`).

### Option B — Docker ChromaDB server

```bash
docker compose up -d
```

Set in `backend/.env`: `CHROMA_MODE=http` and `CHROMA_PORT=8100`.

### Start the Next.js frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Open http://localhost:3000

API docs: http://localhost:8000/docs

**One-command dev (Mac/Linux):** `bash scripts/start-dev.sh`

### Ingest a handbook

Use the UI to upload `backend/data/sample_handbook.txt`, or any school handbook file.

Then ask questions like:

```text
What is the late homework policy?
What are the rules for using AI in school?
```

## API

| Method | Path | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/ingest/status` | ChromaDB chunk count |
| POST | `/api/ingest` | Upload and index handbook file(s) |
| POST | `/api/ask` | Ask a question |

## Environment Variables

See `.env.example` (backend) and `frontend/.env.local.example`.

| Variable | Default | Purpose |
|---|---|---|
| `OPENAI_API_KEY` | — | Embeddings + chat |
| `CHROMA_MODE` | `embedded` | `embedded` (local files) or `http` (Docker server) |
| `CHROMA_HOST` | `127.0.0.1` | ChromaDB host (http mode only) |
| `CHROMA_PORT` | `8100` | ChromaDB port (http mode only) |
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000` | Backend URL for frontend |

## Port Map

| Service | Port |
|---|---|
| Next.js | 3000 |
| FastAPI | 8000 |
| ChromaDB | 8100 |

## Relationship to Other Starter Code

| Folder | Purpose |
|---|---|
| `teacher-demo-ai-school-assistant/` | Minimal teaching demo (placeholder LLM, word-overlap search) |
| `ai-school-assistant/` | **Full RAG implementation** (this folder) |
| `nextjs-frontend/` | Phase 4 frontend exercises — see this project |
| `fastapi-backend/` | Phase 5 backend exercises — see this project |
| `fullstack-ai-school-assistant/` | Alias / pointer to this project |

## Security

- Never commit `.env` or API keys.
- `.gitignore` excludes uploads and secrets.
- Students must disclose AI usage per `02_Assessment/AI_Usage_Policy.md`.

## Testing

See `TESTING.md` for a manual test checklist.

# Full-Stack AI School Assistant

The complete implementation lives in **`../ai-school-assistant/`**.

That project includes:

- **Next.js** frontend (`frontend/`)
- **FastAPI** backend with RAG (`backend/`)
- **ChromaDB** vector store (via `docker-compose.yml`)

See [../ai-school-assistant/README.md](../ai-school-assistant/README.md) for setup and run instructions.

## Architecture

```text
Next.js frontend (port 3000)
        ↓
FastAPI backend (port 8000)
        ↓
ChromaDB (port 8100)
        ↓
OpenAI embeddings + chat
```

Migrated from [hbycwyh2008/ai_school_handbook](https://github.com/hbycwyh2008/ai_school_handbook).

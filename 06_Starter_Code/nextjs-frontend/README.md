# Starter Code: Next.js Frontend

The production frontend for the AI School Assistant is in **`../ai-school-assistant/frontend/`**.

Use that project for the full chat + ingest UI. For Phase 4 exercises, students can:

1. Study `../ai-school-assistant/frontend/app/page.js` — chat UI, file upload, API client
2. Build a simplified version (project gallery or single-page app) before connecting to FastAPI

## Run the full frontend

```bash
cd ../ai-school-assistant/frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Open http://localhost:3000 (requires the FastAPI backend on port 8000).

## Key files

| File | Purpose |
|---|---|
| `app/page.js` | Main UI — ingest, ask, sources |
| `app/globals.css` | Styles |
| `.env.local.example` | Backend URL config |

---

Source code in this folder is licensed under the MIT License unless otherwise stated.

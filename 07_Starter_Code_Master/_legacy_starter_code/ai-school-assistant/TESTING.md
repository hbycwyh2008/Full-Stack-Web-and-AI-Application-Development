# Testing — AI School Handbook Assistant

Manual test checklist after setup.

## Prerequisites

- [ ] ChromaDB running (`docker compose up -d`)
- [ ] Backend running on http://localhost:8000
- [ ] Frontend running on http://localhost:3000
- [ ] `OPENAI_API_KEY` set in `backend/.env`

## Backend Health

```bash
curl http://localhost:8000/api/health
```

Expected: `{"ok":true}`

## Ingest Status (empty)

```bash
curl http://localhost:8000/api/ingest/status
```

Expected: `{"hasData":false,"count":0}` (before first ingest)

## Ingest Sample Handbook

Use the UI to upload `backend/data/sample_handbook.txt`, or:

```bash
curl -X POST http://localhost:8000/api/ingest \
  -F "files=@backend/data/sample_handbook.txt" \
  -F "replaceExisting=true"
```

Expected: `"success": true` and `"chunksStored" > 0`

## Ask Questions

Via UI or:

```bash
curl -X POST http://localhost:8000/api/ask \
  -H "Content-Type: application/json" \
  -d '{"question":"What is the late homework policy?"}'
```

Expected: `"found": true`, non-empty `"answer"`, `"sources"` array with quotes.

## Not Found

```bash
curl -X POST http://localhost:8000/api/ask \
  -H "Content-Type: application/json" \
  -d '{"question":"What is the school mascot?"}'
```

Expected: `"found": false` if mascot is not in the handbook.

## Frontend Integration

- [ ] Upload shows progress bar and success message
- [ ] Ask form returns answer and sources
- [ ] Empty question is blocked
- [ ] Backend offline shows a clear error

## Common Issues

| Problem | Fix |
|---|---|
| Chroma connection error | Run `docker compose up -d`; check `CHROMA_PORT=8100` |
| CORS error | Ensure `FRONTEND_ORIGIN=http://localhost:3000` |
| Embedding API error | Check `OPENAI_API_KEY` and network |
| FastAPI port conflict | Chroma uses 8100; FastAPI uses 8000 |

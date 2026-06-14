# Phase 7: FastAPI Backend (Lightweight)

**Your goal:** Build a **lightweight** FastAPI service — routes, Pydantic schemas, `/docs` — **without** required production database.

---

## What You Will Learn

- FastAPI app structure, GET/POST routes, Pydantic validation
- Interactive API docs at `/docs`
- Keeping API keys on server (never in frontend)
- CORS preview for Phase 9

---

## Why This Matters

Your AI School Assistant needs a backend that validates requests and talks to AI services safely. Lightweight FastAPI matches the teacher demo and keeps focus on **architecture**, not database admin.

---

## Before Class

- [ ] Python 3.x installed
- [ ] Create `fastapi-backend/` in repo
- [ ] Copy `.env.example` pattern — **never commit** real keys

---

## In-Class Learning Flow

### 1. Skill Warm-up
Open `/docs` on a sample API — list two things you can test there.

### 2. Talk Robin Round 1
- **You:** “GET vs POST in my app…”
- **Partner:** “Why API keys stay on server…”

### 3. Entry Check
What does Pydantic validate?

### 4. Core Pattern
```text
route → schema → handler → test in /docs → document → commit → push
```

### 5. Guided Practice
Health route + POST endpoint with request body (preview `/ask`).

### 6. Independent Rebuild
- [ ] Running FastAPI app
- [ ] POST + Pydantic schema; empty-input error handled
- [ ] README documents endpoints
- [ ] `.env` gitignored

### 7. Talk Robin Round 2 + Evidence
Submit `/docs` screenshot + repo link.

---

## Required Evidence

- Program code: `fastapi-backend/`
- Program report: README + endpoint list
- Screenshot: Swagger UI `/docs`
- Revision record: fix commits after testing
- Reflection + AI usage note

---

## Extension Task
File-based handbook loader like teacher demo; structured error responses.

---

## Reflection Questions
1. Why must the LLM key stay on the server?
2. What did `/docs` help you catch?
3. How will Next.js call this API in Phase 9?

---

## Submission Checklist
- [ ] Service runs locally
- [ ] POST endpoint tested in `/docs`
- [ ] No secrets committed
- [ ] Meaningful commits
- [ ] Oral explanation of one route

**Next:** [Phase 8: AI API + RAG Concepts](Phase_8_AI_API_RAG_Concepts.md)

# Phase 7: FastAPI Backend (Lightweight)

## Phase Goal
Build a **lightweight** FastAPI backend — routes, Pydantic schemas, `/docs` — **without** heavy database setup.

## Key Concepts
- FastAPI app, routes, GET/POST, Pydantic, `/docs`, CORS preview (Phase 9).
- File/in-memory data like teacher demo — **no required SQL**.

## Required Student Output
- Lightweight API with POST endpoint; tested in `/docs`; README; no secrets.

---

## Suggested Lesson Count
3 lessons.

## Lesson Sequence

### Lesson 1: First Endpoint
- **Goal:** FastAPI app + health route + GET endpoint.
- **Mini Lesson:** API, route, GET vs POST; no database yet.
- **Guided Practice:** Health check + one JSON endpoint.
- **Homework:** Explore `/docs`.

### Lesson 2: Request Bodies and Schemas
- **Goal:** Pydantic models; preview `POST /ask` for final project.
- **Guided Practice:** POST with validation; empty-input error.
- **Homework:** Test in `/docs`.

### Lesson 3: Errors, CORS, Security
- **Goal:** Error handling; allow `localhost:3000`; `.env` habits.
- **Independent Work:** Document endpoints; push to GitHub.

## Submission Requirements
- [ ] Running service; POST + schema; `/docs` tested; no DB required.

## Teacher Notes
> 轻量 FastAPI，对齐教师 demo。Database optional stretch only.

## AI Lens Reflection
*Why must the LLM API key stay on the server?*

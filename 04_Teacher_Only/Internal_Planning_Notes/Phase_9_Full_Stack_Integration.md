# Phase 9: Full-Stack Integration

**Your goal:** Connect **Next.js (Phase 6)** to **FastAPI (Phase 7)** with typed `fetch`, CORS, loading, and error states.

---

## What You Will Learn

- `fetch` from frontend to backend
- CORS configuration
- Loading and error UI
- End-to-end data flow using `AskResponse` types (Phase 5)

---

## Why This Matters

Integration is where projects often break. You prove you can **debug** connection issues and document the full stack — core **mastery** skills for the capstone.

---

## Before Class

- [ ] Frontend and backend run locally separately
- [ ] Know both ports (e.g. 3000 and 8000)
- [ ] Create or use `full-stack-mini-project/` folder structure

---

## In-Class Learning Flow

### 1. Skill Warm-up
Predict what happens if frontend calls wrong URL — write one debugging step.

### 2. Talk Robin Round 1
- **You:** “CORS error might mean…”
- **Partner:** “Loading state shows user…”

### 3. Entry Check
What does `AskResponse` contain?

### 4. Core Pattern
```text
form submit → fetch POST → loading UI → response → display answer + source → handle errors → commit
```

### 5. Guided Practice
Wire form to backend; fix CORS; show loading spinner.

### 6. Independent Rebuild
- [ ] End-to-end demo (even with mock or simple backend response)
- [ ] README **data-flow** section
- [ ] Error state tested (bad input or offline backend)
- [ ] Commits on both frontend and backend paths

### 7. Talk Robin Round 2 + Evidence
Demo screenshot + architecture paragraph submitted.

---

## Required Evidence

```text
full-stack-mini-project/
├── README.md          ← data flow
├── frontend/          ← or links to nextjs-frontend/
├── backend/           ← or links to fastapi-backend/
└── screenshots/
```

- Program code + program report + reflection + revision commits

---

## Extension Task
Environment variables for API URL; deploy preview if school allows.

---

## Reflection Questions
1. Where did the AI answer appear, and where was the source shown?
2. What bug did you fix during integration?
3. What would you test next?

---

## Submission Checklist
- [ ] End-to-end request works locally
- [ ] Loading + error UI present
- [ ] README documents flow
- [ ] Typed fetch uses Phase 5 types
- [ ] Oral demo ready

**Next:** [Phase 10: Cursor Capstone](Phase_10_Cursor_Capstone.md)

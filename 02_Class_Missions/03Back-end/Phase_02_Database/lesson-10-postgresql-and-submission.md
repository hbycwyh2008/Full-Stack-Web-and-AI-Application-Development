# Lesson 10: PostgreSQL Preview and Phase 02 Submission

**Your repo:** `[studentName]-Full-Stack-Web-and-AI-Application`

## Lesson Goal

By the end of this lesson, each student should be able to:

1. Explain difference between SQLite (local dev) and PostgreSQL (production-style).
2. Complete Coursera Module 10 (PostgreSQL) at teacher-assigned depth (videos + key assignment).
3. Document environment variables for a future Postgres connection in `.env.example`.
4. Submit full **Minimal Back-end** evidence: GitHub, `/docs`, Notion link, Coursera progress.
5. Reflect on how this backend connects to Next.js (course Phase 9).
6. Complete Phase 02 checklist without committing real database passwords.

---

## 90-Minute Class Flow

### 0–15 min: Individual Learning

**Required resource — complete Coursera Module 10 (PostgreSQL):**

[Module 10 — PostgreSQL](https://www.coursera.org/learn/packt-introduction-to-fastapi-and-backend-development-fundamentals-7zg6w)

Focus: Postgres config, async sessions preview, production-minded structure. **You do not need a live Postgres server for class** unless your teacher provides one — complete Coursera labs and document local plan.

**Individual notes:**

```text
SQLite vs PostgreSQL for our project...
DATABASE_URL would look like...
Async session in production helps...
What I completed in Module 10 is...
One thing I still do not understand is...
```

---

### 15–27 min: Talk Robin / Group Discussion

**Share:** When school project stays on SQLite; what Module 10 added to your mental model.

---

### 27–37 min: Group Answer

```text
For AI School Assistant demo we will use...
Next.js will call our API at...
Our group still needs help with...
```

---

### 37–45 min: Entry Points Check

**Teacher checks:** Phase 01 checklist from Lesson 6 still true; Lesson 7–9 work present or teacher-approved lightweight path.

---

### 45–70 min: Mission Task

1. Update `.env.example`:

   ```text
   OPENAI_API_KEY=your-key-here
   DATABASE_URL=sqlite:///./database.db
   # Phase 02 extension: postgresql+asyncpg://user:pass@localhost/dbname
   ```

2. Update README sections:
   - **Endpoints** table (all routes)
   - **Run locally** (venv, uvicorn)
   - **Next steps:** course Phase 8 RAG, Phase 9 CORS + Next.js fetch
3. Add `PHASE_02_CHECKLIST.md` in `fastapi-backend/` (copy checklist below, check boxes).
4. Final commit: `Complete Minimal Back-end Phase 02 submission docs`.
5. Update Notion portfolio: link to `fastapi-backend/` + one `/docs` screenshot.

---

### 70–80 min: Independent Rebuild / Exit Check

From blank terminal: venv → install → run → open `/docs` → test `/health` and `/ask` without notes.

**Oral check:** How will React/Next.js send a question to your backend?

---

### 80–90 min: Submission of Evidence

---

## What You Must Submit

1. GitHub link to complete `fastapi-backend/`
2. Screenshot of Swagger `/docs` with main routes visible
3. Coursera Module 10 (and overall Course 1) progress screenshot
4. Completed `PHASE_02_CHECKLIST.md` in repo
5. Notion portfolio link updated
6. Short reflection (3 sentences): what `/docs` helped you catch

**Phase 02 checklist:**

```text
[ ] Phase 01 complete (Lesson 6 checklist)
[ ] SQLite persistence (Lesson 7) OR teacher waiver
[ ] SQLModel + Depends (Lesson 8) OR teacher waiver
[ ] Async POST /ask (Lesson 9)
[ ] README: endpoints + run + next steps
[ ] .env.example updated; no secrets committed
[ ] Notion links GitHub backend folder
[ ] Can explain frontend → FastAPI → future RAG flow orally
```

---

## Success Criteria

1. Backend runs and key routes work in `/docs`.
2. Documentation is complete for next teacher or collaborator.
3. All checklist items checked or waived with teacher note.
4. Coursera Course 1 modules 1–10 marked complete (or teacher-defined minimum).

---

## Common Problems

| Problem | Try first |
|---|---|
| Postgres install too heavy | Complete Coursera content; keep SQLite locally — document in README. |
| Broken after many lessons | Use git log to find last working commit; fix forward. |
| Notion link broken | Public portfolio page + GitHub URL tested in incognito. |

---

## Fast Track Option

Skim [Course 3 CORS module](https://www.coursera.org/specializations/packt-ultimate-guide-to-fast-api-and-backend-development) for Phase 9 preview — do not deploy to AWS in class.

---

## After Phase 02

Continue in formal course:

- **Phase 8:** RAG + LLM in backend
- **Phase 9:** Connect `nextjs-frontend/` or `nextjs-practice/` with CORS and typed `fetch`

---

Educational materials in this folder are copyright © 2026 Wang Morgan. All Rights Reserved.

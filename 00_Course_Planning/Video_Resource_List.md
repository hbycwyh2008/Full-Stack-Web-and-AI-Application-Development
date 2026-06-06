# Video Resource List

Curated resources for each phase of the course. "Required" resources support core skills; "Optional" resources offer extra depth.

---

## 1. How to Build a Professional Portfolio Website in Notion

- **Link:** https://www.youtube.com/watch?v=kFxfh8urobU
- **Purpose:** Build the first student portfolio website with sections for projects, skills, certificates, and notes.
- **How to use in this course:** Student-facing main tutorial for Phase 0 (Notion Portfolio).
- **Status:** Required

---

## 2. Markdown Crash Course — Traversy Media

- **Link:** https://www.youtube.com/watch?v=HUBNt18RFbo
- **Purpose:** Teach README.md syntax — headings, lists, links, images, code blocks.
- **How to use in this course:** Phase 1 reference before writing the first README.
- **Status:** Required

---

## 3. GitHub Skills: Introduction to GitHub

- **Link:** https://github.com/skills/introduction-to-github
- **Purpose:** Interactive practice for repositories, branches, commits, pull requests, and profile README.
- **How to use in this course:** Hands-on Phase 1 lab activity.
- **Status:** Required

---

## 4. Git and GitHub for Beginners — freeCodeCamp

- **Link:** https://www.youtube.com/watch?v=RGOj5yH7evk
- **Purpose:** Explain the Git and GitHub workflow and version control at a beginner level.
- **How to use in this course:** Phase 1 conceptual background.
- **Status:** Optional

---

## 5. Next.js & React - The Complete Guide

- **Link:** https://www.udemy.com/course/nextjs-react-the-complete-guide/
- **Purpose:** React components, Next.js App Router, pages/layouts, forms, frontend state, data fetching, calling backend APIs.
- **How to use in this course:** Main frontend course for Phase 3. Next.js API Routes / Server Actions are **not** the main backend path — FastAPI is.
- **Status:** Required (main frontend course)

---

## 6. FastAPI - The Complete Course 2026 (Beginner + Advanced)

- **Link:** https://www.udemy.com/course/fastapi-the-complete-course/
- **Purpose:** FastAPI routes, REST APIs, Pydantic schemas, database integration, authentication, testing, deployment.
- **How to use in this course:** Main backend course for Phase 4.
- **Status:** Required (main backend course)

---

## 7. Full Stack Course | Build & Deploy 2 Projects and Get Hired

- **Link:** https://www.udemy.com/course/learn-nextjs-and-fastapi-by-building-2-full-stack-apps/
- **Purpose:** Direct Next.js + FastAPI + MongoDB workflow; how the frontend talks to the backend and how the backend connects to the database.
- **How to use in this course:** Bridge course for Phase 5 — not the main frontend or backend course.
- **Status:** Optional (bridge)

---

## 8. Cursor + Task Master Full Stack AI Course (NextJS, Supabase)

- **Link:** https://www.udemy.com/course/cursor-ai-mcp-nextjs-supabase/
- **Purpose:** Cursor workflow, Task Master, Cursor Rules, MCP / GitHub MCP, AI-assisted debugging and development.
- **How to use in this course:** Phase 6 Cursor workflow reference. The course uses Supabase; we study the **Cursor workflow**, not the exact Supabase architecture.
- **Status:** Optional

### Migration Notes (Supabase → Our Stack)

```text
Supabase Edge Functions  →  FastAPI endpoints
Supabase database        →  MongoDB / PostgreSQL
Supabase auth            →  FastAPI auth / JWT
```

---

## 9. Complete Cursor AI: Vibe Code a Full-Stack Next.js 15 App

- **Link:** https://www.udemy.com/course/cursorai-nextjs/
- **Purpose:** Cursor basics, effective prompting, AI-assisted debugging, validating AI-generated code, and building a Next.js 15 Kanban board with shadcn/ui.
- **How to use in this course:** Optional intro for Phase 2 (Cursor Quick Win). Use for Cursor setup and first AI-assisted build — **not** as the main backend path. The course uses Next.js Server Actions and PostgreSQL; our main backend is FastAPI.
- **Status:** Optional (Phase 2 Cursor intro)

### Important Notes for Teachers

```text
This course emphasizes "vibe coding" — students must still read, test, and understand the code they submit.
Do not treat Server Actions / Drizzle as the course backend stack; FastAPI remains the main backend.
Use this resource for Cursor workflow confidence, not for final project architecture.
```

### Migration Notes (This Course → Our Stack)

```text
Next.js Server Actions  →  FastAPI endpoints
PostgreSQL / Drizzle    →  MongoDB / PostgreSQL (via FastAPI)
Kanban demo project     →  Smaller Phase 2 mini app or simplified feature
```

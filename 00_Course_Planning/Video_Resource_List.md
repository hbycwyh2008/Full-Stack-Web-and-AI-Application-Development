# Video Resource List

Curated resources for each phase of the course. "Required" resources support core skills; "Optional" resources offer extra depth.

---

## AI Literacy Foundation (Phase 0)

### A1. AI for Everyone — Andrew Ng / DeepLearning.AI

- **Link:** https://www.deeplearning.ai/courses/ai-for-everyone
- **Purpose:** Non-technical introduction to AI — what it is, what it can and cannot do, and how it affects society.
- **How to use in this course:** Required foundation for Phase 0. Use with `00_AI_Literacy/AI_for_Everyone_Study_Guide.md`.
- **Status:** Required (Phase 0)

### A2. Generative AI for Everyone — Andrew Ng / DeepLearning.AI

- **Link:** https://www.deeplearning.ai/courses/generative-ai-for-everyone
- **Purpose:** How generative AI works, prompt engineering basics, workplace and project use, responsible AI.
- **How to use in this course:** Required foundation for Phase 0. Use with `00_AI_Literacy/Generative_AI_for_Everyone_Study_Guide.md`. Connects directly to LLM API and RAG phases.
- **Status:** Required (Phase 0)

---

## 1. How to Build a Professional Portfolio Website in Notion

- **Link:** https://www.youtube.com/watch?v=kFxfh8urobU
- **Purpose:** Build the first student portfolio website with sections for projects, skills, certificates, and notes.
- **How to use in this course:** Student-facing main tutorial for Phase 1 (Notion Portfolio).
- **Status:** Required

---

## 2. Markdown Crash Course — Traversy Media

- **Link:** https://www.youtube.com/watch?v=HUBNt18RFbo
- **Purpose:** Teach README.md syntax — headings, lists, links, images, code blocks.
- **How to use in this course:** Phase 2 reference before writing the first README.
- **Status:** Required

---

## 3. GitHub Skills: Introduction to GitHub

- **Link:** https://github.com/skills/introduction-to-github
- **Purpose:** Interactive practice for repositories, branches, commits, pull requests, and profile README.
- **How to use in this course:** Hands-on Phase 2 lab activity.
- **Status:** Required

---

## 4. Git and GitHub for Beginners — freeCodeCamp

- **Link:** https://www.youtube.com/watch?v=RGOj5yH7evk
- **Purpose:** Explain the Git and GitHub workflow and version control at a beginner level.
- **How to use in this course:** Phase 2 conceptual background.
- **Status:** Optional

---

## 5. Next.js & React - The Complete Guide

- **Link:** https://www.udemy.com/course/nextjs-react-the-complete-guide/
- **Purpose:** React components, Next.js App Router, pages/layouts, forms, frontend state, data fetching, calling backend APIs.
- **How to use in this course:** Main frontend course for Phase 4. Next.js API Routes / Server Actions are **not** the main backend path — FastAPI is.
- **Status:** Required (main frontend course)

---

## 6. FastAPI - The Complete Course 2026 (Beginner + Advanced)

- **Link:** https://www.udemy.com/course/fastapi-the-complete-course/
- **Purpose:** FastAPI routes, REST APIs, Pydantic schemas, database integration, authentication, testing, deployment.
- **How to use in this course:** Main backend course for Phase 5.
- **Status:** Required (main backend course)

---

## 7. Full Stack Course | Build & Deploy 2 Projects and Get Hired

- **Link:** https://www.udemy.com/course/learn-nextjs-and-fastapi-by-building-2-full-stack-apps/
- **Purpose:** Direct Next.js + FastAPI + MongoDB workflow; how the frontend talks to the backend and how the backend connects to the database.
- **How to use in this course:** Bridge course for Phase 7 — not the main frontend or backend course.
- **Status:** Optional (bridge)

---

## 8. Cursor + Task Master Full Stack AI Course (NextJS, Supabase)

- **Link:** https://www.udemy.com/course/cursor-ai-mcp-nextjs-supabase/
- **Purpose:** Cursor workflow, Task Master, Cursor Rules, MCP / GitHub MCP, AI-assisted debugging and development.
- **How to use in this course:** Phase 8 Cursor workflow reference. The course uses Supabase; we study the **Cursor workflow**, not the exact Supabase architecture.
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
- **How to use in this course:** Optional intro for Phase 3 (Cursor Quick Win). Use for Cursor setup and first AI-assisted build — **not** as the main backend path. The course uses Next.js Server Actions and PostgreSQL; our main backend is FastAPI.
- **Status:** Optional (Phase 3 Cursor intro)

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
Kanban demo project     →  Smaller Phase 3 mini app or simplified feature
```

---

## Optional Foundation Resources

These are **optional** math and machine learning foundation resources. They help students understand AI, ML, RAG, and future deep learning concepts, but they are **not required** before starting the course, and they do **not** change the main learning flow. Pick based on interest and time — you do not need all of them.

### Math Visualization Foundation

> These help you *see* the math behind AI. You do not need them to build the app, but they make later deep learning ideas much easier.

**3Blue1Brown — Essence of Linear Algebra**
- **Link:** https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab
- **Purpose:** Build visual intuition for vectors, matrices, and transformations.
- **Recommended Level:** Curious students, or anyone interested in how AI represents data.
- **How It Connects:** Vectors and embeddings power how AI compares text in RAG systems.
- **Portfolio Reflection:** Explain in your own words what a vector is and why AI uses them.

**3Blue1Brown — Essence of Calculus**
- **Link:** https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr
- **Purpose:** Build visual intuition for derivatives, rates of change, and integrals.
- **Recommended Level:** Students with strong math interest.
- **How It Connects:** Calculus is the math behind how AI models learn (training and optimization).
- **Portfolio Reflection:** Describe what "rate of change" means using a real-life example.

**Linear Algebra Is Not Hard**
- **Link:** _Placeholder: add the specific course/playlist link your school uses._
- **Purpose:** A friendly, step-by-step introduction to linear algebra concepts.
- **Recommended Level:** Students who want a slower, clearer path through linear algebra.
- **How It Connects:** Reinforces the same vector and matrix ideas used in AI data representation.
- **Portfolio Reflection:** Note one concept that finally "clicked" for you and how.

**Bilibili Companion Videos for "Linear Algebra Is Not Hard"**
- **Link:** _Placeholder: add the Bilibili playlist link._
- **Purpose:** Chinese-language companion videos for the same linear algebra topics.
- **Recommended Level:** Students who learn better with Chinese-language explanations.
- **How It Connects:** Same as above — supports vector/matrix intuition for AI.
- **Portfolio Reflection:** Summarize one video in 3 sentences in your own words.

### Machine Learning Foundation

**StatQuest — A Gentle Introduction to Machine Learning**
- **Link:** https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF
- **Purpose:** Clear, friendly explanations of core machine learning ideas.
- **Recommended Level:** Students curious about how AI models actually learn.
- **How It Connects:** Helps you understand the "learning" behind the AI tools you use, deepening Phase 0 and Phase 6.
- **Portfolio Reflection:** Explain one ML idea (like training data) using a school example.

> **Teacher note:** 这些是可选拓展资源，不是必修前置。Offer these as enrichment for fast finishers or curious students. Do not block any phase on them. Add real links for the placeholder items based on what your school uses.

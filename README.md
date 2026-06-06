# Full-Stack Web and AI Application Development

A portfolio-first course where students learn to build full-stack web applications and AI-powered software products using modern development tools.

> This is not only an AI literacy course. It is an **AI application engineering** course built on top of AI literacy.

---

## Start Here

1. Read `00_Course_Planning/Course_Overview.md`
2. Check `00_Course_Planning/Course_Pacing_Guide.md`
3. Start Phase 0 with `00_AI_Literacy/AI_Literacy_Overview.md`
4. Use `01_Student_Templates/` for portfolio, GitHub, README, project submission, and reflection templates
5. Use `04_Lesson_Materials/` to teach the course phase by phase
6. Use `03_Final_Project/Teacher_Demo_Cursor_Prompt.md` to understand the teacher demo design
7. Use `06_Starter_Code/teacher-demo-ai-school-assistant/` after the teacher demo starter code is created

---

## Course Focus

This course teaches students to move from **AI literacy** to real full-stack AI application development. Students learn to:

- Build an **AI literacy foundation** (what AI is, what it can do, responsible use)
- Build a professional portfolio in **Notion**
- Use **GitHub + Markdown** for version control and project evidence
- Develop frontends with **Next.js / React**
- Build backend services with **FastAPI**
- Understand **AI API + RAG concepts** before integrating them
- Store data with **MongoDB / Vector Store**
- Use **Cursor** for AI-assisted development
- Integrate **LLM APIs** into a working application

Students start by understanding AI — then they build with it.

This course is **portfolio-first**: AI Literacy comes first, **FastAPI** is the backend path, and **Cursor is an accelerator — not a replacement for understanding**. The final project is the **AI School Assistant**.

---

## Target Architecture

```text
Next.js frontend
        ↓
FastAPI backend
        ↓
Python AI / RAG service
        ↓
MongoDB / Vector Store
        ↓
LLM API
```

---

## Final Project: AI School Assistant

A web application that lets students, teachers, or parents ask questions based on school documents, course materials, or a student handbook.

Example questions:

```text
What is the late homework policy?
What should I review for the final exam?
What are the rules for using AI in school?
Where can I find the project submission requirements?
```

AI literacy from Phase 0 directly prepares students to build this project **responsibly and correctly**.

---

## Repository Structure

```text
full-stack-web-ai-application-development/
│
├── README.md
├── 00_AI_Literacy/          # AI literacy foundation (Phase 0)
├── 00_Course_Planning/      # Overview, pathway map, resources, teacher prep
├── 01_Student_Templates/    # Portfolio, README, submission, reflection templates
├── 02_Assessment/           # Rubrics and AI usage policy
├── 03_Final_Project/        # AI School Assistant specs and teacher demo plan
├── 04_Lesson_Materials/     # Phase-by-phase lesson materials
├── 05_Public_Documents/     # Student, parent, and school facing overviews
└── 06_Starter_Code/         # Starter code placeholders (frontend/backend/full-stack)
```

---

## How Teachers Should Use This Repository

1. Start with `00_AI_Literacy/AI_Literacy_Overview.md` — Phase 0 foundation.
2. Review `00_Course_Planning/Course_Overview.md` and `Learning_Pathway_Map.md`.
3. Review the `02_Assessment/` rubrics and AI usage policy, then adapt them to your school context.
4. Use `03_Final_Project/` to plan the capstone and build a teacher demo.
5. Hand out `01_Student_Templates/` files to students for portfolios, READMEs, and reflections.
6. Deliver lessons phase by phase using `04_Lesson_Materials/`.
7. Share `05_Public_Documents/` with students, parents, and school leadership.

> Edit the language in each document to match your school context. Placeholders are marked where school-specific information is needed.

---

## How Student-Facing Materials Are Organized

- **AI Literacy** (`00_AI_Literacy/`) — study guides, discussion prompts, and responsible AI checklist tied to the final project.
- **Templates** (`01_Student_Templates/`) — copy into Notion, Google Docs, or each project repo.
- **Public overviews** (`05_Public_Documents/`) — plain-language explanations for students and families.
- **Assessment** (`02_Assessment/`) — how work is graded and how AI usage must be disclosed.

---

## Learning Flow

```text
AI Literacy Foundation
→ Notion Portfolio
→ GitHub + Markdown
→ Cursor Quick Win
→ Next.js Frontend
→ FastAPI Backend
→ AI API + RAG Concepts
→ Next.js + FastAPI Integration
→ Cursor Capstone
→ AI School Assistant Final Showcase
```

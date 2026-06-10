# Full-Stack Web and AI Application Development

A portfolio-first course where students learn to build full-stack web applications and AI-powered software products using modern development tools.

> This is not only an AI literacy course. It is an **AI application engineering** course built on top of AI literacy.

> Students should not learn math as isolated abstract content. They should learn math when it helps them understand AI systems, data, images, and models. **Linear algebra is introduced as an AI Math Bridge**, not as a full traditional math course.

> Students should move from watching tutorials to **building, documenting, publishing, and explaining** real projects.

---

## Course Repository vs Student Repository

This repository contains the **official course materials** — lesson plans, templates, assessments, starter code, rubrics, and teacher documentation.

Each student must create their **own GitHub repository** to collect learning evidence, project work, reflections, screenshots, certificates, and final portfolio projects.

```text
The course repository tells students what to do.
The student repository shows what each student has done.
```

Students should follow:

[Student GitHub Repository Guide](01_Student_Templates/Student_GitHub_Repository_Guide.md)

### Three Places for Student Work

```text
Teacher course repository  →  lessons, templates, rubrics, starter code
Student personal repository →  evidence, projects, reflections, code history
Notion portfolio           →  public showcase of best work
```

GitHub proves **technical process and project history**. Notion presents the **best finished work**.

---

## Start Here

1. Read `00_Course_Planning/Course_Overview.md`
2. Check `00_Course_Planning/Course_Pacing_Guide.md`
3. **Phase 0:** `04_Lesson_Materials/Phase_0_Git_GitHub.md`
4. **Phase 2:** `00_AI_Literacy/AI_Literacy_Overview.md`
5. **Phase 3:** `00_AI_Math_Bridge/README.md`
6. **Students:** `01_Student_Templates/Student_GitHub_Repository_Guide.md` — personal repo setup
7. Use `01_Student_Templates/` for portfolio, GitHub, README, and reflection templates
8. Teach phase by phase from `04_Lesson_Materials/` (Phases 0–11)
9. Use `03_Final_Project/Teacher_Demo_Cursor_Prompt.md` for the teacher demo design
10. Use `06_Starter_Code/ai-school-assistant/` for the **full RAG implementation** (Next.js + FastAPI + ChromaDB)
11. Use `06_Starter_Code/teacher-demo-ai-school-assistant/` for the **minimal teaching demo**

---

## Course Focus

Students learn to:

- Use **Git & GitHub** first as long-term project evidence
- Publish a **Notion portfolio** and **Figma mockups**
- Build a **unified AI literacy foundation** (Phase 2)
- Complete **AI Math Bridge** — linear algebra intuition for AI/ML/CV (Phase 3)
- Build **TypeScript → Next.js** frontend after design
- Build a **lightweight FastAPI** backend (no heavy database required in v0.1)
- Understand **AI API + RAG concepts** and integrate full stack
- Use **Cursor** only after they understand the stack (Phase 10)
- Ship the **AI School Assistant** final project

This course is **portfolio-first**: **Git comes first**, **Cursor is an accelerator — not a replacement for understanding**, and the final project is the **AI School Assistant**.

---

## Target Architecture

```text
Next.js + TypeScript frontend
        ↓
FastAPI backend (lightweight)
        ↓
Document retrieval / vector store (capstone)
        ↓
LLM API
        ↓
Answer + source → frontend
```

---

## Final Project: AI School Assistant

A web application that answers questions from school documents (handbook, policies, course materials).

Example questions:

```text
What is the late homework policy?
What should I review for the final exam?
What are the rules for using AI in school?
```

AI literacy (Phase 2), math bridge (Phase 3), and RAG concepts (Phase 8) prepare students to build this **responsibly and correctly**.

---

## Repository Structure

```text
full-stack-web-ai-application-development/
│
├── README.md
├── 00_AI_Literacy/          # Phase 2
├── 00_AI_Math_Bridge/       # Phase 3
├── 00_Course_Planning/
├── 01_Student_Templates/
├── 02_Assessment/
├── 03_Final_Project/
├── 04_Lesson_Materials/     # Phase_0 … Phase_11
├── 05_Public_Documents/
└── 06_Starter_Code/         # teacher demo + full RAG app
```

---

## How Teachers Should Use This Repository

1. Start with **Phase 0 Git & GitHub**, then **Phases 1–3** (Notion, AI Literacy, AI Math Bridge).
2. Review `Course_Overview.md` and `Learning_Pathway_Map.md`.
3. Review `02_Assessment/` rubrics, **student learning expectations**, and AI usage policy.
4. Use `03_Final_Project/` and starter code in `06_Starter_Code/`.
5. Run the teacher demo walkthrough before Phase 10 (Cursor).
6. Deliver lessons from `04_Lesson_Materials/` in order.

---

## How Student-Facing Materials Are Organized

- **AI Literacy** (`00_AI_Literacy/`) — Phase 2 study guides and responsible AI checklist.
- **AI Math Bridge** (`00_AI_Math_Bridge/`) — Phase 3 math intuition for AI/ML/CV.
- **Student GitHub Guide** (`01_Student_Templates/Student_GitHub_Repository_Guide.md`) — personal repo structure and Phase 0 task.
- **Templates** (`01_Student_Templates/`) — root README, reflections, math bridge, final project.
- **Assessment** (`02_Assessment/`) — rubrics, GitHub assessment, math bridge checklist, AI usage policy.

---

## Learning Flow

```text
Git & GitHub
→ Notion Portfolio
→ AI Literacy Foundation
→ AI Math Bridge: Linear Algebra for AI
→ Figma UI Design
→ TypeScript Basics
→ Next.js Frontend
→ FastAPI Backend (lightweight)
→ AI API + RAG Concepts
→ Full-Stack Integration
→ Cursor Capstone
→ AI School Assistant Final Showcase
```

**AI Math Bridge** can be **reused** before Computer Vision, Machine Learning, or advanced AI app features.

### Teaching Logic

```text
First:   Organize, document, and build projects (Git, Notion, AI Literacy).
Then:    Math intuition for AI features (AI Math Bridge).
Finally: Design, code, integrate, Cursor, capstone.
```

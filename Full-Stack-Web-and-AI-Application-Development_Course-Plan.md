# Full-Stack Web and AI Application Development

## 1. Course Identity

**Formal Course Name:** Full-Stack Web and AI Application Development

**Recommended GitHub Repository Name:**

```text
full-stack-web-ai-application-development
```

**Course Subtitle:**

```text
Portfolio, GitHub, Next.js, FastAPI, Cursor, and AI-Powered Applications
```

**One-Sentence Positioning:**

> A portfolio-first course where students learn to build full-stack web applications and AI-powered software products using modern development tools.

This course is not simply about using AI tools. It is about helping students understand, build, document, and present real AI-powered web applications.

> **Canonical curriculum (latest):** See repository `README.md` (including **Course Repository vs Student Repository**), `00_Course_Overview/Learning_Pathway_Map.md`, `03_Templates/Student_GitHub_Repository_Guide.md`, and `05_Resources/AI_Math_Bridge/README.md`. Phases **0–11** include **AI Math Bridge: Linear Algebra for AI** after AI Literacy and before Figma.

**Student personal repository:** Each student maintains `student-portfolio` (or `student-name-full-stack-ai-portfolio`) for evidence — separate from this teacher course repo.

### Grade-Band Expectations

Middle School and High School students use the **same course repository and learning pathway**, but they are assessed at different levels of independence, technical depth, debugging, and mastery.

- **Middle School — Guided Full-Stack Development:** Build · Modify · Explain
- **High School — Independent Full-Stack AI Development:** Rebuild · Debug · Integrate · Transfer

See `00_Course_Overview/Grade_Band_Expectations.md` for the detailed requirements, mastery targets, and final-project differentiation.

---

## 2.5 AI Math Bridge: Linear Algebra for AI (Phase 3)

Short, practical bridge — **not** a full traditional linear algebra course. See `05_Resources/AI_Math_Bridge/README.md` (10 lesson guides), `AI_Math_Bridge_Overview.md`, and `09_Teacher_Planning/Phase_Overviews/Phase_3_AI_Math_Bridge_Linear_Algebra.md`.

**Learning path (summary):**

```text
Git & GitHub → Notion → AI Literacy → AI Math Bridge → Figma → TypeScript → Next.js
→ FastAPI (lightweight) → RAG → Integration → Cursor → AI School Assistant
```

**Resources:** 3Blue1Brown (selected), DeepLearning.AI Linear Algebra Week 3–4 (selected), NumPy + image matrix labs.

**Deliverables:** `ai-math-bridge/` in GitHub; assess conceptual clarity — not proofs.

**Philosophy:** Students learn math when it helps them understand AI systems, data, images, and models. Students move from tutorials to building, documenting, publishing, and explaining real projects.

---

## 2. Course Positioning

### What This Course Is

This course teaches students to move from basic portfolio building to real full-stack AI application development.

Students will learn to use:

- Notion for portfolio websites
- GitHub for project evidence and version control
- Markdown for professional project documentation
- Next.js / React for frontend development
- FastAPI for Python backend development
- MongoDB / database tools for data storage
- Cursor for AI-assisted development
- LLM APIs and later RAG workflows for AI-powered applications

### What This Course Is Not

This course is not:

- a pure prompt engineering course
- a no-code website course
- a Code.org / CodeAI-style AI literacy course
- a simple chatbot demo course
- a course where students blindly ask AI to generate code

The goal is for students to understand the architecture behind an AI-powered web application and create portfolio-ready projects.

---

## 3. Difference from CodeAI / Code.org

CodeAI is useful for AI literacy and broad CS foundations. It helps students understand AI concepts, use AI safely, and complete guided platform-based activities.

This course goes beyond that.

| Dimension | CodeAI / Code.org | This Course |
|---|---|---|
| Main Goal | AI + CS literacy | AI application engineering |
| Environment | Platform-based labs | Real development tools |
| Tools | Code.org labs | GitHub, Markdown, Notion, Cursor, Next.js, FastAPI |
| Project Evidence | Platform activities | GitHub repo + README + portfolio page |
| Web Development | Introductory / guided | Full-stack web application architecture |
| Backend | Not a major focus | FastAPI backend service |
| AI Integration | AI concepts and experiments | AI API / RAG-style application architecture |
| Final Output | Classroom activities | Portfolio-ready AI web app |

**Positioning Statement:**

> CodeAI helps students understand AI.  
> This course helps students build AI-powered software.

---

## 4. Final Technical Architecture

The target architecture for the final project is:

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

The final project is:

# AI School Assistant

A web application that allows students, teachers, or parents to ask questions based on school documents, course materials, or a student handbook.

Example questions:

```text
What is the late homework policy?
What should I review for the final exam?
What are the rules for using AI in school?
Where can I find the project submission requirements?
```

---

## 5. Learning Flow

The course should not begin with Cursor full-stack vibe coding. Students first need portfolio infrastructure and documentation habits.

Recommended learning flow:

```text
Notion Portfolio
→ GitHub + Markdown
→ Cursor Quick Win
→ Next.js Frontend
→ FastAPI Backend
→ Next.js + FastAPI Integration
→ Cursor Capstone
→ AI School Assistant Final Showcase
```

---

## 6. Course Phases

| Phase | Topic | Main Output |
|---|---|---|
| Phase 0 | Notion Portfolio | Personal CS/AI portfolio website |
| Phase 1 | GitHub + Markdown | First GitHub repo + README.md |
| Phase 2 | Cursor Quick Win | Small AI-assisted web page or mini app |
| Phase 3 | Next.js / React Frontend | Student project gallery or course resource website |
| Phase 4 | FastAPI Backend | Simple API service |
| Phase 5 | Full-Stack Integration | Next.js frontend connected to FastAPI backend |
| Phase 6 | Cursor Capstone | AI-assisted full-stack development workflow |
| Phase 7 | Final Showcase | AI School Assistant + portfolio submission |

---

## 7. Selected Video Resources

### 7.1 Notion Portfolio

**How to Build a Professional Portfolio Website in Notion**  
https://www.youtube.com/watch?v=kFxfh8urobU

Purpose:

- Build the first student portfolio website
- Create sections for projects, skills, certificates, and learning notes
- Give students a quick visible result before coding becomes difficult

Recommended use:

```text
Student-facing main tutorial for Notion portfolio.
```

---

### 7.2 Markdown and GitHub

**Markdown Crash Course — Traversy Media**  
https://www.youtube.com/watch?v=HUBNt18RFbo

Purpose:

- Teach README.md syntax
- Headings, lists, links, images, code blocks

**GitHub Skills: Introduction to GitHub**  
https://github.com/skills/introduction-to-github

Purpose:

- Interactive practice for repositories, branches, commits, pull requests, and profile README

**Git and GitHub for Beginners — Crash Course / freeCodeCamp**  
https://www.youtube.com/watch?v=RGOj5yH7evk

Purpose:

- Explain Git and GitHub workflow
- Help students understand version control at a beginner level

---

### 7.3 Frontend Main Course

**Next.js & React - The Complete Guide**  
https://www.udemy.com/course/nextjs-react-the-complete-guide/

Purpose:

- React components
- Next.js App Router
- pages and layouts
- forms
- frontend state
- data fetching
- calling backend APIs

Important note:

```text
Next.js API Routes and Server Actions are not the main backend path in this course.
The main backend is FastAPI.
```

---

### 7.4 Backend Main Course

**FastAPI - The Complete Course 2026 (Beginner + Advanced)**  
https://www.udemy.com/course/fastapi-the-complete-course/

Purpose:

- FastAPI routes
- REST API
- Pydantic schemas
- database integration
- authentication
- testing
- deployment

This is the main backend course.

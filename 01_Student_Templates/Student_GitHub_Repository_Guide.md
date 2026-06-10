# Student GitHub Repository Guide

Every student in **Full-Stack Web and AI Application Development** must create and maintain a **personal GitHub repository**. This is separate from the **course repository** (teacher materials). Your repo is your learning evidence.

---

## Repository Name

Choose one:

```text
student-portfolio
```

or:

```text
student-name-full-stack-ai-portfolio
```

Example: `morgan-full-stack-ai-portfolio`

---

## Recommended Folder Structure

Create this structure in your repo (add folders as you reach each phase):

```text
student-portfolio/
├── README.md
├── profile/
│   ├── about-me.md
│   └── learning-goals.md
│
├── ai-literacy/
│   ├── README.md
│   ├── ai-reflection-01.md
│   ├── responsible-ai-notes.md
│   └── ai-ethics-case-study.md
│
├── ai-math-bridge/
│   ├── README.md
│   ├── vector-notes.md
│   ├── matrix-notes.md
│   ├── dot-product-notes.md
│   ├── numpy-mini-lab.ipynb
│   ├── image-as-matrix-lab.ipynb
│   ├── pca-reflection.md
│   └── screenshots/
│
├── figma-design/
│   ├── README.md
│   └── figma-link.md
│
├── typescript-practice/
│   ├── README.md
│   ├── types.ts
│   └── api-types.ts
│
├── nextjs-frontend/
│   ├── README.md
│   └── screenshots/
│
├── fastapi-backend/
│   ├── README.md
│   └── screenshots/
│
├── full-stack-mini-project/
│   ├── README.md
│   ├── frontend/
│   ├── backend/
│   └── screenshots/
│
├── final-ai-app/
│   ├── README.md
│   ├── frontend/
│   ├── backend/
│   ├── design/
│   ├── docs/
│   └── screenshots/
│
├── certificates/
│   ├── README.md
│   └── screenshots/
│
└── reflections/
    ├── README.md
    ├── weekly-reflection-01.md
    ├── cursor-reflection.md
    └── final-course-reflection.md
```

> You do not need every folder on day one. Create folders **before or when** you start each phase. Phase 0 requires the repo, root README, and initial structure.

---

## Purpose of Each Folder

### `README.md`

The main homepage of your repository. Summarize:

- who you are
- what course this is for
- skills you are learning
- projects completed
- links to Notion, GitHub projects, and deployed apps

Copy from: `01_Student_Templates/student-root-README-template.md`

### `profile/`

Personal introduction and learning goals: bio, grade, CS/AI interests, learning goals, future improvements.

### `ai-literacy/`

AI literacy notes and reflections: concept reflections, responsible AI notes, ethics case studies, screenshots from learning resources. **Phase 2.**

Templates: `ai-literacy-reflection-template.md`

### `ai-math-bridge/`

Linear algebra for AI evidence: vector/matrix/dot product notes, NumPy lab, image-as-matrix lab, PCA reflection. **Phase 3.**

Templates: `ai-math-bridge-README-template.md`

### `figma-design/`

Figma link, screenshots, design reflection, page layout and components. **Phase 4.**

### `typescript-practice/`

Type definitions, interfaces, API response types, props examples. **Phase 5.**

### `nextjs-frontend/`

Next.js project explanation, screenshots, page structure, components, deployment link. **Phase 6.**

### `fastapi-backend/`

API explanation, endpoint docs, Swagger UI screenshots, setup, test results. **Phase 7.**

### `full-stack-mini-project/`

Smaller connected project: frontend + backend folders, screenshots, API connection README. **Phase 9.**

### `final-ai-app/`

Final course project: frontend, backend, design, docs, screenshots, demo link. **Phase 11.**

Template: `final-project-README-template.md`

### `certificates/`

Coursera, Kaggle, school certificates, competition records, module completion screenshots.

### `reflections/`

Weekly reflections, Cursor reflection, debugging notes, final course reflection.

Templates: `weekly-reflection-template.md`, `cursor-reflection-template.md`

---

## Root README Template

Copy into your repo `README.md`:

```md
# Student Portfolio Repository

## About Me

My name is [Student Name].  
I am a student in the Full-Stack Web and AI Application Development course.

## Course

Full-Stack Web and AI Application Development

## Learning Goals

In this course, I want to learn how to:

- use Git and GitHub to manage projects
- build a personal portfolio
- understand basic AI concepts
- understand linear algebra ideas used in AI
- design app interfaces with Figma
- build frontend apps with Next.js and TypeScript
- build backend APIs with FastAPI
- connect frontend and backend systems
- use Cursor responsibly as a coding assistant
- build and document a final AI application

## Main Skills

- Git and GitHub
- Markdown
- Notion Portfolio
- AI Literacy
- Linear Algebra for AI
- Figma
- TypeScript
- Next.js
- FastAPI
- Full-stack integration
- Cursor-assisted development
- AI app development

## Project List

| Project | Tools | Status | Link |
|---|---|---|---|
| AI Literacy Reflection | Markdown | Completed | |
| AI Math Bridge Lab | NumPy | In Progress | |
| Figma App Mockup | Figma | In Progress | |
| Next.js Frontend | Next.js, TypeScript | Not Started | |
| FastAPI Backend | FastAPI, Python | Not Started | |
| Full-Stack Mini Project | Next.js, FastAPI | Not Started | |
| Final AI App | Next.js, FastAPI, AI API | Not Started | |

## Best Project

Write about your strongest project here.

## What I Learned

Write a short summary of your learning progress.

## Challenges

Write about the most difficult bugs, concepts, or project problems you faced.

## Future Improvements

Write about what you want to improve next.

## Portfolio Links

- Notion Portfolio:
- GitHub Repository:
- Demo Website:
```

---

## Phase 0 Final GitHub Task

By the end of **Phase 0**, you must:

1. Create a personal GitHub repository.
2. Name it `student-portfolio` or `student-name-full-stack-ai-portfolio`.
3. Add a root `README.md` (use template above).
4. Create the recommended folder structure (empty folders with `.gitkeep` or placeholder READMEs is OK).
5. Make at least one commit.
6. Create a branch called `update-profile`.
7. Edit `README.md` on that branch.
8. Open a pull request.
9. Merge the pull request.
10. Submit the GitHub repository link to your teacher.

This proves you can use: repository, README, commit, branch, pull request, merge, and project organization.

See also: `02_Assessment/Student_GitHub_Assessment.md`

---

## What Not to Upload

Never commit:

```text
node_modules/
.venv/
__pycache__/
.env
.env.local
API keys
passwords
large unnecessary files
```

Recommended `.gitignore` for your student repo:

```gitignore
node_modules/
.next/
.venv/
__pycache__/
*.pyc
.env
.env.local
.DS_Store
```

API keys and passwords must **never** be committed to GitHub.

---

## Student GitHub Submission Checklist

Before submitting your repository link, check:

- [ ] My repository has a clear name.
- [ ] My root README.md is complete.
- [ ] My folders are organized.
- [ ] I have made multiple commits.
- [ ] I have used at least one branch.
- [ ] I have opened and merged at least one pull request.
- [ ] My project folders include README files.
- [ ] My screenshots are included where needed.
- [ ] My reflections are written in my own words.
- [ ] I did not upload API keys, passwords, `.env` files, or `node_modules`.
- [ ] My Notion portfolio link is included.
- [ ] My final project link is included if available.

---

## How This Fits the Course

```text
Teacher course repository  →  lessons, templates, rubrics, starter code
Student personal repository →  your evidence, projects, reflections, code
Notion portfolio           →  public showcase of your best work
GitHub repository          →  proof of your technical process and history
```

The course repo tells you **what to do**. Your student repo shows **what you did**.

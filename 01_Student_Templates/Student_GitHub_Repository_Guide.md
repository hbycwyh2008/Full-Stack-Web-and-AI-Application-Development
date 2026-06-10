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

> **Start small.** Build your repository gradually. Phase 0 is only the minimum setup — not the whole course.

---

## Minimum Phase 0 Repository Structure

You do **not** need to create every course folder on day one.

By the end of **Phase 0**, you only need this minimum structure:

```text
student-portfolio/
├── README.md
├── .gitignore
├── profile/
│   ├── about-me.md
│   └── learning-goals.md
└── reflections/
    └── weekly-reflection-01.md
```

This minimum structure is enough to prove you can:

- create a repository
- write a README
- organize basic folders
- make commits
- use a branch
- open and merge a pull request
- submit a GitHub repo link

Add more folders **later**, when you reach each phase (see [Phase to Folder Mapping](#phase-to-folder-mapping) below).

---

## Full Target Repository Structure

This is the **final target structure** for the whole course.

You should **not** create every folder immediately unless your teacher asks you to. Add folders gradually when you reach each phase:

- Add `ai-literacy/` when starting AI Literacy.
- Add `ai-math-bridge/` when starting AI Math Bridge.
- Add `figma-design/` when starting Figma.
- Add `typescript-practice/` when starting TypeScript.
- Add `nextjs-frontend/` when starting Next.js.
- Add `fastapi-backend/` when starting FastAPI.
- Add `full-stack-mini-project/` when starting the full-stack mini project.
- Add `final-ai-app/` when starting the final project.

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

---

## Practice Folders vs Project Folders

Some folders are for **skill practice** — learning evidence, small labs, notes, and screenshots:

```text
ai-literacy/
ai-math-bridge/
figma-design/
typescript-practice/
nextjs-frontend/
fastapi-backend/
```

Some folders are for **complete projects** — frontend, backend, design, docs, and reflection together:

```text
full-stack-mini-project/
final-ai-app/
```

**Rule:**

```text
Practice work goes into skill folders.
Complete projects go into project folders.
Do not split one complete project randomly across many unrelated folders.
```

Examples:

- A small Next.js practice page → `nextjs-frontend/`
- A complete app with frontend and backend → `full-stack-mini-project/` or `final-ai-app/`

---

## Phase to Folder Mapping

| Phase | Folder | Required Evidence |
|---|---|---|
| Phase 0: GitHub Setup | `README.md`, `profile/`, `reflections/` | Repo link, README, one branch, one PR |
| Phase 1: Notion Portfolio | Root `README.md` | Notion portfolio link |
| Phase 2: AI Literacy | `ai-literacy/` | AI reflection, responsible AI notes, ethics case study |
| Phase 3: AI Math Bridge | `ai-math-bridge/` | Vector notes, matrix notes, NumPy lab, image-as-matrix lab |
| Phase 4: Figma Design | `figma-design/` | Figma link, screenshots, design reflection |
| Phase 5: TypeScript Basics | `typescript-practice/` | `types.ts`, `api-types.ts`, README |
| Phase 6: Next.js Frontend | `nextjs-frontend/` | Frontend explanation, screenshots, deployment link if available |
| Phase 7: FastAPI Backend | `fastapi-backend/` | API docs, Swagger UI screenshots, setup notes |
| Phase 8/9: Full-Stack Mini Project | `full-stack-mini-project/` | Frontend, backend, screenshots, API connection explanation |
| Final Phase: AI App Project | `final-ai-app/` | Complete project, demo link, README, reflection |
| Ongoing | `certificates/`, `reflections/` | Certificates, weekly reflections, Cursor reflection |

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
3. Add a root `README.md` using the template above.
4. Add a basic `.gitignore`.
5. Create the minimum Phase 0 folder structure:
   - `profile/about-me.md`
   - `profile/learning-goals.md`
   - `reflections/weekly-reflection-01.md`
6. Make at least one commit.
7. Create a branch called `update-profile`.
8. Edit `README.md` on that branch.
9. Open a pull request.
10. Merge the pull request.
11. Submit the GitHub repository link to your teacher.

This proves you can use: repository, README, commit, branch, pull request, merge, and GitHub project organization.

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

## Student Privacy and School Data Safety

Do not upload private or sensitive information to GitHub.

**Do not upload:**

- real student grades
- private student names from school records
- private school documents
- screenshots containing student personal information
- screenshots of private chats or emails
- API keys, passwords, or `.env` files
- private database files
- any file the school has not approved for public sharing

Use **sample data** instead of real school data.

Good examples:

```text
Student A
Student B
Sample Course 1
Sample Score 85
```

Bad examples:

```text
real student full names
real grade reports
real parent emails
private school documents
```

```text
When in doubt, do not upload it.
Ask the teacher before publishing anything related to real people or school information.
```

---

## Student GitHub Submission Checklist

Before submitting your repository link after **Phase 0**, check:

- [ ] My repository has a clear name.
- [ ] My root README.md is complete.
- [ ] My minimum Phase 0 folders are complete.
- [ ] I have made multiple commits.
- [ ] I have used at least one branch.
- [ ] I have opened and merged at least one pull request.
- [ ] My reflections are written in my own words.
- [ ] I did not upload API keys, passwords, `.env` files, or `node_modules`.
- [ ] I did not upload real student data or private school information.
- [ ] I understand that more folders will be added later as the course progresses.

As the course continues, also check:

- [ ] My project folders include README files when I add them.
- [ ] My screenshots are included where needed.
- [ ] My Notion portfolio link is in my root README.
- [ ] My final project link is included when available.

---

## How This Fits the Course

```text
Phase 0           = minimum repo setup
Whole course      = full target structure (added gradually)
Practice folders  = learning evidence
Project folders   = complete apps
GitHub            = technical process and history
Notion            = public portfolio showcase
```

```text
Teacher course repository   →  lessons, templates, rubrics, starter code
Student personal repository →  your evidence, projects, reflections, code
Notion portfolio            →  public showcase of your best work
GitHub repository           →  proof of your technical process and history
```

The course repo tells you **what to do**. Your student repo shows **what you did**.

**Keep evidence organized.** Use GitHub as proof of your learning process. Use Notion as your public showcase.

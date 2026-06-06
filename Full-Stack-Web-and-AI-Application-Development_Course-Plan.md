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

---

### 7.5 Next.js + FastAPI Bridge Course

**Full Stack Course | Build & Deploy 2 Projects and Get Hired**  
https://www.udemy.com/course/learn-nextjs-and-fastapi-by-building-2-full-stack-apps/

Purpose:

- Run through a direct Next.js + FastAPI + MongoDB workflow
- Understand how the frontend sends requests to the backend
- Understand how the backend connects to the database

This course is a bridge, not the main frontend or backend course.

---

### 7.6 Cursor Capstone Course

**Cursor + Task Master Full Stack AI Course (NextJS, Supabase)**  
https://www.udemy.com/course/cursor-ai-mcp-nextjs-supabase/

Purpose:

- Cursor workflow
- Task Master
- Cursor Rules
- MCP / GitHub MCP
- AI-assisted debugging
- AI-assisted full-stack development

Important note:

```text
This course uses Supabase.
Our course uses FastAPI as the main backend.
We study the Cursor workflow, not the exact Supabase architecture.
```

Migration idea:

```text
Supabase Edge Functions  →  FastAPI endpoints
Supabase database        →  MongoDB / PostgreSQL
Supabase auth            →  FastAPI auth / JWT
```

---

## 8. Student Portfolio Structure

Each student should create a Notion portfolio website with the following sections:

```text
Home
About Me
Projects
Skills
Certificates
Learning Notes
GitHub / Contact
```

Each project page should include:

```text
Project title
Problem / purpose
Tools used
Main features
Screenshots
GitHub link
What I learned
What AI helped with
What I changed myself
Reflection
```

The portfolio is the public-facing showcase. GitHub is the technical evidence.

---

## 9. GitHub README Template

Every student project repo should include a `README.md` file.

Recommended template:

```markdown
# Project Title

## Overview
Briefly explain what this project does.

## Problem
What problem does this project solve?

## Features
- Feature 1
- Feature 2
- Feature 3

## Tools Used
- Next.js
- FastAPI
- Python
- MongoDB
- Cursor

## Screenshots
Add screenshots here.

## How It Works
Explain the data flow:

Frontend → Backend → Database / AI API → Response

## What I Learned
Explain the key concepts you learned.

## AI Usage
Explain:
- What AI helped generate
- What you modified yourself
- What you tested
- What you still do not fully understand

## Links
- Live demo:
- GitHub repo:
- Portfolio page:
```

---

## 10. AI Usage Policy

Students may use AI tools to:

- generate starter code
- explain errors
- suggest improvements
- create UI ideas
- write test cases
- summarize documentation

Students may not:

- submit code they cannot explain
- hide AI usage
- copy-paste without testing
- claim full authorship of AI-generated code
- use AI to bypass learning

Required AI reflection for every project:

```text
How did I use AI?
What did AI generate?
What did I personally modify?
How did I test the result?
What parts do I fully understand?
What parts do I still need to review?
```

Core rule:

> AI can help generate code, but the student is responsible for understanding, testing, debugging, and presenting the project.

---

## 11. Assessment Rubric

Suggested weighting:

| Category | Weight |
|---|---:|
| Portfolio organization | 15% |
| GitHub + README quality | 15% |
| Frontend functionality | 20% |
| Backend API functionality | 20% |
| Full-stack integration | 15% |
| AI-assisted development reflection | 10% |
| Presentation / demo | 5% |

Key assessment questions:

```text
Can the student explain the architecture?
Can the student explain the data flow?
Can the student debug basic issues?
Can the student document the project clearly?
Can the student distinguish AI-generated code from their own decisions?
```

---

## 12. Recommended GitHub Repository Structure

Create a separate curriculum repository.

Recommended repo name:

```text
full-stack-web-ai-application-development
```

Recommended structure:

```text
full-stack-web-ai-application-development/
│
├── README.md
│
├── 00_Course_Planning/
│   ├── Course_Overview.md
│   ├── Learning_Pathway_Map.md
│   ├── Video_Resource_List.md
│   └── Teacher_Preparation_Checklist.md
│
├── 01_Student_Templates/
│   ├── Student_Portfolio_Template.md
│   ├── README_Template.md
│   ├── Project_Submission_Template.md
│   ├── AI_Usage_Reflection_Template.md
│   └── Learning_Journal_Template.md
│
├── 02_Assessment/
│   ├── Assessment_Rubric.md
│   ├── Presentation_Rubric.md
│   └── AI_Usage_Policy.md
│
├── 03_Final_Project/
│   ├── Final_Project_Specification.md
│   ├── AI_School_Assistant_Requirements.md
│   └── Teacher_Demo_Project_Plan.md
│
├── 04_Lesson_Materials/
│   ├── Phase_0_Portfolio.md
│   ├── Phase_1_GitHub_Markdown.md
│   ├── Phase_2_Cursor_Quick_Win.md
│   ├── Phase_3_NextJS_Frontend.md
│   ├── Phase_4_FastAPI_Backend.md
│   ├── Phase_5_Full_Stack_Integration.md
│   └── Phase_6_Cursor_Capstone.md
│
├── 05_Public_Documents/
│   ├── Student_Overview.md
│   ├── Parent_Overview.md
│   └── School_Proposal.md
│
└── 06_Starter_Code/
    ├── nextjs-frontend/
    ├── fastapi-backend/
    └── fullstack-ai-school-assistant/
```

---

## 13. First Batch of Files to Create

Do not generate everything at once. First create the core skeleton.

Initial files:

```text
README.md
00_Course_Planning/Course_Overview.md
00_Course_Planning/Learning_Pathway_Map.md
00_Course_Planning/Video_Resource_List.md
01_Student_Templates/Student_Portfolio_Template.md
01_Student_Templates/README_Template.md
02_Assessment/AI_Usage_Policy.md
02_Assessment/Assessment_Rubric.md
03_Final_Project/Final_Project_Specification.md
```

After these are stable, create:

```text
03_Final_Project/AI_School_Assistant_Requirements.md
03_Final_Project/Teacher_Demo_Project_Plan.md
04_Lesson_Materials/Phase_0_Portfolio.md
04_Lesson_Materials/Phase_1_GitHub_Markdown.md
04_Lesson_Materials/Phase_2_Cursor_Quick_Win.md
04_Lesson_Materials/Phase_3_NextJS_Frontend.md
04_Lesson_Materials/Phase_4_FastAPI_Backend.md
04_Lesson_Materials/Phase_5_Full_Stack_Integration.md
04_Lesson_Materials/Phase_6_Cursor_Capstone.md
05_Public_Documents/Student_Overview.md
05_Public_Documents/Parent_Overview.md
05_Public_Documents/School_Proposal.md
```

---

# Cursor Generation Plan

## Goal

Use Cursor to generate a clean curriculum repository for:

```text
Full-Stack Web and AI Application Development
```

The repository should contain Markdown-based curriculum planning documents, student templates, assessment rubrics, final project specifications, and starter-code placeholders.

Do not generate a full software application yet. First generate the curriculum repository structure and documentation.

---

## Task 1: Create Repository Skeleton

Create the folder structure:

```text
00_Course_Planning/
01_Student_Templates/
02_Assessment/
03_Final_Project/
04_Lesson_Materials/
05_Public_Documents/
06_Starter_Code/
```

Inside `06_Starter_Code/`, create placeholders:

```text
nextjs-frontend/
fastapi-backend/
fullstack-ai-school-assistant/
```

Add `.gitkeep` files if folders are empty.

---

## Task 2: Create Root README.md

Create `README.md` with:

- course name
- course focus
- target architecture
- final project description
- repository structure
- how this repo should be used by the teacher
- how student-facing materials are organized

Use the title:

```markdown
# Full-Stack Web and AI Application Development
```

---

## Task 3: Create Course Planning Files

Create:

```text
00_Course_Planning/Course_Overview.md
00_Course_Planning/Learning_Pathway_Map.md
00_Course_Planning/Video_Resource_List.md
00_Course_Planning/Teacher_Preparation_Checklist.md
```

Content requirements:

### Course_Overview.md

Include:

- course description
- course goals
- prerequisites
- tools
- final project
- expected student outcomes

### Learning_Pathway_Map.md

Include the phases:

```text
Phase 0: Notion Portfolio
Phase 1: GitHub + Markdown
Phase 2: Cursor Quick Win
Phase 3: Next.js Frontend
Phase 4: FastAPI Backend
Phase 5: Full-Stack Integration
Phase 6: Cursor Capstone
Phase 7: Final Showcase
```

Each phase should include:

- focus
- student output
- core skills
- suggested assessment evidence

### Video_Resource_List.md

Include the selected resources:

- How to Build a Professional Portfolio Website in Notion
- Markdown Crash Course — Traversy Media
- GitHub Skills: Introduction to GitHub
- Git and GitHub for Beginners — freeCodeCamp
- Next.js & React - The Complete Guide
- FastAPI - The Complete Course 2026
- Full Stack Course | Build & Deploy 2 Projects and Get Hired
- Cursor + Task Master Full Stack AI Course

For each resource, include:

- link
- purpose
- how to use it in this course
- whether it is required or optional

### Teacher_Preparation_Checklist.md

Include:

- create teacher sample Notion portfolio
- create teacher GitHub repo
- prepare README templates
- prepare assessment rubric
- prepare AI usage policy
- build simplified AI School Assistant demo
- prepare screenshots and demo flow

---

## Task 4: Create Student Templates

Create:

```text
01_Student_Templates/Student_Portfolio_Template.md
01_Student_Templates/README_Template.md
01_Student_Templates/Project_Submission_Template.md
01_Student_Templates/AI_Usage_Reflection_Template.md
01_Student_Templates/Learning_Journal_Template.md
```

Requirements:

### Student_Portfolio_Template.md

Include:

- Home
- About Me
- Projects
- Skills
- Certificates
- Learning Notes
- GitHub / Contact

### README_Template.md

Include the full project README structure:

- Overview
- Problem
- Features
- Tools Used
- Screenshots
- How It Works
- What I Learned
- AI Usage
- Links

### Project_Submission_Template.md

Include:

- project title
- GitHub repo link
- live demo or screenshots
- Notion portfolio link
- technical explanation
- AI usage explanation
- reflection

### AI_Usage_Reflection_Template.md

Include:

- how I used AI
- what AI generated
- what I modified
- what I tested
- what I understand
- what I still need to review

### Learning_Journal_Template.md

Include weekly reflection prompts:

- what I built
- what I learned
- what confused me
- what I fixed
- what I want to improve next

---

## Task 5: Create Assessment Files

Create:

```text
02_Assessment/Assessment_Rubric.md
02_Assessment/Presentation_Rubric.md
02_Assessment/AI_Usage_Policy.md
```

Requirements:

### Assessment_Rubric.md

Use these categories:

| Category | Weight |
|---|---:|
| Portfolio organization | 15% |
| GitHub + README quality | 15% |
| Frontend functionality | 20% |
| Backend API functionality | 20% |
| Full-stack integration | 15% |
| AI-assisted development reflection | 10% |
| Presentation / demo | 5% |

### Presentation_Rubric.md

Assess:

- clarity of demo
- explanation of architecture
- explanation of data flow
- explanation of AI usage
- ability to answer technical questions

### AI_Usage_Policy.md

Include:

- allowed AI use
- prohibited AI use
- required AI disclosure
- student responsibility statement

---

## Task 6: Create Final Project Files

Create:

```text
03_Final_Project/Final_Project_Specification.md
03_Final_Project/AI_School_Assistant_Requirements.md
03_Final_Project/Teacher_Demo_Project_Plan.md
```

Requirements:

### Final_Project_Specification.md

Final project:

```text
AI School Assistant
```

Include:

- project goal
- user stories
- required features
- technical architecture
- deliverables
- assessment criteria

### AI_School_Assistant_Requirements.md

Include functional requirements:

- chat interface
- question input
- backend API endpoint
- document source
- answer generation
- source-based explanation
- error handling

Include non-functional requirements:

- clear UI
- readable code
- documented API
- basic security awareness
- tested core workflow

### Teacher_Demo_Project_Plan.md

Include a simplified teacher demo:

```text
Next.js frontend
FastAPI backend
one API endpoint
one sample document
basic AI response
GitHub repo
README
Notion portfolio page
```

---

## Task 7: Create Lesson Material Placeholders

Create:

```text
04_Lesson_Materials/Phase_0_Portfolio.md
04_Lesson_Materials/Phase_1_GitHub_Markdown.md
04_Lesson_Materials/Phase_2_Cursor_Quick_Win.md
04_Lesson_Materials/Phase_3_NextJS_Frontend.md
04_Lesson_Materials/Phase_4_FastAPI_Backend.md
04_Lesson_Materials/Phase_5_Full_Stack_Integration.md
04_Lesson_Materials/Phase_6_Cursor_Capstone.md
```

Each file should include:

- phase goal
- lesson objectives
- required tools
- student tasks
- teacher notes
- exit ticket
- submission requirement

---

## Task 8: Create Public Documents

Create:

```text
05_Public_Documents/Student_Overview.md
05_Public_Documents/Parent_Overview.md
05_Public_Documents/School_Proposal.md
```

Requirements:

### Student_Overview.md

Student-friendly language. Explain:

- what students will build
- what tools they will learn
- why portfolio matters
- final project

### Parent_Overview.md

Parent-facing language. Explain:

- course value
- student outcomes
- portfolio and GitHub evidence
- responsible AI use

### School_Proposal.md

School-facing language. Explain:

- alignment with CS/AI pathway
- differentiation from AI literacy platforms
- final showcase value
- student portfolio outcomes

---

## Task 9: Create Starter Code Placeholders

Do not generate full code yet.

Inside:

```text
06_Starter_Code/nextjs-frontend/
06_Starter_Code/fastapi-backend/
06_Starter_Code/fullstack-ai-school-assistant/
```

Create a `README.md` in each folder explaining:

- purpose of this starter code folder
- future planned contents
- setup notes placeholder
- TODO list

---

## Task 10: Quality Requirements

Use these standards:

- Student-facing documents should be written in clear English.
- Teacher notes may include short Chinese comments if needed.
- Markdown should be clean and readable.
- Use tables where helpful.
- Avoid overcomplicated language.
- Do not invent school-specific policies.
- Leave placeholders where school-specific information is needed.
- Make documents easy to copy into Notion, Google Docs, or GitHub.

---

# Cursor Master Prompt

Copy the prompt below into Cursor when working inside the empty GitHub repository.

```text
You are helping me build a curriculum repository for a course titled:

Full-Stack Web and AI Application Development

This is a portfolio-first course where students learn GitHub, Markdown, Notion portfolio building, Next.js frontend development, FastAPI backend development, full-stack integration, and AI-assisted coding with Cursor.

The final project is an AI School Assistant.

Target architecture:

Next.js frontend
        ↓
FastAPI backend
        ↓
Python AI / RAG service
        ↓
MongoDB / Vector Store
        ↓
LLM API

Please generate a clean Markdown-based curriculum repository.

Do not generate the full software application yet. First create the curriculum documentation structure.

Create this folder structure:

00_Course_Planning/
01_Student_Templates/
02_Assessment/
03_Final_Project/
04_Lesson_Materials/
05_Public_Documents/
06_Starter_Code/
06_Starter_Code/nextjs-frontend/
06_Starter_Code/fastapi-backend/
06_Starter_Code/fullstack-ai-school-assistant/

Create these files:

README.md

00_Course_Planning/Course_Overview.md
00_Course_Planning/Learning_Pathway_Map.md
00_Course_Planning/Video_Resource_List.md
00_Course_Planning/Teacher_Preparation_Checklist.md

01_Student_Templates/Student_Portfolio_Template.md
01_Student_Templates/README_Template.md
01_Student_Templates/Project_Submission_Template.md
01_Student_Templates/AI_Usage_Reflection_Template.md
01_Student_Templates/Learning_Journal_Template.md

02_Assessment/Assessment_Rubric.md
02_Assessment/Presentation_Rubric.md
02_Assessment/AI_Usage_Policy.md

03_Final_Project/Final_Project_Specification.md
03_Final_Project/AI_School_Assistant_Requirements.md
03_Final_Project/Teacher_Demo_Project_Plan.md

04_Lesson_Materials/Phase_0_Portfolio.md
04_Lesson_Materials/Phase_1_GitHub_Markdown.md
04_Lesson_Materials/Phase_2_Cursor_Quick_Win.md
04_Lesson_Materials/Phase_3_NextJS_Frontend.md
04_Lesson_Materials/Phase_4_FastAPI_Backend.md
04_Lesson_Materials/Phase_5_Full_Stack_Integration.md
04_Lesson_Materials/Phase_6_Cursor_Capstone.md

05_Public_Documents/Student_Overview.md
05_Public_Documents/Parent_Overview.md
05_Public_Documents/School_Proposal.md

06_Starter_Code/nextjs-frontend/README.md
06_Starter_Code/fastapi-backend/README.md
06_Starter_Code/fullstack-ai-school-assistant/README.md

Use the following course flow:

Phase 0: Notion Portfolio
Phase 1: GitHub + Markdown
Phase 2: Cursor Quick Win
Phase 3: Next.js Frontend
Phase 4: FastAPI Backend
Phase 5: Full-Stack Integration
Phase 6: Cursor Capstone
Phase 7: Final Showcase

Selected resources:

1. How to Build a Professional Portfolio Website in Notion
https://www.youtube.com/watch?v=kFxfh8urobU

2. Markdown Crash Course — Traversy Media
https://www.youtube.com/watch?v=HUBNt18RFbo

3. GitHub Skills: Introduction to GitHub
https://github.com/skills/introduction-to-github

4. Git and GitHub for Beginners — freeCodeCamp
https://www.youtube.com/watch?v=RGOj5yH7evk

5. Next.js & React - The Complete Guide
https://www.udemy.com/course/nextjs-react-the-complete-guide/

6. FastAPI - The Complete Course 2026
https://www.udemy.com/course/fastapi-the-complete-course/

7. Full Stack Course | Build & Deploy 2 Projects and Get Hired
https://www.udemy.com/course/learn-nextjs-and-fastapi-by-building-2-full-stack-apps/

8. Cursor + Task Master Full Stack AI Course
https://www.udemy.com/course/cursor-ai-mcp-nextjs-supabase/

Important rules:

- Student-facing documents should be in clear English.
- Keep the language practical and project-focused.
- Do not overpromise AI capabilities.
- Do not invent school-specific policies.
- Use placeholders for school-specific details.
- The course is not pure AI literacy; it is AI application engineering.
- GitHub and README quality are required evidence.
- Students must disclose AI usage in every project.
- Cursor is used as an accelerator, not a substitute for understanding.
- Do not create full application code yet.
- Create clean Markdown files that can later be copied into Notion, Google Docs, or exported to PDF.
```

---

## 14. Next Teacher Action

After Cursor generates the repository:

1. Review `README.md`.
2. Review `Course_Overview.md`.
3. Edit the course language to match your school context.
4. Create the teacher sample Notion portfolio.
5. Create one teacher demo GitHub repo.
6. Build a minimal AI School Assistant prototype.
7. Convert selected documents into student handouts.
8. Prepare the first 2 weeks of lesson materials.

Recommended first two weeks:

```text
Week 1: Notion Portfolio
Week 2: GitHub + Markdown
```

Do not start with full-stack Cursor coding. Students need documentation and portfolio infrastructure first.

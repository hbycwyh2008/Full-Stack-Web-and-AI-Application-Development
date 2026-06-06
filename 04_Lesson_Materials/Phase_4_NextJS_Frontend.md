# Phase 4: Next.js Frontend

## Phase Goal
Build a simple frontend application using Next.js and React — the user interface layer of the AI School Assistant.

## Key Concepts
- React components and props.
- Next.js App Router: pages and layouts.
- Basic forms, interaction, and the idea of fetching data.
- The frontend is the **user interface**; FastAPI will be the backend later.

## Required Student Output
- A simple frontend project (project gallery, course resource website, or portfolio-style web app).
- Multiple pages sharing a layout, plus one form or interactive component.
- The project pushed to GitHub with a README.

---

## Suggested Lesson Count
3 lessons.

## Lesson Sequence

### Lesson 1: Components and Pages
- **Goal:** Understand components, props, and the App Router page/layout structure.
- **Warm-up:** Show a webpage and ask students to circle the "repeating pieces" (cards, buttons). Those are components.
- **Mini Lesson:** What a React component is; how props pass data in; how Next.js uses `app/` pages and a shared layout.
- **Guided Practice:** Build one reusable component together (e.g., a project card) and show it with different props.
- **Independent Work:** Create a second page that reuses the component.
- **Exit Ticket:** In one sentence, what is a prop?
- **Homework:** Add a third page and make sure all pages share the layout.

### Lesson 2: Forms and Interaction
- **Goal:** Add a form or interactive element and handle simple state.
- **Warm-up:** "What happens when you type in a search box and press enter?"
- **Mini Lesson:** Basic state (`useState`), handling input, and showing a result on screen.
- **Guided Practice:** Build a small form together (e.g., a filter or a name greeting).
- **Independent Work:** Add one form or interactive component to the project.
- **Exit Ticket:** What does state store in your component?
- **Homework:** Polish the interaction so it works without errors.

### Lesson 3: Data Fetching Concept + Publish
- **Goal:** Understand fetching data and push the project to GitHub.
- **Warm-up:** "Where does the data on a website come from?"
- **Mini Lesson:** The idea of fetching data from a server (preview of Phase 7). Stress: Next.js API Routes / Server Actions are **not** our backend — FastAPI is.
- **Guided Practice:** Display a small hardcoded list as if it came from data; discuss how a real backend would send it.
- **Independent Work:** Write the project README and push to GitHub.
- **Exit Ticket:** Where will the real data come from later in this course?
- **Homework:** Confirm the repo runs and the README is complete.

## Submission Requirements
- [ ] Runnable Next.js frontend.
- [ ] At least two pages with a shared layout.
- [ ] One form or interactive component.
- [ ] GitHub repo with README.

## Common Student Problems
- Copying code without understanding components → use the "explain this prop" check.
- Confusing pages and layouts → show the file structure clearly.
- Treating Next.js as the backend → repeat: FastAPI is the backend.
- Forgetting to push to GitHub.

## Teacher Notes
> 保持前后端分离的概念清晰。Keep the frontend/backend separation clear from the start. Students may be tempted to use Next.js API routes — redirect them to the FastAPI path planned for Phase 5 and 7.

## AI Lens Reflection
Ask students: *"If you used Cursor to help build a component, how do you know it actually works? What did you test?"* Save the answer in Learning Notes.

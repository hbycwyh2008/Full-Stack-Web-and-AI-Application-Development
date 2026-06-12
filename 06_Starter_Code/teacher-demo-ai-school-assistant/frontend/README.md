# Frontend — AI School Assistant Demo

A minimal Next.js (App Router) frontend. It uses plain React — no Tailwind, no UI libraries, no database, no authentication.

## What It Does
- Shows a title and short explanation.
- Lets the user type a question.
- Sends the question to the FastAPI backend at `POST http://localhost:8000/ask`.
- Shows a loading state, an error state, the answer, and the source.

## Run It

```bash
npm install
npm run dev
```

Then open http://localhost:3000

> The backend must be running first (see `../backend/README.md`). The frontend calls the **FastAPI** backend, not Next.js API routes.

## Key Files
- `app/page.js` — the main page and the fetch request to the backend.
- `app/layout.js` — the root layout.
- `app/globals.css` — simple styles.

---

Source code in this folder is licensed under the MIT License unless otherwise stated.

# Testing Guide — Teacher Demo

Use this guide to test the demo locally before using it in class. No real LLM or API key is needed.

> This test guide is for the teacher demo only. The final student project will later replace the placeholder answer function with a real LLM API call and better retrieval.

---

## Backend Test Checklist

Start the backend first (see `backend/README.md`).

- [ ] `uvicorn main:app --reload --port 8000` starts without errors.
- [ ] http://localhost:8000 shows the health message `{ "status": "ok", ... }`.
- [ ] http://localhost:8000/docs opens the interactive API docs.
- [ ] `POST /ask` with a valid question returns an `answer` and a `source`.
- [ ] `POST /ask` with an empty question returns a clear error (status 400).
- [ ] An unrelated question returns an "I don't know" style response.

## Frontend Test Checklist

Start the frontend after the backend (see `frontend/README.md`).

- [ ] `npm install` completes.
- [ ] `npm run dev` starts the app at http://localhost:3000.
- [ ] The page shows the title "AI School Assistant Demo".
- [ ] Typing a question and clicking **Ask** shows a loading state.
- [ ] A valid question shows an answer and a source.
- [ ] Submitting an empty question shows a clear message.

## Full-Stack Test Checklist

- [ ] Backend is running at `http://localhost:8000`.
- [ ] Frontend is running at `http://localhost:3000`.
- [ ] Asking a question in the frontend returns an answer from the backend.
- [ ] The source line appears under the answer.
- [ ] No real API key is required for any of this to work.

---

## Suggested Test Questions

```text
What is the late homework policy?
How should I review for exams?
What are the AI usage rules?
What should I submit for a project?
Can I use AI to write everything for me?
```

## Expected Behavior

- The app returns an answer.
- The app shows a source (for example, "Student Handbook — AI Usage Policy").
- The app does **not** use a real LLM (the answer comes from the placeholder).
- For an unrelated question, the app says it does not know or shows no matching section.

## Known Limitations

- The answer is a simple grounded response, not an LLM-written summary.
- Retrieval is a basic word-overlap match, not real search or vector search.
- The demo uses one small document only.
- These limitations are intentional — this is a teaching demo, not a production app.

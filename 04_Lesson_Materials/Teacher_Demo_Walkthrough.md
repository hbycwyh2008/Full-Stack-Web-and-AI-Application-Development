# Teacher Demo Walkthrough

## Purpose
This lesson helps the teacher introduce the AI School Assistant starter demo before students build their own version. Students see a working full-stack example and learn to read its architecture, data flow, and AI placeholder.

## When to Use This Lesson
Use after **Phase 8 (RAG)** and **before Phase 10 (Cursor)** — ideally Week 13 in the 16-week plan.

## Demo Goals
- Show a small, working full-stack app end to end.
- Make the data flow concrete and visible.
- Show where the AI answer is still a placeholder.
- Connect the demo to the final AI School Assistant project.

## Before Class Setup
- Run the backend and frontend yourself first (see `06_Starter_Code/teacher-demo-ai-school-assistant/TESTING.md`).
- Confirm http://localhost:8000 (health) and http://localhost:3000 (frontend) both work.
- Have the code open in Cursor to show key files.
- No real API key is needed.

## Live Demo Sequence
1. Open the frontend and ask: "What is the late homework policy?"
2. Show the answer and the source line.
3. Open `backend/main.py` and show the data-flow comment block.
4. Show the `POST /ask` endpoint and the `retrieve_context()` function.
5. Show the `generate_answer()` placeholder and the `TODO` for the real LLM call.
6. Ask an unrelated question to show the "I don't know" behavior.

## Key Questions to Ask Students
- Where does the answer come from?
- Why does the app show a source?
- What happens if the document does not contain the answer?
- Where would a real AI model be added?
- Why is the API key kept on the backend, not the frontend?

## Architecture Explanation
```text
Next.js frontend  →  FastAPI backend  →  sample_handbook.txt  →  generate_answer() placeholder
```
- Frontend: the user interface.
- Backend (FastAPI): receives the question and finds relevant text.
- Document: the source of truth.
- AI: a placeholder for now.

## Data Flow Explanation
```text
User question
→ Next.js frontend
→ FastAPI POST /ask
→ Search sample_handbook.txt
→ generate_answer() placeholder
→ Answer + source
→ Frontend displays result
```

## Where the AI Placeholder Is
In `backend/main.py`, the `generate_answer()` function returns a simple grounded response and contains a `TODO` comment marking exactly where a real LLM API call will go later.

## How This Connects to Phase 8 and Phase 10
- **Phase 8 (RAG):** demo shows retrieve-then-generate and sources.
- **Phase 10 (Cursor):** students use demo as model when building with Cursor.

## Common Student Misunderstandings
- "The AI already works." → It is a placeholder; no real LLM yet.
- "The frontend talks to the AI directly." → It talks to FastAPI, which holds the logic (and later the key).
- "It knows everything." → It only answers from the one sample document.
- "We need a database." → Not for this demo.

## Exit Ticket
- In one sentence, describe the data flow from question to answer.
- Where in the code would a real AI model be added?

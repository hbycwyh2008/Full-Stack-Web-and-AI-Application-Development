# Teacher Demo — Cursor Prompt

This file gives the teacher a ready-to-use Cursor prompt for generating a **small demo** of the AI School Assistant. The demo is a teaching model students can study before building their own version.

> Keep the demo small and clear. The goal is a working example, not a finished product.

---

## How to Use

1. Create an empty folder for the demo (for example, `teacher-demo-ai-school-assistant`).
2. Open it in Cursor.
3. Paste the prompt below into Cursor's chat.
4. Review the generated code carefully before running it.
5. Add your own LLM API key **locally only** (never commit it).

> _Security note: the prompt tells Cursor to use a `.env.example` file and never commit real secrets. Always double-check before pushing to GitHub._

---

## The Cursor Prompt

```text
You are helping a teacher build a SMALL demo of an "AI School Assistant" for a high school course.

Goal:
Create a minimal full-stack demo that lets a user ask a question and get an answer based on ONE sample school document. This is a teaching example, so keep it simple, well-commented, and easy to read.

Tech stack:
- Frontend: minimal Next.js app (App Router). One page with a text input, a submit button, and an answer area.
- Backend: minimal FastAPI app with ONE endpoint: POST /ask
- The frontend calls the backend at POST /ask and displays the response.

Backend requirements:
- POST /ask accepts JSON: { "question": "..." }
- It returns JSON: { "answer": "...", "source": "..." }
- Load ONE sample school document from a local text file (for example, sample_handbook.txt).
- Include a clearly marked PLACEHOLDER function called generate_answer() where a real LLM API call would go.
  - For now, generate_answer() should return a simple placeholder response that quotes a relevant line from the sample document and names the source.
  - Add a comment showing WHERE a real LLM API call would be added later.
- Read any API key from an environment variable (for example, OPENAI_API_KEY). Do NOT hardcode keys.
- If the question is empty, return a clear error message.

Sample document:
- Create sample_handbook.txt with a few short, made-up school policies (late homework, exam review, AI usage rules). Keep it generic — no real school names.

Security and config:
- Create a .env.example file listing the variable names only (for example: OPENAI_API_KEY=your_key_here).
- Do NOT create a real .env file with secrets.
- Add a .gitignore that ignores .env and other secrets.

Architecture comments:
- At the top of the main backend file, add a comment block showing the data flow:
  User question -> Frontend -> POST /ask -> Find relevant text in document -> generate_answer() (LLM placeholder) -> Answer + source -> Frontend
- Add short comments explaining each main part so students can follow it.

README requirement:
- Create a README.md that explains:
  - what the demo does
  - the architecture and data flow
  - how to run the frontend and backend
  - how to add an API key locally using .env (based on .env.example)
  - a clear note that no real API key is committed
  - a TODO list of what students would build next (real LLM call, more documents, better UI)

Important rules:
- Keep everything minimal and beginner-friendly.
- Use clear, high-school-friendly comments.
- Do NOT include any real secrets or API keys.
- Do NOT over-engineer. This is a demo, not a production app.
```

---

## After Cursor Generates the Demo

Review this checklist before using it in class:

- [ ] The backend has exactly one `POST /ask` endpoint.
- [ ] There is one sample document (`sample_handbook.txt`) with generic policies.
- [ ] `generate_answer()` is clearly marked as a placeholder, with a note where the real LLM call goes.
- [ ] No API key is hardcoded; a `.env.example` exists and `.env` is gitignored.
- [ ] The README explains the architecture, data flow, and how to run it.
- [ ] Architecture comments show the full data flow.
- [ ] The demo runs end to end with the placeholder response.

## Teaching Tips

- Walk students through the data flow comment block first.
- Show the placeholder `generate_answer()` and ask: "Where would the real AI call go?"
- Connect back to Phase 0: the assistant uses a document and names its source — responsible, honest AI.
- Use this demo as the model for the Phase 8 Cursor Capstone.

# Backend — AI School Assistant Demo

A minimal FastAPI backend. It receives a question, searches one sample school handbook, and returns an answer plus its source.

## What the Backend Does
- Exposes one endpoint: `POST /ask`.
- Request body: `{ "question": "..." }`
- Response body: `{ "answer": "...", "source": "..." }`
- Loads `sample_handbook.txt` and finds the most relevant section.
- Returns a grounded answer using the `generate_answer()` placeholder.
- Handles errors: empty question, missing handbook file, no matching section, and server problems.

## Folder Contents
- `main.py` — the FastAPI app, the `/ask` and health endpoints, retrieval, and the `generate_answer()` placeholder.
- `requirements.txt` — the Python packages needed to run the backend.
- `sample_handbook.txt` — one sample school handbook with generic policies.
- `README.md` — this file.

## 1. Create a Virtual Environment

```bash
cd backend
python -m venv venv
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate
```

## 2. Install Requirements

```bash
pip install -r requirements.txt
```

## 3. Run the Server

```bash
uvicorn main:app --reload --port 8000
```

Visit http://localhost:8000 — you should see a status message confirming the server is running.

## 4. Test the Health Endpoint

Open http://localhost:8000 in a browser. You should see:

```json
{ "status": "ok", "message": "AI School Assistant Demo backend is running." }
```

This confirms the server started correctly before you test `/ask`.

## 5. Test `POST /ask` in the Docs Page

FastAPI creates interactive docs automatically.

1. Open http://localhost:8000/docs
2. Click **POST /ask** → **Try it out**.
3. Enter a question, for example:

```json
{ "question": "What is the late homework policy?" }
```

4. Click **Execute** and read the response (`answer` and `source`).

## 6. Where the Placeholder Is

The `generate_answer()` function in `main.py` is a **placeholder**. It does not call a real LLM yet — it returns a simple grounded response based on the matched handbook section. A `TODO` comment marks exactly where a real LLM API call would go in the full project.

## Reminder
- **No real API key is used yet.** The demo runs fully without one.
- `python-dotenv` is included in `requirements.txt` so the later real-LLM version can read a key from `.env`, but the current demo does **not** call a real LLM.
- Never commit a real `.env` file (it is already gitignored).

---

Source code in this folder is licensed under the MIT License unless otherwise stated.

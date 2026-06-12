# Teacher Demo Project Plan

A simplified version of the AI School Assistant that the teacher builds first, so students have a working model to follow.

## Scope of the Demo

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

Keep it intentionally small. The goal is a clear, working example — not a complete product.

---

## Build Steps

1. **Frontend:** Create a minimal Next.js page with a question input and an answer area.
2. **Backend:** Create a FastAPI app with one endpoint (e.g., `POST /ask`).
3. **Sample document:** Add one short document (e.g., a one-page handbook excerpt).
4. **AI response:** Call the LLM API with the question and the document content, return a grounded answer.
5. **Connect:** Wire the frontend to call the backend endpoint.
6. **Document:** Write a README using the course template.
7. **Publish:** Push to GitHub and create a Notion portfolio page.

---

## Demo Flow

```text
1. Open the frontend.
2. Type: "What is the late homework policy?"
3. Submit and show the AI answer.
4. Show the FastAPI endpoint receiving the request.
5. Explain the data flow: frontend → backend → LLM → response.
```

---

## Notes

- Keep API keys in environment variables; never commit secrets.
- Capture screenshots for the portfolio and lesson materials.
- Note common errors students may hit (CORS, missing API key, empty input).

> _Placeholder: record the exact LLM provider, model, and any school-specific document used._

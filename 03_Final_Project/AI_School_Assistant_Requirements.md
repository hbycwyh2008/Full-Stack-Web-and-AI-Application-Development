# AI School Assistant — Requirements

## Functional Requirements

- **Chat interface:** A simple chat-style UI where users can read questions and answers.
- **Question input:** A text field and submit action for the user's question.
- **Backend API endpoint:** A FastAPI endpoint (e.g., `POST /ask`) that receives the question and returns an answer.
- **Document source:** A defined set of school documents the assistant draws from (handbook, course material, policies).
- **Answer generation:** The backend uses an LLM API to generate an answer based on the documents.
- **Source-based explanation:** The answer references which document or section it came from.
- **Error handling:** Handle empty questions, no relevant document found, and API/network failures gracefully.

---

## Non-Functional Requirements

- **Clear UI:** Easy to read and use; obvious where to type and submit.
- **Readable code:** Organized, named clearly, and reasonably commented where helpful.
- **Documented API:** The endpoint is described (method, path, request body, response shape).
- **Basic security awareness:** No secrets committed to the repo; API keys kept in environment variables.
- **Tested core workflow:** The main "ask a question and get an answer" flow is tested.

---

## Suggested API Contract (Example)

```text
POST /ask
Request:  { "question": "What is the late homework policy?" }
Response: { "answer": "...", "source": "Student Handbook, Section 4" }
```

> _Placeholder: adjust the endpoint, request, and response shapes to your implementation._

---

## Stretch Goals (Optional)

- Conversation history.
- Multiple document collections.
- Highlighting the exact source passage.
- Simple authentication.

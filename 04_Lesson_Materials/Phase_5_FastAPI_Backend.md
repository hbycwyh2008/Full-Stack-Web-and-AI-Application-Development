# Phase 5: FastAPI Backend

## Phase Goal
Build a simple FastAPI backend — the logic and data layer of the AI School Assistant.

## Key Concepts
- FastAPI app, routes, and endpoints.
- Request body and response model with Pydantic schemas.
- Testing in `/docs` and basic error handling.
- The backend handles logic and data; **FastAPI is the backend for this course**.

## Required Student Output
- A simple FastAPI service with at least one working endpoint.
- A Pydantic schema for the request and response.
- Documented endpoints, tested in `/docs`, pushed to GitHub.

---

## Suggested Lesson Count
3 lessons.

## Lesson Sequence

### Lesson 1: First Endpoint
- **Goal:** Create a FastAPI app with one working route.
- **Warm-up:** "When an app asks a server for something, how does it ask?"
- **Mini Lesson:** What an API and an endpoint are; what a route does; GET vs. POST.
- **Guided Practice:** Build a simple GET endpoint together and open it in the browser.
- **Independent Work:** Add a second endpoint that returns some data.
- **Exit Ticket:** What does an API endpoint do?
- **Homework:** Get the server running locally and visit `/docs`.

### Lesson 2: Request Bodies and Schemas
- **Goal:** Accept input with a Pydantic schema and return a response model.
- **Warm-up:** "Why does a server need to check the data it receives?"
- **Mini Lesson:** Pydantic request and response models; validation; JSON in/out.
- **Guided Practice:** Build a `POST` endpoint that accepts a JSON body and returns a structured response.
- **Independent Work:** Define a clear request and response schema for an endpoint.
- **Exit Ticket:** Why use a schema instead of accepting any data?
- **Homework:** Test the POST endpoint in `/docs`.

### Lesson 3: Errors, Docs, and Security Habits
- **Goal:** Add basic error handling and document the API.
- **Warm-up:** "What should happen if someone sends an empty request?"
- **Mini Lesson:** Returning clear errors; reading the auto-generated `/docs`; never committing secrets.
- **Guided Practice:** Add error handling for an empty or invalid request together.
- **Independent Work:** Document endpoints in the README; confirm no secrets are committed.
- **Exit Ticket:** Name one error your API now handles.
- **Homework:** Push the backend to GitHub with documented endpoints.

## Submission Requirements
- [ ] Running FastAPI service.
- [ ] At least one endpoint with a Pydantic schema.
- [ ] Endpoint tested in `/docs`.
- [ ] GitHub repo with documented endpoints and no secrets.

## Common Student Problems
- Forgetting to run the server / wrong port → show the uvicorn command clearly.
- Confusing GET and POST → use a simple analogy (reading vs. sending).
- Hardcoding secrets → reinforce environment variables and `.gitignore`.
- Skipping `/docs` testing.

## Teacher Notes
> 用 /docs 页面让测试变简单。Use the `/docs` page to make testing easy and visual. Emphasize the security habit of keeping API keys out of the repo — this matters when the LLM is added later.

## AI Lens Reflection
Ask students: *"This backend will later call an LLM. Why is it important that the backend, not the browser, holds the API key?"* Save the answer in Learning Notes.

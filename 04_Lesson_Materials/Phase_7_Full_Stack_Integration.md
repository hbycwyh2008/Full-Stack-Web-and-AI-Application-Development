# Phase 7: Full-Stack Integration

## Phase Goal
Connect the Next.js frontend to the FastAPI backend so data flows end to end.

## Key Concepts
- HTTP request flow and `fetch` from the frontend.
- CORS and why it is needed for local development.
- Loading and error states; request/response JSON.
- The path: frontend sends request → FastAPI receives → FastAPI returns JSON → frontend displays.

## Required Student Output
- A Next.js frontend connected to a FastAPI endpoint.
- Backend data displayed in the frontend, with loading and error states.
- A README that explains the data flow.

---

## Suggested Lesson Count
3 lessons.

## Lesson Sequence

### Lesson 1: Making a Request
- **Goal:** Send a request from the frontend to the backend with `fetch`.
- **Warm-up:** "How does a website ask a server for information?"
- **Mini Lesson:** `fetch`, sending JSON, and reading a JSON response. The request/response cycle.
- **Guided Practice:** Together, call a simple backend endpoint and log the response.
- **Independent Work:** Display the backend response somewhere on the page.
- **Exit Ticket:** What does `fetch` do?
- **Homework:** Make a successful request to your own backend.

### Lesson 2: CORS, Loading, and Errors
- **Goal:** Handle CORS and add loading and error states.
- **Warm-up:** Show a CORS error message. "What do you think this means?"
- **Mini Lesson:** Why browsers block cross-origin requests; how the FastAPI backend allows `http://localhost:3000`. Loading and error UX.
- **Guided Practice:** Fix a deliberately broken CORS setup together; add a loading spinner/message.
- **Independent Work:** Add loading and error states to the project.
- **Exit Ticket:** Why is CORS needed during local development?
- **Homework:** Make sure errors show a clear message to the user.

### Lesson 3: End-to-End and Documentation
- **Goal:** Trace the full data flow and document it.
- **Warm-up:** "Trace one request from button click to answer on screen."
- **Mini Lesson:** Reviewing the full path: frontend → FastAPI → JSON → frontend. How this matches the AI School Assistant.
- **Guided Practice:** As a class, draw the full data flow diagram.
- **Independent Work:** Write the README data-flow explanation and push to GitHub.
- **Exit Ticket:** List the four steps of the data flow.
- **Homework:** Confirm the full-stack demo runs end to end.

## Submission Requirements
- [ ] Frontend successfully calls the FastAPI backend.
- [ ] Loading and error states handled.
- [ ] Data flow explained in the README.
- [ ] GitHub repo updated.

## Common Student Problems
- CORS errors → have the example config ready in advance.
- Backend not running → remind students to start FastAPI first.
- Forgetting loading/error states → require both.
- Mixing up which side does what → repeat the four-step flow.

## Teacher Notes
> CORS 是最常见的拦路虎，提前准备示例配置。CORS is the most common blocker — prepare the example config ahead of time. This phase produces the skeleton the AI School Assistant uses: a question goes to the backend and an answer comes back.

## AI Lens Reflection
Ask students: *"Now that the frontend and backend talk to each other, where would the AI answer come from, and how would you show its source?"* Save the answer in Learning Notes.

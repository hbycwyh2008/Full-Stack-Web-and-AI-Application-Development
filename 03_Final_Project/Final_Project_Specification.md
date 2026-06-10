# Final Project Specification

## Project

```text
AI School Assistant
```

A web application that lets students, teachers, or parents ask questions based on school documents, course materials, or a student handbook.

---

## Project Goal

Build a working full-stack AI application that answers questions from a defined set of school documents, with a clear frontend, a FastAPI backend, and an LLM-powered response.

---

## User Stories

- As a **student**, I want to ask about homework or exam policies so I can find answers quickly.
- As a **teacher**, I want to point the assistant at course materials so students get consistent answers.
- As a **parent**, I want to ask about school rules so I understand expectations.

---

## Required Features

- Chat-style interface for asking questions.
- Text input and a way to submit a question.
- A backend API endpoint that receives the question.
- A document source the assistant draws answers from.
- AI-generated answers grounded in the provided documents.
- Source-based explanation (which document or section the answer came from).
- Basic error handling for empty input or failed requests.

---

## Technical Architecture

```text
Next.js frontend
        ↓
FastAPI backend
        ↓
Python AI / RAG service
        ↓
ChromaDB (vector store)
        ↓
LLM API
```

Reference implementation: `06_Starter_Code/ai-school-assistant/` (migrated from the course author's working RAG app).

---

## Deliverables

- GitHub repository with clean code and a complete README.
- Working frontend (Next.js) and backend (FastAPI).
- A documented API endpoint.
- A Notion portfolio page for the project.
- An AI usage reflection.
- A live or recorded demo.

---

## Assessment Criteria

Graded using `02_Assessment/Assessment_Rubric.md` and `02_Assessment/Presentation_Rubric.md`. Key questions:

- Does the application work end to end?
- Can the student explain the architecture and data flow?
- Is AI usage disclosed and understood?
- Is the project documented and presentable?

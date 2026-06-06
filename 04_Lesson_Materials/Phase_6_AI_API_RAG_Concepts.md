# Phase 6: AI API + RAG Concepts

## Phase Goal
Understand how LLM APIs and retrieval-augmented generation (RAG) support the AI School Assistant — before full integration.

## Key Concepts
- How an LLM API receives a prompt and returns a response.
- Why answers must be grounded in school documents, not the model's memory.
- The RAG flow: retrieve relevant text, then generate an answer.
- Source-based answers and reducing hallucinations.

## Required Student Output
- A diagram or written explanation of the AI School Assistant data flow.
- One sample prompt that includes the user question, document text, and a source instruction.
- An updated Responsible AI Checklist with new design decisions.

## Suggested Class Activities
- Draw the data flow as a class:

```text
Question → Frontend → FastAPI → Find document → LLM API → Answer + source → Frontend
```

- Compare a "no documents" answer with a "with documents" answer.
- Workshop: improve a weak sample prompt together.

## AI Lens Connection
This phase is the bridge between Phase 0 literacy and real engineering. Revisit Generative AI for Everyone Module 6 (beyond prompting) to connect RAG to responsible, accurate answers.

## Submission Checklist
- [ ] Data flow diagram or written explanation.
- [ ] Sample prompt with question + document + source instruction.
- [ ] Three ways to reduce hallucinations listed.
- [ ] Responsible AI Checklist updated.

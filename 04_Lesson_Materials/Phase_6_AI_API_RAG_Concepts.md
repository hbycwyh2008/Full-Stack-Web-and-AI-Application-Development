# Phase 6: AI API + RAG Concepts

## Phase Goal
Students understand how LLM APIs and retrieval-augmented generation (RAG) support the AI School Assistant — before full integration in later phases.

## Lesson Objectives
- Explain how an LLM API receives a prompt and returns a response.
- Describe why school documents must be retrieved before generating an answer.
- Draw the AI School Assistant data flow from question to source-based answer.
- Design a sample prompt that includes user question, document text, and source instructions.

## Required Tools
- Notes from Phase 0 (`00_AI_Literacy/`)
- Paper or digital diagram tool

## Required Resources
- `00_AI_Literacy/Generative_AI_for_Everyone_Study_Guide.md` (Module 6 preview)
- `03_Final_Project/AI_School_Assistant_Requirements.md`
- `00_AI_Literacy/Responsible_AI_Checklist.md`

## Student Tasks
- Draw or write the data flow:

```text
User question → Frontend → FastAPI → Find relevant document → LLM API → Answer + source → Frontend
```

- Write one sample prompt your backend might send to the LLM.
- List three ways to reduce hallucinations in the AI School Assistant.
- Update your Responsible AI Checklist with any new design decisions.

## Teacher Notes
> 这是 Phase 0 素养与最终项目的桥梁。This phase bridges Phase 0 literacy and the final project. No full code required yet — focus on concepts students can explain in their own words. Revisit Generative AI for Everyone Module 6 if needed.

## Exit Ticket
- Explain RAG in one sentence.
- Why must the assistant show its source?

## Submission Requirement
- Architecture diagram or written data flow + sample prompt + updated Responsible AI Checklist.

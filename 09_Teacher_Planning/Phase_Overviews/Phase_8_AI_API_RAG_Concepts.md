# Phase 8: AI API + RAG Concepts

**Your goal:** Understand **LLM APIs and RAG** and connect them to your **AI School Assistant** and Phase 3 vector intuition.

---

## What You Will Learn

- LLM API basics, prompts, document grounding
- Retrieval → generate (RAG) pipeline
- Source-based answers and “I don’t know”
- Similarity ↔ dot product / embeddings (Math Bridge callback)

---

## Why This Matters

Your capstone is not a generic chatbot — it answers from **school documents with sources**. Phase 8 explains the architecture before full integration (Phase 9) and Cursor (Phase 10).

---

## Before Class

- [ ] Phases 6–7 code in repo
- [ ] Review [Teacher_Demo_Walkthrough.md](Teacher_Demo_Walkthrough.md) if assigned
- [ ] Re-read responsible AI notes from Phase 2

---

## In-Class Learning Flow

### 1. Skill Warm-up
Draw boxes: User → Frontend → Backend → Retrieve → LLM → Answer + Source.

### 2. Talk Robin Round 1
- **You:** “RAG means…”
- **Partner:** “Finding a handbook section is like comparing vectors because…”

### 3. Entry Check
What is the difference between a plain LLM chat and RAG?

### 4. Core Pattern
```text
documents → chunks/embeddings → retrieve similar → prompt with context → answer + cite source
```

### 5. Guided Practice
Write sample grounded prompt; update Responsible AI Checklist; trace teacher demo data flow.

### 6. Independent Rebuild
- [ ] Data-flow diagram (image or Markdown)
- [ ] Sample prompt with source rules
- [ ] Written “retrieve then generate” explanation in repo
- [ ] Commit to project docs folder

### 7. Talk Robin Round 2 + Evidence
Submit diagram + explanation link.

---

## Required Evidence

- Program report: architecture diagram + prompt doc
- Reflection: link to Math Bridge (similarity)
- Updated Responsible AI Checklist
- No working RAG required yet — **conceptual evidence** + connection to your stack

---

## Extension Task
Read starter code `06_Starter_Code/ai-school-assistant/` README; label each file’s role.

---

## Reflection Questions
1. How is finding a handbook section like comparing vectors?
2. One rule to keep the assistant honest.
3. Where will sources appear in your UI (Figma)?

---

## Submission Checklist
- [ ] Diagram + prompt + explanation in GitHub
- [ ] Responsible AI checklist updated
- [ ] Can explain RAG orally without reading slides
- [ ] AI usage note if AI helped diagram

**Next:** [Phase 9: Full-Stack Integration](Phase_9_Full_Stack_Integration.md)

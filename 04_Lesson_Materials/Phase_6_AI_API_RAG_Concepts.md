# Phase 6: AI API + RAG Concepts

## Phase Goal
Understand how LLM APIs and retrieval-augmented generation (RAG) support the AI School Assistant — a conceptual bridge before full integration.

## Key Concepts
- What an LLM API does, and what a prompt is in an API call.
- Why document-grounded answers matter and why model memory is not enough.
- What retrieval means, what RAG means, and what source-based answers are.
- How hallucinations can be reduced with "retrieve then generate."

## Required Student Output
- An AI School Assistant data-flow diagram.
- A sample prompt with question + context + source instruction.
- An updated Responsible AI Checklist.
- A short written explanation of "retrieve then generate."

---

## Suggested Lesson Count
2 lessons.

## Lesson Sequence

### Lesson 1: LLM APIs and Why Documents Matter
- **Goal:** Explain what an LLM API does and why answers must be grounded in documents.
- **Warm-up:** Ask the class a made-up school policy question. "How would an AI know the real answer?"
- **Mini Lesson:** What an LLM API call looks like (prompt in → response out). Why model memory alone causes hallucinations. Revisit Generative AI for Everyone (beyond prompting).
- **Guided Practice:** Compare two answers as a class — one with no document, one with the document. Discuss which is trustworthy.
- **Independent Work:** Write a short explanation: why must the AI School Assistant use school documents?
- **Exit Ticket:** What is a hallucination, and how do documents help?
- **Homework:** Draft a first version of the data-flow diagram.

### Lesson 2: Retrieval, RAG, and Source-Based Answers
- **Goal:** Understand retrieval and design a grounded prompt.
- **Warm-up:** "If you had 100 pages, how would you find the right paragraph to answer a question?"
- **Mini Lesson:** Retrieval = find the relevant text first. RAG = retrieve, then generate. Source-based answers build trust. (No vector database required yet — keep it conceptual.)
- **Guided Practice:** As a class, write a sample prompt that includes the user question, the document text (context), and an instruction to cite the source and say "I don't know" if unsure.
- **Independent Work:** Finalize the data-flow diagram and update the Responsible AI Checklist with new decisions.
- **Exit Ticket:** Explain "retrieve then generate" in one sentence.
- **Homework:** Polish the diagram and sample prompt for submission.

## Submission Requirements
- [ ] AI School Assistant data-flow diagram.
- [ ] Sample prompt with question + context + source instruction.
- [ ] Three ways to reduce hallucinations listed.
- [ ] Updated Responsible AI Checklist.
- [ ] Short "retrieve then generate" explanation.

## Common Student Problems
- Thinking the LLM "just knows" school policies → reinforce grounding in documents.
- Confusing retrieval with generation → use the "find the paragraph, then answer" framing.
- Writing vague prompts → require question + context + source instruction.
- Expecting a vector database → clarify it is not needed at this stage.

## Teacher Notes
> 这是从素养到工程的桥梁阶段。This is the bridge from literacy to engineering. Keep it conceptual — no vector database yet. The teacher demo (`06_Starter_Code/teacher-demo-ai-school-assistant/`) is a great concrete example of "retrieve then generate" with a placeholder answer function.

## AI Lens Reflection
Ask students: *"What rule will your AI School Assistant follow when it cannot find an answer in the documents?"* Save the answer in Learning Notes.

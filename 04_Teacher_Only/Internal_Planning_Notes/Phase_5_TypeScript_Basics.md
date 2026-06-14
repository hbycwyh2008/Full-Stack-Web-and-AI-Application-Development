# Phase 5: TypeScript Basics

**Your goal:** Learn TypeScript **after Figma** and **before Next.js** — types for props, state, and API responses.

---

## What You Will Learn

- `type`, `interface`, optional properties, unions
- Typing props and API JSON (preview for FastAPI + fetch)
- Connecting types to data shapes from Phase 3 (feature schemas)

---

## Why This Matters

Your AI School Assistant will exchange JSON between Next.js and FastAPI. Types catch mistakes early and document what your app expects — part of **program report** quality.

---

## Before Class

- [ ] Figma mockup link in repo
- [ ] Create `typescript-practice/` folder
- [ ] Node.js installed (teacher confirms)

---

## In-Class Learning Flow

### 1. Skill Warm-up
Compare untyped vs typed variable — write one sentence why types help teams.

### 2. Talk Robin Round 1
- **You:** “A TypeScript type is like a ___ for data.”
- **Partner:** “`AskResponse` needs fields ___ because…”

### 3. Entry Check
Define `type` vs `interface` in one line each.

### 4. Core Pattern
```text
define types → use in examples → test in small file → document in README → commit
```

### 5. Guided Practice
Create `types.ts` and `api-types.ts` with `AskResponse`, `QuestionRequest`, etc.

### 6. Independent Rebuild
```text
typescript-practice/
├── types.ts
├── api-types.ts
└── README.md
```
Explain each type in README — **your words**.

### 7. Talk Robin Round 2 + Evidence
Submit repo link + commit screenshot.

---

## Required Evidence

- Program code: `types.ts`, `api-types.ts`
- Program report: README explaining types
- Reflection: one paragraph on typing vs plain JavaScript
- Commit history + AI usage note if used

---

## Extension Task
Add types matching every field on your Figma question card component plan.

---

## Reflection Questions
1. How is `AskResponse` related to your API design?
2. What error would types prevent?
3. What was hardest to type correctly?

---

## Submission Checklist
- [ ] `typescript-practice/` with both files + README
- [ ] Types match final project direction
- [ ] Meaningful commits
- [ ] Independent rebuild — no full copy from neighbor

**Next:** [Phase 6: Next.js Frontend](Phase_6_NextJS_Frontend.md)

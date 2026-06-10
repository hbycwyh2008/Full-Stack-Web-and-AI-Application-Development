# Phase 5: TypeScript Basics

## Phase Goal
Learn **TypeScript fundamentals after Figma** and **before the Next.js project (Phase 6)** — types for props, state, and API responses.

## Key Concepts
- `type`, `interface`, optional properties, unions, function types.
- React props and `useState` typing (preview).
- API response typing for FastAPI (preview Phase 9).

## Required Student Output

```text
typescript-practice/   (or early Next.js repo)
├── types.ts
├── api-types.ts
└── README.md
```

## Example

```ts
type AskResponse = {
  answer: string;
  source: string;
};
```

---

## Suggested Lesson Count
2 lessons.

## Lesson Sequence

### Lesson 1: Types and Interfaces
- **Goal:** Read/write basic types; connect to feature vectors from Phase 3 (numbers as data).
- **Warm-up:** "How is a TypeScript type like a feature vector schema?"
- **Mini Lesson:** `type`, `interface`, optional `?`, unions.
- **Guided Practice:** Define `Student` or `AskResponse` type.
- **Independent Work:** `types.ts` with 2–3 types.
- **Homework:** Read Next.js + TS setup for Phase 6.

### Lesson 2: Props and API Types
- **Goal:** Type props and API JSON shapes.
- **Guided Practice:** `api-types.ts` for `/ask` response.
- **Independent Work:** README on TypeScript usage; commit.
- **Homework:** Start Next.js project in Phase 6 with `.tsx` files.

## Submission Requirements
- [ ] `types.ts` and `api-types.ts`.
- [ ] README explaining types.
- [ ] Connection note to Phase 3 (vectors as typed arrays optional stretch).

## Teacher Notes
> TS 在 Figma 之后、Next.js 之前。Per course path: design → types → frontend.

## AI Lens Reflection
*How do typed API responses help honest AI answers (answer + source)?*

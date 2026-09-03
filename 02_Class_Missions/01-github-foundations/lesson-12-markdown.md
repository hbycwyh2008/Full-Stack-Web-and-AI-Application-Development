# Lesson 1: Markdown for README and GitHub Documentation

**Phase:** 0 — Git & GitHub  
**Duration:** 45 minutes  
**Official playlist position:** #13  
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)

---

## Lesson Goal

Students learn Markdown **before creating the long-term course repository** so they can write a useful README from the beginning instead of creating an empty placeholder and learning documentation much later.

By the end of this lesson, students can:

- explain what Markdown is;
- write headings, emphasis, lists, links, images, blockquotes, code blocks, and task lists;
- use Preview to verify rendered output;
- create a README draft locally that will be used in the next lesson;
- distinguish Markdown source from rendered GitHub documentation.

---

## Why This Lesson Comes Here

Students have already experienced the whole GitHub workflow in Lesson 0.

The next major task is to create their real course repository. A repository should begin with useful documentation, so Markdown is a prerequisite rather than an end-of-unit add-on.

```text
GitHub workflow overview
→ Markdown
→ create real course repository with README
```

---

## Today Only

| Role | What |
|---|---|
| **Video** | Playlist #13 — [Getting started with Markdown on GitHub](https://www.youtube.com/watch?v=LxeclcePg-c) |
| **Guided practice** | GitHub Skills: Communicate using Markdown |
| **Independent rebuild** | Create a complete README draft without step-by-step prompts |
| **Evidence** | Local `README-draft.md` plus progress in the Markdown Skills exercise |
| **Next lesson connection** | The draft becomes the starting content for the student's course repository |

---

## Core Vocabulary

| Term | Meaning |
|---|---|
| **Markdown** | Plain-text syntax that renders as formatted content |
| **source** | The Markdown characters you type |
| **rendered view** | The formatted result GitHub displays |
| **preview** | A rendered view checked before saving |
| **README** | A repository's primary explanatory document |
| **task list** | Checkbox list written with Markdown |

---

## Core Pattern

```text
write Markdown source
→ preview rendered output
→ fix structure or syntax
→ save the document
```

---

## 45-Minute Lesson Flow

| Time | Block |
|---|---|
| **0–10 min** | Skill Warm-up — watch the official Markdown video |
| **10–14 min** | Retrieve — connect Markdown to the README seen in Lesson 0 |
| **14–20 min** | Model — source vs rendered output |
| **20–32 min** | Guided Practice — GitHub Skills Markdown exercise |
| **32–40 min** | Independent Rebuild — write the course README draft |
| **40–45 min** | Evidence + Reflection |

---

### 0–10 min: Skill Warm-up

Watch: [Getting started with Markdown on GitHub](https://www.youtube.com/watch?v=LxeclcePg-c).

Record:

- one new Markdown syntax pattern;
- one rendering behavior you notice;
- one feature that would make a README easier to read.

---

### 10–14 min: Retrieve

Think back to the Hello World repository from Lesson 0.

Discuss:

1. Where did you see Markdown already?
2. Why should a README be more than one unformatted sentence?
3. Why is Markdown useful for software projects even though it is not a programming language?

---

### 14–20 min: Model — Source vs Rendered Output

Teacher demonstrates a small example:

```markdown
# Project Name

## Purpose
This project is **important** because it documents our work.

## Goals
- Learn GitHub
- Learn Git
- Build projects
```

Students identify:

- the source syntax;
- the rendered headings;
- the bold text;
- the list structure.

Key idea:

> Markdown is plain text with structure. GitHub renders that structure into readable documentation.

---

### 20–32 min: Guided Practice

Complete GitHub Skills: [Communicate using Markdown](https://github.com/skills/communicate-using-markdown).

Focus on:

- headings;
- emphasis;
- lists;
- links;
- images;
- code blocks;
- task lists.

The purpose is to learn syntax and rendering, not to memorize every possible Markdown feature.

---

### 32–40 min: Independent Rebuild — Course README Draft

Without step-by-step prompts, create a local file named:

```text
README-draft.md
```

It must include:

```markdown
# Full-Stack Web and AI Application Development

## Purpose
Write 2–3 sentences explaining what this course repository will contain.

## Learning Goals
- Goal 1
- Goal 2
- Goal 3

## Current Skills
- [x] Experienced the GitHub workflow
- [x] Learned basic Markdown
- [ ] Created the long-term course repository

## Evidence
Course work and learning evidence will be added here throughout the course.
```

Add at least one additional Markdown feature of your choice:

- link;
- blockquote;
- code block;
- image;
- nested list.

Preview it and fix any rendering problems.

---

### 40–45 min: Evidence + Reflection

Save:

- `README-draft.md`;
- evidence of progress/completion in the GitHub Skills Markdown exercise.

Write a short local reflection:

```markdown
## Lesson 1 — Markdown
- What Markdown is:
- One syntax pattern I can now use confidently:
- One mistake I made and fixed:
- Why Markdown should come before creating the course repository:
```

This reflection can be moved into `learning-log.md` after the course repository is created in the next lesson.

---

## Common Mistakes

- Treating Markdown as decoration rather than project documentation
- Confusing Markdown source with rendered output
- Forgetting to preview before saving
- Using headings only for visual size instead of document structure
- Forgetting blank lines around some Markdown elements
- Publishing passwords, tokens, or other private information in examples

---

## Teacher Notes

This lesson is intentionally moved ahead of repository creation.

The old sequence taught Markdown very late, after students had already created and used repositories. That makes the README feel incidental.

The revised dependency is stronger:

```text
understand GitHub workflow
→ learn how GitHub documentation works
→ create the permanent repository correctly from the start
```

The official video's playlist position does not determine curriculum order.

# Lesson 11: Publish with GitHub Pages

**Phase:** 0 — Git & GitHub
**Duration:** 45 minutes
**Official playlist position:** #12
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)
**Student repo:** `YourName-Full-Stack-Web-and-AI-Application-Development`

---

## Lesson Goal

After watching the official video, students can publish a minimal project page from the course repository and verify its public URL.

This lesson uses **one video and one guided practice**. Do not re-teach the Classroom Flow posters and do not assign another playlist video as homework.

---

## Today Only

| Role | What |
|---|---|
| **Video** | **Playlist #12** — [Getting started with GitHub Pages for beginners](https://www.youtube.com/watch?v=b2r9Cdvssi0) |
| **Guided practice** | Publish and independently update the Lesson 5 page with GitHub Pages |
| **Practice source** | Teacher-designed direct static-page rebuild; the available Pages Skill adds Jekyll/blog scope |
| **Evidence** | Working GitHub Pages URL recorded in `README.md` |
| **Exit Ticket** | `learning-log.md` → Lesson 11 |

> Playlist #10, GitHub Actions, is excluded from this unit. Lesson numbers after Lesson 9 therefore differ from playlist positions.

---

## Core Vocabulary

| Term | Meaning |
|---|---|
| **GitHub Pages** | Static-site hosting from a GitHub repository |
| **source branch** | The branch Pages publishes |
| **deployment** | A published version of a project |

---

## Core Pattern

```text
one official video
→ one focused practice
→ one visible GitHub artifact
→ Lesson 11 learning-log entry
```

---

## 45-Minute Lesson Flow

| Time | Block |
|---|---|
| **0–10 min** | **Skill Warm-up** — watch this lesson's official video only; stop at 10 minutes if needed |
| **10–13 min** | **Talk Robin 1** — explain one idea from the video |
| **13–17 min** | **Entry Check** — retrieve prior knowledge needed today |
| **17–21 min** | **Core Pattern** — teacher models the smallest complete workflow |
| **21–32 min** | **Guided Practice** — complete the named task with checkpoints |
| **32–40 min** | **Independent Rebuild** — repeat or finish without step-by-step prompting |
| **40–45 min** | **Talk Robin 2 + Evidence** — show the artifact and commit the learning log |

---

### 0–10 min: Skill Warm-up

Watch **playlist #12 only**: [Getting started with GitHub Pages for beginners](https://www.youtube.com/watch?v=b2r9Cdvssi0).

While watching, record:

- One new term
- One action demonstrated
- One question to test during practice

### 10–13 min: Talk Robin 1

- **A:** “The video's main idea is…”
- **B:** “A step I need to remember is…”

### 13–17 min: Entry Check

1. What artifact did you create last lesson?
2. Where can you verify a change in GitHub?
3. What must never be copied into a public repository?

### 17–21 min: Core Pattern

Teacher demonstrates the task once and points out where students can verify the result. Students identify the action, the artifact, and the evidence before beginning.

### 21–32 min: Guided Practice

1. Without replaying the video, confirm `github-foundations/first-page/index.html` is a valid static page.
2. Configure Pages with the teacher-approved branch/folder method.
3. Wait for deployment, open the public URL, and compare it with the source file.
4. Add the working URL to `README.md` and commit with `Publish first GitHub Pages site`.

### 32–40 min: Independent Rebuild

Change one visible sentence in the Pages source, commit it, and independently verify that a new deployment updates the public page while the README link continues to work.

### 40–45 min: Talk Robin 2 + Evidence

Open the published URL and identify which repository file supplies its content.

Add to `learning-log.md`:

```markdown
## Lesson 11
- What I did:
- What I learned:
- What was hard:
- Evidence link:
```

Commit the learning-log update if the lesson's practice did not already require that exact commit. **Homework is only the unfinished Lesson 11 learning-log entry; no video homework.**

---

## Common Mistakes

- Watching or assigning a second playlist video
- Completing clicks without checking the resulting artifact
- Using vague commit messages such as `update`
- Publishing passwords, tokens, recovery codes, or other private information
- Treating a screenshot as a substitute for repository evidence

---

## Teacher Notes

Optional extension after required evidence: [GitHub Skills: GitHub Pages](https://github.com/skills/github-pages) builds a Jekyll blog and may take close to an hour. It is not the required practice because this lesson rebuilds the video’s simpler static-page publishing workflow.

Lesson 12 continues with the next official playlist video.

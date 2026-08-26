# Lesson 10: Repository Security

**Phase:** 0 — Git & GitHub
**Duration:** 45 minutes
**Official playlist position:** #11
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)
**Student repo:** `YourName-Full-Stack-Web-and-AI-Application-Development`

---

## Lesson Goal

After watching the official video, students can recognize secrets and dependency risks and use GitHub's Security area without exposing credentials.

This lesson uses **one video and one guided practice**. Do not re-teach the Classroom Flow posters and do not assign another playlist video as homework.

---

## Today Only

| Role | What |
|---|---|
| **Video** | **Playlist #11** — [Getting started with GitHub security](https://www.youtube.com/watch?v=zhxXaFzzJYA) |
| **Guided practice** | Inspect repository security, improve `.gitignore`, and audit fake risks |
| **Practice source** | Teacher-designed broad security rebuild; available Security Skills cover narrower subsets |
| **Evidence** | Security settings check, `.gitignore`, and repository security checklist |
| **Exit Ticket** | `learning-log.md` → Lesson 10 |

> Playlist #10, GitHub Actions, is excluded from this unit. Lesson numbers after Lesson 9 therefore differ from playlist positions.

---

## Core Vocabulary

| Term | Meaning |
|---|---|
| **secret scanning** | Detection of exposed credentials |
| **Dependabot** | Alerts and updates for vulnerable dependencies |
| **CodeQL** | Code scanning that finds security problems |

---

## Core Pattern

```text
one official video
→ one focused practice
→ one visible GitHub artifact
→ Lesson 10 learning-log entry
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

Watch **playlist #11 only**: [Getting started with GitHub security](https://www.youtube.com/watch?v=zhxXaFzzJYA).

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

1. Without replaying the video, locate the repository Security tab and the security-related Settings pages.
2. Verify the visible status of Dependabot/automated security features; do not enable paid or unfamiliar controls.
3. Add `.env`, common credential-file patterns, and local dependency folders to `.gitignore` where appropriate.
4. Create `github-foundations/10-repository-security-checklist.md` describing secret rotation, dependency alerts, and where security findings appear. Commit both files.

### 32–40 min: Independent Rebuild

With notes closed, audit a teacher-provided fake scenario containing a sample `.env`, an outdated dependency alert, and an API-key placeholder. Identify each risk, name where GitHub reports it, and explain that a real exposed key must be revoked or rotated.

### 40–45 min: Talk Robin 2 + Evidence

Explain why deleting an exposed API key from the latest file is not enough.

Add to `learning-log.md`:

```markdown
## Lesson 10
- What I did:
- What I learned:
- What was hard:
- Evidence link:
```

Commit the learning-log update if the lesson's practice did not already require that exact commit. **Homework is only the unfinished Lesson 10 learning-log entry; no video homework.**

---

## Common Mistakes

- Watching or assigning a second playlist video
- Completing clicks without checking the resulting artifact
- Using vague commit messages such as `update`
- Publishing passwords, tokens, recovery codes, or other private information
- Treating a screenshot as a substitute for repository evidence

---

## Teacher Notes

Optional extensions after required evidence: [Introduction to secret protection](https://github.com/skills/introduction-to-secret-scanning) focuses on secret scanning, while [Secure your repository supply chain](https://github.com/skills/secure-repository-supply-chain) focuses on dependencies and Dependabot. Neither replaces this lesson’s broader video-aligned rebuild.

Lesson 11 continues with the next official playlist video.

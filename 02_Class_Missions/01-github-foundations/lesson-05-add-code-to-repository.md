# Lesson 5: Add Code to a Repository

**Phase:** 0 — Git & GitHub
**Duration:** 45 minutes
**Official playlist position:** #5
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)
**Student repo:** `YourName-Full-Stack-Web-and-AI-Application-Development`

---

## Lesson Goal

After watching the official video, students can clone a repository, create a branch, add code locally, stage and commit it, and push the branch to GitHub.

This lesson uses **one video and one guided practice**. Do not re-teach the Classroom Flow posters and do not assign another playlist video as homework.

---

## Today Only

| Role | What |
|---|---|
| **Video** | **Playlist #5** — [How to add code to your repository](https://www.youtube.com/watch?v=g2XjJhrGGg4) |
| **Guided practice** | Rebuild clone → branch → add code → stage → commit → push using the terminal or GitHub Desktop |
| **Practice source** | Teacher-designed terminal or GitHub Desktop rebuild; no close video-aligned GitHub Skills exercise selected |
| **Evidence** | Pushed `add-first-page` branch containing `github-foundations/first-page/index.html` |
| **Exit Ticket** | `learning-log.md` → Lesson 5 |

> Playlist #10, GitHub Actions, is excluded from this unit. Lesson numbers after Lesson 9 therefore differ from playlist positions.

---

## Core Vocabulary

| Term | Meaning |
|---|---|
| **clone** | Create a local copy of a GitHub repository |
| **branch** | A separate line of work for a change |
| **stage / commit / push** | Select changes, save a snapshot, and send it to GitHub |

---

## Core Pattern

```text
one official video
→ one focused practice
→ one visible GitHub artifact
→ Lesson 5 learning-log entry
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

Watch **playlist #5 only**: [How to add code to your repository](https://www.youtube.com/watch?v=g2XjJhrGGg4).

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

1. Without replaying the video, clone the course repository with the terminal or GitHub Desktop.
2. Create and switch to branch `add-first-page`; add `github-foundations/first-page/index.html` locally.
3. Inspect the changes, stage the file, and commit with `Add first HTML practice page`.
4. Push or publish the branch, then verify the branch, file, and commit on github.com. Do not open the pull request yet.

### 32–40 min: Independent Rebuild

With the video closed, add `github-foundations/first-page/style.css` locally on the same branch. Independently complete status/diff → stage → commit → push and verify the second commit on the GitHub branch. Use the terminal or GitHub Desktop route shown in the video.

### 40–45 min: Talk Robin 2 + Evidence

Show the pushed `add-first-page` branch on GitHub and explain clone, branch, stage, commit, and push in the order used.

Add to `learning-log.md`:

```markdown
## Lesson 5
- What I did:
- What I learned:
- What was hard:
- Evidence link:
```

Commit the learning-log update if the lesson's practice did not already require that exact commit. **Homework is only the unfinished Lesson 5 learning-log entry; no video homework.**

---

## Common Mistakes

- Watching or assigning a second playlist video
- Completing clicks without checking the resulting artifact
- Using vague commit messages such as `update`
- Publishing passwords, tokens, recovery codes, or other private information
- Treating a screenshot as a substitute for repository evidence

---

## Teacher Notes

Do not replace this lesson with the github.com web editor: the video teaches a local clone/branch/commit/push workflow. Prepare either Git in a terminal or GitHub Desktop before class. Lesson 6 turns this pushed branch into a pull request.

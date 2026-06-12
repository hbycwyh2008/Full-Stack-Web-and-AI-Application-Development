# Lesson 5: Local Git with VS Code and Terminal

**Your repo:** `cs-learning-log`

---

## Lesson Goal

By the end of this lesson, students should be able to:

1. Explain the difference between **save**, **commit**, and **push**
2. Run the local workflow: change file → `git status` → `git add` → `git commit` → `git push` → check GitHub  
   **OR** complete the **web fallback** pattern with written explanation in `lesson-05/notes.md`
3. Show evidence (terminal or web commits) and explain each step

---

## Required Resource

| | |
|---|---|
| **Resource name** | Git & GitHub Command Cheatsheet (course handout) |
| **Link** | `05_Resources/Git_GitHub_Unit/student-handouts/git-github-command-cheatsheet.md` (teacher shares path or copy in LMS) |
| **Required section** | Read **only:** `git status`, `git add`, `git commit`, `git push` rows + “Save vs Commit vs Push” |
| **Why this resource** | One page with the exact commands for today — no playlist, no extra tutorials |

If your teacher prints the cheatsheet, use the paper copy instead of searching other links.

---

## What to Focus On

While reading the cheatsheet, focus **only** on:

1. What `git status` shows
2. What `git add` does (stage changes)
3. What `git commit` does (local snapshot)
4. What `git push` does (upload to GitHub)
5. Why **save in editor ≠ commit ≠ push**

**Required notes:**

```text
git status tells me...
git add prepares...
git commit saves locally...
git push uploads...
Save vs commit vs push: ...
One thing I still do not understand is...
```

---

## Optional Support Resources

Use **only if stuck:**

1. **GitHub Docs: Quickstart** (clone/edit on web — web fallback path) — https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories

---

## Teacher Reference Only

- GitHub for Beginners Playlist
- Full `git-github-command-cheatsheet.md` advanced sections
- VS Code Source Control docs

---

## Mini Skill: What You Need Before This Task

1. **Lessons 1–4 complete** — repo with folders, commits, `lesson-04/notes.md`
2. **Local path:** Git installed, repo cloned to your computer, VS Code (or editor) + terminal
3. **Web fallback:** if local setup not ready — edit on github.com; write `lesson-05/notes.md` explaining what push would do later

**Command sequence (local):**

```bash
git status
git add .
git commit -m "Add Lesson 5 note on local Git workflow"
git push
```

**Core pattern:**

```text
change file → git status → git add → git commit → git push → check GitHub
```

| Command | Purpose |
|---|---|
| `git status` | See what changed |
| `git add .` | Stage changes |
| `git commit -m "..."` | Save local snapshot |
| `git push` | Upload to GitHub |

---

## 90-Minute Class Flow

### 0–10 min: Entry Point Check

**Task — answer individually:**

1. If you edit README on GitHub web, is that the same as `git push`? Why or why not?
2. What does `git status` tell you?
3. What is the difference between **commit** and **push**?
4. Are you on **local path** or **web fallback** today?

**Teacher checks:** Who thinks saving a file updates GitHub automatically?

**Student output:** Four answers + path choice.

---

### 10–25 min: Individual Learning

Read **required cheatsheet section** and complete **six required notes**.

Predict: “If I save locally but don’t push, GitHub shows ___.”

**Student output:** Filled note template.

---

### 25–40 min: Talk Round 1

**Each student speaks:**

1. “Commit is local; push is…”
2. “If GitHub shows old README, I check…”
3. One terminal fear to normalize

**Student output:** Pair agrees on one question for teacher.

---

### 40–55 min: Entry Points Check / Teacher Diagnosis

**Group shared answer:**

1. One sentence: `git status`
2. One sentence: commit vs push
3. One sentence: save vs commit
4. Which path: local or web fallback
5. One question for the teacher

**Teacher explains** unclear parts only.

**Local demo sequence:**

1. Open cloned `cs-learning-log` in VS Code
2. Edit `README.md` or `learning-log.md` — add “Lesson 5: local Git practice”
3. Run command sequence in repo folder
4. Verify on GitHub **Commits** tab

**Web fallback:** Edit on github.com; create `lesson-05/notes.md` explaining commit vs push; two meaningful web commits.

---

### 55–75 min: Guided Practice / Mission Task

**Local — with support, then less help:**

- [ ] Edit file
- [ ] `git status` before add
- [ ] `git add` + `git commit` with meaningful message
- [ ] `git push` succeeded
- [ ] GitHub Commits tab updated
- [ ] Terminal screenshot saved

**Web fallback:**

- [ ] Two web commits with meaningful messages
- [ ] `lesson-05/notes.md` explains commit vs push
- [ ] Note: “Web workflow today — local push later”

**No AI full command paste** during this block (`../shared/ai-use-during-practice.md`).

---

### 75–85 min: Exit Check

1. What command sequence did you run (or web steps)?
2. What proof shows push worked (or deferred)?
3. One sentence: commit vs push?

---

### 85–90 min: Submission

Submit evidence (below).

---

## What You Must Submit

**Local path:**

1. Terminal screenshot (status / add / commit / push)
2. GitHub screenshot after push
3. One sentence: difference between **commit** and **push**

**Web fallback:**

1. Web commit screenshot(s)
2. Link to `lesson-05/notes.md`
3. Same sentence + note that push was deferred

---

## Success Criteria

1. File change visible on GitHub with meaningful commit message(s)
2. You can explain save → commit → push in order
3. Evidence matches your path (local or web)

**Mastery:** Level 3 — full sequence with checklist; Level 4 — without cheatsheet.

---

## Teacher Checkpoints

1. Can students run `git status` in the correct folder?
2. Can students explain why `nothing to commit` happens?
3. Can students show GitHub updated after push (or explain web path)?
4. Can students distinguish commit vs push orally?
5. Did students try before asking for auth/help?

---

## Common Problems

| Problem | Try first |
|---|---|
| `not a git repository` | `cd` into cloned repo folder |
| `nothing to commit` | Did you save and `git add`? |
| GitHub unchanged | Did you `git push`? |
| Auth failed | Ask teacher — PAT or GitHub Desktop |

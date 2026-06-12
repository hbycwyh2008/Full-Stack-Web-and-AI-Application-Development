# Lesson 5: Local Git with VS Code and Terminal

**Your repo:** `studentName-Full-Stack-Web-and-AI-Application`

**Classroom learning cycle:**

```text
individual learning
→ Talk Robin / group discussion
→ group answer
→ Entry Points Check
→ teacher explains only what students do not understand
→ mission task
→ exit check
→ submission of evidence
```

---

## Lesson Goal

By the end of this lesson, students should be able to:

1. Explain the difference between **save**, **commit**, and **push**
2. Run the local workflow: change file → `git status` → `git add` → `git commit` → `git push` → check GitHub  
   **OR** complete the **web fallback** pattern with written explanation in `lesson-05/notes.md`
3. Show evidence (terminal or web commits) and explain each step

---

## Required Resource

Use this resource during **Individual Learning** and keep it open during the mission:

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

### 0–15 min: Individual Learning

Open the **Git & GitHub Command Cheatsheet** at:

`05_Resources/Git_GitHub_Unit/student-handouts/git-github-command-cheatsheet.md`

Read only:

- `git status`
- `git add`
- `git commit`
- `git push`
- “Save vs Commit vs Push”

Complete the required notes:

```text
git status tells me...
git add prepares...
git commit saves locally...
git push uploads...
Save vs commit vs push: ...
One thing I still do not understand is...
```

Predict: “If I save locally but don’t push, GitHub shows ___.”

**Student output:** Six notes + prediction.

---

### 15–30 min: Talk Robin / Group Discussion

Each student speaks once before anyone speaks twice.

**Share:**

1. “Commit is local; push is…”
2. “If GitHub shows old README, I check…”
3. Whether you are on **local path** or **web fallback**
4. One terminal fear or setup question

**Student output:** Group list of command or setup questions.

---

### 30–40 min: Group Answer

Prepare one shared answer:

```text
git status means...
git add means...
git commit means...
git push means...
Save vs commit vs push means...
Our group path is local / web fallback / mixed.
Our group still needs help with...
```

**Student output:** One group answer.

---

### 40–50 min: Entry Points Check

The teacher checks what the class already understands before explaining.

**Teacher checks:**

1. Who thinks saving a file updates GitHub automatically?
2. Who can explain commit vs push?
3. Who has Git installed and repo cloned?
4. Who needs the web fallback today?
5. Which command or authentication questions appeared across groups?

**Teacher explanation rule:** Explain unclear parts only. If modeling is needed, model only the blocked command sequence.

**Local demo sequence:**

1. Open cloned `studentName-Full-Stack-Web-and-AI-Application` in VS Code
2. Edit `README.md` or `learning-log.md` — add “Lesson 5: local Git practice”
3. Run command sequence in repo folder
4. Verify on GitHub **Commits** tab

**Web fallback:** Edit on github.com; create `lesson-05/notes.md` explaining commit vs push; two meaningful web commits.

---

### 50–75 min: Mission Task

Keep the **Git & GitHub Command Cheatsheet** open while you work.

**Local path:**

- [ ] Edit file
- [ ] `git status` before add
- [ ] `git add` + `git commit` with meaningful message
- [ ] `git push` succeeded
- [ ] GitHub Commits tab updated
- [ ] Terminal screenshot saved

**Web fallback path:**

- [ ] Two web commits with meaningful messages
- [ ] `lesson-05/notes.md` explains commit vs push
- [ ] Note: “Web workflow today — local push later”

**No AI full command paste** during this block (`../shared/ai-use-during-practice.md`).

---

### 75–85 min: Exit Check

Answer individually:

1. What command sequence did you run (or web steps)?
2. What proof shows push worked (or was deferred)?
3. One sentence: save vs commit vs push?
4. What evidence are you submitting?

**Oral check if called:** Explain change file → status → add → commit → push → check GitHub.

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

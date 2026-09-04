# Lesson 9: Essential Git Commands — Complete Git ↔ GitHub Workflow

**Phase:** 0 — Git & GitHub  
**Duration:** 45 minutes  
**Official playlist position:** #2  
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)  
**Student repo:** `YourName-Full-Stack-Web-and-AI-Application-Development`

---

## Lesson Goal

Students already understand the GitHub browser workflow:

```text
Issue
→ Branch / change
→ Commit
→ Pull Request
→ Review
→ Merge
```

They also understand why Git exists, what a commit snapshot is, and the difference between local and remote repositories.

This lesson now connects those two understandings into one complete workflow.

By the end of the lesson, students can perform and explain:

```text
git switch main
→ git pull
→ git switch -c feature-name
→ edit
→ git status
→ git add
→ git commit
→ git push
→ Pull Request
→ Review
→ Merge
→ git switch main
→ git pull
```

The goal is **not command memorization**. The goal is understanding how each command moves work through the local ↔ remote development loop.

---

## Today Only

| Role | What |
|---|---|
| **Video** | **Playlist #2** — [Beginner Git commands you need to know (WITH EXAMPLES)](https://www.youtube.com/watch?v=rE2zRhZdjFU) |
| **Core concept** | Local Git commands drive the same GitHub workflow students already know |
| **Guided practice** | Complete one end-to-end feature workflow from local repository to GitHub and back |
| **Evidence** | Real branch, commit, push, Pull Request, merge, and final synced `main` |
| **Exit Ticket** | Explain the purpose of each command in the complete loop |

---

## Start With the Whole System

Do not begin with a disconnected command list.

First show the complete system:

```text
LOCAL COMPUTER                         GITHUB

main
  │
  │ git pull  <────────────────────── latest remote main
  │
  ├─ git switch -c feature-name
  │
  ├─ edit files
  │
  ├─ git status
  │
  ├─ git add
  │
  ├─ git commit
  │
  └─ git push ───────────────────────→ feature branch
                                         │
                                         ├─ Pull Request
                                         ├─ Review
                                         └─ Merge → main

main
  │
  └─ git pull  <────────────────────── merged remote main
```

Students have already practiced the right-hand side in the browser. Today they learn how the left-hand side connects to it.

---

## Core Commands by Purpose

| Purpose | Command | Meaning |
|---|---|---|
| Inspect current state | `git status` | Show changed, staged, and untracked work |
| Create a local Git repository | `git init` | Start tracking a local project with Git |
| Copy an existing remote repository | `git clone <url>` | Create a local working copy connected to a remote |
| Inspect remotes | `git remote -v` | Show configured remote locations |
| Get newest shared work | `git pull` | Fetch and integrate changes from the tracked remote branch |
| Create and switch branch | `git switch -c feature-name` | Start isolated work on a new branch |
| Switch branches | `git switch main` | Move the working directory to another branch |
| Select changes | `git add <file>` | Stage changes for the next commit |
| Record a snapshot | `git commit -m "message"` | Save staged changes in local history |
| Send branch to GitHub | `git push -u origin feature-name` | Publish the local branch and set its upstream |
| Inspect history | `git log --oneline` | View recorded commits |

Students should be able to answer **why** a command is needed and what changes after it runs.

---

## The Local Three-State Model Still Matters

Within the larger workflow, local edits still move through:

```text
Working Directory
→ Staging Area
→ Commit History
```

That corresponds to:

```text
edit
→ git add
→ git commit
```

But this is only one section of the complete workflow. It does **not** explain synchronization with GitHub by itself.

---

## Two Ways a Project Can Begin

### A. Existing GitHub repository

This will often be the normal course workflow:

```bash
git clone <repository-url>
cd <repository-folder>
```

Then verify:

```bash
git status
git remote -v
```

### B. Existing local project that is not yet a Git repository

```bash
git init
git add .
git commit -m "Initial commit"
```

Then connect a GitHub remote when appropriate:

```bash
git remote add origin <repository-url>
git push -u origin main
```

Students should understand the distinction between `init` and `clone`, not blindly run both.

---

## The Repeatable Daily Workflow

### Step 1 — Start from the newest `main`

```bash
git switch main
git pull
```

Purpose: do not begin new work from an outdated local copy.

### Step 2 — Create a branch for the Issue or task

```bash
git switch -c feature-name
```

Purpose: isolate the new work instead of changing `main` directly.

### Step 3 — Edit and inspect

Make the required change, then:

```bash
git status
```

Purpose: verify exactly what changed before staging anything.

### Step 4 — Stage intentionally

```bash
git add <filename>
```

or, when appropriate:

```bash
git add .
```

Purpose: choose what belongs in the next snapshot.

### Step 5 — Commit the snapshot

```bash
git commit -m "Describe the change"
```

Purpose: record a meaningful local checkpoint.

### Step 6 — Push the branch to GitHub

```bash
git push -u origin feature-name
```

Purpose: publish the local branch so GitHub can host the collaboration step.

### Step 7 — Complete the GitHub workflow

On GitHub:

```text
Open Pull Request
→ Review / discussion
→ Merge
```

This is not new content. Students already learned it in Lessons 6–7.

### Step 8 — Resynchronize local `main`

```bash
git switch main
git pull
```

Purpose: bring the merged remote result back to the local computer before the next task.

---

## 45-Minute Lesson Flow

| Time | Block |
|---|---|
| **0–10 min** | **Skill Warm-up** — watch playlist #2 and identify commands used across the full workflow |
| **10–15 min** | **Retrieve** — rebuild Issue → PR → Review → Merge from memory |
| **15–22 min** | **Model** — teacher demonstrates the complete local ↔ GitHub loop once |
| **22–35 min** | **Guided Practice** — students complete one branch → commit → push → PR → merge → pull cycle |
| **35–41 min** | **Independent Rebuild** — repeat the command sequence with a second tiny change, using minimal prompts |
| **41–45 min** | **Explain + Evidence** — students explain why each step exists and verify local/remote synchronization |

---

## Guided Practice — One Complete Feature Cycle

Use the student's course repository.

### 1. Verify the starting point

```bash
git switch main
git pull
git status
```

### 2. Create a branch

```bash
git switch -c lesson-09-git-workflow
```

### 3. Make a small change

Create or update:

```text
github-foundations/09-complete-git-workflow.md
```

Include:

- the full workflow diagram;
- the difference between `init` and `clone`;
- the purpose of `pull`, `add`, `commit`, and `push`;
- one rule for good branch names;
- one rule for good commit messages.

### 4. Inspect, stage, and commit

```bash
git status
git add github-foundations/09-complete-git-workflow.md
git status
git commit -m "Document complete Git workflow"
git log --oneline
```

### 5. Push

```bash
git push -u origin lesson-09-git-workflow
```

### 6. Use the GitHub workflow already learned

- Open a Pull Request.
- Check the changed files.
- Review the change.
- Merge the Pull Request.

### 7. Close the loop locally

```bash
git switch main
git pull
git status
```

Verify that `09-complete-git-workflow.md` now exists on local `main`.

---

## Independent Rebuild

Without the step-by-step instructions, complete a second tiny workflow:

```text
start on updated main
→ create branch
→ change one file
→ inspect
→ stage
→ commit
→ push
→ PR
→ merge
→ return to main
→ pull
→ verify
```

The teacher should intervene only for a genuine Git error, not because the student forgot the next command.

---

## Exit Ticket

Explain each answer in terms of project state or synchronization:

1. Why should `git pull` normally happen before starting a new task?
2. Why create a feature branch instead of editing `main` directly?
3. What is the difference between `git add` and `git commit`?
4. Where does a commit exist immediately after `git commit` but before `git push`?
5. What does `git push` make possible on GitHub?
6. Why do we `git switch main` and `git pull` after a PR is merged?
7. What is the difference between `git init` and `git clone`?

---

## Mastery Standard

A student has mastered this lesson when they can independently execute and explain:

```text
Issue / task
→ git switch main
→ git pull
→ git switch -c branch-name
→ edit
→ git status
→ git add
→ git commit
→ git push
→ Pull Request
→ Review
→ Merge
→ git switch main
→ git pull
```

They should also be able to diagnose the workflow by asking:

- Which branch am I on?
- Is my local `main` current?
- What changed?
- What is staged?
- What is committed only locally?
- What has been pushed to GitHub?
- Has the PR been merged?
- Has local `main` pulled the merged result?

---

## Common Mistakes

- Running commands as a memorized chant without understanding state
- Starting new work on stale `main`
- Editing `main` directly instead of a feature branch
- Confusing `git add` with `git commit`
- Assuming `git commit` automatically sends work to GitHub
- Assuming `git push` automatically merges work into `main`
- Forgetting to return to `main` and pull after the PR is merged
- Running `git init` inside a repository that was already cloned
- Using vague branch or commit names such as `test`, `stuff`, or `update`

---

## Teacher Notes

This lesson must come **after** students have already learned:

```text
Issues
→ Pull Requests
→ Review
→ Merge
```

Do not artificially restrict the official commands video to only `status → add → commit`. Use it to connect the local Git side to the GitHub-side workflow students already understand.

The three-state model is still useful for explaining staging and commits, but the instructional target is the complete local ↔ remote loop.

Lesson 10 should repeat the same workflow in VS Code rather than introduce a different Git model.

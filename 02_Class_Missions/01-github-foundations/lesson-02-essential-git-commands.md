# Lesson 2: Git States and Essential Commands

**Phase:** 0 — Git & GitHub  
**Duration:** 45 minutes  
**Official playlist position:** #2  
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)  
**Student repo:** `YourName-Full-Stack-Web-and-AI-Application-Development`

---

## Lesson Goal

Students can explain the Git state model and use core commands because they understand **what changes state**, not because they memorized a command list.

By the end of the lesson, students should be able to explain:

```text
Working Directory
→ Staging Area
→ Commit History
```

and connect the model to:

```text
git status → git add → git commit → git log
```

This lesson deliberately separates the **local Git model** from later GitHub synchronization and collaboration skills.

---

## Today Only

| Role | What |
|---|---|
| **Video** | **Playlist #2** — [Beginner Git commands you need to know (WITH EXAMPLES)](https://www.youtube.com/watch?v=rE2zRhZdjFU) |
| **Core concept** | Working Directory → Staging Area → Commit History |
| **Guided practice** | Move one change through the three-state model and verify each transition |
| **Evidence** | Local `02-git-state-model.md` plus a real local commit |
| **Exit Ticket** | Explain a command by naming the state change it causes |

---

## Start With the Model, Not the Commands

A Git command is useful only if you understand what it does to the project state.

```text
WORKING DIRECTORY
Files you are currently editing
        |
        | git add
        v
STAGING AREA
Changes selected for the next snapshot
        |
        | git commit
        v
COMMIT HISTORY
Recorded snapshots of the project
```

`git status` helps you inspect where your changes are.  
`git log` lets you inspect recorded commit history.

### Core Vocabulary

| Term | Meaning |
|---|---|
| **Working Directory** | The files you are currently viewing and editing |
| **Staging Area** | The changes selected to become part of the next commit |
| **Commit History** | The sequence of recorded project snapshots |
| **commit** | A meaningful recorded snapshot |
| **status** | A report showing the current state of tracked changes |

---

## 45-Minute Lesson Flow

| Time | Block |
|---|---|
| **0–10 min** | **Skill Warm-up** — watch playlist #2; listen for commands and what they do |
| **10–14 min** | **Retrieve the Snapshot Idea** — connect back to `commit = snapshot` |
| **14–21 min** | **Build the Three-State Model** — Working Directory → Staging Area → Commit History |
| **21–33 min** | **Guided Practice** — edit → inspect → stage → inspect → commit → inspect history |
| **33–40 min** | **Independent Rebuild** — repeat with a second change without prompts |
| **40–45 min** | **Explain + Evidence** — explain each command through the state model |

---

### 0–10 min: Skill Warm-up

Watch **playlist #2 only**: [Beginner Git commands you need to know (WITH EXAMPLES)](https://www.youtube.com/watch?v=rE2zRhZdjFU).

Record commands you hear, but do **not** try to memorize them yet. For each command, ask:

> What does this command inspect or change?

---

### 10–14 min: Retrieve the Snapshot Idea

Return to the earlier idea:

> **Commit = snapshot.**

Discuss:

1. If a commit is a snapshot, should every unfinished edit automatically become part of it?
2. How might Git let us choose which changes belong in the next snapshot?

This question introduces the purpose of the staging area.

---

### 14–21 min: Build the Three-State Model

Teacher models one file moving through the workflow:

```text
Edit file
↓
git status
↓
git add filename
↓
git status
↓
git commit -m "Describe the change"
↓
git log
```

Students must identify the state after each step.

Key distinction:

- `git status` **inspects** state.
- `git add` moves selected changes toward the next snapshot.
- `git commit` records the staged changes as a snapshot.
- `git log` inspects recorded snapshots.

---

### 21–33 min: Guided Practice

In a teacher-provided practice folder:

1. Run `git init` if the folder is not already a repository.
2. Create or edit one file.
3. Run `git status`. Identify the change in the **Working Directory**.
4. Run `git add <filename>`.
5. Run `git status` again. Identify the change in the **Staging Area**.
6. Run `git commit -m "Add first practice note"`.
7. Run `git log` and locate the new snapshot in **Commit History**.
8. In `02-git-state-model.md`, draw or describe the three-state model and explain what each command did.

If Git is unavailable, use teacher-provided state and command cards and explain every transition rather than merely ordering commands.

---

### 33–40 min: Independent Rebuild

Without looking at the worked example:

1. Make a second change.
2. Decide how to inspect it.
3. Stage it.
4. Verify that it is staged.
5. Commit it with a meaningful message.
6. Find the new snapshot in history.

Then explain the sequence using **states**, not only command names.

---

### 40–45 min: Explain + Evidence

Complete these statements in your own words:

- My edited file begins in the __________.
- `git add` moves selected changes to the __________.
- `git commit` records the staged changes as a __________.
- `git status` helps me __________.
- `git log` helps me __________.

Save `02-git-state-model.md` locally for later upload.

---

## Not Yet the Focus

You may hear commands such as `push`, `pull`, `branch`, or `switch` in the video. They are useful, but they are **not the mastery target of this lesson**.

First master:

```text
edit → inspect → stage → commit → inspect history
```

Later lessons connect this local Git model to GitHub repositories, branches, pull requests, and collaboration.

---

## Common Mistakes

- Memorizing commands without knowing which state they inspect or change
- Thinking `git add` creates a commit
- Thinking every edited file automatically enters the next commit
- Treating `git commit` as ordinary file saving instead of recording a project snapshot
- Using vague commit messages such as `update`
- Publishing passwords, tokens, or other private information

---

## Teacher Notes

Keep asking **“Where is the change now?”** rather than **“What command comes next?”**. The goal is a mental model students can later use to debug Git workflows.

Lesson 3 connects this local Git understanding to the long-term course repository on GitHub.

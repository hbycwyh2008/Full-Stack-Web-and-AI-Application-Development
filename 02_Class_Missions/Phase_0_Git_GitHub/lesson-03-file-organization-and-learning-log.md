# Lesson 3: File Organization and Learning Log

**Your repo:** `cs-learning-log`

---

## Lesson Goal

By the end of this lesson, students should be able to:

1. Organize work into **lesson folders** (`lesson-01/`, `lesson-02/`, `lesson-03/`) instead of dumping files in the repo root
2. Write short `notes.md` files using basic **Markdown** headings and bullets
3. Commit folder changes with meaningful messages and explain why structure matters

---

## Required Resource

| | |
|---|---|
| **Resource name** | Markdown Crash Course (Traversy Media) |
| **Link** | https://www.youtube.com/watch?v=HUBNt18RFbo |
| **Required section** | **0:00–12:00 only** — headings (`#`, `##`) and bullet lists |
| **Why this resource** | Teaches the only Markdown you need today — stop at 12 minutes |

Do **not** watch the full crash course during class.

---

## What to Focus On

While watching **0:00–12:00**, focus **only** on:

1. `#` for main title, `##` for section title
2. `-` for bullet lists
3. How headings make notes easier to read
4. Why organized folders help reviewers find your work
5. One thing you still do not understand

**Required notes:**

```text
# creates a...
## creates a...
A bullet list uses...
Organized folders help because...
One thing I still do not understand is...
```

You do **not** need links, images, code blocks, or tables today.

---

## Optional Support Resources

Use **only if stuck** creating files on GitHub:

1. **GitHub Docs: Quickstart** (create files/folders on web) — https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories

---

## Teacher Reference Only

- Full Traversy Markdown video (after 12:00)
- `05_Resources/Git_GitHub_Unit/student-handouts/git-github-command-cheatsheet.md`

---

## Mini Skill: What You Need Before This Task

1. **Lessons 1–2 complete** — `README.md`, `learning-log.md`, commits on GitHub
2. **Repo root** — top level; `README.md` stays here, lesson notes go in folders
3. **Markdown minimum** (cheatsheet):

```markdown
# Lesson 03 Notes

## Core pattern
create folder → create file → write → commit → check structure

## What I practiced
- one bullet
- another bullet
```

**Target structure you build today:**

```text
cs-learning-log/
├── README.md
├── learning-log.md
├── lesson-01/
│   └── notes.md
├── lesson-02/
│   └── notes.md
└── lesson-03/
    └── notes.md
```

**Core pattern:**

```text
create folder → create file → write content → commit → check structure
```

---

## 90-Minute Class Flow

### 0–10 min: Entry Point Check

**Task — answer individually:**

1. Sketch the target structure above from memory (rough is OK)
2. Where does `README.md` live?
3. Where should Lesson 3 notes live?
4. Why is `lesson-03/notes.md` better than `lesson3notes.txt` in the root?

**Teacher checks:** Who dumps everything in root? Who knows `#` vs plain text?

**Student output:** Sketch + three short answers.

---

### 10–25 min: Individual Learning

Watch **required video 0:00–12:00** and complete **five required notes**.

Practice writing a sample `#` and `##` heading in notebook.

**Student output:** Notes + sample Markdown snippet.

---

### 25–40 min: Talk Round 1

**Each student speaks:**

1. “File organization matters because…”
2. “`#` vs `##` means…”
3. One confusion about folders on GitHub

**Student output:** Pair agrees on one folder-structure question for teacher.

---

### 40–55 min: Entry Points Check / Teacher Diagnosis

**Group shared answer:**

1. One sentence: why **folders** help
2. One sentence: what `#` and `##` do
3. One sentence: where `lesson-03/notes.md` lives
4. Example commit message for adding `lesson-03/notes.md`
5. One question for the teacher

**Teacher explains** unclear parts. **Pattern:** create folder → file → write → commit → check structure.

**`notes.md` template:**

```markdown
# Lesson 03 Notes

## Core pattern
create folder → create file → write → commit → check structure

## Key vocabulary
-

## What I practiced
-

## What was hard
-
```

---

### 55–75 min: Guided Practice / Mission Task

**With support, then less help:**

1. `lesson-01/notes.md` — summarize Lesson 1 → commit
2. `lesson-02/notes.md` — summarize Lesson 2 → commit
3. `lesson-03/notes.md` — today’s notes → commit

Check **Code** tab file tree after each commit.

**Required output:**

- Three lesson folders with non-empty `notes.md`
- At least two meaningful commits for folder work
- Root not cluttered with random note files

---

### 75–85 min: Exit Check

1. What folders did you create?
2. Can you navigate the file tree without search?
3. What screenshot or link are you submitting?

---

### 85–90 min: Submission

Submit evidence (below).

---

## What You Must Submit

1. Screenshot of repo **file tree** (shows lesson folders)
2. One sentence: why does file organization matter?
3. Link to `lesson-03/notes.md`

---

## Success Criteria

1. `lesson-01/`, `lesson-02/`, `lesson-03/` exist with real content in each `notes.md`
2. Commits show folder work with meaningful messages
3. You can explain the core pattern without reading notes verbatim

**Mastery:** Level 3 with checklist; Level 4 — rebuild structure from blank diagram.

---

## Teacher Checkpoints

1. Can students use `#` and `##` correctly in `notes.md`?
2. Can students create a folder on GitHub web UI?
3. Can students find `lesson-03/notes.md` in the file tree?
4. Can students explain why structure matters for portfolio review?
5. Is content original (not copied from partner)?

---

## Common Problems

| Problem | Try first |
|---|---|
| Files only in root | Create `lesson-XX/` folders |
| Empty `notes.md` | Write 3+ sentences |
| Commit `all lessons` | One folder per commit or logical group |

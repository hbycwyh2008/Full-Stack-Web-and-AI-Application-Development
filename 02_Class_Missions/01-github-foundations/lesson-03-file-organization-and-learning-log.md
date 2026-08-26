# Lesson 3: File Organization and Learning Log

**Phase:** 0 — Git & GitHub  
**Duration:** 80 minutes  
**Student repo:** `cs-learning-log`

---

## Lesson Goal

Students organize files into **lesson folders** instead of dumping everything in the repo root, and explain **why structure matters** for evidence and portfolios.

---

## Resources

**Input = GitHub YouTube (or short Markdown intro). Practice = GitHub Skills.**

| Role | Resource | URL | Use in class |
|---|---|---|---|
| **INPUT** | GitHub for Beginners (official playlist) | https://www.youtube.com/playlist?list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f | Warm-up: clip related to writing / collaborating on GitHub if available; else 5–8 min playlist segment |
| **INPUT (alt)** | Markdown Crash Course (Traversy) — headings/lists only | https://www.youtube.com/watch?v=HUBNt18RFbo | Use only if no matching GitHub YouTube Markdown clip (5–10 min) |
| **PRACTICE** | GitHub Skills: Communicate using Markdown | https://github.com/skills/communicate-using-markdown | Guided Practice: interactive Markdown steps |
| Reference | GitHub Docs: Quickstart for repositories | https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories | Only if stuck creating files/folders |

---

## Core Vocabulary

| Term | Definition |
|---|---|
| **File structure** | How folders and files are arranged |
| **Root** | Top level of repo (`README.md` stays here) |
| **Lesson folder** | `lesson-01/`, `lesson-02/`, etc. |
| **notes.md** | Short capture of pattern, vocabulary, struggles |

---

## Core Pattern

```text
create folder → create file → write content → commit → check structure
```

---

## Mastery Target

| After lesson | Target |
|---|---|
| Typical | Level 3 |
| Stretch | Level 4 — rebuild folder structure from blank sketch |

---

## Target Structure

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

---

## 80-Minute Lesson Flow

| Time | Block |
|---|---|
| 0–20 min | Skill Warm-up |
| 20–30 min | Entry Check |
| 30–34 min | Talk Robin Round 1 |
| 34–45 min | Teacher Pattern Explanation |
| 45–60 min | Guided Practice |
| 60–72 min | Independent Rebuild |
| 72–76 min | Talk Robin Round 2 |
| 76–80 min | Exit Evidence |

---

### 0–20 min: Skill Warm-up

**Side-by-side repos:**

- Messy: 15 files in root
- Organized: `lesson-XX/notes.md` tree

Students list **three reasons** reviewers prefer the organized repo.

**Optional:** Traversy Markdown segment — `#`, `##`, bullets.

---

### 20–30 min: Entry Check

1. Sketch target structure for `cs-learning-log` (Lesson 3).
2. Where does `README.md` live?
3. Where does Lesson 3 notes live?
4. Why is `lesson-03/notes.md` better than `lesson3notes.md` in root?
5. Commit message for creating `lesson-03/notes.md`?

---

### 30–34 min: Talk Robin Round 1

- **A:** “File organization matters because…”
- **B:** “A messy repo problem is…”
- **Shared:** One question about GitHub folders.

---

### 34–45 min: Teacher Pattern Explanation

**Why organization matters:**

- Teachers find evidence quickly
- Each lesson has a clear home
- Commits map to lesson work
- Full course portfolio uses same habit (`student-portfolio` later)

**Pattern:**

1. Create `lesson-01/` → add `notes.md` → commit
2. Repeat for `lesson-02/`, `lesson-03/`
3. View **Code** tab file tree
4. One folder per commit or logical grouping — no `all lessons` commit

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

### 45–60 min: Guided Practice

1. Create `lesson-01/notes.md` — summarize Lesson 1 pattern → commit
2. Create `lesson-02/notes.md` → commit
3. Start `lesson-03/notes.md` during guided time → commit

Teacher displays file tree on projector after each commit.

---

### 60–72 min: Independent Rebuild

**Checklist:**

- [ ] `lesson-01/`, `lesson-02/`, `lesson-03/` with `notes.md`
- [ ] Each `notes.md` has real content (not empty)
- [ ] At least two meaningful commits for folder work
- [ ] Root not cluttered with duplicate note files
- [ ] Can navigate tree without search

---

### 72–76 min: Talk Robin Round 2

- **A:** “Today’s folder pattern is…”
- **B:** “My `lesson-03/notes.md` shows I learned…”
- **Shared:** Exit Evidence checklist.

---

### 76–80 min: Exit Evidence

1. Screenshot of repo **file tree**
2. One sentence: **Why does file organization matter?**
3. Link to `lesson-03/notes.md`

---

## Mastery Check

| Level | Indicator |
|---|---|
| 2 | Explains tree while looking |
| 3 | Folder + notes + commits with checklist |
| 4 | Rebuilds structure on blank diagram |
| 5 | Helps peer find misplaced file |

---

## Common Mistakes

- `lesson01notes.md` in root
- Empty `notes.md` for credit
- Commit: `all lessons`
- Deleting `learning-log.md` when adding folders

---

## Optional Extension

- `lesson-03/screenshots/` with one README screenshot
- Update root README with “Repository structure” section

---

## Teacher Notes

- Oral cold call: “Which commit created `lesson-02/`?”
- Lesson 4 adds `lesson-04/` — students should not delete prior folders.

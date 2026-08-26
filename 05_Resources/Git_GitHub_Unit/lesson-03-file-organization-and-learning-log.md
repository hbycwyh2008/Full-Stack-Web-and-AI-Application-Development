# Lesson 3: File Organization and Learning Log

**Duration:** 45 minutes  
**Target mastery after lesson:** Level 3

---

## 1. Lesson Goal

Students organize project files into **lesson folders** instead of dumping files in the repo root, and explain **why structure matters** for portfolios and evidence.

---

## 2. Resources (Selected)

| Resource | URL | Use |
|---|---|---|
| GitHub Docs: Quickstart for repositories | https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories | Browse files / create files on web |
| Markdown Crash Course (Traversy) | https://www.youtube.com/watch?v=HUBNt18RFbo | Warm-up: headings and lists (5–10 min segment) |

Handouts: cheatsheet Markdown section

---

## 3. Core Vocabulary

| Term | Definition |
|---|---|
| **File structure** | How folders and files are arranged in a repo |
| **Root** | Top level of repo (`README.md` lives here) |
| **Lesson folder** | `lesson-01/`, `lesson-02/` — one folder per class lesson |
| **Notes file** | `notes.md` — short capture of concepts and practice |

---

## 4. Core Pattern

```text
create folder → create file → write content → commit → check structure
```

---

## 5. 80-Minute Lesson Flow

Standard 8-block flow.

---

## 6. Skill Warm-up (0–20 min)

**Task:** Teacher shows two repos side by side:

- Messy: 15 files in root
- Organized: `lesson-XX/notes.md` structure

Students: 3 bullets — which repo would a college reviewer prefer? Why?

Optional: Traversy Markdown segment — `#` and `##` and lists.

---

## 7. Entry Check (20–30 min)

1. Draw or list the target structure for `cs-learning-log` (Lesson 3 handout structure).
2. Where should `README.md` live?
3. Where should Lesson 3 notes live?
4. Why is `notes.md` in a folder better than `lesson3notes.md` in root?
5. What commit message would you use after creating `lesson-03/notes.md`?

---

## 8. Talk Robin Round 1 (30–34 min)

- A: “File organization matters because…”
- B: “One messy repo problem is…”
- Shared: One question about folders on GitHub.

---

## 9. Teacher Pattern Explanation (34–45 min)

### Target structure (add to existing repo)

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

**Why organization matters:**

- Teachers and reviewers find evidence quickly
- Each lesson has a clear home
- Commit history maps to lesson folders
- Full course portfolio (`student-portfolio`) uses same habit

### Pattern

1. Create folder `lesson-01/` (if missing)
2. Add `notes.md` with 3+ sentences: pattern, vocabulary, one struggle
3. Commit: `Add lesson-01 notes on first repo workflow`
4. Repeat for `lesson-02/`, `lesson-03/`
5. View repo **Code** tab — verify tree

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

## 10. Guided Practice (45–60 min)

1. Create `lesson-01/notes.md` — summarize Lesson 1 pattern
2. Commit with meaningful message
3. Create `lesson-02/notes.md`
4. Commit
5. Start `lesson-03/notes.md` during guided section

Teacher checks file tree on screen.

---

## 11. Independent Rebuild (60–72 min)

**Checklist:**

- [ ] Folders `lesson-01/`, `lesson-02/`, `lesson-03/` exist
- [ ] Each has `notes.md` with real content (not empty)
- [ ] At least **two commits** for folder/file work
- [ ] Root not cluttered with duplicate note files
- [ ] Can navigate structure without searching

**Level 3:** complete with checklist, no copying partner’s notes text.

---

## 12. Talk Robin Round 2 (72–76 min)

- A: “The folder pattern today is…”
- B: “My `lesson-03/notes.md` proves I learned…”
- Shared: Exit Evidence checklist.

---

## 13. Exit Evidence (76–80 min)

1. Screenshot of repo **file tree** (folders visible)
2. One sentence: **Why does file organization matter?**
3. Link to `lesson-03/notes.md`

---

## 14. Mastery Check

| Level | Indicator |
|---|---|
| 2 | Explains tree while looking |
| 3 | Creates folder + notes + commit with checklist |
| 4 | Rebuilds structure on blank repo sketch |
| 5 | Helps peer find misplaced file |

---

## 15. Common Mistakes

- `lesson01notes.md` in root instead of folder
- Empty `notes.md` committed for credit
- One commit: `all lessons`
- Deleting `learning-log.md` when adding folders

---

## 16. Optional Extension

- Add `lesson-03/screenshots/` subfolder with one README screenshot
- Update root README with “Repository structure” section linking to folders

---

## 17. Homework (Optional)

- Polish Lesson 1–2 notes if thin
- Preview Oh My Git for Lesson 4

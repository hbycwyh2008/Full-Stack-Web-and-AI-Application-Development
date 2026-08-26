# Lesson 5: Local Git with VS Code and Terminal

**Duration:** 45 minutes  
**Target mastery after lesson:** Level 3 (local path) or Level 2–3 (web fallback)

---

## 1. Lesson Goal

Students connect **GitHub web workflow** to **local development**: change a file locally → `git status` → `git add` → `git commit` → `git push` → verify on GitHub.

**Only run full local lesson if devices, accounts, and Git are ready.** Otherwise use **Web Fallback** below.

---

## 2. Resources (Selected)

| Resource | URL | Use |
|---|---|---|
| GitHub Docs: Quickstart for repositories | https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories | Clone / edit reference |
| GitHub for Beginners Playlist | https://www.youtube.com/playlist?list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f | Optional: local setup clip |

Handouts: `git-github-command-cheatsheet.md`

---

## 3. Core Vocabulary

| Term | Definition |
|---|---|
| **Local** | On your computer |
| **Remote** | On GitHub (server) |
| **Stage (`git add`)** | Mark changes ready to commit |
| **Push** | Send local commits to GitHub |
| **Working directory** | Folder where you edit files |

---

## 4. Core Pattern

```text
change file → git status → git add . → git commit -m "message" → git push → check GitHub
```

### Command meanings

| Command | Meaning |
|---|---|
| `git status` | Check current state — what changed? |
| `git add .` | Prepare all changes for commit |
| `git commit -m "..."` | Record snapshot **locally** |
| `git push` | Upload commits to GitHub |

---

## 5. 80-Minute Lesson Flow

Standard 8-block flow.

**Pre-class:** Verify Git installed, repo cloned, auth works for at least sample students.

---

## 6. Skill Warm-up (0–20 min)

**Local path:** Teacher demo terminal in repo folder:

```bash
git status
```

Students predict what happens after editing a file without commit.

**Web fallback:** Review cheatsheet “Saving vs Committing vs Pushing” table — 10 min discussion.

---

## 7. Entry Check (20–30 min)

1. What does `git status` tell you?
2. What is the difference between **commit** and **push**?
3. If you save a file locally but don’t push, will GitHub update?
4. What folder must you be inside to run git commands?
5. Write a commit message for “updated learning-log Lesson 5 section.”

---

## 8. Talk Robin Round 1 (30–34 min)

- A: “Commit is local; push is…”
- B: “If GitHub shows old README, I would check…”
- Shared: One fear about terminal (normalize debugging).

---

## 9. Teacher Pattern Explanation (34–45 min)

### Full demo (local)

1. Open `cs-learning-log` in VS Code (or clone fresh demo)
2. Edit `README.md` or `learning-log.md` — add “Lesson 5: local Git practice” line
3. Terminal in repo root:

```bash
git status
git add .
git commit -m "Add Lesson 5 note on local Git workflow"
git push
```

4. Browser → GitHub → Commits — show new commit appeared

**Stress:** Save ≠ commit ≠ push.

### Web Fallback (same pattern, web tools)

1. Edit file on github.com
2. Commit on web (no local push)
3. Discuss what **push** would add when local is ready
4. Students write `lesson-05/notes.md` on difference — commit on web

---

## 10. Guided Practice (45–60 min)

**Local:** Each student clones or pulls, edits, runs full command sequence with teacher script.

**Web fallback:** Edit `learning-log.md` + `lesson-05/notes.md` on web with two commits.

Teacher + TA for auth errors.

---

## 11. Independent Rebuild (60–72 min)

**Local checklist:**

- [ ] Edited `README.md` or `learning-log.md`
- [ ] `git status` shows changes before add
- [ ] `git add` and `git commit` with meaningful message
- [ ] `git push` succeeded
- [ ] GitHub Commits tab shows new entry
- [ ] Terminal screenshot captured

**Web fallback checklist:**

- [ ] Two web commits with meaningful messages
- [ ] `lesson-05/notes.md` explains commit vs push
- [ ] Note: “Local push pending — web workflow used today”

---

## 12. Talk Robin Round 2 (72–76 min)

- A: “The local Git pattern in order is…”
- B: “My push proof is…”
- Shared: Exit Evidence.

---

## 13. Exit Evidence (76–80 min)

**Local:**

1. Terminal screenshot (`status`, `commit`, `push` visible or sequence)
2. GitHub screenshot showing commit after push
3. One sentence: **Difference between commit and push?**

**Web fallback:**

1. Web commit screenshot(s)
2. `lesson-05/notes.md` link
3. Same sentence + note on web-only today

---

## 14. Mastery Check

| Level | Indicator |
|---|---|
| 1 | Runs commands with command list on desk |
| 3 | Full sequence with cheatsheet |
| 4 | Sequence without cheatsheet |
| 5 | Debugs peer `nothing to commit` or auth error |

---

## 15. Common Mistakes

- Not `cd` into repo — `fatal: not a git repository`
- Forgot `git add` before commit
- Committed locally but never pushed
- PAT/auth failure on push — have fix doc ready

---

## 16. Optional Extension

- `git log --oneline` — see short history in terminal
- VS Code Source Control UI instead of terminal (same concepts)

---

## 17. Homework (Optional)

- Practice clone + push from home if auth works
- Preview Lesson 6 mastery questions

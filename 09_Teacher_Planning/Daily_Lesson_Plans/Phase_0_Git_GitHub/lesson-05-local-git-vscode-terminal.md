# Lesson 5: Local Git with VS Code and Terminal

**Phase:** 0 — Git & GitHub  
**Duration:** 45 minutes  
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)  
**Student repo:** `cs-learning-log`

---

## Lesson Goal

Students connect **GitHub web workflow** to **local development**: edit locally → `git status` → `git add` → `git commit` → `git push` → verify on GitHub.

**Run full local lesson only if devices, Git, and auth are ready.** Otherwise use **GitHub Web Fallback** (documented below).

---

## Resources

| Resource | URL | Use in class |
|---|---|---|
| GitHub Docs: Quickstart for repositories | https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories | Clone/edit reference |
| GitHub for Beginners Playlist | https://www.youtube.com/playlist?list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f | Optional: local setup clip |

**Handout:** `05_Resources/Git_GitHub_Unit/student-handouts/git-github-command-cheatsheet.md`

---

## Core Vocabulary

| Term | Definition |
|---|---|
| **Local** | On your computer |
| **Remote** | On GitHub |
| **Stage (`git add`)** | Prepare changes for commit |
| **Push** | Upload local commits to GitHub |
| **Working directory** | Folder where you edit files |

---

## Core Pattern

```text
change file → git status → git add . → git commit -m "message" → git push → check GitHub
```

### Command meanings

| Command | Meaning |
|---|---|
| `git status` | **Check current state** — what changed? |
| `git add .` | **Prepare changes** for commit |
| `git commit -m "..."` | **Record local version** |
| `git push` | **Upload commits** to GitHub |

---

## Mastery Target

| After lesson | Target |
|---|---|
| Local path | Level 3 (with checklist) |
| Web fallback | Level 2–3 |
| Stretch | Level 4 — full sequence without cheatsheet |

---

## 45-Minute Lesson Flow

| Time | Block |
|---|---|
| 0–5 min | Skill Warm-up (INPUT) |
| 5–9 min | Talk Robin 1 |
| 9–14 min | Entry Check |
| 14–19 min | Core Pattern |
| 19–30 min | Guided Practice |
| 30–40 min | Independent Rebuild |
| 40–45 min | Talk Robin 2 + Exit Evidence |

---

### 0–5 min: Skill Warm-up (INPUT)

**Local path:** Teacher demos `git status` in repo folder. Students predict what happens after editing a file without commit.

**Web fallback:** Review table — **Save vs Commit vs Push** (10 min discussion + cheatsheet).

**Stress:** Saving in editor ≠ commit ≠ push.

---

### 5–9 min: Talk Robin 1

- **A:** “Commit is local; push is…”
- **B:** “If GitHub shows old README, I would check…”
- **Shared:** One fear about terminal (normalize debugging).

---

### 9–14 min: Entry Check

1. What does `git status` tell you?
2. What is the difference between **commit** and **push**?
3. If you save locally but don’t push, does GitHub update?
4. What folder must you be in to run git commands?
5. Commit message for “updated learning-log Lesson 5 section.”

---

### 14–19 min: Core Pattern

**Local demo:**

1. Open `cs-learning-log` in VS Code (clone if needed)
2. Edit `README.md` or `learning-log.md` — add “Lesson 5: local Git practice”
3. Terminal in repo root:

```bash
git status
git add .
git commit -m "Add Lesson 5 note on local Git workflow"
git push
```

4. Browser → GitHub → **Commits** — show new commit

**Web fallback explanation:**

- Same **pattern** using github.com editor
- Commit on web = recorded on GitHub directly
- **Push** = what local workflow adds when editing on computer
- Students write `lesson-05/notes.md` explaining difference

---

### 19–30 min: Guided Practice

**Local:** Each student clone/pull → edit → full command sequence with teacher script on slide.

**Web fallback:** Edit `learning-log.md` + create `lesson-05/notes.md` with two web commits.

Auth station for PAT / GitHub Desktop failures.

---

### 30–40 min: Independent Rebuild

**Local checklist:**

- [ ] Edited `README.md` or `learning-log.md`
- [ ] `git status` before add
- [ ] `git add` + `git commit` with meaningful message
- [ ] `git push` succeeded
- [ ] GitHub Commits tab updated
- [ ] Terminal screenshot captured

**Web fallback checklist:**

- [ ] Two web commits with meaningful messages
- [ ] `lesson-05/notes.md` explains commit vs push
- [ ] Note: “Local push deferred — web workflow used today”

---

### 40–45 min: Talk Robin 2 + Exit Evidence

- **A:** “Local Git pattern in order is…”
- **B:** “My proof that push worked is…”
- **Shared:** Exit Evidence.

---


---

## Mastery Check

| Level | Indicator |
|---|---|
| 1 | Runs commands with script on desk |
| 3 | Full sequence with cheatsheet |
| 4 | Sequence without cheatsheet |
| 5 | Debugs peer “nothing to commit” or auth error |

---

## Common Mistakes

- Not in repo folder — `fatal: not a git repository`
- Forgot `git add` before commit
- Committed locally but never pushed
- Auth failure on push — have PAT guide ready

---

## Optional Extension

- `git log --oneline` in terminal
- VS Code Source Control UI (same concepts)

---

## Teacher Notes

- Pre-class: `git --version`, sample clone test, PAT doc printed
- Pair for auth only during Guided — Independent must be own push or own web commits
- Lesson 6 does not require local Git if web fallback used — mastery check still applies to concepts

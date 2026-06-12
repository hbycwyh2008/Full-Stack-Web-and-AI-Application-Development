# Lesson 5: Local Git with VS Code and Terminal

**Your repo:** `cs-learning-log`

---

## Today’s Mission

You will connect **editing on your computer** to **GitHub** using: change file → `git status` → `git add` → `git commit` → `git push` → check GitHub.

If your class uses **web fallback** (devices not ready), you will do the same **pattern** on github.com and write `lesson-05/notes.md` explaining commit vs push.

---

## Why This Matters

Saving a file on your laptop does **not** update GitHub until you **commit** and **push**. Developers use this workflow daily. You need it for Next.js and FastAPI projects later.

---

## Resources

| Resource | URL | Your use |
|---|---|---|
| GitHub Docs: Quickstart | https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories | Clone reference |
| GitHub for Beginners Playlist | https://www.youtube.com/playlist?list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f | Optional local setup clip |

**Cheatsheet:** `git-github-unit/student-handouts/git-github-command-cheatsheet.md` (if your teacher shares it)

---

## Core Vocabulary

| Word | Meaning |
|---|---|
| **Local** | On your computer |
| **Remote** | On GitHub |
| **Stage (`git add`)** | Prepare changes for commit |
| **Push** | Upload commits to GitHub |

---

## Core Pattern

```text
change file → git status → git add . → git commit -m "message" → git push → check GitHub
```

**What each command does for you:**

| Command | You use it to… |
|---|---|
| `git status` | **Check current state** — what changed? |
| `git add .` | **Prepare changes** for commit |
| `git commit -m "..."` | **Record local version** |
| `git push` | **Upload commits** to GitHub |

**Remember:** Save in editor ≠ commit ≠ push.

---

## Mastery Target

| Path | Level |
|---|---|
| Local Git | Level 3 with checklist |
| Web fallback | Level 2–3 |
| Stretch | Level 4 — full sequence without cheatsheet |

---

## Class Flow

### 0–20 min: Skill Warm-up

**Local path:** Watch demo of `git status`. Predict what happens after you edit a file without commit.

**Web fallback:** Read Save vs Commit vs Push table with partner.

**You write:** one sentence difference between commit and push (draft for Exit Evidence).

---

### 20–30 min: Entry Check

1. What does `git status` tell you?
2. Difference between **commit** and **push**?
3. If you save locally but don’t push, does GitHub update?
4. What folder must you be in for git commands?
5. Good commit message for “updated learning-log Lesson 5”?

---

### 30–34 min: Talk Robin Round 1

- **You:** “Commit is local; push is…”
- **Partner:** “If GitHub shows old README, I check…”
- **Together:** One terminal fear to normalize.

---

### 34–45 min: Core Pattern Explanation

**Local demo you follow:**

1. Open `cs-learning-log` in VS Code (clone if needed)
2. Edit `README.md` or `learning-log.md` — add “Lesson 5: local Git practice”
3. In terminal **inside repo folder:**

```bash
git status
git add .
git commit -m "Add Lesson 5 note on local Git workflow"
git push
```

4. Browser → GitHub → **Commits** — see new commit

**Web fallback you follow:**

- Edit files on github.com → commit twice (meaningful messages)
- You will write `lesson-05/notes.md` explaining what **push** would do when local is ready

---

### 45–60 min: Guided Practice

**Local:** You clone/pull → edit → run full command sequence.

**Web:** You edit `learning-log.md` + create `lesson-05/notes.md` with two web commits.

Ask teacher if auth fails — do not skip evidence.

---

### 60–72 min: Independent Rebuild

**Local checklist:**

- [ ] Edited `README.md` or `learning-log.md`
- [ ] `git status` before add
- [ ] `git add` + `git commit` with meaningful message
- [ ] `git push` succeeded
- [ ] GitHub Commits tab updated
- [ ] Terminal screenshot saved

**Web fallback checklist:**

- [ ] Two web commits with meaningful messages
- [ ] `lesson-05/notes.md` explains commit vs push
- [ ] Note: “Web workflow today — local push later”

**Do not use AI for full command sequence paste during this block.**

---

### 72–76 min: Talk Robin Round 2

- **You:** “Local Git pattern in order is…”
- **Partner:** “My proof push worked is…”
- **Together:** Exit Evidence.

---

### 76–80 min: Exit Evidence

**Local you submit:**

1. Terminal screenshot (status/add/commit/push)
2. GitHub screenshot after push
3. One sentence: difference between **commit** and **push**?

**Web you submit:**

1. Web commit screenshot(s)
2. Link to `lesson-05/notes.md`
3. Same sentence + note that push was deferred

---

## What You Must Submit

| Path | Evidence |
|---|---|
| Local | Terminal screenshot + GitHub screenshot + one sentence |
| Web | Web commit screenshot(s) + `lesson-05/notes.md` + one sentence |

---

## Mastery Check

| Level | You… |
|---|---|
| **Level 3** | Full sequence with checklist |
| **Level 4** | Sequence without cheatsheet |
| **Level 5** | Debug peer “nothing to commit” or auth error (hints) |

---

## Common Problems

| Problem | Try first |
|---|---|
| `not a git repository` | `cd` into your repo folder |
| `nothing to commit` | Did you `git add`? |
| GitHub unchanged | Did you `git push`? |
| Auth failed on push | Ask teacher — PAT or GitHub Desktop |

---

## Optional Extension

- `git log --oneline` in terminal
- VS Code Source Control UI (same ideas)

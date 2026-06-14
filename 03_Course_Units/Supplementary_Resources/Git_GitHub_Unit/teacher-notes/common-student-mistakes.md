# Common Student Mistakes — Git & GitHub Unit

Use this during Guided Practice and Independent Rebuild. Name mistakes calmly — debugging is part of learning.

---

## Course Culture Mistakes

| Mistake | What it looks like | Teacher response |
|---|---|---|
| “I watched the video, so I’m done” | No commits, no rebuild | Point to mastery levels: watching = Level 0 |
| Copy-paste README from AI with no edits | Generic text, student cannot explain | Require oral explanation; student must revise in own words |
| No evidence submitted | Repo empty or link not shared | Exit Evidence is required every lesson |
| “The teacher will fix it” | No debugging attempt before asking | Ask: “What did you try? What did the error say?” |

---

## GitHub Web Mistakes

| Mistake | What it looks like | Fix |
|---|---|---|
| Confusing course repo with student repo | Commits to teacher’s materials repo | Re-teach: **your** `cs-learning-log` only |
| Empty or vague commit messages | `update`, `asdf`, `final` | Show good/bad examples (Lesson 2); require rewrite before merge |
| Editing without committing | File changed on GitHub but no history entry | Show Commits tab; commit is the saved version |
| Wrong repo name | `CS-learning-log`, random names | Standardize `cs-learning-log` |
| Private repo when class needs review | Teacher cannot see evidence | Set public or add teacher as collaborator |

---

## README Mistakes

| Mistake | What it looks like | Fix |
|---|---|---|
| README is one line | No structure | Use Lesson 1 template sections |
| README never updated | Stale goals after 3 lessons | Lesson 2 task: improve README |
| Broken Markdown | Headers not rendering | Preview tab; teach `#` and `##` |

---

## File Organization Mistakes

| Mistake | What it looks like | Fix |
|---|---|---|
| Everything in root | 20 loose `.md` files | Lesson 3 folder pattern |
| Duplicate files | `notes.md`, `notes2.md`, `final-notes.md` | One `lesson-XX/notes.md` per lesson |
| Empty notes files | Committed empty files for “credit” | Require 3+ sentences of real content |

---

## Commit History Mistakes

| Mistake | What it looks like | Fix |
|---|---|---|
| One giant commit at end | Single “done” commit | Multiple small commits per lesson |
| Committing secrets | `.env`, API keys in repo | Teach `.gitignore` preview; delete secret + new commit |
| “I saved but teacher sees nothing” | Local save only, no push (Lesson 5) | `git push`; GitHub web ≠ local until push |

---

## Local Git Mistakes (Lesson 5)

| Mistake | What it looks like | Fix |
|---|---|---|
| `git add` forgotten | `git commit` says nothing to commit | `git status` first |
| Commit in wrong folder | Not a git repo | `cd` into repo; check for `.git` |
| Auth failed on push | 403 / authentication failed | PAT guide; GitHub Desktop alternative |
| Typo in commit message | Regret after commit | Teach amend only if teacher allows; otherwise new commit with fix |

---

## Oh My Git Mistakes (Lesson 4)

| Mistake | What it looks like | Fix |
|---|---|---|
| Playing all levels including branches | Overwhelmed, off unit scope | Only intro levels listed in Lesson 4 |
| “Game = done, no GitHub work” | Screenshot only, no `lesson-04/notes.md` | Require reflection + commit |
| No connection to real history | Fun but no transfer | Talk Robin: “How is the game like your Commits tab?” |

---

## Oral Explanation Mistakes

| Mistake | What it looks like | Response |
|---|---|---|
| Reads README word-for-word | Memorized, not understood | Ask “What would you change if I removed line 3?” |
| “AI wrote it” | Cannot explain commit | Student must revise and re-explain |
| Vague answers | “GitHub stores code” | Ask for one specific example from their repo |

---

## Quick Interventions

1. **Stop class for 2 minutes** — show one student’s good commit message on screen.
2. **Pair debug** — student with Level 4 helps student stuck at Level 1 (not copy solutions).
3. **Evidence audit** — mid-lesson: “Show me your Commits tab right now.”

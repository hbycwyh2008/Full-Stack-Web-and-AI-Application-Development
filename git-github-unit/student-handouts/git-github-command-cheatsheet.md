# Git & GitHub Command Cheatsheet

**Beginner unit scope only.** Branches and pull requests are **not** required in this unit.

---

## GitHub Website (Web Workflow)

| Action | Where |
|---|---|
| Create repository | GitHub → **+** → New repository |
| Edit file | Repo → file → pencil icon **Edit** |
| Commit on web | Edit → **Commit changes** → write message → Commit |
| View history | Repo → **Commits** (or History on file) |
| View repo structure | Repo **Code** tab — browse folders |

---

## Local Git (Lesson 5+)

Run commands in terminal **inside your repo folder**.

| Command | What it does |
|---|---|
| `git status` | Shows changed files — **check state first** |
| `git add .` | Stage all changes — **prepare** to commit |
| `git add filename.md` | Stage one file |
| `git commit -m "message"` | **Record** a snapshot locally |
| `git push` | **Upload** commits to GitHub |
| `git log --oneline` | Short list of recent commits (optional) |

### Typical sequence

```bash
git status
git add .
git commit -m "Add lesson-03 notes on file organization"
git push
```

Then open GitHub in browser → **Commits** tab → verify.

---

## Saving vs Committing vs Pushing

| Action | Where | What it means |
|---|---|---|
| **Save** (Ctrl/Cmd+S) | Your editor | File changed on **your computer only** |
| **Commit** | Git (local or web) | **Recorded version** with message in history |
| **Push** | Git → GitHub | Sends local commits to **GitHub** so teacher can see |

**Saving is not committing.** **Committing on web is not the same as local commit + push.**

---

## Good Commit Messages (Examples)

```text
Add learning expectations to README
Add lesson-02 notes on commit messages
Fix typo in course goals section
Create lesson-03 folder and notes
```

## Bad Commit Messages (Avoid)

```text
update
asdf
final
change
done
```

**Rule:** Message should describe **what changed**, not your mood.

---

## Markdown Quick Reference

```markdown
# Heading 1
## Heading 2
- bullet list
**bold**
[link text](https://example.com)
```

Preview on GitHub when editing `.md` files.

---

## Oh My Git! (Lesson 4)

Play **selected intro levels only** — see Lesson 4 handout. Game explains ideas; **GitHub commits** are your real evidence.

---

## Never Commit

```text
.env
API keys
passwords
node_modules/
```

Ask teacher before uploading anything with real student or school private data.

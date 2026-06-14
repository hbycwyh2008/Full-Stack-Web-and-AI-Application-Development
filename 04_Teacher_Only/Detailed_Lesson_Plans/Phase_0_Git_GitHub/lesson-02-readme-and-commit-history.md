# Lesson 2: README and Commit History

**Phase:** 0 — Git & GitHub  
**Duration:** 80 minutes  
**Student repo:** `cs-learning-log`

---

## Lesson Goal

Students understand **commit history as learning evidence**, improve `README.md`, create `learning-log.md` with Lesson 1 and Lesson 2 reflections, and practice **meaningful commit messages**.

---

## Resources

| Resource | URL | Use in class |
|---|---|---|
| GitHub for Beginners Playlist | https://www.youtube.com/playlist?list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f | Warm-up: **one** clip on commits or history (5–8 min) |
| A brief introduction to Git for beginners | https://www.youtube.com/watch?v=r8jQ9hVA2qs | Optional: commit section review |
| GitHub Docs: Hello World | https://docs.github.com/en/get-started/start-your-journey/hello-world | Commit step reference |

**Handouts:** `05_Resources/Git_GitHub_Unit/student-handouts/git-github-command-cheatsheet.md` (good/bad messages) if available

---

## Core Vocabulary

| Term | Definition |
|---|---|
| **Commit message** | Short description of what changed in that snapshot |
| **Commit history** | Ordered list of commits — your learning timeline |
| **Learning log** | Running record of what you did, learned, and struggled with |
| **Meaningful commit** | Message a teacher or future you can understand without opening the file |

---

## Core Pattern

```text
small change → meaningful commit → visible history
```

---

## Mastery Target

| After lesson | Target |
|---|---|
| Typical | Level 2–3 |
| Stretch | Level 4 commit messages without examples on desk |

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

**Option A:** 5–8 min clip on commits from playlist.

**Option B:** Teacher shows two repos on screen:

- Repo A: one commit, message `update`
- Repo B: six commits, clear messages

Students write: **Which history shows learning? Why?**

Introduce good vs bad commit messages (preview Pattern Explanation).

---

### 20–30 min: Entry Check

1. What is a **commit** in your own words?
2. Where on GitHub do you see **commit history**?
3. Why is `asdf` a bad commit message?
4. What did your Lesson 1 commit change?
5. Write one **good** commit message for: “added learning goals to README.”

---

### 30–34 min: Talk Robin Round 1

- **A:** “Commit history is learning evidence because…”
- **B:** “A good commit message I wrote or saw is…”
- **Shared:** One confusion about commits vs saving.

---

### 34–45 min: Teacher Pattern Explanation

#### Commit messages

**Good examples:**

```text
Add learning expectations
Add first learning log
Update README with course goals
Fix typo in project description
```

**Bad examples:**

```text
update
asdf
final
change
```

**Rule:** Describe **what changed**, not your mood.

#### Pattern today

1. Open `cs-learning-log` → **Commits** tab — read past messages aloud (1–2 students)
2. Improve `README.md` (goals, formatting, personal detail)
3. Create `learning-log.md` at repo root
4. Add **Lesson 1** and **Lesson 2** reflection sections
5. **Separate commits** for README vs learning log (small change → multiple commits)

**`learning-log.md` starter:**

```markdown
# Learning Log

## Lesson 1 Reflection
- What I did:
- What I learned:
- What was hard:

## Lesson 2 Reflection
- What I did:
- What I learned:
- What was hard:
```

---

### 45–60 min: Guided Practice

1. Class opens Commits tab together
2. Edit README → commit: `Update README with personal learning goals`
3. Create `learning-log.md` → commit: `Add learning log with Lesson 1 reflection`
4. Add Lesson 2 section → commit: `Add Lesson 2 reflection to learning log`
5. Show history growing — each commit = one story beat

---

### 60–72 min: Independent Rebuild

**Checklist:**

- [ ] README visibly improved from Lesson 1
- [ ] `learning-log.md` exists with **real** Lesson 1 and Lesson 2 reflections (3+ sentences each section)
- [ ] At least **two new commits** with meaningful messages
- [ ] Commits tab shows progression
- [ ] Can identify which commit changed which file

---

### 72–76 min: Talk Robin Round 2

- **A:** “Small change → meaningful commit means…”
- **B:** “My best commit message today is ___ because ___.”
- **Shared:** Exit Evidence ready?

---

### 76–80 min: Exit Evidence

1. Link or screenshot of `learning-log.md`
2. Screenshot of **Commits** tab (multiple messages visible)
3. One sentence: **Why are good commit messages important?**

---

## Mastery Check

| Level | Indicator |
|---|---|
| 1 | Adds files with teacher steps visible |
| 2 | Explains own commit while looking at history |
| 3 | Rebuilds log + commits with checklist |
| 4 | Good messages without examples list |
| 5 | Helps peer understand Commits tab |

---

## Common Mistakes

- One commit: `lesson 2 done`
- Empty reflection bullets
- README unchanged since Lesson 1
- Message `fix` instead of `Fix typo in README title`

---

## Optional Extension

- Add “Portfolio Links” placeholder to README
- Compare commit history with partner — what story does each tell?

---

## Teacher Notes

- Cold call: “Read your best commit message aloud.”
- Reject Exit Evidence if only bad messages (`update`, `final`) with no revision offer.
- Lesson 3 assumes `learning-log.md` exists.

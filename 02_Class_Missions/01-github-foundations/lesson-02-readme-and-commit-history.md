# Lesson 2: README and Commit History

**Phase:** 0 — Git & GitHub  
**Duration:** 45 minutes  
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)  
**Student repo:** `cs-learning-log`

---

## Lesson Goal

Students understand **commit history as learning evidence**, improve `README.md`, create `learning-log.md` with Lesson 1 and Lesson 2 reflections, and practice **meaningful commit messages**.

---

## Resources

**Skill Warm-up = GitHub YouTube. Guided Practice = GitHub Skills.**

| Role | Resource | URL | Use in class |
|---|---|---|---|
| **Skill Warm-up** | GitHub for Beginners (official playlist) | https://www.youtube.com/playlist?list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f | Warm-up: **one** clip on commits or history (often ~9 min — use 0–10 min Skill Warm-up) |
| **Guided Practice** | GitHub Skills: Introduction to GitHub | https://github.com/skills/introduction-to-github | Continue / finish interactive steps; rebuild pattern in `cs-learning-log` |
| Reference | GitHub Docs: Hello World | https://docs.github.com/en/get-started/start-your-journey/hello-world | Only if stuck |

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

## 45-Minute Lesson Flow

| Time | Block |
|---|---|
| 0–5 min | Skill Warm-up |
| 5–9 min | Talk Robin 1 |
| 9–14 min | Entry Check |
| 14–19 min | Core Pattern |
| 19–30 min | Guided Practice |
| 30–40 min | Independent Rebuild |
| 40–45 min | Talk Robin 2 + Evidence |

---

### 0–5 min: Skill Warm-up

**Option A:** one playlist video (~9 min) on commits from playlist.

**Option B:** Teacher shows two repos on screen:

- Repo A: one commit, message `update`
- Repo B: six commits, clear messages

Students write: **Which history shows learning? Why?**

Introduce good vs bad commit messages (preview Pattern Explanation).

---

### 5–9 min: Talk Robin 1

- **A:** “Commit history is learning evidence because…”
- **B:** “A good commit message I wrote or saw is…”
- **Shared:** One confusion about commits vs saving.

---

### 9–14 min: Entry Check

1. What is a **commit** in your own words?
2. Where on GitHub do you see **commit history**?
3. Why is `asdf` a bad commit message?
4. What did your Lesson 1 commit change?
5. Write one **good** commit message for: “added learning goals to README.”

---

### 14–19 min: Core Pattern

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

### 19–30 min: Guided Practice

1. Class opens Commits tab together
2. Edit README → commit: `Update README with personal learning goals`
3. Create `learning-log.md` → commit: `Add learning log with Lesson 1 reflection`
4. Add Lesson 2 section → commit: `Add Lesson 2 reflection to learning log`
5. Show history growing — each commit = one story beat

---

### 30–40 min: Independent Rebuild

**Checklist:**

- [ ] README visibly improved from Lesson 1
- [ ] `learning-log.md` exists with **real** Lesson 1 and Lesson 2 reflections (3+ sentences each section)
- [ ] At least **two new commits** with meaningful messages
- [ ] Commits tab shows progression
- [ ] Can identify which commit changed which file

---

### 40–45 min: Talk Robin 2 + Evidence

- **A:** “Small change → meaningful commit means…”
- **B:** “My best commit message today is ___ because ___.”
- **Shared:** Exit Evidence ready?

---


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

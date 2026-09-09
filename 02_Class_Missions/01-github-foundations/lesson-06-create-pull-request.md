# Lesson 6: Team Collaboration — Branches and Pull Requests

**Phase:** 0 — Git & GitHub  
**Duration:** 45 minutes  
**Official playlist position:** #6  
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)

---

## Lesson Goal

Students work in a **team of three** and practice a realistic GitHub collaboration workflow with clearly separated roles.

By the end of the lesson, students can:

- clone the same shared repository to their own computers,
- work on separate feature branches,
- commit and push their own work,
- create pull requests into `main`, and
- explain why collaborators create pull requests instead of directly merging into `main`.

> **Classroom rule:** nobody develops directly on `main`. Every change must enter `main` through a pull request.

---

## Team Roles

Each group has three students.

| Role | Responsibility | Branch |
|---|---|---|
| **Owner / Maintainer** | Creates the repository, invites collaborators, writes the HTML feature, and manages integration | `feature-html` |
| **Collaborator 1** | Creates the CSS feature | `feature-css` |
| **Collaborator 2** | Creates the JavaScript feature | `feature-javascript` |

### Responsibility Boundary

```text
Collaborators
clone → branch → code → add → commit → push → pull request → WAIT

Owner / Maintainer
creates repo → invites collaborators → also develops on a feature branch
```

The Owner does **not** develop directly on `main` either.

---

## Today Only

| Role | What |
|---|---|
| **Video** | **Playlist #6** — [How to create a pull request in 4 min](https://www.youtube.com/watch?v=nCKdihvneS0) |
| **Class practice** | One shared repository, three feature branches, three pull requests |
| **Evidence** | `feature-html`, `feature-css`, and `feature-javascript` pushed to GitHub with three open PRs |
| **Exit Ticket** | `learning-log.md` → Lesson 6 |

---

## Core Vocabulary

| Term | Meaning |
|---|---|
| **owner / maintainer** | Person responsible for managing the shared repository and integrating changes |
| **collaborator** | Team member who has permission to contribute to the repository |
| **clone** | Create a local copy of a remote repository |
| **feature branch** | A branch used for one focused piece of work |
| **pull request (PR)** | A proposal to merge one branch into another |
| **base branch** | The branch receiving the proposed change — today, `main` |
| **compare branch** | The feature branch containing the proposed change |

---

## Core Collaboration Model

```text
                         main
                          │
              ┌───────────┼───────────┐
              │           │           │
       feature-html  feature-css  feature-javascript
           Owner       Collab 1        Collab 2
              │           │           │
              └─────── Pull Requests ─┘
                          │
                          ▼
                     wait for review
```

The feature branches isolate work while students are developing. They reduce accidental interference, but they do not guarantee that merge conflicts can never happen.

For this first collaboration exercise, each role edits a different file so students can learn the workflow **without intentionally creating a merge conflict**.

---

## 45-Minute Lesson Flow

| Time | Block |
|---|---|
| **0–8 min** | **Skill Warm-up** — watch Playlist #6 and identify branch → push → PR |
| **8–12 min** | **Role Setup** — assign Owner, Collaborator 1, Collaborator 2 |
| **12–20 min** | **Repository Setup** — Owner creates repo and invites collaborators; everyone clones |
| **20–33 min** | **Parallel Feature Work** — each student creates a branch, adds one file, commits, and pushes |
| **33–41 min** | **Pull Requests** — all three students open PRs into `main` |
| **41–45 min** | **Evidence + Exit Ticket** — verify three open PRs and record learning |

---

## 0–8 min: Skill Warm-up

Watch **Playlist #6 only**: [How to create a pull request in 4 min](https://www.youtube.com/watch?v=nCKdihvneS0).

While watching, identify these three ideas:

1. Which branch contains the new work?
2. Which branch should receive the work?
3. What does opening a pull request actually request?

---

## 8–12 min: Assign Roles

Create teams of three.

Each team must clearly identify:

- **Owner / Maintainer**
- **Collaborator 1 — CSS**
- **Collaborator 2 — JavaScript**

The Owner is responsible for repository management. Collaborators are responsible for contributing features and opening pull requests.

---

## 12–20 min: Owner Creates the Shared Repository

### Owner

On GitHub:

1. Create one new repository for the team.
2. Initialize it with a `README.md` so `main` already exists.
3. Invite both teammates as collaborators.
4. Wait until both collaborators accept the invitations.

Then clone the repository to the Owner's computer:

```bash
git clone <repository-url>
cd <repository-name>
git status
```

### Collaborators

After accepting the GitHub invitation, each collaborator clones the **same repository**:

```bash
git clone <repository-url>
cd <repository-name>
git status
```

### Checkpoint

Every student should now have:

```text
GitHub shared repository
        ↓ git clone
local repository on each team member's computer
```

Do **not** run `git init` inside a repository that was created with `git clone`.

---

## 20–33 min: Parallel Feature Work

Before creating a branch, every student should be on the current `main` branch.

### Owner — HTML

```bash
git switch -c feature-html
```

Create:

```text
index.html
```

Then:

```bash
git status
git add index.html
git commit -m "Add HTML structure"
git push -u origin feature-html
```

### Collaborator 1 — CSS

```bash
git switch -c feature-css
```

Create:

```text
style.css
```

Then:

```bash
git status
git add style.css
git commit -m "Add page styling"
git push -u origin feature-css
```

### Collaborator 2 — JavaScript

```bash
git switch -c feature-javascript
```

Create:

```text
script.js
```

Then:

```bash
git status
git add script.js
git commit -m "Add JavaScript interaction"
git push -u origin feature-javascript
```

### Checkpoint

GitHub should now show three remote feature branches:

```text
main
├── feature-html
├── feature-css
└── feature-javascript
```

No one merges anything yet.

---

## 33–41 min: Everyone Creates a Pull Request

Each student opens a pull request on GitHub.

The direction must be:

```text
feature branch → main
```

Specifically:

```text
feature-html       → PR → main
feature-css        → PR → main
feature-javascript → PR → main
```

For every PR, verify:

- **base:** `main`
- **compare:** the correct feature branch
- a meaningful title
- a short description of what changed
- **Files changed** contains only the expected feature work

### Important

> **Creating a Pull Request does not mean merging the code.**

Collaborators stop after creating their PRs and wait for the Owner / Maintainer.

The Owner also creates a PR for `feature-html` instead of pushing directly to `main`.

---

## 41–45 min: Evidence + Exit Ticket

Before the lesson ends, the team must show:

- one shared repository,
- three feature branches,
- three open pull requests into `main`, and
- no direct feature work committed to `main`.

Add to `learning-log.md`:

```markdown
## Lesson 6 — Team Collaboration
- My role:
- My feature branch:
- What I changed:
- My pull request link:
- Why did I not merge directly into main?
```

---

## Success Criteria

A successful team should have this state at the end of Lesson 6:

```text
GitHub Repository
│
├── main
│
├── feature-html        → OPEN PR
├── feature-css         → OPEN PR
└── feature-javascript  → OPEN PR
```

The pull requests stay **open** for Lesson 7.

---

## Common Mistakes

- Running Git commands outside the cloned repository folder
- Running `git init` after already using `git clone`
- Developing directly on `main`
- Two students accidentally using the same branch
- Forgetting `git push -u origin <branch-name>`
- Reversing the PR direction (`main` as compare instead of base)
- Merging immediately after opening the PR
- Assuming separate branches make merge conflicts impossible

---

## Teacher Notes

The purpose of this lesson is **role clarity and workflow clarity**, not merge-conflict practice.

Students should leave with one simple mental model:

```text
Contributor:
branch → code → commit → push → PR → wait

Maintainer:
review → merge
```

Do not intentionally create merge conflicts in this first team exercise. Lesson 7 completes the workflow through review, merge, and synchronization.

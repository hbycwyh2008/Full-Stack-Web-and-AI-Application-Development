# 01 — GitHub Foundations

Student-facing GitHub + Git beginner unit for **Collaborate**.

## Design Principle

This unit is intentionally taught in three conceptual steps:

1. **See the whole GitHub workflow first** — students experience repository → branch → commit → pull request → review → merge through Hello World and Introduction to GitHub.
2. **Master the browser-based GitHub workflow** — students learn Markdown, create their course repository, manage files/code, create Issues, open Pull Requests, and review/merge them.
3. **Connect local Git to the GitHub workflow** — only after students already understand what happens on GitHub do they learn version control and the complete local ↔ remote command loop.

The official playlist is a resource collection, not the curriculum order.

## Student Repository

```text
YourName-Full-Stack-Web-and-AI-Application-Development
```

Example: `LiMing-Full-Stack-Web-and-AI-Application-Development`.
Use hyphens and do not fork the teacher course repository.

---

# Learning Sequence

## Stage A — See the Whole GitHub Workflow

### Lesson 0 — What Is GitHub? + Hello World Workflow

Students first see and experience the complete collaboration model:

```text
Repository
→ Branch
→ Make changes
→ Commit
→ Pull Request
→ Review
→ Merge
```

They complete GitHub Hello World and GitHub Skills: Introduction to GitHub.

The purpose is orientation: students know what the whole workflow looks like before individual skills are isolated.

---

## Stage B — GitHub Browser Workflow

Students now learn the visible GitHub-side workflow in dependency order.

| # | Lesson | Main skill |
|---|---|---|
| 1 | [Markdown for README and Documentation](lesson-12-markdown.md) | Write and preview Markdown before creating the long-term repository |
| 2 | [Create Your First Course Repository](lesson-03-first-github-repository.md) | Create the long-term repository with a useful `README.md` and `learning-log.md` |
| 3 | [Upload Files and Folders](lesson-04-upload-files-and-folders.md) | Add existing artifacts through the GitHub web interface |
| 4 | [Add Code to a Repository](lesson-05-add-code-to-repository.md) | Add/edit code and understand repository history |
| 5 | [GitHub Issues and Projects](lesson-09-issues-and-projects.md) | Define and track work before implementing it |
| 6 | [Create a Pull Request](lesson-06-create-pull-request.md) | Propose a change through a branch and Pull Request |
| 7 | [Review and Merge a Pull Request](lesson-07-merge-pull-request.md) | Review, discuss, merge, and verify the result |

**Lessons 5–7 must come before the local Git command lesson.** By the end of Lesson 7, students already understand the full GitHub-side collaboration workflow:

```text
Issue
→ Branch / change
→ Commit
→ Pull Request
→ Review
→ Merge
```

This matters because later commands such as `git push` and `git pull` should connect to actions students already understand, rather than introduce both the command and the collaboration concept at the same time.

---

## Stage C — Git, Version Control, and the Complete Local ↔ Remote Loop

Once students understand the GitHub-side workflow, they learn the local mechanism underneath it.

| # | Lesson | Main skill |
|---|---|---|
| 8 | [Git and Version Control](lesson-01-git-introduction.md) | Understand why Git exists: snapshots, history, branches, local vs remote |
| 9 | [Essential Git Commands — Complete Git ↔ GitHub Workflow](lesson-02-essential-git-commands.md) | Connect local work to GitHub with `init/clone`, `status`, `add`, `commit`, `switch`, `pull`, `push`, branches, remotes, PRs, merge, and resync |
| 10 | [Git and GitHub in VS Code](lesson-14-git-and-github-in-vscode.md) | Repeat the complete workflow inside a real development environment |
| 11 | [Beginner FAQ and Mastery Check](lesson-15-beginner-faq-and-mastery-check.md) | Perform and explain the full workflow independently |

Lesson 9 is **not** a disconnected command-list lesson. It is the integration lesson that reveals how the local Git side connects to the GitHub workflow students already know.

The target loop is:

```text
Start from current main
→ git switch main
→ git pull

Create isolated work
→ git switch -c feature-name

Develop locally
→ edit files
→ git status
→ git add ...
→ git commit -m "..."

Send work to GitHub
→ git push -u origin feature-name

GitHub collaboration
→ Pull Request
→ Review
→ Merge

Return local main to the newest remote state
→ git switch main
→ git pull

→ next Issue / task
```

A compact professional loop is therefore:

```text
Issue
→ pull
→ branch
→ edit
→ add
→ commit
→ push
→ Pull Request
→ review
→ merge
→ switch main
→ pull
```

The three-state model remains important:

```text
Working Directory
→ Staging Area
→ Commit History
```

but it explains only the local `add/commit` portion of the larger workflow. It must not be taught as if it were the boundary of the Git/GitHub process.

---

## Stage D — Optional GitHub Platform Extensions

These are useful after the core GitHub → Git → full workflow progression is secure:

- [GitHub Profile and Account Security](lesson-08-profile-and-account-security.md)
- [Repository Security](lesson-10-github-security.md)
- [Publish with GitHub Pages](lesson-11-github-pages.md)
- [Open Source Contributions](lesson-13-open-source-contributions.md)

These topics are valuable, but they should not interrupt the dependency chain of the core workflow.

---

## Core Concept Progression

```text
See the whole GitHub workflow
→ learn Markdown
→ create a real repository
→ manage files and code on GitHub
→ define work with Issues
→ create Pull Requests
→ review and merge
→ understand Git/version control
→ connect local Git to GitHub
→ repeat the complete local ↔ remote loop
```

This produces one coherent development workflow instead of a collection of disconnected Git and GitHub features.

---

## Classroom Pattern

```text
Skill Warm-up
→ Guided Practice
→ Independent Rebuild
→ Evidence
```

Each lesson should create visible evidence in the student's course repository whenever possible.

## Learning Log

After the course repository is created, students maintain one file:

```markdown
# Learning Log

## Lesson N
- What I did:
- What I learned:
- What was hard:
- Evidence link:
```

---

## GitHub Skills Used

- Lesson 0: [Introduction to GitHub](https://github.com/skills/introduction-to-github)
- Markdown lesson: [Communicate using Markdown](https://github.com/skills/communicate-using-markdown)

GitHub Skills is used only where its learning goal directly matches the lesson. Students must also rebuild the same skill in their own course repository so guided bot instructions are not mistaken for independent mastery.

---

## Teacher Guidance

Do **not** teach this unit as “watch the official playlist from #1 to #16.”

The curriculum sequence is based on instructional dependency:

```text
GitHub workflow mental model
→ Markdown + repository creation
→ Issues + PR + review/merge
→ Git/version-control model
→ complete local Git ↔ GitHub command workflow
→ independent repetition in VS Code
```

The critical transition is:

> Students first understand **what happens on GitHub**. Then they learn **how local Git drives that same workflow from their own computer**.

## Related Teacher Materials

- `09_Teacher_Planning/Daily_Lesson_Plans/Phase_0_Git_GitHub/`
- `05_Resources/Git_GitHub_Unit/`

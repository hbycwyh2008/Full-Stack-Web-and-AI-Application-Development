# 01 — GitHub Foundations

Student-facing GitHub + Git beginner unit for **Collaborate**.

## Design Principle

This unit is intentionally taught in three conceptual steps:

1. **See the whole GitHub workflow first** — students experience repository → branch → commit → pull request → review → merge.
2. **Master the GitHub collaboration workflow** — students create repositories, manage files/code, use Issues, open Pull Requests, and review/merge work.
3. **Connect local Git to the GitHub workflow** — students use local Git commands to drive the same collaboration model from their own computers.

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

The purpose is orientation: students know what the whole workflow looks like before individual skills are isolated.

---

## Stage B — Core GitHub Collaboration

| # | Lesson | Main skill |
|---|---|---|
| 1 | [Markdown for README and Documentation](lesson-12-markdown.md) | Write and preview the Markdown needed for repositories and documentation |
| 2 | [Create Your First Course Repository](lesson-03-first-github-repository.md) | Create the long-term repository with a useful `README.md` and `learning-log.md` |
| 3 | [Upload Files and Folders](lesson-04-upload-files-and-folders.md) | Add existing artifacts through GitHub |
| 4 | [Add Code to a Repository](lesson-05-add-code-to-repository.md) | Add/edit code and understand repository history |
| 5 | [GitHub Issues and Projects](lesson-09-issues-and-projects.md) | Define, assign, and track work before implementation |
| 6 | [Team Collaboration — Branches and Pull Requests](lesson-06-create-pull-request.md) | Three-person feature-branch workflow: HTML, CSS, JavaScript |
| 7 | [Owner Review and Merge](lesson-07-merge-pull-request.md) | Maintainer review, merge, and team resynchronization |

The role model is explicit:

```text
Collaborators
branch → code → commit → push → PR → wait

Owner / Maintainer
review → request changes / approve → merge
```

Not every collaborator merges into `main`.

---

## Stage C — Local Git ↔ GitHub Workflow

Students connect the collaboration model to local development.

| # | Lesson | Main skill |
|---|---|---|
| 8 | [Git and Version Control](lesson-01-git-introduction.md) | Git vs GitHub; local vs remote; snapshots; history; branches |
| 9 | [Essential Git Commands — Complete Git ↔ GitHub Workflow](lesson-02-essential-git-commands.md) | `clone`, `status`, `add`, `commit`, `switch`, `pull`, `push`, feature branches, PRs, merge, resync |

Target loop:

```text
Issue
→ git switch main
→ git pull
→ git switch -c feature-name
→ edit
→ git status
→ git add
→ git commit
→ git push
→ Pull Request
→ Owner review
→ merge
→ git switch main
→ git pull
```

The local state model remains:

```text
Working Directory
→ Staging Area
→ Commit History
```

but it is only one part of the larger collaboration workflow.

---

## Stage D — Required Deployment

### GitHub Pages

[Publish with GitHub Pages](lesson-11-github-pages.md) is the **required final GitHub platform lesson**.

Students connect repository work to a real public artifact:

```text
HTML / CSS / JavaScript
→ feature branches
→ Pull Requests
→ review
→ merge into main
→ GitHub Pages
→ public website
```

After GitHub Pages, no additional GitHub platform feature needs a standalone required lesson for this course.

Topics such as Profile customization, repository security UI, open-source contribution workflows, GitHub Actions, Git/GitHub in VS Code, and beginner FAQ are optional references or can be introduced later only when a real project requires them.

> Security rule that remains required throughout the course: passwords, API keys, tokens, recovery codes, and `.env` secrets must never be committed to a public repository.

---

# Final Mastery Challenge — GitHub Team Launch

After students complete the core workflow, Issues/Projects, and GitHub Pages, they complete one integrated team challenge:

**[GitHub Team Launch Challenge](final-github-team-launch-challenge.md)**

Three students work in one shared repository:

| Role | Feature |
|---|---|
| Owner / Maintainer | HTML + integration |
| Collaborator A | CSS |
| Collaborator B | JavaScript |

The challenge covers:

```text
Issue / Project
→ clone
→ feature branch
→ edit
→ add
→ commit
→ push
→ Pull Request
→ Owner review
→ review feedback
→ merge
→ close Issue
→ switch main
→ pull
→ GitHub Pages
```

Challenge materials:

- [Challenge Pack](final-challenge/README.md)
- [Checkpoint Card](final-challenge/checkpoint-card.md)
- [Owner / Maintainer Card](final-challenge/owner-maintainer-card.md)
- [Collaborator A — CSS Card](final-challenge/collaborator-a-css-card.md)
- [Collaborator B — JavaScript Card](final-challenge/collaborator-b-javascript-card.md)
- [Teacher Guide](final-challenge/teacher-guide.md)
- [Interactive Checker Notes](final-challenge/interactive-checker.md)
- `final-challenge/starter/` — starter website + optional GitHub Skills-style automatic progress checker

The automatic checker is infrastructure only. Students do **not** need to learn GitHub Actions. When copied into the team's challenge repository, it maintains a **🚀 GitHub Team Launch Progress** Issue and updates checkpoints as repository evidence appears.

---

## Core Concept Progression

```text
See the workflow
→ repository + documentation
→ Issues / Projects
→ feature branches
→ Pull Requests
→ Maintainer review + merge
→ local Git ↔ remote GitHub
→ GitHub Pages
→ integrated team mastery challenge
```

---

## Classroom Pattern

```text
Skill Warm-up
→ Guided Practice
→ Independent Rebuild
→ Evidence
```

The final challenge changes this pattern slightly:

```text
Mission
→ artifact
→ checkpoint
→ next mission
```

Scaffolding decreases as the challenge progresses.

## Learning Log

Students maintain:

```markdown
# Learning Log

## Lesson N
- What I did:
- What I learned:
- What was hard:
- Evidence link:
```

The final challenge adds an individual role reflection so each student's contribution can be assessed separately from the team's finished website.

---

## GitHub Skills Used

- Lesson 0: [Introduction to GitHub](https://github.com/skills/introduction-to-github)
- Markdown lesson: [Communicate using Markdown](https://github.com/skills/communicate-using-markdown)

GitHub Skills is used only where its learning goal directly matches the lesson. The final GitHub Team Launch Challenge then tests independent transfer into a new shared repository.

---

## Teacher Guidance

Do **not** teach this unit as “watch the official playlist from #1 to #16.”

Teach the dependency chain:

```text
GitHub workflow mental model
→ repository + documentation
→ Issues / Projects
→ team branches + PRs
→ Owner review + merge
→ local Git workflow
→ GitHub Pages
→ final team challenge
```

The course goal is not GitHub feature coverage. The goal is for students to execute and explain a professional collaboration loop independently.

## Related Teacher Materials

- `09_Teacher_Planning/Daily_Lesson_Plans/Phase_0_Git_GitHub/`
- `05_Resources/Git_GitHub_Unit/`

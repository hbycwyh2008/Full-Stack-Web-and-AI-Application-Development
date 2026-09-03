# 01 — GitHub Foundations

Student-facing GitHub + Git beginner unit for **Collaborate**.

## Design Principle

This unit is intentionally split into two layers:

1. **GitHub in the browser first** — students learn the visible collaboration workflow, create a real course repository, write Markdown, upload files, create issues, open pull requests, review, and merge.
2. **Git locally second** — students then learn version control and the local-to-remote development loop: initialize or clone, pull, branch, edit, stage, commit, push, open a PR, merge, and sync again.

The goal is a complete mental and practical loop rather than following the official video playlist in order.

## Unit Structure

- **15 lessons × 45 minutes**
- Official GitHub beginner videos are used as skill warm-ups where they match the lesson goal
- Playlist order is **not** treated as the curriculum order
- One focused practice and one `learning-log.md` entry per lesson
- No video homework

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

Students first see the whole collaboration model:

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

This gives students a complete workflow before individual skills are isolated.

---

## Stage B — GitHub Browser Skills

Students next learn the browser-based GitHub skills needed to manage a real repository.

| # | Lesson | Main skill |
|---|---|---|
| 1 | [Markdown for README and Documentation](lesson-12-markdown.md) | Write and preview Markdown before creating the long-term repository |
| 2 | [Create Your First Course Repository](lesson-03-first-github-repository.md) | Create the long-term repository with a useful `README.md` and `learning-log.md` |
| 3 | [Upload Files and Folders](lesson-04-upload-files-and-folders.md) | Add existing local artifacts through the GitHub web interface |
| 4 | [Add Code to a Repository](lesson-05-add-code-to-repository.md) | Add/edit code and understand repository history |
| 5 | [GitHub Issues and Projects](lesson-09-issues-and-projects.md) | Turn work into trackable issues before implementing changes |
| 6 | [Create a Pull Request](lesson-06-create-pull-request.md) | Propose changes through a PR |
| 7 | [Review and Merge a Pull Request](lesson-07-merge-pull-request.md) | Review, discuss, merge, and verify the result |

At the end of Stage B, students can complete a GitHub-only collaboration loop without local Git.

---

## Stage C — Git and Version Control

Once students know what GitHub actions *mean*, they learn the local mechanism underneath them.

| # | Lesson | Main skill |
|---|---|---|
| 8 | [Git and Version Control](lesson-01-git-introduction.md) | Understand Git, snapshots, history, and why version control exists |
| 9 | [Essential Git Commands](lesson-02-essential-git-commands.md) | Work with `git status`, `git add`, `git commit`, `git log`, branches, and remotes |
| 10 | Local Repository → GitHub | Create or initialize a local project, connect a remote, and push |
| 11 | Sync Before You Work | Start from the newest remote state using `git pull` or an appropriate fetch/pull workflow |
| 12 | Branch → Edit → Commit → Push | Create a feature branch locally, make changes, stage, commit, and push |
| 13 | Complete Local-to-Remote Workflow | Open PR → review → merge → switch back → pull the merged result |

The repeatable development loop is:

```text
Start work
→ git pull
→ git switch -c feature-name
→ edit files
→ git status
→ git add
→ git commit
→ git push -u origin feature-name
→ open Pull Request
→ review
→ merge
→ git switch main
→ git pull
→ next task
```

This is the workflow students should eventually be able to perform without prompts.

---

## Stage D — GitHub Platform Extensions

These are useful after the core collaboration workflow is already secure.

| # | Lesson | Main skill |
|---|---|---|
| 14 | [Git and GitHub in VS Code](lesson-14-git-and-github-in-vscode.md) | Perform the same Git workflow through VS Code |
| 15 | [Beginner FAQ and Mastery Check](lesson-15-beginner-faq-and-mastery-check.md) | Verify independent mastery and diagnose common Git/GitHub mistakes |

Optional or later-extension topics:

- [GitHub Profile and Account Security](lesson-08-profile-and-account-security.md)
- [Repository Security](lesson-10-github-security.md)
- [Publish with GitHub Pages](lesson-11-github-pages.md)
- [Open Source Contributions](lesson-13-open-source-contributions.md)

These are valuable, but they should not interrupt the core GitHub → Git → full workflow progression.

---

## Core Concept Progression

```text
See the whole workflow
→ learn Markdown
→ create a real repository
→ manage files and code on GitHub
→ use Issues
→ create Pull Requests
→ review and merge
→ understand Git/version control
→ use Git commands locally
→ connect local and remote repositories
→ pull before work
→ branch/edit/commit/push
→ PR/review/merge
→ pull again
```

This produces a complete closed loop instead of a collection of disconnected Git and GitHub features.

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

Before the course repository exists, students may temporarily save lesson evidence locally and upload it once the repository is created.

---

## GitHub Skills Used

- Lesson 0: [Introduction to GitHub](https://github.com/skills/introduction-to-github)
- Markdown lesson: [Communicate using Markdown](https://github.com/skills/communicate-using-markdown)

GitHub Skills is used only where its learning goal directly matches the lesson. Students must also rebuild the same skill in their own course repository so guided bot instructions are not mistaken for independent mastery.

---

## Teacher Guidance

Do **not** teach this unit as “watch the official playlist from #1 to #16.”

The official videos are resources, not the instructional sequence.

The curriculum sequence is based on dependency:

```text
GitHub workflow mental model
→ Markdown + repository creation
→ GitHub browser collaboration
→ Git/version-control model
→ local commands
→ local/remote synchronization
→ full professional workflow
```

That sequence better matches how students will actually work in later Full-Stack and AI application projects.

## Related Teacher Materials

- `09_Teacher_Planning/Daily_Lesson_Plans/Phase_0_Git_GitHub/`
- `05_Resources/Git_GitHub_Unit/`

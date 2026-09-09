# Teacher Guide — GitHub Team Launch Challenge

## Purpose

This is the final Git/GitHub mastery task. It is deliberately structured like a GitHub Skills exercise: students receive a mission, create a visible GitHub artifact, verify a checkpoint, and then continue.

The challenge assesses the normal collaboration loop rather than isolated commands.

```text
Plan
→ Clone
→ Branch
→ Develop
→ Stage
→ Commit
→ Push
→ Pull Request
→ Review
→ Merge
→ Pull
→ Deploy
```

## Prerequisites

Students should already have learned:

- Git vs GitHub;
- local vs remote repositories;
- `clone`, `status`, `add`, `commit`, `switch`, `push`, and `pull`;
- feature branches;
- Pull Requests;
- Owner / Maintainer review and merge responsibility;
- Issues and Projects;
- GitHub Pages.

Do not use this challenge to introduce those topics for the first time.

---

## Recommended Classroom Setup

### Team size

Three students per team:

1. Owner / Maintainer — HTML
2. Collaborator A — CSS
3. Collaborator B — JavaScript

### Teacher preparation

Before class:

- Assign teams and roles.
- Decide whether students will build the starter project from scratch or copy the provided `starter/` files.
- Confirm every student can authenticate with GitHub from the classroom computer.
- Confirm Git is installed.
- Confirm each team knows which student will own the repository.

### Evidence rule

Do not grade screenshots when a GitHub artifact exists. Prefer repository, Issue, Project, branch, commit, Pull Request, review, merge, and Pages URLs.

---

## Mission Gates

Use these as manual "unlock" checkpoints. A team should not move forward until the gate is satisfied.

| Gate | Required evidence | Teacher check |
|---|---|---|
| 1 | Shared repo + accepted collaborators | All three students can access repo |
| 2 | 3 Issues + Project board | Each task has an owner |
| 3 | 3 local clones | Each student can show `git status` inside correct repo |
| 4 | 3 feature branches | No one is developing directly on `main` |
| 5 | Feature commits | Meaningful commit messages |
| 6 | Remote feature branches | Branches visible on GitHub |
| 7 | 3 open PRs | Correct base `main`, meaningful descriptions, Issue links |
| 8 | Review evidence | Owner has reviewed collaborator PRs |
| 9 | Merged PRs + closed Issues | `main` contains all three features |
| 10 | Synced local `main` | All students have integrated project locally |
| Final | GitHub Pages URL | HTML, CSS, and JS work on deployed site |

---

## What the Teacher Should NOT Do

Do not narrate every command after Mission 4.

The final challenge should gradually remove scaffolding. If a student asks, "What command do I type now?", first ask:

> What state is your work in, and where does it need to go next?

Examples:

```text
modified file → staging
staging → local history
local branch → GitHub remote
remote branch → proposal for main
merged remote main → local main
```

The goal is workflow recognition, not command imitation.

---

## Review Expectations

The Owner / Maintainer is the integration role.

Collaborators:

```text
branch → commit → push → PR → wait
```

Owner:

```text
review → request changes / approve → merge
```

Do not teach that every collaborator should merge their own PR into `main`.

The Owner's HTML branch must also use a Pull Request. The Owner can self-check and merge it, but should not describe that as formally approving their own review.

---

## Suggested Review Feedback Test

For at least one collaborator PR, ask the Owner to request one small legitimate improvement. Examples:

- rename a class so HTML and CSS match;
- improve button text;
- remove an unused rule;
- add a missing semicolon or accessible label;
- clarify a PR description.

The collaborator should update the same feature branch and push again. Students then observe that the existing PR updates automatically.

This is a high-value collaboration concept and should be retained.

---

## Merge Conflict Policy

Do **not** deliberately create a merge conflict during this challenge.

The assessment target is the normal workflow. A conflict interrupts the sequence and changes the task into troubleshooting.

Use merge conflicts as a separate extension after teams can complete the standard loop independently.

---

## Suggested Scoring — 20 Points

| Category | Points |
|---|---:|
| Planning: Issues + Project + role assignment | 3 |
| Correct feature-branch workflow | 3 |
| Meaningful commits and pushes | 3 |
| Pull Request quality | 3 |
| Owner review / response to feedback | 3 |
| Correct merge + local resync | 3 |
| GitHub Pages deployment | 2 |

### Mastery threshold

A student should not pass solely because the team's site works. Each student must be able to explain their own place in the collaboration loop.

---

## Individual Oral Check

Ask each student one random question:

1. Why did you create a feature branch instead of editing `main`?
2. What is the difference between `commit` and `push`?
3. Why did your local `main` not update automatically after the PR was merged?
4. Why does a Pull Request update when you push another commit to its branch?
5. Why does the Maintainer review before merging?
6. What relationship connects an Issue, a branch, and a Pull Request?

A correct answer should explain the concept, not merely name a command.

---

## Completion Standard

The team is finished when the repository history itself proves the workflow:

```text
3 Issues
+ 3 feature branches
+ meaningful commits
+ 3 Pull Requests
+ review evidence
+ merges into main
+ synced local repositories
+ published Pages site
```

The GitHub history is the assessment artifact.

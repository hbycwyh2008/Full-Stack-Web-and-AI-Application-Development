# Teacher Guide — GitHub Team Launch Challenge

## Purpose

This is the final Git/GitHub mastery task. It is structured like a GitHub Skills exercise: students perform a real action, GitHub records evidence, and the automatic checker unlocks the next mission.

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
→ Respond to feedback
→ Merge
→ Pull
→ Deploy
→ Reflect
```

The default assessment artifact is the repository history plus the automatically maintained **🚀 GitHub Team Launch Progress** Issue.

## Prerequisites

Students should already know:

- Git vs GitHub;
- local vs remote repositories;
- `clone`, `status`, `add`, `commit`, `switch`, `push`, and `pull`;
- feature branches;
- Pull Requests;
- Owner / Maintainer review and merge responsibility;
- Issues and Projects;
- GitHub Pages.

Do not introduce those topics for the first time during this challenge.

---

## Team Setup

Three students per team:

1. **Owner / Maintainer** — HTML
2. **Collaborator A** — CSS
3. **Collaborator B** — JavaScript

The Owner creates the team's `team-web-launch` repository and copies the contents of `final-challenge/starter/` into its root, including `.github/workflows/team-launch-progress.yml`.

No student develops directly on `main`.

---

## Automatic Mission Control

The workflow maintains:

```text
🚀 GitHub Team Launch Progress
```

Use this Issue instead of a teacher-operated manual gate sheet. It scores 16 checkpoints and tells the team which mission is incomplete.

The checker automatically verifies:

| Area | Automatic evidence |
|---|---|
| Planning | exact feature Issue titles, Project evidence, role assignments |
| Collaboration access | three distinct PR authors working from branches in the same shared repository |
| Branching | required feature branches / PR branch evidence |
| Local Git | non-`web-flow` commit evidence plus later SHA sync proof |
| Commit quality | meaningful commit messages |
| PR quality | title, description, testing section, correct `Closes #Issue` syntax |
| Role boundaries | HTML/CSS/JS role edits the assigned source file without taking over the other role files |
| Review | substantive Owner review on both collaborator PRs |
| Review response | at least one `CHANGES_REQUESTED` review followed by a later collaborator commit |
| Integration | all three PRs merged and all three feature Issues closed |
| Local resync | all three detected participants submit a current-main SHA after the merges |
| Final code | non-placeholder integrated HTML, CSS, and JavaScript on `main` |
| Deployment | GitHub Pages exists and live HTML/CSS/JS assets respond successfully |
| Reflection | each participant submits a structurally valid final reflection |

A team is complete when the Progress Issue reaches all checkpoints and closes automatically.

---

## Teacher Preparation

Before class:

- assign teams and roles;
- confirm Git is installed and all students can authenticate to GitHub;
- confirm the Owner copies the entire starter pack, including the hidden `.github` folder;
- require the team Project to be public for standard automatic checking;
- decide whether to enable the optional strict Project-v2 check.

### Optional strict Project check

GitHub's standard Actions `GITHUB_TOKEN` cannot read Projects v2. Normal classroom mode therefore verifies a reachable public Project URL plus links to the three feature Issues.

For exact Project membership verification, add a repository secret named:

```text
PROJECT_TOKEN
```

using a token with GitHub Projects read permission. The workflow then performs an additional GraphQL check that the three required Issues are actually members of that Project.

Do not give this token to students.

---

## Required Naming

The checker depends on these exact Issue titles:

```text
Build HTML structure
Add page styling
Add JavaScript interaction
```

and these exact branches:

```text
feature-html
feature-css
feature-javascript
```

GitHub assigns the actual Issue numbers. Students must use those real numbers in the PR description, for example:

```text
Closes #7
```

Do not teach them to assume the Issues will be #1, #2, and #3.

---

## Review Requirement

Owner / Maintainer is the integration role.

Collaborators:

```text
branch → commit → push → PR → wait / respond to feedback
```

Owner:

```text
review → request changes / approve → merge
```

Both collaborator PRs need substantive Owner review evidence.

In addition, **one collaborator PR must include a real feedback cycle**:

```text
Owner submits Changes Requested
→ collaborator edits locally
→ add / commit / push
→ same PR updates
→ Owner re-reviews
```

This is mandatory because it demonstrates that a Pull Request tracks a branch rather than a single frozen commit.

The Owner's HTML branch also goes through a PR. The Owner can self-check and merge that PR, but does not formally approve their own review.

---

## Local Sync Verification

After all three PRs are merged, the workflow creates **🔄 Local Sync Check**.

Each student must run locally:

```bash
git switch main
git pull
git rev-parse --short HEAD
```

and comment in that Issue:

```text
SYNCED SHORT_SHA
```

The checker verifies the comment author, timing, and SHA against the current remote `main`. This is stronger evidence than a screenshot, although GitHub still cannot literally observe a student's terminal.

---

## GitHub Pages Verification

The checker does not stop at “Pages is configured.” It requests the public site and verifies that:

- the main HTML page responds;
- `style.css` responds;
- `script.js` responds;
- the HTML references both assets;
- CSS contains substantive styling;
- JavaScript contains an event listener.

If deployment has just occurred, allow GitHub Pages time to build and let the next workflow event re-check it.

---

## Final Reflection

After Pages passes, the checker creates **🧠 Final Reflection**.

Each detected participant posts a comment beginning with:

```text
REFLECTION:
```

The comment must meet the minimum length and use at least two Git/GitHub concepts. This is structural automatic validation, not a substitute for a teacher's judgment of writing quality.

---

## Scoring

The Progress Issue reports an automatic checkpoint score. For this challenge, use the automated completion state as the default technical mastery score.

If desired, add a small teacher-only oral extension for conceptual depth. Suggested questions:

1. Why use a feature branch instead of editing `main`?
2. What is the difference between `commit` and `push`?
3. Why did local `main` need `git pull` after the remote merge?
4. Why did the existing PR update after another push?
5. Why is the Owner responsible for integration?

The oral extension should not duplicate repository evidence that the checker has already verified.

---

## Merge Conflict Policy

Do not deliberately create a merge conflict in the main final challenge. The target is the standard professional collaboration loop. Teach merge conflicts separately after students can complete this workflow independently.

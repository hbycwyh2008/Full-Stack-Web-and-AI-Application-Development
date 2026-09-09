# GitHub Team Launch Challenge Pack

This is the final Git/GitHub mastery exercise for the GitHub Foundations unit. It is designed to behave like a GitHub Skills activity: students complete real GitHub work, while an automatic Mission Control Issue checks the repository and tells the team what to do next.

## Student Materials

- [Main Student Mission](../final-github-team-launch-challenge.md)
- [Checkpoint Card](checkpoint-card.md)
- [Owner / Maintainer Card](owner-maintainer-card.md)
- [Collaborator A — CSS Card](collaborator-a-css-card.md)
- [Collaborator B — JavaScript Card](collaborator-b-javascript-card.md)

## Teacher Materials

- [Teacher Guide](teacher-guide.md)
- [Automatic Checker Notes](interactive-checker.md)

## Starter Pack — Required for Automatic Checking

Copy the **contents** of `starter/` into the root of the team's new `team-web-launch` repository:

- [Starter Setup](starter/START-HERE.md)
- [Starter HTML](starter/index.html)
- [Starter CSS](starter/style.css)
- [Starter JavaScript](starter/script.js)
- `starter/.github/workflows/team-launch-progress.yml` — automatic Mission Control checker

After the workflow is installed, GitHub automatically maintains an Issue named:

```text
🚀 GitHub Team Launch Progress
```

That Issue is the team's source of truth. It shows the current score, passed checkpoints, detected roles, evidence URLs, and the next mission.

## What Is Checked Automatically

The checker validates the workflow itself rather than screenshots. It checks:

- correctly named feature Issues;
- public Project evidence and Issue links;
- feature branches;
- three distinct team roles working in the same shared repository;
- correct Issue assignments;
- local-style commits and meaningful commit messages;
- PR quality and correct `Closes #...` syntax;
- HTML/CSS/JavaScript file ownership by role;
- Owner review on both collaborator PRs;
- at least one real **Changes Requested → follow-up commit** cycle;
- merges and automatic Issue closure;
- local `main` synchronization from all three students using SHA proof;
- non-placeholder integrated HTML/CSS/JavaScript on `main`;
- live GitHub Pages HTML/CSS/JavaScript;
- an individual reflection comment from every team member.

## Project Check

GitHub's normal Actions `GITHUB_TOKEN` cannot directly read Projects v2. The default classroom checker therefore verifies a **public Project URL** plus links to all three feature Issues.

For strict Project-membership verification, the teacher may add a repository secret named `PROJECT_TOKEN` with GitHub Projects read permission. The checker will then also verify that all three Issues are actually present in the submitted Project.

## Mastery Flow

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
→ changes requested / response
→ merge
→ switch main
→ pull
→ GitHub Pages
→ reflection
→ automatic completion
```

A team finishes when **🚀 GitHub Team Launch Progress** reaches all checkpoints and closes automatically.

# Starter Setup — GitHub Team Launch

This folder contains the optional starter project and the automatic progress checker.

## Owner Setup

Create the team's new repository first. Then copy the **contents of this starter folder** into the root of `team-web-launch`.

The new repository should contain:

```text
team-web-launch/
├── .github/
│   └── workflows/
│       └── team-launch-progress.yml
├── index.html
├── style.css
└── script.js
```

The `.github` folder is hidden on some computers. Make sure it is included.

After these starter files are on the repository's default branch, the workflow will maintain an Issue named:

```text
🚀 GitHub Team Launch Progress
```

That Issue acts like a GitHub Skills checkpoint page. It updates when the team creates Issues, pushes branches, opens or merges Pull Requests, and configures GitHub Pages.

## Important

Students do **not** need to learn GitHub Actions for this challenge. The workflow is only the automatic feedback mechanism behind the exercise.

The checker intentionally leaves some items for manual verification, including collaborator invitations, Project-board organization, local `git pull`, code quality, and the final reflection.

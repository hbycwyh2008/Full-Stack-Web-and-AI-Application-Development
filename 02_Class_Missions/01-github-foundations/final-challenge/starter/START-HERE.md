# Starter Setup — GitHub Team Launch

This folder contains the starter website and the automatic Mission Control checker.

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

The `.github` folder may be hidden on some computers. It must be included.

After these files are committed to the repository's default branch, open **Actions → GitHub Team Launch Auto Checker → Run workflow** once if the first progress Issue has not appeared automatically.

The workflow maintains:

```text
🚀 GitHub Team Launch Progress
```

Treat that Issue as the challenge dashboard. It shows the current automatic score and the next mission.

## Important Rules

- Students do **not** study or edit the GitHub Actions workflow.
- Do not complete feature work with GitHub's web editor. Each feature must contain local-style Git commit evidence.
- Use the exact feature branch names and Issue titles from the challenge.
- All feature branches must be pushed into this shared repository, not separate forks.
- The Owner reviews and merges collaborator PRs.

## Project Evidence

After the three required feature Issues exist, the checker creates:

```text
📋 Project Evidence
```

Make the team's GitHub Project public, then follow the comment format in that Issue. The standard checker verifies the public Project URL and the three Issue links.

For strict Project-v2 membership checking, the teacher can optionally create a repository secret named `PROJECT_TOKEN` with GitHub Projects read permission. Students never need access to that secret.

## Later Automatic Evidence

The checker will also create:

```text
🔄 Local Sync Check
```

after the three PRs are merged, and:

```text
🧠 Final Reflection
```

after the live GitHub Pages site passes.

Follow the exact comment formats in those Issues. When every automated checkpoint passes, **🚀 GitHub Team Launch Progress** closes automatically.

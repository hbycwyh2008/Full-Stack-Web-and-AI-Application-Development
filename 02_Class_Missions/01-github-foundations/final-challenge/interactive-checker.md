# Automatic Checker — GitHub Team Launch

## Purpose

`starter/.github/workflows/team-launch-progress.yml` turns the final challenge into a GitHub Skills-style exercise. It reacts to GitHub activity and maintains one Mission Control Issue:

```text
🚀 GitHub Team Launch Progress
```

Students do not edit that Issue. The workflow updates it automatically.

## Automatic Mission Gates

The checker validates 16 checkpoints covering:

1. the three required feature Issues;
2. Project evidence;
3. feature branches;
4. three distinct roles working in the same shared repository;
5. correct Issue assignments;
6. local-style Git commits;
7. meaningful commit messages;
8. PR quality and Issue-closing syntax;
9. role-specific source-file scope;
10. Owner review of both collaborator PRs;
11. one **Changes Requested → later collaborator commit** cycle;
12. merges plus closed feature Issues;
13. local synchronization proof from all three students;
14. integrated non-placeholder HTML/CSS/JavaScript;
15. a live GitHub Pages site whose HTML/CSS/JavaScript assets respond correctly;
16. individual reflections from all three participants.

The Progress Issue displays a score, detected roles, evidence URLs, and the next incomplete mission. It closes automatically at full completion.

## Automatically Created Evidence Issues

### 📋 Project Evidence

Created after the three feature Issues exist. Students submit a public GitHub Project URL and links to all three feature Issues.

### 🔄 Local Sync Check

Created after all three feature PRs are merged. Each student must run:

```bash
git switch main
git pull
git rev-parse --short HEAD
```

Then comment:

```text
SYNCED SHORT_SHA
```

The checker verifies the commenter is one of the detected team members, the comment was posted after the merges, and the SHA matches the current remote `main`.

### 🧠 Final Reflection

Created after the live Pages site passes. Every team member comments with `REFLECTION:` followed by at least 120 characters using at least two Git/GitHub concepts correctly enough for structural validation.

## Project-v2 Limitation

GitHub's default workflow `GITHUB_TOKEN` is repository-scoped and cannot read Projects v2 directly. Therefore the normal classroom mode automatically checks:

- the submitted Project URL is public and reachable;
- evidence contains links to all three required feature Issues.

For strict verification that the three Issues are actually members of the Project, add a repository secret:

```text
PROJECT_TOKEN
```

The token must have GitHub Projects read permission. When present, the same workflow performs an additional GraphQL Project-v2 membership check.

This secret is optional; students never need to see or use it.

## Why Local Git Can Be Checked Only Indirectly

A remote repository cannot literally observe a student's terminal. The checker therefore uses auditable GitHub evidence:

- feature commits must not look like GitHub web-editor `web-flow` commits;
- after merging, every participant must post the SHA produced by their local `git rev-parse` command;
- the SHA must match the current remote `main`.

That is substantially stronger than asking for a screenshot, while remaining technically honest about what GitHub can observe.

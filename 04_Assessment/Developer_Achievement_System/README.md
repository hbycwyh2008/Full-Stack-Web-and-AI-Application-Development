# Developer Achievement Dashboard

A lightweight achievement system that converts verified GitHub evidence into a student-facing Developer Profile.

## What the system does

```text
student repository
  -> GitHub API evidence
  -> XP by skill
  -> badge thresholds
  -> Developer Profile dashboard
```

The dashboard is intentionally **not a leaderboard**. It shows what each student has demonstrated over time.

## V1 skill areas

- Git Workflow
- JavaScript
- Testing
- Debugging
- HCI / UI
- Collaboration

Git Workflow, Testing, and Debugging can be derived automatically from GitHub evidence. JavaScript/HCI/Collaboration XP can be attached to an assignment when successful CI is meaningful evidence for that skill, or entered as validated manual XP until stronger automatic evidence is available.

## Quick setup

1. Copy `config/students.example.json` to the structure in `config/students.json` and add real students.
2. For each assignment, provide the student's repository name and expected feature branch.
3. Merge the system into `main`.
4. Run **Update Developer Achievement Dashboard** from GitHub Actions once to test it.
5. Enable GitHub Pages from `main` / `/docs` to publish the dashboard.

For public student repositories, no additional credential is required. If a repository is private, create a repository secret named `GH_SCANNER_TOKEN` with read access to the required student repositories.

## Student configuration

Example:

```json
{
  "students": [
    {
      "name": "Alice",
      "github": "alice123",
      "enabled": true,
      "assignments": [
        {
          "id": "github-workflow-quiz",
          "repo": "github-feature-branch-pr-workflow",
          "base_branch": "main",
          "feature_branch": "quiz-{github}",
          "xp_on_ci_success": {
            "testing": 1
          }
        }
      ],
      "manual_xp": {
        "hci_ui": 0,
        "collaboration": 0
      }
    }
  ]
}
```

`{github}` is replaced automatically with the student's GitHub username.

## Automatic evidence in V1

For each configured assignment the scanner can verify:

- expected feature branch exists (or is preserved in PR history)
- work exists ahead of `main`
- feature branch targets `main` through a pull request
- PR was merged
- GitHub Actions ran
- CI eventually passed
- a failed CI run was later recovered to success

This evidence is recomputed from GitHub on every scan. XP is therefore **idempotent**: rerunning the scanner cannot repeatedly award the same achievement.

## Badge thresholds

The default progression is:

- Level 1: 5 XP
- Level 2: 15 XP
- Level 3: 30 XP

Names are defined in `config/rules.json` and can be changed without changing the scanner.

## Data flow

```text
config/students.json
        |
        v
scripts/scan.py --------> GitHub REST API
        |
        v
data/achievements.json
        |
        v
scripts/generate_site.py
        |
        v
docs/data.json + docs/rules.json
        |
        v
GitHub Pages dashboard
```

## Design rule

Formal grades and achievements stay separate:

```text
assignment score -> mastery / assessment
XP               -> verified growth evidence
badges           -> visible achievement
profile          -> long-term skill display
```

Do not use XP as a replacement for academic grades.
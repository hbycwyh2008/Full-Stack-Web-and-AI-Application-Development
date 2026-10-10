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


## Assessment structure

The dashboard separates three assessment types:

| Type | Purpose | Repeats | Formal result |
|---|---|---:|---:|
| **CP (Checkpoint)** | verified workflow / skill evidence | normally no | yes |
| **Practice** | pre-quiz rehearsal and feedback | yes | no |
| **Quiz** | formal knowledge / skills check | normally no | yes |

The canonical names and counts live in `config/catalog.json`. The profile UI shows each course section with the number and names of its CPs, Practices, and Quizzes.

### Practice and Quiz must be parallel forms

A Practice is **not** a replay of the Quiz. When a Practice and Quiz assess the same material, they share a `blueprint_id` but use different forms and different item sets.

Required rule:

- same learning objectives
- same skill weighting
- comparable difficulty and time expectation
- different prompts, data, scenarios, and answer keys
- Practice may be repeated and may provide immediate feedback
- Quiz records the formal result and must not reuse the Practice questions

This gives students useful pre-assessment practice without leaking the formal Quiz.

## Student privacy and access

The public roster has been removed from the dashboard UI. However, **GitHub Pages is a static public host and cannot enforce per-user authorization by itself**.

Therefore:

- do not treat a hidden link or URL hash as privacy;
- do not publish real class-wide student data to `docs/data.json` once student records are populated;
- before real student data is enabled, add authenticated GitHub sign-in plus a server-side/API layer that returns only the signed-in student's record;
- the teacher account may receive the class-wide view after authentication.

The current UI changes are the presentation layer for that model, not a substitute for authentication.

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
4. In **Settings -> Pages**, set **Source** to **GitHub Actions**.
5. Run **Update Developer Achievement Dashboard** from GitHub Actions once. The same workflow scans evidence, refreshes dashboard data, and deploys `/docs` to GitHub Pages.

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
docs/data.json + docs/rules.json + docs/catalog.json
        |
        v
GitHub Actions Pages deployment
        |
        v
Developer Achievement Dashboard
```

The deployment workflow runs hourly, can be run manually, and also runs when dashboard-related files change on `main`.

## Design rule

Formal grades and achievements stay separate:

```text
assignment score -> mastery / assessment
XP               -> verified growth evidence
badges           -> visible achievement
profile          -> long-term skill display
```

Do not use XP as a replacement for academic grades.

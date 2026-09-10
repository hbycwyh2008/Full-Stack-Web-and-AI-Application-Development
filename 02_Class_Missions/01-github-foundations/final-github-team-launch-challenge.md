# Final Challenge: GitHub Team Launch

**Phase:** 0 — Git & GitHub  
**Format:** Interactive GitHub Skills-style team mastery challenge  
**Team size:** 3 students  
**Goal:** Complete a realistic Git/GitHub collaboration workflow and publish the finished site with GitHub Pages.

---

## Start the Interactive Exercise

Use the standalone exercise repository:

**[Open GitHub Team Launch](https://github.com/hbycwyh2008/github-team-launch-skill)**

On that page, click the green **Copy Exercise →** button.

The Owner creates the copied repository as **Public** under their **personal GitHub account**. Keep the suggested name `team-web-launch`, or use a teacher-approved team name.

Then:

```text
Copy Exercise
→ Create repository
→ wait about 20 seconds
→ open Issues
→ 🚀 GitHub Team Launch Exercise
→ follow the newest unlocked step
```

You do **not** manually copy starter files. The copied exercise already contains the starter HTML/CSS/JavaScript, step instructions, and automatic checker.

---

## Team Roles

| Role | Feature responsibility | Integration responsibility |
|---|---|---|
| **Owner / Maintainer** | HTML structure | Owns the repository, invites collaborators, reviews collaborator PRs, merges approved work, deploys GitHub Pages |
| **Collaborator A** | CSS styling | Creates and updates the CSS Pull Request |
| **Collaborator B** | JavaScript interaction | Creates and updates the JavaScript Pull Request |

All three students work in the **same shared repository**. Do not use forks for this challenge.

```text
Collaborators
clone → branch → code → add → commit → push → PR → respond to review

Owner / Maintainer
review → request changes or approve → merge → verify main → publish Pages
```

No one develops directly on `main`.

---

## How the Interaction Works

GitHub Actions automatically creates one Exercise Issue:

```text
🚀 GitHub Team Launch Exercise
```

That Issue is the source of truth. It shows progress and posts the next step only after the current work passes the checker.

The interactive sequence is:

```text
Step 1  Issues + Project evidence
Step 2  Clone + feature branches
Step 3  Local commits + Pull Requests
Step 4  Review + Changes Requested feedback cycle
Step 5  Owner merge + Issue closure + local main sync
Step 6  GitHub Pages
Step 7  Reflection
        ↓
🏆 Exercise complete
```

The checker validates real GitHub evidence rather than screenshots.

---

## Teacher Check

The teacher mainly watches the `🚀 GitHub Team Launch Exercise` Issue. The exercise closes automatically when all seven stages pass.

The only required manual spot-check is the submitted public **GitHub Project**. Confirm that these three feature Issues are actually present on the Project board:

```text
Build HTML structure
Add page styling
Add JavaScript interaction
```

The workflow automatically checks the remaining evidence: feature branches, three distinct PR authors, Issue assignments, local-style commits, meaningful commit messages, PR quality, role file scope, Owner review, a required Changes Requested → follow-up commit cycle, Owner merges, closed Issues, sync SHA proofs, integrated HTML/CSS/JavaScript, live GitHub Pages assets, and all three reflections.

---

> This is an independent classroom exercise inspired by the interaction model of GitHub Skills. It is not an official GitHub Skills course.

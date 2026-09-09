# Final Challenge: GitHub Team Launch

**Phase:** 0 — Git & GitHub  
**Format:** Team mastery challenge  
**Team size:** 3 students  
**Goal:** Complete a realistic Git/GitHub collaboration workflow and publish the finished site with GitHub Pages.

---

## Scenario

Your team has been asked to build and publish a small interactive website.

You must use a professional collaboration workflow. **No one develops directly on `main`.** Every change must enter `main` through a Pull Request.

This is a mastery challenge, not a code-along. Early missions include light guidance; later missions describe the goal and expect your team to choose the correct Git/GitHub action.

---

## Team Roles

| Role | Feature responsibility | Integration responsibility |
|---|---|---|
| **Owner / Maintainer** | HTML structure | Creates repo, invites collaborators, reviews collaborator PRs, merges approved work, deploys GitHub Pages |
| **Collaborator A** | CSS styling | Creates and updates the CSS Pull Request |
| **Collaborator B** | JavaScript interaction | Creates and updates the JavaScript Pull Request |

### Team rule

```text
Collaborators
clone → branch → code → add → commit → push → PR → WAIT

Owner / Maintainer
review → request changes or approve → merge → verify main
```

The Owner also works on `feature-html` and opens a Pull Request for that work. The Owner performs a self-check before merging their own PR; this is not the same as formally approving their own review.

---

# Mission 1 — Create the Shared Repository

## Owner

Create a new GitHub repository named:

```text
team-web-launch
```

Initialize it with a `README.md`, then invite Collaborator A and Collaborator B.

## Checkpoint

Your team should be able to verify:

- [ ] Repository exists
- [ ] Owner has access
- [ ] Collaborator A has accepted the invitation
- [ ] Collaborator B has accepted the invitation
- [ ] `main` is the shared integration branch

**Unlock condition:** all three students can open the repository.

---

# Mission 2 — Plan the Work Before Coding

Create three GitHub Issues:

```text
Issue #1 — Build HTML structure
Issue #2 — Add page styling
Issue #3 — Add JavaScript interaction
```

Assign the work:

```text
Owner          → HTML
Collaborator A → CSS
Collaborator B → JavaScript
```

Create or use a GitHub Project board with:

```text
Todo | In Progress | Done
```

Add the three Issues to the board.

## Checkpoint

Before coding, each team member must be able to answer:

> Which Issue are you responsible for, and what does "Done" mean for that Issue?

---

# Mission 3 — Clone the Shared Repository

All three team members clone the same shared repository to their own computers.

Suggested verification commands:

```bash
git clone <repository-url>
cd team-web-launch
git status
```

## Quick Check

Where are you working after cloning?

- A. Only on GitHub
- B. In a local Git repository connected to the GitHub remote
- C. Inside a Pull Request

**Correct concept:** B.

---

# Mission 4 — Create Feature Branches

Create one branch per feature:

```text
Owner          → feature-html
Collaborator A → feature-css
Collaborator B → feature-javascript
```

Example command pattern:

```bash
git switch -c feature-name
```

The team structure should now be:

```text
                 main
                  │
        ┌─────────┼─────────┐
        │         │         │
 feature-html feature-css feature-javascript
     Owner      Collab A      Collab B
```

## Quick Check

Why are you not developing directly on `main`?

> Feature branches isolate unfinished work before integration.

---

# Mission 5 — Build, Stage, and Commit

Each student completes only their assigned feature.

Recommended starter files:

```text
index.html
style.css
script.js
```

Your local work is now complete. Record it in Git history.

Use `git status` to decide what needs to happen next.

## Concept Check

Complete this model:

```text
Working Directory
      ↓ git add
Staging Area
      ↓ git commit
Commit History
```

## Commit quality requirement

Do not use vague messages such as:

```text
update
stuff
final
```

Use a message that names the change, for example:

```text
Add semantic page structure
Add responsive page styling
Add button interaction
```

---

# Mission 6 — Share Your Feature

Your commit exists locally, but your teammates cannot yet see your branch on GitHub.

Choose and perform the Git action that publishes your branch to the remote repository.

Example pattern:

```bash
git push -u origin feature-name
```

## Checkpoint

GitHub should show all three feature branches:

```text
feature-html
feature-css
feature-javascript
```

---

# Mission 7 — Open Pull Requests

Each student opens a Pull Request:

```text
feature-* → main
```

Every Pull Request must contain:

- a meaningful title;
- what changed;
- why the change was needed;
- how it was tested;
- a reference to the related Issue.

Example:

```markdown
## What changed
Added responsive layout and typography styles.

## Why
The page needed a readable desktop and mobile layout.

## Testing
Tested in the browser at desktop and mobile widths.

Closes #2
```

## Decision Check

A collaborator sees the green **Merge** button. What should they do?

> Stop and wait for the Maintainer to review the Pull Request.

---

# Mission 8 — Review Before Merge

The Owner / Maintainer now reviews the collaborator Pull Requests.

Use this review flow:

```text
Open PR
  ↓
Read description
  ↓
Inspect Files changed
  ↓
Test the feature
  ↓
Review
  ↓
Request changes OR approve
  ↓
Merge when ready
```

The Owner must leave at least one specific, meaningful review comment on each collaborator PR.

Good examples:

```text
The layout remains readable at narrow widths. Good to merge.
```

```text
Please rename this class so it matches the naming used in the HTML.
```

If changes are requested, the collaborator updates the **same branch** and pushes another commit.

Example pattern:

```bash
git add .
git commit -m "Address review feedback"
git push
```

Observe what happens to the existing Pull Request.

## Key concept

> A Pull Request follows the branch. New commits pushed to that branch automatically appear in the same Pull Request.

---

# Mission 9 — Merge and Close the Work

The Owner merges approved collaborator Pull Requests into `main`.

The Owner also performs a self-check of `feature-html` and merges the HTML Pull Request.

If the PR description uses syntax such as:

```text
Closes #2
```

verify what happens to the linked Issue after the Pull Request is merged.

Move completed Project items to:

```text
Done
```

## Workflow Check

Your team should now be able to explain:

```text
Issue
  ↓
Feature Branch
  ↓
Commit
  ↓
Push
  ↓
Pull Request
  ↓
Review
  ↓
Merge
  ↓
Issue Closed
```

---

# Mission 10 — Sync Everyone's Local Repository

The remote `main` now contains the team's integrated work.

Every team member must update their own local `main`.

Expected pattern:

```bash
git switch main
git pull
```

## Checkpoint

Every team member should now have the final project locally:

```text
index.html
style.css
script.js
```

## Quick Check

Your Pull Request was merged on GitHub. Why was your local `main` not updated automatically?

> Local and remote repositories are separate copies. You must synchronize them.

---

# Final Mission — Publish with GitHub Pages

The Owner deploys the completed website from the final `main` branch using GitHub Pages.

Verify the full delivery chain:

```text
Repository
   ↓
main
   ↓
GitHub Pages
   ↓
Public Website
```

Open the published site and verify:

- [ ] HTML structure loads
- [ ] CSS styling loads
- [ ] JavaScript interaction works
- [ ] the deployed version matches the final `main`

---

# Final Evidence

Submit:

```text
Team repository URL:
GitHub Project URL:
HTML Pull Request URL:
CSS Pull Request URL:
JavaScript Pull Request URL:
Published GitHub Pages URL:
```

Each student also adds a short reflection to their learning log:

```markdown
## GitHub Team Launch Challenge
- My role:
- My Issue:
- My branch:
- What I contributed:
- One review or integration decision I observed:
- Why teams use Pull Requests instead of letting everyone merge directly into main:
- Evidence link:
```

---

# Completion Check

By the end of this challenge, you should be able to:

- [ ] clone a shared repository
- [ ] distinguish local and remote repositories
- [ ] work on a feature branch
- [ ] stage and commit changes
- [ ] push a feature branch
- [ ] organize work with Issues and Projects
- [ ] open a Pull Request
- [ ] respond to review feedback
- [ ] explain the Maintainer's role
- [ ] merge approved work into `main`
- [ ] synchronize local `main` after remote changes
- [ ] publish a website with GitHub Pages

---

# Challenge Rule: No Artificial Merge Conflict

This final challenge tests the normal professional workflow:

```text
Plan
→ Branch
→ Develop
→ Commit
→ Push
→ PR
→ Review
→ Merge
→ Sync
→ Deploy
```

Do not intentionally create a merge conflict during the main challenge. Merge conflicts can be practiced later as a separate extension challenge.

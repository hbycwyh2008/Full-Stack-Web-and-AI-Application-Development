# Lesson 7: Owner Review, Merge, and Team Sync

**Phase:** 0 — Git & GitHub  
**Duration:** 45 minutes  
**Official playlist position:** #7  
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)

---

## Lesson Goal

Students complete the team collaboration workflow started in Lesson 6.

By the end of the lesson, students can:

- explain the difference between **contributor** and **maintainer** responsibilities,
- review a pull request before integration,
- merge approved feature work into `main`,
- verify the final repository state, and
- synchronize the updated `main` branch back to every local repository.

> **Classroom rule:** collaborators create pull requests; the Owner / Maintainer controls integration into `main`.

---

## Team Roles

Continue with the same team of three from Lesson 6.

| Role | Responsibility Today |
|---|---|
| **Owner / Maintainer** | Reviews collaborator PRs, checks the Owner's own HTML PR, merges all approved work into `main` |
| **Collaborator 1** | Responds to feedback on the CSS PR and waits for merge |
| **Collaborator 2** | Responds to feedback on the JavaScript PR and waits for merge |

### Responsibility Boundary

```text
Collaborators
feature branch → push → pull request → wait / respond to feedback

Owner / Maintainer
inspect → review → merge → verify main
```

Not every team member merges into `main`.

---

## Today Only

| Role | What |
|---|---|
| **Video** | **Playlist #7** — [How to merge a pull request](https://www.youtube.com/watch?v=FDXSgyDGmho) |
| **Class practice** | Owner reviews and merges the three PRs from Lesson 6 |
| **Evidence** | Three merged PRs and a final `main` containing HTML, CSS, and JavaScript |
| **Exit Ticket** | `learning-log.md` → Lesson 7 |

---

## Core Vocabulary

| Term | Meaning |
|---|---|
| **review** | Inspect proposed changes before integration |
| **approve** | Formal reviewer decision that a collaborator's PR is ready to merge |
| **merge** | Integrate one branch's changes into another branch |
| **maintainer** | Person responsible for repository integration decisions |
| **sync** | Bring the updated remote branch back to a local repository |
| **pull** | Download and integrate remote changes into the current local branch |

---

## Core Collaboration Model

```text
feature-html ──────────→ PR ──┐
                              │
feature-css ───────────→ PR ──┼──→ Owner / Maintainer → main
                              │
feature-javascript ────→ PR ──┘

main on GitHub
      ↓ git pull
main on each student's computer
```

The Owner controls integration. Collaborators do not independently merge their own PRs into `main` during this exercise.

---

## 45-Minute Lesson Flow

| Time | Block |
|---|---|
| **0–8 min** | **Skill Warm-up** — watch Playlist #7 and identify review → merge → verify |
| **8–13 min** | **Role Check** — confirm Owner vs collaborator responsibilities |
| **13–28 min** | **PR Review and Merge** — Owner processes CSS, JavaScript, and HTML PRs |
| **28–36 min** | **Verify `main`** — inspect final files and repository history |
| **36–42 min** | **Team Sync** — everyone pulls the updated `main` |
| **42–45 min** | **Evidence + Exit Ticket** |

---

## 0–8 min: Skill Warm-up

Watch **Playlist #7 only**: [How to merge a pull request](https://www.youtube.com/watch?v=FDXSgyDGmho).

While watching, answer:

1. What should be checked before merge?
2. Who is responsible for deciding whether the change enters `main` in our classroom workflow?
3. How can you confirm the merge actually changed `main`?

---

## 8–13 min: Role Check

Before touching the PRs, the team states the workflow aloud:

```text
Collaborator:
branch → code → commit → push → PR → wait

Owner / Maintainer:
review → merge → verify
```

Then confirm that Lesson 6 ended with three open PRs:

```text
feature-html       → main
feature-css        → main
feature-javascript → main
```

---

## 13–28 min: Owner Reviews and Merges

The Owner processes each pull request one at a time.

### A. Review Collaborator 1 — CSS

Owner checks:

- PR title and description
- base = `main`
- compare = `feature-css`
- **Files changed**
- only the intended CSS feature is included

If acceptable:

```text
Owner reviews
      ↓
Owner approves
      ↓
Owner merges
```

If changes are needed, the Owner leaves a specific review comment. Collaborator 1 updates the same `feature-css` branch, commits, and pushes again. The open PR updates automatically.

---

### B. Review Collaborator 2 — JavaScript

Repeat the same process for:

```text
feature-javascript → main
```

The Owner reviews and merges only after checking the proposed change.

---

### C. Process the Owner's HTML PR

The Owner also created:

```text
feature-html → main
```

The Owner must still inspect:

- PR description
- base / compare direction
- **Files changed**
- expected HTML structure

Then the Owner performs a **self-review** and merges the PR.

> The Owner does not formally “approve” their own PR. The classroom expectation is that the Owner still uses the PR as a checkpoint instead of bypassing the workflow and committing directly to `main`.

---

## 28–36 min: Verify the Final `main`

After all three PRs are merged, the GitHub `main` branch should contain:

```text
README.md
index.html
style.css
script.js
```

The team verifies:

1. all three PRs show **Merged**,
2. `main` contains all three feature files,
3. the commit / PR history shows how the features entered the repository,
4. no collaborator directly pushed feature work into `main`.

Expected workflow:

```text
feature-html       ─┐
feature-css         ├→ reviewed / checked → merged → main
feature-javascript ─┘
```

---

## 36–42 min: Everyone Synchronizes Their Local Repository

After the merges, each student's local repository is now behind the remote `main`.

Each student runs:

```bash
git switch main
git pull origin main
git status
```

Then verify locally:

```text
README.md
index.html
style.css
script.js
```

This closes the collaboration cycle:

```text
CLONE
  ↓
BRANCH
  ↓
CODE
  ↓
ADD
  ↓
COMMIT
  ↓
PUSH
  ↓
PULL REQUEST
  ↓
REVIEW
  ↓
MERGE
  ↓
PULL
```

---

## 42–45 min: Evidence + Exit Ticket

Each team must show:

- three merged pull requests,
- final `main` with all three feature files,
- each member's local `main` synchronized with GitHub.

Add to `learning-log.md`:

```markdown
## Lesson 7 — Review, Merge, and Sync
- My role:
- Who was allowed to merge into main?
- What did the Owner check before merging?
- Why do collaborators stop after creating a PR?
- What does git pull do after the merge?
- Evidence link:
```

---

## Success Criteria

At the end of Lesson 7:

```text
GitHub Repository
│
└── main
    ├── README.md
    ├── index.html
    ├── style.css
    └── script.js
```

And every student has the same updated `main` locally.

---

## Common Mistakes

- Assuming every collaborator should merge their own PR
- Clicking Merge without reading **Files changed**
- Confusing “create PR” with “merge PR”
- Owner bypassing the workflow and editing directly on `main`
- Calling the Owner's self-check a formal approval
- Forgetting to return to `main` before `git pull`
- Forgetting that a merged remote `main` does not automatically update local repositories

---

## Teacher Notes

The instructional priority is **role separation**:

```text
Contributor proposes changes.
Maintainer integrates changes.
```

Do not intentionally introduce merge conflicts in this first collaboration cycle. Students should first master a clean end-to-end workflow with separate files and clearly defined responsibilities.

A later lesson or extension can deliberately have two branches modify the same part of a file to teach merge-conflict resolution after this workflow is stable.

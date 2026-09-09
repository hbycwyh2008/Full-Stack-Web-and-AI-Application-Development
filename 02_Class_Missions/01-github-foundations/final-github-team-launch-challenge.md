# Final Challenge: GitHub Team Launch

**Phase:** 0 — Git & GitHub  
**Format:** Automated team mastery challenge  
**Team size:** 3 students  
**Goal:** Complete a realistic Git/GitHub collaboration workflow and publish the finished site with GitHub Pages.

---

## Scenario

Your team has been asked to build and publish a small interactive website.

You must use a professional collaboration workflow. **No one develops directly on `main`.** Every feature enters `main` through a Pull Request.

This is not a code-along. GitHub automatically checks your repository and maintains one Mission Control Issue:

```text
🚀 GitHub Team Launch Progress
```

Use that Issue to see your score and the next incomplete mission.

---

## Team Roles

| Role | Feature responsibility | Integration responsibility |
|---|---|---|
| **Owner / Maintainer** | HTML structure | Creates repo, invites collaborators, reviews collaborator PRs, merges approved work, deploys GitHub Pages |
| **Collaborator A** | CSS styling | Creates and updates the CSS Pull Request |
| **Collaborator B** | JavaScript interaction | Creates and updates the JavaScript Pull Request |

```text
Collaborators
clone → branch → code → add → commit → push → PR → WAIT / RESPOND TO REVIEW

Owner / Maintainer
review → request changes or approve → merge → verify main
```

The Owner also works on `feature-html` and opens a Pull Request for HTML. The Owner self-checks that PR before merging; this is not the same as formally approving their own review.

---

# Mission 1 — Create the Shared Repository

## Owner

Create a repository named:

```text
team-web-launch
```

Invite Collaborator A and Collaborator B.

Then copy the **contents** of the challenge `starter/` folder into the repository root, including the hidden workflow file:

```text
team-web-launch/
├── .github/
│   └── workflows/
│       └── team-launch-progress.yml
├── index.html
├── style.css
└── script.js
```

Commit the starter files to the default branch.

If **🚀 GitHub Team Launch Progress** does not appear automatically, go to **Actions → GitHub Team Launch Auto Checker → Run workflow** once.

### Mission 1 Check

All three students must work in the **same shared repository**. Do not use forks for this challenge.

The checker later confirms collaborator access by detecting three distinct PR authors whose feature branches all belong to this repository.

---

# Mission 2 — Plan the Work Before Coding

Create exactly these three feature Issues:

```text
Build HTML structure
Add page styling
Add JavaScript interaction
```

GitHub will assign the actual Issue numbers. Record those numbers; **do not assume they are #1, #2, and #3**.

Assign:

```text
Owner          → Build HTML structure
Collaborator A → Add page styling
Collaborator B → Add JavaScript interaction
```

Create a GitHub Project with a simple workflow such as:

```text
Todo | In Progress | Done
```

Add all three feature Issues to the Project and make the Project public for automatic checking.

After the three Issues exist, the checker creates:

```text
📋 Project Evidence
```

Follow the instructions in that Issue. Submit the public Project URL and links to all three feature Issues.

### Automatic checks

The checker verifies:

- all three exact feature Issue titles;
- correct role assignments once the PR authors reveal the team roles;
- the public Project evidence URL is reachable;
- links to all three feature Issues are included.

---

# Mission 3 — Clone the Shared Repository

All three students clone the same repository to their own computers.

```bash
git clone <repository-url>
cd team-web-launch
git status
```

### Quick Check

Where are you working after cloning?

- A. Only on GitHub
- B. In a local Git repository connected to the GitHub remote
- C. Inside a Pull Request

**Correct concept:** B.

For this challenge, feature work must include local-style Git commit evidence. Do not complete the feature only through GitHub's web editor.

---

# Mission 4 — Create Feature Branches

Use these exact branch names:

```text
Owner          → feature-html
Collaborator A → feature-css
Collaborator B → feature-javascript
```

Example:

```bash
git switch -c feature-html
```

```text
                 main
                  │
        ┌─────────┼─────────┐
        │         │         │
 feature-html feature-css feature-javascript
     Owner      Collab A      Collab B
```

### Quick Check

Why are you not developing directly on `main`?

> Feature branches isolate unfinished work before integration.

---

# Mission 5 — Build, Stage, and Commit

Each person edits the source file assigned to their role:

```text
Owner          → index.html
Collaborator A → style.css
Collaborator B → script.js
```

Do not take over another role's source file during the feature PR.

The starter files contain placeholders. Your finished feature must replace them with substantive work.

Use Git locally to inspect, stage, and record your work:

```text
Working Directory
      ↓ git add
Staging Area
      ↓ git commit
Commit History
```

Do not use vague commit messages such as:

```text
update
stuff
final
fix
```

Use a message that names the change, for example:

```text
Add semantic page structure
Add responsive page styling
Add button interaction
```

The automatic checker inspects the commits in each PR and rejects generic messages or feature work that appears to have been completed only through GitHub web editing.

---

# Mission 6 — Push Your Feature

Your commit exists locally, but your team cannot review the branch on GitHub until you push it.

Example pattern:

```bash
git push -u origin feature-name
```

GitHub should eventually show evidence for:

```text
feature-html
feature-css
feature-javascript
```

---

# Mission 7 — Open Pull Requests

Each student opens a Pull Request into `main`:

```text
feature-html       → main
feature-css        → main
feature-javascript → main
```

Each PR needs:

- a meaningful title;
- **What changed**;
- **Why**;
- **Testing**;
- the actual related Issue number using closing syntax.

Example only — replace `#7` with the real Issue number GitHub assigned:

```markdown
## What changed
Added responsive layout and typography styles.

## Why
The page needed a readable desktop and mobile layout.

## Testing
Tested in the browser at desktop and mobile widths.

Closes #7
```

The checker verifies that the closing number matches the correct feature Issue.

### Decision Check

A collaborator sees a Merge button. What should they do?

> Wait for the Owner / Maintainer to review and integrate the work.

---

# Mission 8 — Review and Respond to Feedback

The Owner reviews **both** collaborator Pull Requests.

```text
Open PR
  ↓
Read description
  ↓
Inspect Files changed
  ↓
Test the feature
  ↓
Leave substantive review
  ↓
Request changes OR approve
```

Both collaborator PRs need meaningful Owner review evidence.

In addition, **at least one collaborator PR must complete a real feedback cycle**:

```text
Owner submits Changes Requested
        ↓
Collaborator edits locally
        ↓
git add ...
git commit -m "Address review feedback"
git push
        ↓
The SAME Pull Request updates
        ↓
Owner re-reviews
```

This is required. A simple conversation comment is not enough for this checkpoint; the checker looks for a `CHANGES_REQUESTED` review followed by a later commit on that same PR.

### Key Concept

> A Pull Request follows the branch. New commits pushed to that branch automatically appear in the existing Pull Request.

---

# Mission 9 — Merge and Close the Work

The Owner merges approved collaborator PRs into `main`, then self-checks and merges the HTML PR.

Because each PR uses the correct `Closes #...` syntax, the three feature Issues should close when their PRs merge.

The checker requires:

```text
3 merged feature PRs
+
3 closed feature Issues
```

Update your Project to show the completed work.

---

# Mission 10 — Prove Everyone Synced Local `main`

After all three PRs are merged, the checker creates:

```text
🔄 Local Sync Check
```

Every team member must now run locally:

```bash
git switch main
git pull
git rev-parse --short HEAD
```

Then each person comments on **🔄 Local Sync Check** using the exact format:

```text
SYNCED SHORT_SHA
```

Example:

```text
SYNCED a1b2c3d
```

The checker verifies:

- the comment comes from each detected team member;
- it was posted after the feature merges;
- the SHA matches the current remote `main`.

### Quick Check

Why did your local `main` need to be updated after the remote PR merge?

> Local and remote repositories are separate copies and must be synchronized.

---

# Final Mission — Publish with GitHub Pages

The Owner publishes the integrated `main` branch with GitHub Pages.

```text
Repository
   ↓
main
   ↓
GitHub Pages
   ↓
Public Website
```

The automatic checker requests the live site and verifies that:

- the HTML page responds;
- `style.css` responds;
- `script.js` responds;
- HTML references the CSS and JavaScript files;
- CSS contains substantive styling;
- JavaScript contains a real event listener;
- the starter placeholders have been replaced in the integrated project.

A Pages deployment can take time. If the checker runs before deployment finishes, wait for GitHub Pages to complete and trigger another normal repository event or run the checker manually.

---

# Final Reflection — Automatically Checked

After the live site passes, the checker creates:

```text
🧠 Final Reflection
```

Every team member posts one comment beginning with:

```text
REFLECTION:
```

Requirements:

- at least 120 characters;
- explain your own role/contribution;
- use at least two relevant concepts such as `branch`, `commit`, `push`, `Pull Request`, `review`, `merge`, `local`, or `remote`.

Example structure:

```text
REFLECTION: I worked as ... My branch ... The Pull Request ...
```

Do not copy another student's reflection.

---

# Completion

Your team does not submit screenshots as the primary evidence.

Watch:

```text
🚀 GitHub Team Launch Progress
```

The challenge is complete when all automatic checkpoints pass and that Progress Issue closes automatically.

The assessed workflow is:

```text
Issue
→ Project
→ clone
→ branch
→ edit
→ add
→ commit
→ push
→ Pull Request
→ Owner review
→ Changes Requested
→ follow-up commit
→ merge
→ Issue closed
→ switch main
→ pull
→ SHA sync proof
→ GitHub Pages
→ reflection
→ COMPLETE
```

---

## Challenge Rule: No Artificial Merge Conflict

Do not intentionally create a merge conflict during this final challenge. Merge conflicts are a separate extension after the normal collaboration workflow is secure.

# Lesson 8: Git and Version Control

**Phase:** 0 — Git & GitHub  
**Duration:** 45 minutes  
**Official playlist position:** #1  
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)  
**Student repo:** `YourName-Full-Stack-Web-and-AI-Application-Development`

---

## Lesson Goal

Students already know how GitHub collaboration works in the browser. This lesson explains the local version-control system underneath that workflow.

By the end of the lesson, students can:

- explain why version control exists;
- explain `commit = snapshot` and `history = ordered snapshots`;
- distinguish **Git** from **GitHub**;
- distinguish a **local repository** from a **remote repository**;
- explain why branches allow isolated work;
- connect Git concepts to the GitHub workflow they already practiced in Lessons 0–7.

This lesson is conceptual preparation for Lesson 9, where students perform the complete local Git ↔ GitHub workflow with commands.

---

## Today Only

| Role | What |
|---|---|
| **Video** | **Playlist #1** — [A brief introduction to Git for beginners](https://www.youtube.com/watch?v=r8jQ9hVA2qs) |
| **Core concept** | Git tracks project history locally; GitHub hosts and coordinates shared remote work |
| **Guided practice** | Map Git concepts onto the GitHub workflow students already know |
| **Evidence** | `github-foundations/08-git-vs-github.md` |
| **Exit Ticket** | Explain the difference between Git, GitHub, local, remote, commit, and branch |

---

## Retrieve the GitHub Workflow First

Before learning Git terminology, recall the browser workflow already mastered:

```text
Issue
→ Branch / change
→ Commit
→ Pull Request
→ Review
→ Merge
```

Ask:

> If GitHub is the shared collaboration platform, what is happening on a developer's own computer before those changes appear on GitHub?

That question introduces Git.

---

## Git vs GitHub

| Concept | Working meaning |
|---|---|
| **Git** | A distributed version-control system that tracks project history |
| **GitHub** | A platform that hosts Git repositories and adds collaboration features such as Issues, Pull Requests, review, and project tools |
| **Local repository** | The Git repository on your own computer |
| **Remote repository** | A shared copy of the repository hosted somewhere such as GitHub |
| **Commit** | A recorded snapshot of selected changes |
| **Branch** | A movable line of development used to isolate work |

The key relationship is:

```text
Git = version-control engine
GitHub = hosted collaboration platform around Git repositories
```

---

## Why Version Control Exists

Compare these two approaches.

### Manual file copies

```text
project-final
project-final-2
project-final-really-final
project-final-really-final-fixed
```

Problems:

- unclear history;
- difficult comparison;
- difficult collaboration;
- easy to overwrite useful work;
- no reliable record of who changed what and why.

### Git history

```text
one project
→ snapshot A
→ snapshot B
→ snapshot C
```

Git keeps the project and its history together.

---

## Connect Git Concepts to What Students Already Know

Students have already used these ideas on GitHub. Now identify the underlying Git concept.

| What students already did on GitHub | Git concept underneath |
|---|---|
| Create a branch | Separate line of development |
| Commit a change | Record a snapshot |
| View commit history | Inspect recorded snapshots |
| Open a Pull Request | Ask to integrate branch work |
| Merge a Pull Request | Combine approved work into the target branch |

The purpose of this lesson is not to introduce another disconnected vocabulary list. It is to explain the mechanism behind actions students have already performed.

---

## 45-Minute Lesson Flow

| Time | Block |
|---|---|
| **0–10 min** | **Skill Warm-up** — watch playlist #1 |
| **10–15 min** | **Retrieve** — rebuild the GitHub browser workflow from memory |
| **15–22 min** | **Model** — Git vs GitHub; local vs remote; snapshots and branches |
| **22–34 min** | **Guided Practice** — map familiar GitHub actions to Git concepts |
| **34–40 min** | **Independent Rebuild** — explain the same model with a new example |
| **40–45 min** | **Evidence + Exit Ticket** |

---

### Guided Practice

Create `github-foundations/08-git-vs-github.md` containing:

1. A two-column comparison of Git and GitHub.
2. A diagram showing:

```text
LOCAL REPOSITORY                 GITHUB REMOTE
working project                  shared repository
commit history                   branches / PRs / review
```

3. Your own explanation of:
   - commit;
   - branch;
   - local repository;
   - remote repository.
4. A short paragraph answering:

> Why should we understand GitHub's collaboration workflow before learning the local commands that connect to it?

Commit the file with a meaningful message.

---

## Exit Ticket

Without notes, explain:

1. What problem does Git solve?
2. What is the difference between Git and GitHub?
3. What is the difference between local and remote?
4. Why is a commit better described as a snapshot than as ordinary saving?
5. Why do branches matter before a Pull Request?

---

## Common Mistakes

- Saying Git and GitHub are the same thing
- Thinking Git requires GitHub
- Treating `commit` as ordinary file saving
- Thinking a branch is a separate copy of the entire project with no shared history
- Learning terms without connecting them to the GitHub workflow already practiced

---

## Teacher Notes

This lesson comes **after** students have completed browser-based Issues, Pull Requests, review, and merge.

Do not turn this lesson into a command drill. Lesson 9 uses the next official video to connect the local commands to the complete GitHub workflow.

# Lesson 2: Create Your First Course Repository

**Phase:** 0 — Git & GitHub  
**Duration:** 45 minutes  
**Official playlist position:** #3  
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)  
**Student repo:** `YourName-Full-Stack-Web-and-AI-Application-Development`

---

## Lesson Goal

Students create the **long-term repository they will use for this course** after first learning the whole GitHub workflow and the Markdown needed to write a useful README.

This is not the students' first encounter with GitHub. In Lesson 0 they already completed a small Hello World workflow. In Lesson 1 they learned the Markdown syntax needed to document a repository properly.

By the end of this lesson, students can:

- create a new GitHub repository intentionally rather than as a tutorial click-through;
- initialize it with a useful `README.md`;
- create a `learning-log.md` file;
- explain why the course repository is different from the temporary Hello World practice repository;
- verify repository visibility, files, and commit history.

---

## Today Only

| Role | What |
|---|---|
| **Video** | **Playlist #3** — [How to create your first GitHub repository: A beginner's guide](https://www.youtube.com/watch?v=-RZ03WHqkaY) |
| **Prerequisite** | Lesson 0 GitHub workflow + Lesson 1 Markdown |
| **Guided practice** | Create and structure the official course repository |
| **Evidence** | Public repository `YourName-Full-Stack-Web-and-AI-Application-Development` |
| **Exit Ticket** | Explain how this repository differs from the Lesson 0 Hello World practice repository |

---

## Connect Back to Earlier Lessons

You have already seen the collaboration workflow:

```text
Repository
→ Branch
→ Make changes
→ Commit
→ Pull Request
→ Review
→ Merge
```

You have also learned how Markdown creates readable GitHub documentation.

Today those two ideas come together in the repository that will hold your work for the rest of the course.

---

## Core Vocabulary

| Term | Meaning |
|---|---|
| **repository** | A project together with its tracked history |
| **README** | The front page that explains the repository's purpose and structure |
| **commit history** | The recorded snapshots showing how a project changes over time |
| **public / private** | Who is allowed to view the repository |
| **course repository** | The long-term repository used to organize this course's work and evidence |

---

## 45-Minute Lesson Flow

| Time | Block |
|---|---|
| **0–10 min** | **Skill Warm-up** — watch playlist #3 |
| **10–14 min** | **Retrieve** — compare Hello World practice with a long-term project |
| **14–20 min** | **Model** — inspect the structure of a useful course repository |
| **20–33 min** | **Guided Practice** — create and structure the course repository |
| **33–40 min** | **Independent Verification** — verify repository structure and history without prompts |
| **40–45 min** | **Explain + Evidence** — explain the role this repository will play in the course |

---

### 0–10 min: Skill Warm-up

Watch **playlist #3 only**: [How to create your first GitHub repository: A beginner's guide](https://www.youtube.com/watch?v=-RZ03WHqkaY).

While watching, focus on:

- repository name;
- README;
- visibility;
- initialization;
- where commit history appears.

Do not treat this as your first encounter with a repository. Compare what you see with the Hello World repository you created in Lesson 0.

---

### 10–14 min: Retrieve

Discuss:

1. Why did we create the Hello World repository in Lesson 0?
2. Why do we now need a separate course repository?
3. Why is it useful that you already know Markdown before creating the README?
4. What should a repository contain if we want to use it for many weeks of work?

Key idea:

> The Hello World repository helped us **learn the workflow**. The course repository will help us **use the workflow repeatedly**.

---

### 14–20 min: Model a Useful Course Repository

Teacher shows the required repository structure and explains why each artifact exists.

Required repository name:

```text
YourName-Full-Stack-Web-and-AI-Application-Development
```

Initial structure:

```text
README.md
learning-log.md
```

The README should not be an empty placeholder. Students should use the Markdown skills from the previous lesson to make it readable and useful.

Recommended README structure:

```markdown
# Full-Stack Web and AI Application Development

## Purpose
A short explanation of what this repository is for.

## Learning Goals
- Goal 1
- Goal 2
- Goal 3

## Evidence
Course work and learning evidence will be added here throughout the course.
```

---

### 20–33 min: Guided Practice

1. Create the public repository:
   `YourName-Full-Stack-Web-and-AI-Application-Development`.
2. Do **not** fork the teacher repository.
3. Initialize the repository with `README.md`.
4. Edit the README using Markdown and include:
   - the course name;
   - a short statement of the repository's purpose;
   - three learning goals;
   - one clearly formatted section using headings and a list.
5. Create `learning-log.md`.
6. Add a Lesson 0 workflow entry and a Lesson 1 Markdown entry.
7. Add a Lesson 2 repository-creation entry.
8. Use a meaningful commit message such as:
   `Create course repository and learning log`.

As you work, identify which actions create **new snapshots in repository history**.

---

### 33–40 min: Independent Verification

Close the video and instructions. From the GitHub dashboard, independently locate your repository and verify:

- exact repository name;
- public visibility;
- rendered `README.md`;
- `learning-log.md`;
- meaningful commit history.

Then locate the Hello World repository from Lesson 0 and explain the different purpose of the two repositories.

---

### 40–45 min: Explain + Evidence

Complete this comparison:

| Repository | Purpose | Will I keep using it throughout the course? |
|---|---|---|
| Lesson 0 Hello World | Practice the GitHub Workflow | No — primarily a learning exercise |
| Course repository | Store course work, history, and evidence | Yes |

Add to `learning-log.md`:

```markdown
## Lesson 2 — Course Repository
- What I created:
- Why this repository exists:
- How Markdown helped me create the README:
- How it differs from Hello World:
- Evidence link:
```

---

## Common Mistakes

- Thinking this lesson simply repeats the Hello World activity
- Naming the course repository incorrectly
- Forking the teacher repository instead of creating the student's own repository
- Treating README as an empty placeholder
- Forgetting to use Markdown structure in the README
- Creating files without checking commit history
- Using vague commit messages such as `update`
- Publishing passwords, tokens, recovery codes, or other private information

---

## Teacher Notes

The dependency order is intentional:

```text
Lesson 0 — whole GitHub workflow
Lesson 1 — Markdown
Lesson 2 — create the real course repository
```

Students now have enough context to understand what a repository is for and enough Markdown knowledge to create a meaningful README immediately.

The following lessons stay in the GitHub browser before local Git is introduced.

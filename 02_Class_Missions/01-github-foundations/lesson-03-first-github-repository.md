# Lesson 3: Create Your Course Repository and Connect the Workflow

**Phase:** 0 — Git & GitHub  
**Duration:** 45 minutes  
**Official playlist position:** #3  
**Flow:** [classroom-flow-45-min.md](../shared/classroom-flow-45-min.md)  
**Student repo:** `YourName-Full-Stack-Web-and-AI-Application-Development`

---

## Lesson Goal

Students create the **long-term repository they will use for this course** and connect what they already understand about local Git states to a persistent GitHub project.

This is **not the students' first exposure to creating a GitHub repository**. In Lesson 0, students already created a small Hello World repository while learning the whole GitHub Workflow. That repository was a guided conceptual practice.

Today students create the repository that will hold their course work and learning evidence over time.

By the end of the lesson, students can distinguish:

```text
Lesson 0 Hello World repo = guided practice for understanding the workflow
Course repo = long-term project and evidence repository
```

---

## Today Only

| Role | What |
|---|---|
| **Video** | **Playlist #3** — [How to create your first GitHub repository: A beginner's guide](https://www.youtube.com/watch?v=-RZ03WHqkaY) |
| **Core concept** | A GitHub repository is a persistent project space with tracked history |
| **Guided practice** | Create and structure the official course repository |
| **Evidence** | Public repository `YourName-Full-Stack-Web-and-AI-Application-Development` |
| **Exit Ticket** | Explain how this repository differs from the Lesson 0 Hello World practice repository |

---

## Connect Back to Earlier Lessons

You have already seen the whole GitHub collaboration workflow:

```text
Repository
→ Branch
→ Make changes
→ Commit
→ Pull Request
→ Review
→ Merge
```

You have also learned the local Git state model:

```text
Working Directory
→ Staging Area
→ Commit History
```

Today we create the **course repository** that later lessons will use to connect these two models in real development work.

---

## Core Vocabulary

| Term | Meaning |
|---|---|
| **repository** | A project together with its tracked history |
| **README** | The front page that explains the purpose and structure of a repository |
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
3. What should a repository contain if we want to use it for many weeks of work?

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

The README should identify the course and explain the repository's purpose. The learning log will accumulate evidence across later lessons.

---

### 20–33 min: Guided Practice

1. Create the public repository:
   `YourName-Full-Stack-Web-and-AI-Application-Development`.
2. Do **not** fork the teacher repository.
3. Initialize the repository with `README.md`.
4. In the README, add:
   - the course name;
   - a short statement of the repository's purpose;
   - three learning goals.
5. Create `learning-log.md`.
6. Add the saved Lesson 1 and Lesson 2 evidence references or entries.
7. Add a Lesson 3 entry.
8. Use a meaningful commit message such as:
   `Create course repository and learning log`.

As you work, identify which actions create **new snapshots in repository history**.

---

### 33–40 min: Independent Verification

Close the video and instructions. From the GitHub dashboard, independently locate your repository and verify:

- exact repository name;
- public visibility;
- `README.md`;
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
## Lesson 3 — Course Repository
- What I created:
- Why this repository exists:
- How it differs from Hello World:
- Evidence link:
```

---

## Common Mistakes

- Thinking this lesson simply repeats the Hello World activity
- Naming the course repository incorrectly
- Forking the teacher repository instead of creating the student's own repository
- Treating README as an empty placeholder
- Creating files without checking the resulting commit history
- Using vague commit messages such as `update`
- Publishing passwords, tokens, recovery codes, or other private information

---

## Teacher Notes

The conceptual distinction matters:

- **Lesson 0:** whole-workflow mental model and guided GitHub experience;
- **Lesson 1:** why version control exists and why commits are snapshots;
- **Lesson 2:** local Git state model and the commands that operate on it;
- **Lesson 3:** establish the long-term GitHub repository students will use for authentic course work.

Lesson 4 can now focus on bringing existing files/evidence into that course repository without pretending students are seeing GitHub for the first time.

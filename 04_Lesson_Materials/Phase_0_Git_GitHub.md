# Phase 0: Git & GitHub

## Phase Goal
Learn Git and GitHub as the first course phase — your long-term project archive and portfolio evidence before AI literacy and coding.

**Daily lesson plans (6 × 80 min):** `07_Daily_Lesson_Plans/Phase_0_Git_GitHub/` — teacher session plans. Index: `07_Daily_Lesson_Plans/README.md`.

**Class mission guides (students):** `07_Class_Mission_Guides/Phase_0_Git_GitHub/` — student-facing missions students open during class. Index: `07_Class_Mission_Guides/README.md`.

**Supplement:** `git-github-unit/` — extended handouts, parent overview, detailed rubrics. Unit repo name for daily lessons: `cs-learning-log`. Portfolio sign-off may still use `student-portfolio` per `Student_GitHub_Repository_Guide.md` — teacher chooses merge path.

## Key Concepts
- What Git and GitHub are; repository, commit, branch, pull request, merge.
- Clone, push, pull, and `.gitignore`.
- Markdown for README files.
- GitHub as **evidence of real learning**.
- **Course repo vs student repo** — see `01_Student_Templates/Student_GitHub_Repository_Guide.md`.

## Required Student Output

**Phase 0 minimum (required to pass):** See **Phase 0 Minimal Setup — What to Create** and **Phase 0 — Three-Lesson Checklist** in `01_Student_Templates/Student_GitHub_Repository_Guide.md`.

Students must deliver:

- A public personal repository: `student-portfolio` or `student-name-full-stack-ai-portfolio`
- Five files with real content: `README.md`, `.gitignore`, `profile/about-me.md`, `profile/learning-goals.md`, `reflections/weekly-reflection-01.md`
- Root README from `01_Student_Templates/student-root-README-template.md`
- Phase 0 Final GitHub Task (below): branch `update-profile` → PR → merge
- Assessment: `02_Assessment/Student_GitHub_Assessment.md`

**Optional early scaffold** (empty folders only — not required for Phase 0 sign-off):

```text
student-portfolio/
├── ai-literacy/
├── ai-math-bridge/
├── figma-design/
├── typescript-practice/
├── nextjs-frontend/
├── fastapi-backend/
├── full-stack-mini-project/
├── final-ai-app/
└── certificates/
```

Add these when your teacher asks, or when you reach each phase. The full target structure is in the student guide.

---

## Phase 0 Final GitHub Task

Each student must:

1. Create a personal GitHub repository.
2. Name it `student-name-full-stack-ai-portfolio`.
3. Add a root `README.md`.
4. Create the required folder structure.
5. Make at least one commit.
6. Create a branch called `update-profile`.
7. Edit `README.md` on that branch.
8. Open a pull request.
9. Merge the pull request.
10. Submit the GitHub repository link to the teacher.

This proves students can use: repository, README, commit, branch, pull request, merge, and GitHub project organization.

---

## Suggested Lesson Count
3 lessons.

## Lesson Sequence

### Lesson 1: Markdown and Your First Repo
- **Goal:** Write Markdown and create the personal portfolio repository.
- **Warm-up:** Plain text vs. formatted Markdown — which is easier to read?
- **Mini Lesson:** Course repo vs student repo; Markdown basics; create repo and first README.
- **Guided Practice:** Create GitHub account (if needed), create repo, add folder scaffold and README from template.
- **Independent Work:** Fill in README: name, grade, course goal, link placeholders.
- **Exit Ticket:** Write a Markdown heading, list, and link from memory.
- **Homework:** **Markdown Crash Course**; start **GitHub Skills: Introduction to GitHub**.

### Lesson 2: Commits and Git Workflow
- **Goal:** Understand commits, push, and clear commit messages; `.gitignore` basics.
- **Warm-up:** "What could go wrong if you never saved versions of your work?"
- **Mini Lesson:** Commit, push, pull; what not to upload (`node_modules`, `.env`); personal access token if needed.
- **Guided Practice:** Multiple commits with clear messages; add `profile/` and `reflections/` folders.
- **Independent Work:** Add profile README content (optional stretch).
- **Exit Ticket:** Explain what a commit is in one sentence.
- **Homework:** Finish GitHub Skills through "Commit changes."

### Lesson 3: Branch, Pull Request, and Phase 0 Capstone
- **Goal:** Complete Phase 0 Final GitHub Task (branch `update-profile` → PR → merge).
- **Warm-up:** "Why might two people edit the same project at once?"
- **Mini Lesson:** Branch, checkout/switch, merge, pull request. Demo full workflow.
- **Guided Practice:** Students complete steps 6–9 of Phase 0 Final GitHub Task.
- **Independent Work:** **Learn Git Branching** — early levels (optional).
- **Exit Ticket:** What is a pull request?
- **Homework:** Submit repo link; prepare `ai-literacy/` for Phase 2.

## Submission Requirements
- [ ] Public personal repo with Phase 0 minimum structure (five files — see student guide).
- [ ] Clear root README.md (template-based).
- [ ] `profile/about-me.md` and `profile/learning-goals.md` complete.
- [ ] `reflections/weekly-reflection-01.md` complete.
- [ ] `.gitignore` present.
- [ ] Multiple meaningful commits.
- [ ] Branch `update-profile` with merged PR.
- [ ] Submission checklist in `Student_GitHub_Repository_Guide.md` completed.
- [ ] Repository link submitted to teacher.

## Common Student Problems
- Authentication fails → prepare a personal access token guide.
- Vague commit messages → require messages that say what changed.
- Forgetting to push → "saved locally" is not "on GitHub."
- Committing `.env` or `node_modules` → review `.gitignore` section in student guide.
- Confusing course repo with student repo → re-read README "Course Repository vs Student Repository."

## Teacher Notes
> Git is Phase 0 so every student has a home for evidence before AI literacy (Phase 2) and AI Math Bridge (Phase 3). Budget extra time for authentication and the PR workflow.

## AI Lens Reflection
Ask students: *"When you later use AI to help write code, how will commits and README show what you understood versus what AI generated?"* Save in `reflections/`.

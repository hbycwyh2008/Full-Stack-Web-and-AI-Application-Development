# How to Copy This Folder to the Student Hub Repository

**For teachers — NB-CS-AI-Student-Hub setup**

This file explains how to publish the student-facing course hub as a **separate repository**. Students should receive access to the Student Hub only — not the private master curriculum repository.

---

## Steps

1. **Create a new GitHub repository** named `NB-CS-AI-Student-Hub`.

2. **Copy all student-facing files** from `01_Student_Hub_Export/` into the new repository:

   ```text
   README.md
   Course_Overview.md
   Weekly_Agenda_Template.md
   Student_GitHub_Guide.md
   Portfolio_Requirements.md
   Assignment_Submission_Guide.md
   AI_Use_Policy_Student_Version.md
   Reflection_Template.md
   Project_Showcase_Guide.md
   Course_FAQ.md
   ```

   Optional: include this file (`HOW_TO_COPY_TO_STUDENT_HUB.md`) for teacher reference, or omit it from the student repo.

3. **Do not copy teacher-only folders** from the master repository, including:

   - `04_Teacher_Only/`
   - `05_Assessment_and_Rubrics/` (full rubrics)
   - `08_AI_and_Cursor_Prompts/`
   - `09_Project_Bank/`
   - `03_Course_Units/` (full class missions and lesson plans)

4. **Do not copy the private master repository** as a whole. Export only the sanitized Student Hub files listed above.

5. **Give students access only to the Student Hub repository** (and their own GitHub Classroom assignment repos).

6. **Use GitHub Classroom** for assignment repositories. Copy templates from `02_GitHub_Classroom_Templates/` into organization template repos — one template per assignment.

7. **Keep the private master curriculum repository private.** Continue developing full curriculum materials there; export only what students need.

---

## After Publishing

- Link the Student Hub from your LMS or class page.
- Point students to `README.md` on day one.
- Create GitHub Classroom assignments from the first three templates when ready:
  - `lesson-01-github-readme-template`
  - `lesson-02-markdown-portfolio-template`
  - `lesson-03-html-css-profile-page-template`

---

## Checklist

- [ ] `NB-CS-AI-Student-Hub` repository created
- [ ] Student Hub files copied (no teacher-only folders)
- [ ] Students invited to Student Hub only
- [ ] Master curriculum repo remains private
- [ ] GitHub Classroom assignments created from templates

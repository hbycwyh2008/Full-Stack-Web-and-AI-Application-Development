# Full-Stack Web and AI Application Development

## Private Master Curriculum Repository

**Chongqing Norin Bashu School for Children of Foreign Personnel**  
**Computer Science and AI Pathway**  
Designed by **Morgan Wang**

> **This repository is the private master curriculum repository.** It is not intended to be directly shared with students or handed over as a complete school-owned curriculum package. Student-facing materials should be copied or exported into a separate **Student Hub** repository or **GitHub Classroom** template repositories.

---

## Repository Purpose

This repository stores the **complete curriculum design** for the Computer Science and AI Pathway, including:

- Teacher-only materials and detailed lesson plans
- Detailed lesson plans and class missions
- Project banks and capstone specifications
- Rubrics and assessment models
- Student template masters
- Cursor prompts and AI prompts
- Starter code and classroom-ready materials

It serves as the **source repository** from which student-facing materials and GitHub Classroom templates are exported.

---

## Important Usage Boundary

| Layer | Location | Who sees it |
|---|---|---|
| **Private master** | This repository (keep **Private** on GitHub) | Teachers, curriculum designers |
| **Student Hub** | `01_Student_Hub_Export/` → separate repo | Students |
| **GitHub Classroom** | `02_GitHub_Classroom_Templates/` → org templates | Students per assignment |

**The complete master repository should not be used directly as the student course repository.**

---

## Repository Map

```text
/
├── README.md                          ← you are here
├── LICENSE.md                         ← dual license (see NOTICE.md)
├── NOTICE.md                          ← curriculum IP notice
├── 00_Admin_Curriculum_Package/       ← school leaders, parents, curriculum review
├── 01_Student_Hub_Export/             ← copy to separate Student Hub repo
├── 02_GitHub_Classroom_Templates/     ← copy to GitHub Classroom template repos
├── 03_Course_Units/                   ← units + Class_Missions + resources
├── 04_Teacher_Only/                   ← lesson plans, scripts, answer keys (planned)
├── 05_Assessment_and_Rubrics/         ← evidence system, rubrics, AP alignment
├── 06_Student_Templates_Master/       ← master copies of student templates
├── 07_Starter_Code_Master/            ← starter and demo code
├── 08_AI_and_Cursor_Prompts/          ← teacher and student prompts
├── 09_Project_Bank/                   ← mini, unit, final, extension projects
└── 10_Archive/                        ← legacy folders and superseded materials
```

---

## What Can Be Shared With Students

Export **only** from:

- `01_Student_Hub_Export/` — course overview, GitHub guide, AI policy, reflections
- `02_GitHub_Classroom_Templates/` — per-assignment starter files and instructions
- Sanitized rubric summaries (when appropriate) — not full grading notes

Students work in **their own GitHub repositories** created via GitHub Classroom.

---

## What Should Stay Teacher-Only

- `04_Teacher_Only/` — daily lesson plans, teacher scripts, internal notes
- `05_Assessment_and_Rubrics/` — full rubrics with grading notes
- `08_AI_and_Cursor_Prompts/Teacher_Prompts/` — full Cursor prompts
- `09_Project_Bank/` — complete project specifications
- Full `03_Course_Units/Class_Missions/` teacher notes
- This master repository as a whole

---

## How to Use This Repository

### For Teachers

1. Read [04_Teacher_Only/Teacher_Onboarding_Guide.md](04_Teacher_Only/Teacher_Onboarding_Guide.md)
2. Review [00_Admin_Curriculum_Package/CS_AI_Pathway_Overview.md](00_Admin_Curriculum_Package/CS_AI_Pathway_Overview.md)
3. Open [03_Course_Units/Class_Missions/README.md](03_Course_Units/Class_Missions/README.md) during class
4. Use [04_Teacher_Only/Detailed_Lesson_Plans/](04_Teacher_Only/Detailed_Lesson_Plans/) for scripts
5. Assess with [05_Assessment_and_Rubrics/](05_Assessment_and_Rubrics/)

### For Curriculum Review / Admin

Start at [00_Admin_Curriculum_Package/README.md](00_Admin_Curriculum_Package/README.md)

### For Exporting to Students

Start at [01_Student_Hub_Export/README.md](01_Student_Hub_Export/README.md)

---

## Recommended Workflow

1. **Develop** full materials in this private master repo.
2. **Export** selected student-facing materials into `01_Student_Hub_Export/`.
3. **Copy** sanitized assignment templates into GitHub Classroom template repositories.
4. **Students** work in their own GitHub Classroom assignment repositories.
5. **Collect** student evidence through GitHub links, reflections, reports, and presentations.

---

## Learning Flow (Capstone Course)

```text
Git & GitHub → Notion Portfolio → AI Literacy → AI Math Bridge
→ Figma → TypeScript → Next.js → FastAPI → RAG Concepts
→ Full-Stack Integration → Cursor Capstone → AI School Assistant
```

**Final project:** AI School Assistant — document-grounded Q&A with sources.

---

## Legacy Content

Former top-level folders (`00_Course_Overview/`, `01_Student_Start/`, etc.) are preserved in [10_Archive/Legacy_Top_Level/](10_Archive/Legacy_Top_Level/) with migration notes.

---

## License

See [LICENSE.md](LICENSE.md) and [NOTICE.md](NOTICE.md).

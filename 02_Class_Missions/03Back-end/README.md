# Minimal Back-end — Class Missions

**Your repository for these classes:** `[studentName]-Full-Stack-Web-and-AI-Application`

**Goal:** Build a **minimal FastAPI backend** with optional database layers, aligned with course **Phase 7–8** and full-stack integration later.

Open **one mission file per class** and follow it from top to bottom.

> **Prerequisite:** Python 3.x installed; [Front-end Phase 4](../Front-end%20_web+knowledge/Phase_4_React_and_NextJS/) or equivalent `fetch` experience recommended.

> **Coursera:** [Introduction to FastAPI and Backend Development Fundamentals](https://www.coursera.org/learn/packt-introduction-to-fastapi-and-backend-development-fundamentals-7zg6w) — Course 1 of the [Ultimate Guide to FastAPI specialization](https://www.coursera.org/specializations/packt-ultimate-guide-to-fast-api-and-backend-development). **One Coursera module per class.**

> **Course alignment:** Lessons 1–6 match **course Phase 7 (lightweight FastAPI)**. Lessons 7–10 add **database depth** for students who continue Phase 02.

---

## Phase Order

| Phase | Folder | Classes | Focus |
|---|---|---:|---|
| **01** | [Phase_01_FastAPI/](Phase_01_FastAPI/) | 1–6 | Routes, CRUD, Pydantic, `/docs` |
| **02** | [Phase_02_Database/](Phase_02_Database/) | 7–10 | SQLite, SQLModel, async, PostgreSQL preview |

---

## Student Folder

```text
fastapi-backend/
├── main.py
├── requirements.txt
├── .env.example          ← never commit real .env
├── README.md
└── (Phase 02 adds models/, db/, etc.)
```

**Do not commit API keys.** Use `.gitignore` for `.env`.

---

## 90-Minute Flow (Every Class)

```text
0–15   Individual Learning (one Coursera module)
15–27  Talk Robin / Group Discussion
27–37  Group Answer
37–45  Entry Points Check
45–70  Mission Task
70–80  Independent Rebuild / Exit Check
80–90  Submission of Evidence
```

Details: [classroom-flow.md](../shared/classroom-flow.md)

---

## Connection to the Full Course

```text
Minimal Back-end Phase 01  →  course Phase 7 (FastAPI in /docs)
Minimal Back-end Phase 02  →  optional DB depth before Phase 8 RAG
Course Phase 9             →  Next.js ↔ FastAPI + CORS
```

---

Educational materials in this folder are copyright © 2026 Wang Morgan. All Rights Reserved.

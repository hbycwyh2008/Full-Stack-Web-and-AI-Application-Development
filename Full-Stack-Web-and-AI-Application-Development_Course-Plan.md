# Software Design, Development & AI — Course Plan

Current implementation detail: [2026-10-19 Teaching Plan](00_Course_Overview/Current_Teaching_Plan.md).

## 1. Course Identity

**Course Name:** Software Design, Development & AI  
**Repository:** Full-Stack-Web-and-AI-Application-Development (legacy repository name retained)

### Course Thesis

Students should leave this course understanding both **what computer science is** and **how software products are actually developed**. Computer science is not identical to programming; programming is one tool used to study and build computational systems.

The course is process-first, user-centered, evidence-driven, and activity-based.

---

## 2. Learning Priorities

### Primary Outcomes

Students can independently or collaboratively:

1. explain computer science as the study of computation, information, algorithms, abstraction, systems, and their interaction with people and society;
2. run an iterative software-development lifecycle;
3. use GitHub for planning, version control, collaboration, review, and release;
4. plan and conduct HCI research ethically;
5. synthesize user evidence into problem statements, requirements, and success criteria;
6. create user flows, information architecture, wireframes, reusable components, responsive prototypes, and testable high-fidelity designs in Figma;
7. run design critique and usability testing, then revise based on evidence;
8. reason critically about AI using Melanie Mitchell's _Artificial Intelligence: A Guide for Thinking Humans_.

### Secondary Outcomes — Programming

Students develop practical implementation fluency in:

- semantic HTML;
- CSS typography, spacing, layout, Flexbox, Grid, responsive design, and accessibility;
- JavaScript values, variables, conditions, loops, functions, arrays/objects, DOM/events, forms, state, persistence, APIs, and debugging.

### Optional Outcomes

Python foundations and small AI-application/API extensions may be taught after the core pathway if time remains.

---

## 3. What Is Not Core

React/Next.js, FastAPI, MongoDB, RAG, Kaggle, ML model training, Cursor-specific workflows, and Notion portfolio work are enrichment only. They must never displace HCI, Figma, GitHub workflow, core web programming, testing, AI literacy, or the capstone lifecycle.

---

## 4. Canonical Lesson Anchors (Flexible Meeting Count)

| Lessons | Unit | Main Evidence |
|---|---|---|
| 00–01 | CS Orientation + Software Lifecycle | CS definition, computational-thinking problem solution, lifecycle map, product teardown |
| 02–04 | GitHub Foundations | Docs/Skills: repo, README, commits, history |
| 05–08 | HCI Needfinding + Brainstorming (CS6750 backbone) | needfinding + ask/observe + bias check + survey/sample check + evidence synthesis + design alternatives |
| 09–11 + skill labs | Figma Prototyping + Evaluation + Iteration | Coursera tools; knowledge/practical checks; Skill Board → own prototype evaluation → revision/retest |
| 12–15 | HTML/CSS Implementation | semantic/responsive implementation from Figma |
| 16–20 + game practice | JavaScript + Computational Thinking | HKUST foundations + Canvas games; independent modifications, tests and debugging |
| 21–24 | AI Literacy Foundation | six themes: AI, learning, tasks, failure, verification and responsibility |
| 25–26 | Testing + Release | usability findings, QA/accessibility fixes, deployed release |
| 27–32 | Capstone Full Cycle | research → design → build → test → release → retrospective |

Three Python lessons and short AI-application extensions are optional after the core.

---

## 5. AI Literacy Unit

**Primary text:** Melanie Mitchell, _Artificial Intelligence: A Guide for Thinking Humans_.

The current ordinary-class requirement is the [six-theme foundation path](02_Class_Missions/06-ai-literacy/foundation-path.md), initially six 45-minute meetings in the L21–L24 block. Short in-class book selections are paired with accessible cases. Students learn to recognize AI, explain training/prediction and task input/output, analyze failure, verify outputs and act responsibly.

The deeper twelve-meeting reading route is preserved as an extension. It is not additional compulsory work, and the ASC eight-session plan is not copied into this class. No required pre-class reading or full-chapter homework. Responsible-use habits continue during development; a teacher can explicitly choose a parallel timetable, but there is no automatic new 15-minute lecture routine.

Advanced architecture, backpropagation, RL algorithms, mathematical detail and extended analogy theory are deferred. Modern prompting/verification exercises are labeled supplements, not attributed to the original book.

---

## 6. AP CSP Relationship

The course prepares students strongly for parts of AP CSP, especially Creative Development, Algorithms and Programming, Computational Solution Design, Abstraction, Code Analysis, collaboration, and responsible computing. It provides partial preparation for Data and Impact of Computing.

It does **not** replace AP CSP. Topics such as binary representation, data compression, Internet protocols, fault tolerance, distributed computing, AP pseudocode conventions, Create task requirements, and AP-specific exam practice remain for the AP CSP course.

This relationship is documented separately and is not repeated in Lesson 00,
which focuses on defining computer science through evidence.

Official source: https://apcentral.collegeboard.org/courses/ap-computer-science-principles

---

## 7. Classroom Design

Lessons use varied activity structures: card sorting, reverse engineering, investigation, role simulation, research, affinity mapping, design studios, critique, code tracing, debugging, case analysis, structured discussion, usability labs, and development sprints.

A common reasoning backbone is:

```text
encounter evidence → make sense of it → decide/build → test/critique → revise → preserve evidence
```

The teacher is a facilitator and technical/HCI coach. Explanation is brief and just-in-time.

---

## 8. Final Project

Students release a user-centered software product for a researched problem. Required evidence includes user research, synthesis, requirements, Figma design, GitHub history, HTML/CSS/JavaScript implementation, usability/technical QA, release notes, deployment, iteration, and retrospective.

**AI implementation is optional.** The AI literacy unit is assessed independently; students do not have to force AI into the capstone.

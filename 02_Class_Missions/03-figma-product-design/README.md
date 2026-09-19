# 03 — UX/UI + Figma Product Design (Design & Evaluate)

This unit continues directly from HCI needfinding. Students do **not** learn Figma as an isolated drawing tool. They use it to turn evidence-backed user needs into a testable interface, evaluate that interface, and improve it.

**Teacher knowledge backbone:** Georgia Tech OMSCS CS6750  
**Primary student-facing course:** Meta — [Principles of UX/UI Design](https://www.coursera.org/learn/principles-of-ux-ui-design)  
**Optional visual-design practice:** Scrimba — [Intro to UI Design Fundamentals](https://scrimba.com/intro-to-ui-design-fundamentals-c0q)

Canonical CS6750 map: [../02-hci-user-research/omscs-cs6750-mapping.md](../02-hci-user-research/omscs-cs6750-mapping.md)  
Design/evaluation card: [design-evaluation-checklist.md](design-evaluation-checklist.md)  
Exact Meta clip map: [meta-ux-ui-video-map.md](meta-ux-ui-video-map.md)

## Design loop

~~~text
Evidence-backed need
  → 3 different paper alternatives
  → choose one direction + user flow
  → build one low-fi Figma wireframe
  → Core-3 design review
  → usability task test
  → revise
  → build high-fi interactive prototype
  → test again
  → change log
~~~

### Important change from the old version

Students no longer build **three full Figma prototypes**.

They still generate **three genuinely different alternatives**, but these stay fast and cheap in Lesson 08. Only the selected direction moves into Figma. This preserves design-alternative thinking without wasting beginner time polishing three interfaces.

## Course Core 3 design principles

CS6750 covers a much larger set of principles and heuristics. For this G7 unit, students repeatedly apply only three core design checks:

| Core principle | Student question |
|---|---|
| **Affordance / signifier** | Can I tell **what I can do**? |
| **Mapping** | Can I predict **what will happen** when I do it? |
| **Constraints** | Does the interface prevent or reduce **invalid / mistaken actions**? |

These are the **course Core 3**, not a claim that CS6750 contains only three principles.

Other ideas — feedback/status, consistency, accessibility, hierarchy, typography, contrast — are still used where needed, but they are not added as another memorization list.

## Lessons

| Lesson | Student-facing input | Main work | Durable evidence |
|---|---|---|---|
| [08 — Brainstorm Alternatives](lesson-08-brainstorm-alternatives.md) | CS6750 3.4 selected excerpt / teacher modeling | 3 paper alternatives + one user flow | Alternative sketches + rationale |
| [09 — Figma Foundations + Low-Fi Wireframe](lesson-09-figma-foundations-low-fi-wireframe.md) | Meta Module 3 selected Figma clips | Learn Figma by building the chosen flow | 3–5 screen low-fi wireframe |
| [10 — Evaluate Low-Fi + Revise](lesson-10-evaluate-low-fi-revise.md) | Meta Module 2 + Module 3 usability-testing clips | Core-3 review + real task test | Evaluation sheet + revision list |
| [11 — High-Fi Interactive Prototype + Test Again](lesson-11-high-fi-interactive-prototype-retest.md) | Meta Module 4 selected prototype clips | Components + interactions + second test | Clickable prototype + change log |

## Resource roles

### Meta = main student video spine

Use selected short videos, not the full course.

- **Module 2 — Evaluating Interactive Design:** optional support for designer review
- **Module 3 — Applied Design Fundamentals:** required L09 **Frames, layers and basic shapes** + required L10 **Usability testing**
- **Module 4 — Designing your UI:** required L11 **Moving from design to prototyping**

One required video per class. Extra Meta clips are support, not automatic assignments.

### CS6750 = teacher / conceptual backbone

Use it to preserve the deeper design life cycle:

~~~text
Needfinding → Alternatives → Prototyping → Evaluation → Iterate
~~~

Students do not need graduate-level depth.

### Scrimba = optional visual craft

After students can already build in Figma, selected Scrimba UI Design Fundamentals clips may reinforce:

- whitespace;
- alignment;
- contrast;
- scale;
- typography;
- visual hierarchy.

Scrimba is **not** the Figma or UX-research backbone.

## Classroom pattern

~~~text
Short video input
→ teacher model
→ guided design-along
→ independent rebuild / transfer
→ evidence
~~~

The student should always produce something after the video.

## Evaluation has two passes

### 1. Designer review

Use the **Core 3**:

- Affordance / signifier
- Mapping
- Constraints

### 2. User task test

Give a user a task without telling them where to click.

Record:

- task completed? yes / no;
- pauses / wrong turns;
- help requested;
- exact confusion words;
- what must change.

## Design → Build mastery gate

Before Lesson 12 implementation, the prototype must satisfy all of these:

- [ ] one evidence-backed main task is represented from start to success;
- [ ] a peer completes that task without facilitator help;
- [ ] no unresolved **MUST** usability blocker remains;
- [ ] the Core 3 is checked on the revised design;
- [ ] at least two revisions are traceable to evaluation evidence;
- [ ] the before/after change log is complete.

If the gate fails, revise the prototype before coding.

## Standard

A pretty screen is not evidence of a usable interface.

By the end of this block, students must be able to answer:

> **What user need does this interface address, what evidence changed the design, and can another person complete the main task?**

# 03 — Figma: Prototype → Evaluate → Iterate

This unit begins **after** needfinding, evidence synthesis, and brainstorming are complete.

Students do not use Figma to decide what the user needs. They use Figma to make one selected idea **testable**, evaluate it, and improve it from evidence.

**Theory backbone:** Georgia Tech OMSCS CS6750  
**Tool:** Figma  
**Lessons:** **09–11**

Canonical CS6750 map: [../02-hci-user-research/omscs-cs6750-mapping.md](../02-hci-user-research/omscs-cs6750-mapping.md)  
Design/evaluation card: [design-evaluation-checklist.md](design-evaluation-checklist.md)  
Student submission templates: [student-templates/](student-templates/README.md)  
Teacher quick check: [HCI + Figma L05–L11](../../04_Assessment/HCI_Figma_L05-L11_Quick_Check.md)  
End-of-unit test: [Figma Design Cycle Unit Test](../../04_Assessment/Figma_Design_Cycle_Unit_Test.md)  
Teacher key: [Figma Design Cycle Unit Test Teacher Key](../../04_Assessment/Figma_Design_Cycle_Unit_Test_Teacher_Key.md)

## Current Tool Learning and Shared Evaluation Practice

- [Coursera Figma selection + exercise-file access](coursera-learning-map.md)
- [Figma skills: knowledge Quiz 20 + independent practical 80](../../04_Assessment/Figma_Skills_Quiz_and_Practical.md)
- [OMSCS CS6750 required evaluation-video selection + teaching order](coursera-learning-map.md#required-cs6750-evaluation-video-excerpts)
- [Weather App evaluation lab: heuristic evaluation + usability testing](weather-app-evaluation-lab.md)
- [Morgan's Skill Board evaluation lab](skill-board-evaluation-lab.md)

Teach the selected CS6750 evaluation videos, then have students apply heuristic evaluation and usability testing to the previously created Weather App prototype. Keep Morgan's Skill Board lab as separate practice on a live product, then apply the methods to students' own prototypes. For any interface, first-use participants test before inspecting that same interface; otherwise use fresh participants. Skill Board recommendations do not authorize editing the live product.

L09–L11 are thematic anchors. Add skill/practice/assessment meetings as needed; all selected video, Auto Layout, component, prototype and evaluation work does not fit into three 45-minute meetings. Low-fi evaluation begins as soon as the main task is testable.

## Unit flow

~~~text
selected brainstormed direction
→ Prototype in Figma
→ Evaluate
→ Iterate in Figma
→ Retest
→ hand off to HTML/CSS
~~~

## Lessons

| Lesson | OMSCS theory | Figma role | Durable evidence |
|---|---|---|---|
| [L09 — Prototype with Figma](lesson-09-figma-foundations-low-fi-wireframe.md) | **3.5 Prototyping** | build the lowest useful fidelity for the main task | [L09 template](student-templates/l09-low-fi-figma-core3.md) |
| [L10 — Evaluate the Prototype](lesson-10-evaluate-low-fi-revise.md) | **3.6 Evaluation** + selected Unit 2 principles | run inspection + no-coaching usability test | [L10 template](student-templates/l10-low-fi-evaluation-revision.md) |
| [L11 — Iterate + Retest](lesson-11-high-fi-interactive-prototype-retest.md) | **3.7 HCI and Agile Development** | revise from evidence, raise fidelity where useful, retest | [L11 template](student-templates/l11-high-fi-retest-change-log.md) |

## Resource rule

### OMSCS CS6750 = theory

Use selected short excerpts for:

- why prototypes exist;
- fidelity;
- evaluation;
- design principles;
- iterative development.

### Coursera Figma = selected tool practice

Use Dan Scott's selected Coursera lessons from the [learning map](coursera-learning-map.md), a short teacher demonstration, and immediate practice. Teach the operation needed at the moment:

~~~text
Frame / text / shape
→ alignment / spacing
→ prototype connection
→ preview
→ later skill blocks: Auto Layout / components / basic states
~~~

Basic Auto Layout, components and variants have separate skill checkpoints. Advanced animation, Boolean drawing, full design systems and team libraries remain optional.

### No separate Meta theory track

Meta *Principles of UX/UI Design* is no longer the student theory backbone for this unit.

## Course Core 3

Use three recurring design checks:

| Principle | Student question |
|---|---|
| **Affordance / signifier** | Can I tell what I can do? |
| **Mapping** | Can I predict what will happen? |
| **Constraints** | Does the design prevent or reduce mistakes? |

These are a compact classroom lens, not the full set of CS6750 principles.

The Skill Board heuristic lab adds Nielsen's visibility of system status, consistency and standards, and user control and freedom. Keep these names distinct from the existing Core 3.

## End-of-unit assessment

Use two separate assessment records: the **100-point tool skills assessment** (20 knowledge + 80 practical) and, after L11, the existing **30-point Figma Design Cycle Unit Test**. The latter checks design reasoning; it does not replace skill-by-skill tool assessment.

The test checks:

- prototype purpose and fidelity;
- Core 3 diagnosis;
- no-coaching usability testing;
- evidence vs taste/assumption;
- evidence-driven revision;
- retesting;
- one small practical Figma interaction.

## Design → Build gate

Before HTML/CSS implementation:

- [ ] main task is clickable from start to success;
- [ ] a peer completes it without facilitator help;
- [ ] no unresolved MUST blocker remains;
- [ ] at least two revisions trace to evaluation evidence;
- [ ] before → evidence → change → result is documented.

A polished screen is not the goal.

> **Prototype → Evaluate → Iterate until the main task works well enough to build.**

# 02 — HCI User Research (Discover)

This unit teaches students to **understand the problem before designing the solution**. The CS6750 design life cycle remains the conceptual backbone, but the G7 version is deliberately small: collect evidence, check the evidence for bias, then turn it into needs that can guide design.

Canonical map: [omscs-cs6750-mapping.md](omscs-cs6750-mapping.md)  
Printables: [g7-printables.md](g7-printables.md)  
Student submission templates: [student-templates/](student-templates/README.md)  
Teacher quick check: [HCI + Figma L05–L11](../../04_Assessment/HCI_Figma_L05-L11_Quick_Check.md)  
**End-of-unit test:** [HCI User Research Unit Test](../../04_Assessment/HCI_User_Research_Unit_Test.md)  
**Teacher key:** [HCI User Research Unit Test Teacher Key](../../04_Assessment/HCI_User_Research_Unit_Test_Teacher_Key.md)  
CS6750 index: https://omscs6750.gatech.edu/

## Discover loop

```text
Frame the problem
  → Plan what evidence is needed
  → Ask + Observe
  → Bias Check
  → Survey / Sample Check
  → Synthesize evidence
  → Write user needs + micro-requirements
  → Unit Test
  → Design alternatives (Lesson 08)
```

The key correction in this redesign is:

> **Collected data is not automatically trustworthy evidence.**

Students must check **how the question was asked, what was observed, who was included, and what might be missing** before using data to justify a design.

## Lessons

| Lesson | Method action | Bias / quality control | Durable evidence |
|---|---|---|---|
| [05 — Initial Needfinding](lesson-05-initial-needfinding.md) | Frame problem · known/unknown · evidence plan | **Confirmation bias** | [L05 template](student-templates/l05-needfinding-evidence-plan.md) |
| [06 — Collect User Data](lesson-06-collect-user-data.md) | Interview + observation | **Leading questions · social desirability · recall · observer bias** | [L06 template](student-templates/l06-interview-observation-bias-check.md) |
| [07 — Survey + Micro-Requirements](lesson-07-writing-survey-questions.md) | Survey + synthesis | **Sampling / voluntary-response bias · question wording** | [L07 template](student-templates/l07-survey-evidence-synthesis.md) |

## End-of-unit assessment

After Lesson 07, students complete the **HCI User Research Unit Test** before beginning the design phase.

The test is separate from daily practice:

- **Daily lesson evidence** checks whether students can complete the method with support.
- **Unit Test** checks whether students can transfer the method to a new scenario independently.

The test prioritizes application over vocabulary recall. Students must:

- diagnose a flawed research plan;
- identify and reduce bias;
- separate quote/action/pattern from interpretation;
- evaluate and rewrite survey questions using **Clear · Concise · Specific · Expressive · Unbiased · Usable**;
- judge what a sample does and does not support;
- write an evidence-backed need without jumping to a feature.

Recommended use: **35 minutes, individual, no AI**.

## Student mental model

Students do **not** need to memorize a long list of research-method vocabulary. They should repeatedly ask five questions:

1. **Am I only looking for evidence that supports my idea?**
2. **Did my wording push the user toward an answer?**
3. **Am I trusting memory when I could ask about recent behavior or observe?**
4. **Am I mixing what I saw with what I think it means?**
5. **Who did I ask — and who might be missing?**

These questions are the required **Bias Check** used across Lessons 05–07.

## Evidence rule

Use three evidence types and keep them separate:

- **Quote** — what a participant actually said;
- **Action** — what a participant actually did;
- **Pattern** — something supported by more than one piece of evidence.

A single opinion may suggest a question. It should not automatically become a product requirement.

## Classroom flow

Each class keeps the same seven blocks:

```text
Skill Warm-up → Talk Robin 1 → Entry Check → Core Pattern
→ Guided Practice → Independent Rebuild → Talk Robin 2 + Evidence
```

## Core outputs

- needfinding sheet: known / unknown / evidence plan / consent;
- interview + observation notes with a bias audit;
- short survey with wording + sample checks;
- evidence synthesis table;
- 2–3 verifiable user-need / micro-requirement statements;
- HCI User Research Unit Test.

## Discover → Design mastery gate

Do not move to Lesson 08 just because the team finished a survey. The team is ready to design only when:

- [ ] at least one **quote** and one **observed action** are recorded;
- [ ] the Bias Check is completed;
- [ ] the survey/sample limitation is stated;
- [ ] 2–3 user needs are traceable to evidence;
- [ ] at least one uncertainty / contradictory clue is still acknowledged;
- [ ] the team can answer: **“What evidence could still prove us wrong?”**;
- [ ] Unit Test misconceptions that would break the research → design transition have been corrected.

The Unit Test should diagnose readiness, not replace the evidence gate. If the gate fails, collect or clean up evidence before brainstorming features.

## Standard

Students may not justify a feature with **“I think users want…”** when evidence is available.

They also may not say **“the data proves…”** without checking how the data was collected.

The exit question for this block is:

> **What evidence supports this need, and what bias could still make us wrong?**

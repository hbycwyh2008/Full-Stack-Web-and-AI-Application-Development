# Lesson 22 — Vision, Generalization, and Trust

**Delivery:** two 45-minute class meetings: **22A** and **22B**  
**Only required content source:** teacher-selected passages from Melanie Mitchell, *Artificial Intelligence: A Guide for Thinking Humans*  
**Student preparation:** none  
**Regular homework:** none  
**Flow:** [AI Literacy 45-Minute Classroom Flow](classroom-flow-45-min.md)  
**Durable evidence:** visual-capability ladder, trust-boundary checklist, and two Learning Log entries

## Lesson Purpose

Students use Mitchell's computer-vision cases to distinguish successful recognition from seeing or understanding, then examine why high measured accuracy can coexist with shortcuts, fragility, distribution shift, unfairness, or unsafe deployment.

## Required Mastery

By the end of Meeting 22B, students can:

1. state the bounded task demonstrated by an image-recognition result;
2. distinguish classification from contextual or causal understanding;
3. explain why measured performance depends on data and test conditions;
4. identify evidence needed before trusting a system beyond its original evaluation setting.

## Teacher Setup

Select and record two short passages:

- **22A:** one passage from Chapters 4–5 that presents an image-recognition capability and the evidence used to assess it;
- **22B:** one passage from Chapters 6–7 that reveals a failure, shortcut, robustness problem, bias, ethical consequence, or trust boundary.

Use book cases as the evidence base. Do not replace them with a live model demo, current article, product page, or secondary summary.

---

## Meeting 22A — Recognition, Seeing, and Understanding

**Essential question:** Does successful image classification amount to seeing?

| Time | Classroom-flow block | Required student action |
|---:|---|---|
| 0–4 | **Entry Point Check** | Individually decide whether assigning the correct label to an image demonstrates `classification`, `seeing`, `understanding`, or more than one. State the criterion used. |
| 4–14 | **Individual Learning** | Read the assigned Chapters 4–5 passage. Mark the exact task, input, output, success evidence, and one conclusion the evidence does not settle. |
| 14–19 | **Talk Round 1** | Partners compare what the system does with the ordinary human meaning of “seeing.” Each partner must cite one book case or detail. |
| 19–25 | **Entry Points Check / Teacher Diagnosis** | Groups write one bounded claim: `The evidence shows ___ under ___ conditions; it does not show ___.` Teacher clarifies only shared reading barriers. |
| 25–37 | **Guided Practice / Mission Task** | Build a **Visual-Capability Ladder** using the passage: pixel processing, classification, detection, description, contextual reasoning, and causal understanding. Mark only the levels supported by the book evidence and state what test would be needed for the next level. |
| 37–43 | **Exit Check** | Independently answer: `Why can a correct image label be impressive evidence without proving full scene understanding?` Complete Meeting 22A in the Learning Log. |
| 43–45 | **Submission** | Submit the ladder and Learning Log entry. |

### Meeting 22A Success Evidence

The student names the demonstrated visual capability and one stronger capability that remains untested.

---

## Meeting 22B — What Did the Model Learn, and Can We Trust It?

**Essential question:** Why can an accurate system still be untrustworthy?

| Time | Classroom-flow block | Required student action |
|---:|---|---|
| 0–4 | **Entry Point Check** | Individually respond to: `A system earned a very high score. What could the score still be hiding?` List two possibilities. |
| 4–14 | **Individual Learning** | Read the assigned Chapters 6–7 passage. Mark one success, one hidden dependency or failure, the evaluation condition, and the people or situations affected. |
| 14–19 | **Talk Round 1** | Partners compare the intended feature with a shortcut or fragile pattern the system may have used. Identify the book evidence supporting that interpretation. |
| 19–25 | **Entry Points Check / Teacher Diagnosis** | Groups display one chain: `training/evaluation condition → learned pattern → changed condition → failure`. Teacher gives a brief clarification only if the class evidence shows a shared barrier. |
| 25–37 | **Guided Practice / Mission Task** | Create a **Trust-Boundary Checklist** from the assigned book case. Include data origin, evaluation limits, changed conditions, affected groups, error consequences, human review, and evidence needed before use. |
| 37–43 | **Exit Check** | Independently write three questions that must be answered before treating a high score as evidence of real-world reliability. Complete Meeting 22B in the Learning Log. |
| 43–45 | **Submission** | Submit the checklist and Learning Log entry. |

### Meeting 22B Success Evidence

The student identifies a plausible mismatch between measured success and real use, and names evidence that could reveal the problem.

## Finish-Up Rule

All reading and mission work is completed during class. If time is lost, only the unfinished Learning Log or Exit Check may be completed later, normally within five minutes.


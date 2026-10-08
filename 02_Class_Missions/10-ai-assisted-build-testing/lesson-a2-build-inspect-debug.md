# A2 — Build, Inspect, and Debug

**Length:** 45 minutes. **Evidence:** One working vertical slice and a verified change.

Use the [workbook](student-workbook.md) and [teacher guide](teacher-guide.md).

## 0–5 min — Skill Warm-up

Open your A1 criterion and saved starting commit. Predict the visible success state before opening the Agent.

## 5–9 min — Talk Robin 1

Explain why one feature at a time makes failures easier to locate. Compare plans before coding.

## 9–14 min — Entry Check

An Agent says “all tests pass” but provides no output. What evidence is missing? Collect class responses.

## 14–19 min — Core Pattern

Teacher models plan → small change → diff inspection → execute test. Read the event handler and trace input → validation → state → display. For a bug: reproduce → hypothesis → smallest experiment → fix → retest.

## 19–30 min — Guided Practice

Use the prompt below for one slice. Inspect changed files; run normal and invalid-input tests yourself. Commit a verified increment. If broken, record expected/actual behavior and attempt one diagnostic experiment before asking AI for a fix.

## 30–40 min — Independent Rebuild

AI closed: trace one event handler and change a simple label or validation condition, then execute a relevant test. If JS foundations are incomplete, independently trace the behavior and design the test; defer code mastery sign-off.

## 40–45 min — Talk Robin 2 + Evidence

Submit commit/diff, executed test evidence and disclosure. Share learning, uncertainty, and next improvement.

## Small-feature prompt

```text
Build only [feature] using our existing project and approved stack.
User task: [...]. Acceptance criteria: [...].
Figma flow/screens: [link plus written description or screenshots].
First give a short plan and list the files you will change.
Wait for my review of the plan. Keep the change small.
Explain the event/data flow and how to run it.
Suggest tests; do not claim they ran unless you show actual execution output.
Do not add a database, paid API, authentication, or framework unless agreed.
```

If the tool cannot read Figma, provide the relevant screenshots and a written flow.

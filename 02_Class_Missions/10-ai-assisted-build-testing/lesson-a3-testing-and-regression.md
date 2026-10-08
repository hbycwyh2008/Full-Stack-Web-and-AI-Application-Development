# A3 — Test, Fix, and Retest

**Length:** 45 minutes. **Evidence:** Six executed cases, one defect investigation, and peer evidence.

Use the [workbook](student-workbook.md) and [teacher guide](teacher-guide.md).

## 0–5 min — Skill Warm-up

Read MDN “What are you going to test?” or the workbook test table. Explain why expected results must be written before observing the app.

## 5–9 min — Talk Robin 1

Compare a functionality test (does Save store the item?) with a usability observation (can a user find Save without coaching?).

## 9–14 min — Entry Check

“I clicked around and it looked fine.” Rewrite this as a reproducible test, including starting state and expected result. Share the answers.

## 14–19 min — Core Pattern

Teacher demonstrates blank input and exact boundary cases, then a regression check after a fix. Pass, Fail, Blocked and Not run are different states. A new successful test does not prove old behavior still works.

## 19–30 min — Guided Practice

Execute your six A1 cases on the same recorded build. Log actual results and evidence, including width/browser and keyboard focus/activation. Reproduce one defect, investigate, fix, and rerun the failed case plus two related previously passing cases. If no defect appears, use the teacher’s disposable seeded-bug copy.

## 30–40 min — Independent Rebuild

Peer attempts the main user task without instructions about buttons or coaching. Record completion, wrong turns and help requested. Independently create and run one additional case that could reveal a failure missed by your first six.

## 40–45 min — Talk Robin 2 + Evidence

Submit results, before/after bug evidence and peer notes. Share learning, uncertainty, and next improvement.

# Teacher Guide — Ordinary-Class AI Build + Testing

## Preparation and pacing

Read the full Replit course; choose student chapters listed in the unit README. Assign viewing separately or allow additional viewing time. Four lessons begin a small slice and teach the process; they do not promise a finished full-stack app in 180 minutes. Keep the initial project to a form/list/filter or similarly small flow with synthetic data. Reuse research and Figma evidence rather than asking for a second product.

Before A1, check the L11 gate. Before A2, verify that students can run the starter and that AI access is approved and affordable. Export/save code into the student's GitHub project and inspect what changed. Avoid adding unfamiliar backend frameworks just because an Agent proposes them. Follow the repository AI-use policy.

Use the seven canonical classroom blocks. If project building takes longer, add build/work sessions; do not remove testing to preserve a deadline. Stronger students may automate one existing manual case using Playwright after JavaScript foundations. Require an assertion about visible behavior and proof of execution; generated scripts alone earn no testing sign-off.

## Worked calibration example (reading list)

Use the workbook specification. Expected judgments:

| Scenario | Expected result / teacher reasoning |
|---|---|
| Valid title “Dune” | One new visible item; the normal task is satisfied |
| Three spaces | Visible error and no item; trim before length validation |
| Exactly 40 characters | Accepted under the stated inclusive maximum |
| 41 characters | Rejected with useful feedback; no item added |
| Reload | Temporary items clear as disclosed; persistent storage was not promised |
| Narrow screen | Main controls remain usable; log measured width and observed behavior |
| Keyboard | Reach input/button with visible focus, activate action and access feedback; a mouse-only pass is insufficient |
| AI says tests pass | Not test evidence until actual runs/results are available |
| User finds Add only after coaching | Functional behavior may pass, but usability evidence shows a problem |
| New feature passes, old save fails | Regression; hold release if the core task is blocked |

Six workbook rows are category coverage, not a cap on test executions. Boundary rows need separate at-limit and beyond-limit results. Require at least one reproduced defect investigation. If none appears, give a disposable copy with a validation condition changed from `<= 40` to `< 40`, or remove whitespace trimming. Students record it as a seeded exercise and keep the production branch separate.

## Individual transfer task bank

Select an unseen, modest change appropriate to the actual product; do not announce the chosen task in advance. Allow prior student-written notes and official documentation. During formal individual checks, AI, copied solutions, and partner help are closed. After assessment, assistance may resume with disclosure.

- Reading list: maximum title length changes from 40 to 30. Expected tests: 30 accepted, 31 rejected, blank still rejected, ordinary valid title still accepted.
- Filter: add a “show completed only” view. Expected tests: completed visible, incomplete hidden, switching back restores all; existing add/toggle behavior still works.
- Form: make an existing optional field required. Expected tests: missing rejected with feedback, valid accepted; unrelated input still behaves correctly.

Allow 19–30 minutes for criteria/change/testing and 30–40 for explanation and checks. If a task cannot reasonably fit, reduce scope or schedule more assessment time. For pre-JavaScript students assess criterion design, execution, bug reasoning and release judgment only; mark independent programming mastery pending.

## Evidence rubric and gates

Score each dimension **0–2**: 0 missing/unsupported; 1 partial or requires substantive prompting; 2 accurate, independently explained and evidenced.

| Dimension | A score of 2 requires |
|---|---|
| Plan and traceability | Three observable criteria linked to user task and tests |
| Build ownership | Small changes with history; student explains event/data flow and limitation |
| Test execution | Six categories covered, actual outcomes recorded, exact boundary cases executed |
| Debug and regression | Reproduction, hypothesis, experiment, verified fix and two relevant regression results |
| Transfer | Independently handles unseen requirement and explains criterion/change/test |
| Release judgment | Evidence-based decision; blockers handled, known issues/ownership recorded; deployed checks when shipping |

**Process sign-off:** at least 9/12, with Test execution, Debug and regression, and Transfer each scoring 2. Process-only students may demonstrate Build ownership through accurate tracing of the supported build, but this is not a programming pass.

**Independent programming sign-off:** separately requires an observed, AI-closed code modification, explanation, relevant new tests and two regression checks after JS prerequisites. Product polish or an AI-generated working app cannot compensate.

**Release gate:** every required case executed; core task passes; no unresolved blocker; relevant accessibility/device checks pass; remaining issues documented. Hold is a valid, well-reasoned assessment answer. A good grade does not override a failed release gate.

Practice work may be repeated. Formal sign-off requires a teacher-assigned assessment ID/date and observed attempt. Repository file checks can verify evidence completeness, not truthful execution, code understanding, or transfer; do not advertise automatic mastery grading.

## Connect to existing course

Return to L12–20 for implementation fluency, L25 for deeper usability work, L26 for QA/release/maintenance, and L27–32 for an independent full cycle. Mitchell AI literacy remains a separate learning outcome; using a coding Agent does not satisfy it.

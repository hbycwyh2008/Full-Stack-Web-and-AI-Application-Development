# My AI-Assisted Build + Testing Evidence

Name: ____ Project: ____ Figma: ____ Issue/branch: ____

## 1. Define and plan

User/evidence-backed need: ____ Main task: ____
Small feature: ____ Out of scope: ____
Starting commit: ____ Approved tool/stack: ____

| ID | Given (starting state) | When (input/action) | Then (observable pass condition) |
|---|---|---|---|
| AC1 | | | |
| AC2 | | | |
| AC3 | | | |

Example classroom specification: a reading-list title has 1–40 characters after trimming; blank input is rejected; adding one valid title displays one item; this version stores items only until reload and tells the user that limitation.

Example criterion: **Given** an empty list, **when** I submit a blank title, **then** a visible error appears and the list remains empty.

## 2. Design tests before running them

Use your own criteria. For each row, include exact data and steps. Reset starting state between cases. Add rows when one category needs multiple cases.

| Test ID / criterion | Category | Starting state + exact input/actions | Expected result | Actual result | Pass / Fail / Blocked / Not run | Build + environment + evidence |
|---|---|---|---|---|---|---|
| T1 / | Normal core task | | | | Not run | |
| T2 / | Empty or invalid | | | | Not run | |
| T3 / | Boundary: at and outside limit | | | | Not run | |
| T4 / | State / repeat action / reload | | | | Not run | |
| T5 / | Narrow screen, record width | | | | Not run | |
| T6 / | Keyboard focus and activation | | | | Not run | |

Example test: clear the list, enter three spaces, activate Add. Expected: error visible, zero items. Actual and status remain blank/Not run until executed. If the title maximum is 40, separately execute 40 and 41 characters. Reload expectations depend on the agreed storage requirement; disappearing data is not automatically a bug for a declared temporary list.

A screenshot alone cannot show every interaction. Include a short recording, exact observed text/count, or reproducible steps as appropriate. Record browser/version, device or emulated width, and commit. AI-suggested cases still need your review and execution.

## 3. Build and explain

Plan reviewed: ____ Files changed and why: ____
Input → validation → state/data → visible output: ____
Code location/event handler I can explain: ____
One limitation: ____ Verified commit/PR: ____

## 4. Bug investigation

| Field | Evidence |
|---|---|
| Bug ID / affected criterion | |
| Build, environment, starting state | |
| Exact reproduction steps and input | |
| Expected / actual behavior | |
| Impact: blocker / fix soon / known issue; reason | |
| Hypothesis | |
| Experiment attempted before AI assistance | |
| Fix / changed lines / commit | |
| Original failing case after fix | |
| Two related regression cases and actual results | |

If no real defect is found, label the teacher-provided seeded bug clearly; do not invent a defect in your project.

## 5. Peer usability observation

Task stated as a goal (not button instructions): ____
Tester (anonymous code): ____ Build: ____
Completed without help? ____ Wrong turns: ____ Help requested: ____
Observed action/quote: ____ Proposed change and evidence: ____
Retest same task after revision: ____
A peer completing one task does not prove all functional cases pass.

## 6. Individual transfer

Teacher-assigned unseen change: ____ Assessment ID/date: ____
New criterion: ____ Test plan written before change: ____
What I changed independently: ____ Why it works: ____
New test actual results: ____ Two regression results: ____
Teacher status: process mastery ____ / independent programming mastery ____
Practice attempts are labelled Practice. Only a teacher-assigned, observed attempt receives formal sign-off; a copied workbook or automated file check does not authorize assessment.

## 7. Release and maintain

Decision: Ship / Ship with known issues / Hold
Core task passes? ____ All required cases executed? ____ Open blockers? ____
Known issues, impact and workaround: ____
Tested commit/version: ____ Deployed URL (if ready): ____
Deployed main-task smoke check: ____ Deployed invalid-input check: ____
Owner for feedback/bugs: ____ Next maintenance task: ____
If deployment cannot be tested, record “local readiness only; deployment pending.”

## 8. AI disclosure and reflection

AI Help Used: ____
What I asked AI: ____
How it helped me: ____
What I did on my own: ____
What I learned: ____ What remains unclear: ____ Next improvement: ____

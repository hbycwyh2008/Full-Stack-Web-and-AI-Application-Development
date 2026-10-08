# AI-Assisted Build + Testing — Ordinary-Class Bridge

**Audience:** ordinary-class students; English student materials. **Length:** four 45-minute sessions, plus selected video preparation and project finish-up time.

Use the student's existing evidence-backed Figma project. This module teaches ownership of an AI-assisted development process, not machine-learning model training.

## Placement and scope

Enter after the [L11 Design → Build gate](../03-figma-product-design/lesson-11-high-fi-interactive-prototype-retest.md). Use A1–A2 as a supported build bridge alongside Lessons 12–20; use A3–A4 before Lessons 25–26 or during capstone implementation/testing. These are supplementary sessions, not a renumbering or replacement of the canonical 00–32 pathway. A2 begins a working vertical slice; a complete application may require additional build sessions.

If students cannot yet explain and edit a simple event handler, begin with planning and manual testing, then return to independent code modification after JavaScript foundations. AI-assisted product completion and independent programming mastery are assessed separately.

## Complete classroom workflow

User evidence → tested Figma flow → small acceptance criteria → GitHub issue and branch → plan with AI → build one feature → inspect code and diff → execute tests → reproduce bugs → hypothesize and fix → regression check → peer usability test → release decision → deployed smoke test → maintenance.

This is our classroom synthesis around the course, including additional testing; it is not a claim that every step is explicitly taught in the Replit videos.

## Sessions

| Session | Output | Mission |
|---|---|---|
| [A1](lesson-a1-plan-and-acceptance.md) | Three criteria and six planned tests | Plan a testable slice |
| [A2](lesson-a2-build-inspect-debug.md) | Working slice, code explanation, bug evidence | Build and verify in small steps |
| [A3](lesson-a3-testing-and-regression.md) | Executed tests, peer observation, fix/retest | Try to reveal failures |
| [A4](lesson-a4-transfer-and-release.md) | Individual transfer and release record | Change independently and justify readiness |

Copy [student-workbook.md](student-workbook.md) into your project as `evidence/ai-build-testing.md`. Teacher: use [teacher-guide.md](teacher-guide.md).

## Video assignment: selected viewing, then apply

[DeepLearning.AI — Vibe Coding 101 with Replit](https://www.deeplearning.ai/courses/vibe-coding-101-with-replit)

Teacher: watch the whole course. Students: watch **Principles of Agentic Code Development**, **Planning and Building an SEO Analyzer**, **Implementing SEO Analysis Features**, and **Next steps and Best Practices**. Watch before the relevant session or allocate separate viewing periods; these full videos do not fit a five-minute warm-up. Introduction and the two voting-app chapters are optional. Do not require copying the SEO app: take planning/building habits into your own prototype.

Record one planning habit, one small-change habit, and one verification habit with a concrete application to your project. Watching alone is not evidence of mastery.

Replit is the reference environment, not a requirement. The teacher must check current school account/age rules, available Agent credits, export and deployment access before assigning it. Do not require students to buy credits. If unavailable, use teacher-guided AI suggestions in the approved editor with a local HTML/CSS/JavaScript project. GitHub remains the source of project history. Begin with synthetic data and no paid services or real personal data.

## Testing resources: narrow reading assignments

| Resource | Read / do | Required evidence |
|---|---|---|
| [MDN: Testing strategies](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Testing_strategies) | “What are you going to test?”; selected browser/device discussion. Skip analytics setup. | Observable pass conditions and a justified device choice |
| [MDN: Introduction to cross-browser testing](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Introduction) | Compare functional, compatibility and accessibility concerns; teacher selects a short excerpt | A narrow-screen check and a keyboard check |
| [Playwright: Writing tests](https://playwright.dev/docs/writing-tests) | Optional after JS foundations: one test with a meaningful `expect` assertion | Explain what failure the assertion detects |
| [Playwright: Best practices](https://playwright.dev/docs/best-practices) | Optional: test user-visible behavior and keep tests independent | A test that resets its own starting state |

Manual testing is the ordinary-class minimum. Full MDN testing modules and an automation toolchain are not prerequisites. Automated tests supplement, rather than replace, observation and exploratory testing.

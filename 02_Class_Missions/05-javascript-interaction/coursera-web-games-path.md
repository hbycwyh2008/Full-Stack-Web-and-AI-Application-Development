# JavaScript Through Web Games — Coursera Path

**Goal:** Build a playable browser game while learning JavaScript, then transfer events, state and feedback to your own designed product.
**Method:** Learn one idea → follow a small example → trace/explain → close the tutorial → independently modify → test → commit.
**Delivery:** Selected segments over multiple 45-minute meetings using the course classroom flow. Platform hours include independent work and are not classroom/video hours.

## Two Complementary Courses

| Resource | Role | Relevant content |
|---|---|---|
| [HKUST — Learning HTML, CSS and JavaScript through Game Development](https://www.coursera.org/learn/learning-html-css-and-javascript-through-game-development), Gibson Lam | Foundations spine; public listing marks it intermediate | M1 HTML/CSS; M2 JS, DOM, events, timers + Guessing Game; M5 arrays, objects and functions |
| [EDUCBA — Apply HTML5 Game Development Concepts with Canvas](https://www.coursera.org/learn/apply-html5-game-development-concepts-with-canvas) | Applied Canvas projects; public estimate 8 hours | M2 Canvas/game flow; M4 Ping Pong and Collect the Square; selected collision concepts from M3 |

Public outlines checked 2026-10-19. Recommendation is based on syllabus fit, not a full review of every video or exercise. Check the course workspace/assets before assigning a project.

Optional short exercise: [Creating a Quiz Game using Vanilla JavaScript](https://www.coursera.org/projects/creating-a-quiz-game-using-vanilla-javascript), a roughly two-hour Guided Project using arrays, conditions, functions, DOM and local storage. It supplements practice rather than replacing the foundation sequence.

## Foundation Sequence

| Existing lessons | Selected input | Student output / gate |
|---|---|---|
| L12–L15 HTML/CSS | HKUST M1 alongside the existing design-to-code tasks | A semantic, accessible, responsive implementation of your Figma design |
| L16 values/state/functions | HKUST M2 variables + M5 variable/function segments as needed | Explain input → processing → output; write and call a small function |
| L17 conditions/iteration | M2 Guessing Game, with explicit teacher practice on if/else and loops | Trace win/lose/retry logic and implement it without copying |
| L18 arrays/objects | HKUST M5 selected array/object segments | Store game entities/questions and explain how data changes |
| L19 DOM/events | HKUST M2 DOM/events, random numbers, timers | A playable Guessing Game with visible feedback and restart |
| L20 state/debugging | Game extension plus the existing forms/persistence lesson | Reset state correctly, diagnose bugs, test and retest |

Introduce functions and necessary conditions before assigning the guessing project. A video outline is not a substitute for checking prerequisite understanding. Each numbered lesson can require multiple practice meetings.

HKUST M3 uses **jQuery** for Hammer Game. M4 uses SVG/animation for a Jumping Game; M6 develops the Canvas game **Gem Rush!**. These are optional routes. If skipping jQuery, do not assign its dependent projects unchanged. For the foundation route, use native DOM/event methods and the separate Canvas project course. Defer closure/IIFE/module-pattern depth until learners need it.

## Canvas Project Sequence

Start after students can use variables, functions, conditions, arrays/objects and events. From EDUCBA M2, introduce canvas coordinates/drawing and game flow. Learn any missing animation-loop/input prerequisite before M4; extract only the necessary collision ideas from M3. Bitmask/bitmap optimization is optional, not a foundation requirement. If the supplied project code depends on it, provide/explain a simpler representation rather than deleting a dependency without replacing it.

| Project | Core concepts | Independent modification |
|---|---|---|
| Ping Pong | Coordinates, movement, input, collision, score and game state | Add a winning score, restart and difficulty choice |
| Collect the Square | Random positions, collection, score and countdown | Add a selectable time limit and clear end-of-game feedback |

The modifications above are classroom tasks, not claims that the videos already implement them. Where the course supplies partial code/assets, require students to identify what was supplied and explain their own changes.

## Game Testing and Evidence

- Start/restart produces a clean state and does not create duplicate timers/loops.
- Controls work as described; the player can discover them.
- Scoring and collisions behave correctly, including boundary cases.
- Game-over/win feedback matches the actual state; controls cannot keep changing a finished game incorrectly.
- Difficulty/time settings produce the intended effect.
- The student can explain a function, trace a state change, repair one bug and independently add one feature.

Use a test table: **case → expected → actual → pass/fail → fix → retest**. Preserve code, README controls, credits, AI-use disclosure if applicable, and meaningful GitHub commits. A user playtest checks usability; manual functional tests check correctness. Keep those findings distinct.

Return to the researched project after the game: implement a relevant interaction (e.g. a state change or validated form), preserving accessibility and explicit feedback. Frameworks and AI APIs are not prerequisites.

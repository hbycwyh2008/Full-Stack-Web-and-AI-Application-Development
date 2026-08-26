# Classroom Flow — Steps 1–3 (with Coursera Resources)

This document completes the **first three steps** of the **Our Classroom Flow** poster for *Full-Stack Web & AI Application Development*.

**Poster order (required):**

```text
1. Skill Warm-up  →  2. Talk Robin 1  →  3. Entry Check
         ↓
4. Core Pattern → 5. Guided Practice → 6. Independent Rebuild → 7. Talk Robin 2 + Evidence
```

**Slogan:** *We learn. Practice. Rebuild. Share.*

**Rule:** For Discover → Create, Coursera is a **warm-up source**, not the course itself. For **AI Literacy**, the sole content source is Melanie Mitchell's *Artificial Intelligence: A Guide for Thinking Humans* (not Coursera). Students meet one idea, talk it through, then prove basic understanding—before Core Pattern and rebuild.

---

## Step definitions (every class)

| # | Step | Typical time | What students do | What teachers do |
|---|---|---|---|---|
| **1** | **Skill Warm-up** | 0–5 min | Meet today’s idea via **one** short video / passage / task | Assign exact URL/page cue; stop on time |
| **2** | **Talk Robin 1** | 5–9 min | Pair talk: *what was done* and *what was confusing* | Timer + prompts; cold-call; board one confusion |
| **3** | **Entry Check** | 9–14 min | Individual check of basic understanding **before** going deeper | Scan answers; do **not** lecture the full Core Pattern yet |

After Step 3, class continues with Core Pattern → Guided Practice → Independent Rebuild → Talk Robin 2 + Evidence (documented elsewhere).

### Talk Robin 1 routine

1. Pair students (clock partners / row pairs).
2. Display timer: **45s → 45s → 30s**.
3. Partner A speaks first on Prompt 1; Partner B on Prompt 2; then one shared confusion.
4. Cold call: “What did your pair agree was confusing?”

### Entry Check routine

- Individual — no partner talk.
- 2–4 short items (paper or LMS).
- Graded for **attempt + honesty**, not perfection.
- Teacher uses results to decide how deep Core Pattern needs to go.

### Warm-up resource rule

```text
Web stages (Discover→Create): one Coursera resource
AI Literacy: one Mitchell passage (in class only)
→ short watch/read (not binge)
→ notes: “I saw ___ / I’m unsure about ___”
→ Talk Robin 1
→ Entry Check
```

---

## Resource stack for this course

### Web journey — Coursera

| Journey stage | Coursera course (exact name) | Provider | Link | Why it fits **this** course |
|---|---|---|---|---|
| **Discover** | **User Research and Design** | University of Minnesota | https://www.coursera.org/learn/design-research | Matches Discover: user needs, interviews/observation, ethics, personas/tasks—exactly the HCI evidence we need before Figma. |
| **Design** | **Prototyping and Design** | University of Minnesota | https://www.coursera.org/learn/prototyping-design | Low-fi → hi-fi prototyping, design rationale, accessibility—feeds our Figma prototype outcome. |
| **Design (Figma tool)** | **Principles of UX/UI Design** | Meta | https://www.coursera.org/learn/principles-of-ux-ui-design | Explicit Figma wireframes/prototypes; bridges research ideas to the tool students actually use. |
| **Build** | **HTML, CSS, and Javascript for Web Developers** *(Specialization)* | Johns Hopkins University | https://www.coursera.org/specializations/html-css-javascript-for-web-developers | Same stack as our Build stage: HTML5 → CSS3 (+ Bootstrap) → JS. Browser-first, project-shaped lessons. |
| **Collaborate** | **Not Coursera** — GitHub official Docs + Skills + your YouTube warm-ups (see below) | GitHub | (links in Collaborate section) | Matches what you already wrote in Phase 0 / Git unit: official Hello World, Quickstart, Skills practice + short YouTube clips. |
| **Test** | **Evaluating User Interfaces** | University of Minnesota | https://www.coursera.org/learn/ui-testing | Heuristics + usability testing with users—maps to Test stage HCI experiments and evidence. |
| **Create** | Same JHU specialization (esp. restaurant site + JS modules) | Johns Hopkins University | (links below by module) | Gives a “ship a working page/app” pattern students then **rebuild** as their own interactive site/game. |

> Teacher note: Prefer **audit / preview / financial aid** access for classroom clips. Students are **not** required to earn Coursera certificates.

### AI Literacy — book (not Coursera)

| Track | Required text | Author | Book page | Why it fits **this** course |
|---|---|---|---|---|
| **AI Literacy** *(parallel)* | ***Artificial Intelligence: A Guide for Thinking Humans*** | Melanie Mitchell | https://melaniemitchell.me/aibook/ | Canonical AI unit: claim–evidence reading, what AI can/cannot do, failure, generalization, language, understanding—without videos or a second AI course. Matches the course poster’s AI Literacy habits. |

Canonical unit files: [`02_Class_Missions/06-ai-literacy/`](../../../02_Class_Missions/06-ai-literacy/).
Exact in-class passages: [`required-reading-map.md`](../../../02_Class_Missions/06-ai-literacy/required-reading-map.md).

---

## Stage-by-stage: Steps 1–3 designs

Use one design below per class meeting. Web stages use the named Coursera clip; **AI Literacy uses Mitchell only**. Keep Talk Robin + Entry Check structure fixed.

---

### A. Discover — User needs & HCI questions

**Primary Coursera course:** *User Research and Design* (University of Minnesota)

| Warm-up focus | Coursera resource to assign | Why this clip |
|---|---|---|
| What user research is | Module **User Research Methods — Part 1** → video **Introduction to User Research** (~3 min) | Frames “ask users, don’t guess”—core Discover move. |
| Interview / observation | Same module → **Interview and Focus Groups** *or* **Observations** (pick one, ~10–15 min max; stop early if needed) | Concrete methods students will practice in HCI lessons. |
| Ethics | Same module → **Ethics and Consent** (~16 min — assign first ~6–8 min only) | Required before any peer interview in class. |
| From research → design input | Module **Analyzing and Delivering User Research** → **Personas I** *or* **Tasks and Walkthrough Scenarios** | Shows how notes become requirements for Design. |

**Skill Warm-up task (students)**
Watch/read the assigned clip. Write two lines:

1. One thing the researcher did.
2. One thing I’m still confused about.

**Talk Robin 1 prompts**

- You: “What was done in the research example was…”
- Partner: “What was confusing was…”
- Together: “One question we would ask a real user of our project is…”

**Entry Check (individual)**

1. Name one user-research method from the warm-up.
2. Why is “I think users want X” weaker evidence than an observation or interview note?
3. Write one ethical rule before interviewing a classmate.

**Why this course fits Discover:** It teaches *methods + ethics + synthesis*, not marketing slogans—so Discover produces **HCI evidence**, not opinions.

---

### B. Design — Figma wireframes & interactive prototypes

**Primary Coursera courses:**

1. *Prototyping and Design* (University of Minnesota) — design thinking
2. *Principles of UX/UI Design* (Meta) — Figma practice

| Warm-up focus | Coursera resource to assign | Why this clip |
|---|---|---|
| Why prototype | *Prototyping and Design* → Module **Interface Prototyping Techniques** (first lecture on paper/tool prototyping) | Justifies design-before-code for our Figma outcome. |
| Design principles | Same course → Module **Design Principles and Patterns** (first principles video) | Gives language for critique later. |
| Accessibility | Same course → Module **Universal Design, Accessibility, Special Populations** (intro video only) | Connects Design to later Test/a11y checks. |
| Figma wireframe | *Principles of UX/UI Design* → modules on **Designing your UI** / Figma wireframe & prototype lessons | Tool match: students open Figma the same day. |

**Skill Warm-up task**
After the clip: sketch **3 boxes** for today (e.g. Home → Task → Result) on paper or Figma; label one user action.

**Talk Robin 1 prompts**

- You: “My three screens are…”
- Partner: “A user might get stuck at…”
- Together: “One thing the Coursera clip said that we should copy is…”

**Entry Check**

1. What is the difference between a wireframe and a polished visual mockup?
2. Name one reason to design in Figma before writing HTML.
3. Circle which is better first: (A) pixel-perfect colors (B) clear user flow.

**Why these courses fit Design:** Minnesota supplies **HCI-quality prototyping theory**; Meta supplies **Figma craft**—together they match our “Figma prototype” course outcome without jumping into React.

---

### C. Build — HTML · CSS · Bootstrap · JavaScript

**Primary Coursera program:** *HTML, CSS, and Javascript for Web Developers* Specialization (Johns Hopkins University)
https://www.coursera.org/specializations/html-css-javascript-for-web-developers

| Build topic | Coursera course inside the specialization | Warm-up resource | Why it fits |
|---|---|---|---|
| Semantic HTML | *HTML, CSS, and Javascript for Web Developers* (Course 1 / HTML5 module) | **Introduction to HTML5** — valid document structure + semantic tags videos | Same HTML5 semantics we require in Build. |
| CSS layout / visuals | *Introduction to CSS3* | Early videos on selectors/box model; later **Bootstrap** lessons when teaching Bootstrap | Direct match to CSS + Bootstrap in our stack. |
| Page build pattern | *Coding the Static Restaurant Site* | First “project structure / implement the page” video | Models “turn design into a real page”—prep for Create. |
| Interactivity | *Introduction to Javascript and Ajax: Building Web Apps* | First JS values/functions or DOM intro video (one idea only) | Feeds JavaScript interaction lessons without frameworks. |

**Skill Warm-up task**
Watch the assigned JHU clip. In notes, copy **one** tiny pattern (e.g. one semantic tag pair, one CSS rule idea, one `function` shape)—not a full page.

**Talk Robin 1 prompts**

- You: “The pattern I saw was…”
- Partner: “The part that confused me was…”
- Together: “In our project, we would use this when…”

**Entry Check**

1. What does today’s warm-up pattern do in one sentence?
2. Predict: if we change X, what should happen on the page?
3. Mark True/False: “Watching the Coursera video alone means I mastered the skill.” (Answer: False — rebuild comes later.)

**Why JHU fits Build:** Browser-only stack, progressive HTML→CSS(+Bootstrap)→JS, and project labs—aligned with “interactive websites & browser games,” not Node/React-first curricula.

---

### D. Collaborate — GitHub workflow & peer review

**Decided stack (no Coursera):** [GitHub for Beginners](https://www.youtube.com/playlist?list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f) — **one video per class**, skip Actions. Practice in class. **No video homework.** Exit Ticket = `learning-log.md` only.

Map: `02_Class_Missions/01-github-foundations/README.md`.

| Role | Resource | Link |
|---|---|---|
| Skill Warm-up (Lesson 1) | Playlist #1 — What is Git? | https://www.youtube.com/watch?v=r8jQ9hVA2qs |
| Skill Warm-up (Lesson 2) | Playlist #2 — Essential Git commands | https://www.youtube.com/watch?v=rE2zRhZdjFU |
| Skill Warm-up (Lesson 3) | Playlist #3 — Create a repository | https://www.youtube.com/watch?v=-RZ03WHqkaY |
| Skill Warm-up (Lesson 4) | Playlist #4 — Upload files and folders | https://www.youtube.com/watch?v=tlu5e0TxSzo |
| Skill Warm-up (Lesson 5) | Playlist #5 — Add code | https://www.youtube.com/watch?v=g2XjJhrGGg4 |
| Skill Warm-up (Lesson 6) | Playlist #6 — Create a PR | https://www.youtube.com/watch?v=nCKdihvneS0 |
| Skill Warm-up (Lesson 7) | Playlist #7 — Merge a PR | https://www.youtube.com/watch?v=FDXSgyDGmho |
| Skill Warm-up (Lesson 8) | Playlist #8 — Profile and account safety | https://www.youtube.com/watch?v=T_PKBNImooA |
| Skill Warm-up (Lesson 9) | Playlist #9 — Issues and Projects | https://www.youtube.com/watch?v=c67GaAkf1BE |
| Skip | Playlist #10 Actions | https://www.youtube.com/watch?v=BQrohJ3PT7I |
| Skill Warm-up (Lesson 10) | Playlist #11 — GitHub security | https://www.youtube.com/watch?v=zhxXaFzzJYA |
| Skill Warm-up (Lesson 11) | Playlist #12 — GitHub Pages | https://www.youtube.com/watch?v=b2r9Cdvssi0 |
| Skill Warm-up (Lesson 12) | Playlist #13 — Markdown | https://www.youtube.com/watch?v=LxeclcePg-c |
| Skill Warm-up (Lesson 13) | Playlist #14 — Open source contributions | https://www.youtube.com/watch?v=WldXhauP024 |
| Skill Warm-up (Lesson 14) | Playlist #15 — Git and GitHub in VS Code | https://www.youtube.com/watch?v=NFjz1AGKA4c |
| Skill Warm-up (Lesson 15) | Playlist #16 — Common beginner questions | https://www.youtube.com/watch?v=ZgARMqR3qq8 |
| Official practice | GitHub Skills: Introduction to GitHub (**Lessons 6–7**) | https://github.com/skills/introduction-to-github |
| Official practice | GitHub Skills: Communicate using Markdown (**Lesson 12**) | https://github.com/skills/communicate-using-markdown |

**Skill Warm-up task**
Watch the **one** assigned playlist video for that lesson.

**Exit Ticket**
`learning-log.md` Lesson N: What I did / learned / hard. That is the only homework if not finished in class.

**Talk Robin 1 prompts**

- You: “What was done in the GitHub workflow was…”
- Partner: “What was confusing was…”
- Together: “One rule our team should follow is…”

**Entry Check**

1. What is the difference between a **commit** and a **push**?
2. Why does commit history matter as learning evidence?
3. Write one good commit-message idea for “I fixed the nav link.”

**Why this fits Collaborate:** Same stack you already authored—official GitHub teaching + short YouTube—better for G6 than a Coursera university Git course, and already wired into daily lesson plans.

---

### E. Test — HCI experiments, evidence & iteration

**Primary Coursera course:** *Evaluating User Interfaces* (University of Minnesota)
https://www.coursera.org/learn/ui-testing

| Warm-up focus | Module + resource | Why this clip |
|---|---|---|
| Eval without users | Modules **Evaluation without Users** — heuristic evaluation intro | Cheap checks before recruiting peers. |
| Eval with users | Modules **Evaluation with Users** — usability test intro / lab example | Matches “HCI experiments” and usability panels in our poster. |
| Release criteria | Module **Wrap-Up** — usability goals | Connects evidence → “good enough to publish.” |

**Skill Warm-up task**
From the clip, list **2** things an evaluator looks for (e.g. confusing label, slow task).

**Talk Robin 1 prompts**

- You: “One problem a usability test could find in our site is…”
- Partner: “Evidence we would write down is…”
- Together: “If the success rate is low, our next change would be…”

**Entry Check**

1. What is one difference between guessing “users will like it” and running a short usability task?
2. Name one thing you would measure (time, errors, success, satisfaction).
3. After a failed task, what should the team do next: ship anyway, or iterate? Why?

**Why this course fits Test:** It is literally UI evaluation with and without users—the academic backbone of our Test stage and **HCI evidence** outcome.

---

### F. Create — Interactive websites & browser games

**Primary Coursera resources (still JHU specialization):**

| Warm-up focus | Resource | Why this clip |
|---|---|---|
| Ship a multi-page experience | *Coding the Static Restaurant Site* — structure / navigation implementation video | Pattern: plan sections → implement → check on devices. |
| Add interaction | *Introduction to Javascript and Ajax: Building Web Apps* — one DOM/events or small app intro video | Pattern students rebuild as game loop / UI state. |

**Skill Warm-up task**
Identify the **core pattern** in the clip in one line: e.g. “listen for event → update page state → show feedback.”

**Talk Robin 1 prompts**

- You: “The pattern to rebuild is…”
- Partner: “Where I would get stuck rebuilding it is…”
- Together: “Our published project will prove this pattern by…”

**Entry Check**

1. Restate today’s pattern without looking at notes.
2. What evidence will prove you can rebuild it (commit, URL, screenshot)?
3. What is *not* allowed as “done”? (Answer examples: only watching Coursera; copying without explaining.)

**Why this fits Create:** Coursera shows a worked example; **Create** requires students to rebuild and publish **their** site/game—matching the poster goal: *rebuild and explain independently*.

---

### G. AI Literacy (parallel track)

**Required text (sole content source):** Melanie Mitchell, ***Artificial Intelligence: A Guide for Thinking Humans***
Book page: https://melaniemitchell.me/aibook/
Canonical unit: [`02_Class_Missions/06-ai-literacy/`](../../../02_Class_Missions/06-ai-literacy/)

**Not used for AI Literacy warm-ups:** Coursera *AI for Everyone*, *Generative AI for Everyone*, videos, news, chatbot demos, or online chapter summaries.

| Warm-up focus (maps to unit habits) | Book focus (see required-reading-map) | Why this passage |
|---|---|---|
| What counts as intelligence / what AI aims to do | Prologue + Ch. 1 (Meetings 21A–21B) | Defines the field before students judge product hype. |
| Learning systems vs. expectations | Ch. 2–3 (Meeting 21C) | Separates demo success from overclaim. |
| Recognition ≠ understanding a scene | Ch. 4–5 (Meetings 22A–22B) | Supports “what AI can / cannot do.” |
| Failure, trust, ethics | Ch. 6–7 (Meeting 22C) | Supports responsible judgment of AI systems. |
| Reward, games, transfer | Ch. 8–10 (Meetings 23A–23B) | Shows narrow success without general understanding. |
| Language, meaning, analogy | Ch. 11–15 (Meetings 23C–24B) | Supports spotting fluent-but-wrong outputs (hallucination-adjacent literacy). |
| How a thinking human judges AI claims | Ch. 16 + prior logs (Meeting 24C) | Caps the unit with evidence-based judgment + disclosure habits in class use of tools. |

**Skill Warm-up (Step 1) — Mitchell, not Coursera**
Teacher posts exact chapter + page range for today’s meeting (edition-specific). Students read the assigned **300–450 word** chunk in class and mark:

- **C** = claim
- **E** = evidence / example
- **?** = unclear

Ready line: “Mitchell’s main point here is ___ because ___.”

**Talk Robin 1 prompts**

- You: “Mitchell’s claim was…”
- Partner: “The evidence/example she used was…”
- Together: “What is still confusing / what the evidence does *not* prove is…”

**Entry Check**

1. Restate Mitchell’s claim in one sentence (own words).
2. Name one piece of evidence or case from the passage.
3. Write one boundary: “This shows ___ but does **not** show ___.”

**Why Mitchell fits this course:** The poster’s AI Literacy track is judgment literacy—capability limits, careful reading of AI claims, and responsible classroom use—not an Andrew Ng Coursera survey. Mitchell is already the sole input for Lessons 21–24.

---

## Teacher checklist for Steps 1–3

Before class:

- [ ] Journey stage for today is clear (Discover / Design / Build / Collaborate / Test / Create / AI).
- [ ] **Web stages:** one Coursera URL + exact clip title on the board or LMS.
- [ ] **AI Literacy:** exact Mitchell chapter + page range (class edition) on the board; word limit ≤ 450.
- [ ] Timebox set (no Coursera binge; no “finish the chapter at home”).
- [ ] Talk Robin prompts on a slide.
- [ ] Entry Check (2–4 items) printed or posted.
- [ ] Plan: how Entry Check results will shape the Core Pattern micro-lesson.

During class:

- [ ] Warm-up ends on time (pause Coursera video or stop Mitchell reading at the assigned end).
- [ ] Talk Robin surfaces confusion **before** Entry Check.
- [ ] Entry Check is silent and individual.
- [ ] Collect or scan Entry Checks before Core Pattern.
- [ ] AI Literacy: Mission evidence stays tied to the assigned Mitchell passage.

---

## How this connects to course outcomes

| Outcome | Fed by Steps 1–3 when… |
|---|---|
| **Figma prototype** | Design warm-ups use Minnesota + Meta/Figma clips |
| **Published web project** | Build/Create warm-ups use JHU HTML/CSS/JS patterns students later rebuild |
| **GitHub portfolio** | Collaborate warm-ups use Google Git/GitHub PR + review |
| **HCI evidence** | Discover + Test warm-ups use Minnesota research & UI evaluation |

---

## Related files

- Poster image: `08_Public_Documents/posters/classroom-flow.png`
- Daily timing overview: `classroom-learning-workflow.md` (same folder)
- Canonical mission flow (legacy naming): `02_Class_Missions/shared/classroom-flow.md`
- Learning journey: `00_Course_Overview/Learning_Pathway_Map.md`

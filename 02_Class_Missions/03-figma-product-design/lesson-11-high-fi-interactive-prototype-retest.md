# Lesson 11 — Iterate in Figma: Revise and Retest

**Length:** 45 minutes  
**Design stage:** Iterate → Evaluate again  
**OMSCS CS6750 backbone:** **3.7 HCI and Agile Development** + **3.5–3.6 Prototyping / Evaluation**  
**Tool:** Figma  
**Mission:** Revise the prototype from evaluation evidence, increase fidelity only when useful, and retest the same core task to determine whether the design actually improved.  
**Durable Evidence:** [L11 submission template](student-templates/l11-high-fi-retest-change-log.md)

### Skill Warm-up video

| Field | Assign this |
|---|---|
| Theory | OMSCS CS6750 **3.7 HCI and Agile Development** — selected iteration excerpt |
| Reinforcement | CS6750 **3.5–3.6** prototype → evaluation loop |
| Stop | **≤ 5:00** |

## 0–5 min — Skill Warm-up

Complete:

~~~text
Prototype
→ Evaluate
→ ______
→ Evaluate again
~~~

Then answer:

1. Why is evaluation not the end?
2. Why must a revision be traceable to evidence?
3. Why should we retest after changing the design?

Core sentence:

> **A design change is a hypothesis until a retest shows that it helped.**

## 5–9 min — Talk Robin 1

Open the L10 Must / Should / Later list.

Choose:

- **2 evidence-backed MUST/SHOULD changes** to implement;
- one low-priority polish item to postpone.

For each selected change, say:

> **Evidence → Design Problem → Change**

Partner checks whether the change actually addresses the evidence.

## 9–14 min — Entry Check

Classify each proposed revision:

### Evidence-driven
Tester repeatedly missed the Save action → make the action more visible / specific.

### Not evidence-driven
Tester missed the Save action → change the background color because the designer prefers blue.

Then answer:

> What would you need to observe in the retest to claim the revision helped?

## 14–19 min — Core Pattern

~~~text
Evaluation evidence
→ prioritize problem
→ revise
→ raise fidelity only where useful
→ retest the SAME task
→ compare result
~~~

### Raise fidelity only when it helps the next test

Useful now:

- clearer hierarchy;
- realistic labels/content;
- consistent spacing;
- interaction feedback;
- success state;
- error prevention / recovery.

Teach additional Figma skills **just in time** only if the revision requires them:

- Auto Layout;
- reusable component;
- variants/states;
- interaction feedback.

Do not teach them merely because Figma has the feature.

Optional later:

- complex animation;
- decorative illustration;
- large design systems;
- unnecessary visual effects.

## 19–30 min — Guided Practice

Revise the prototype.

Required:

- main task remains clickable start → success;
- at least **2 changes** directly trace to L10 evidence;
- relevant labels/hierarchy are clearer;
- spacing/alignment are consistent;
- important mistakes are constrained or recoverable.

For every major change, keep:

| Evidence | Problem | Change |
|---|---|---|
| | | |

## 30–40 min — Independent Rebuild + Retest

Retest the **same core task** with another peer when possible.

Do not coach.

Compare:

| Measure | L10 first test | L11 retest |
|---|---|---|
| Completed without help? | | |
| Wrong turns | | |
| Pauses | | |
| Help requested | | |
| Main confusion | | |

Then complete:

| Before | Evidence | Change | Retest result |
|---|---|---|---|
| | | | |
| | | | |

Ask:

> **Did the change actually help?**

Possible answers:

- Yes — evidence suggests improvement.
- Partly — some problem remains.
- No — revise again.

## 40–45 min — Talk Robin 2 + Evidence

Submit:

1. updated Figma prototype URL;
2. retest evidence;
3. before → evidence → change → result log.

Final statement:

> **“We changed ______ because the first evaluation showed ______. The retest showed ______.”**

## Success Evidence

Students can:

- revise from evidence rather than preference;
- explain why each major design change exists;
- increase fidelity only for a purpose;
- retest the same task;
- judge whether the change improved the interaction.

## Figma Unit Test

After L11, complete the **Figma Design Cycle Unit Test**.

It checks transfer across:

> **Prototype → Evaluate → Iterate**

including a small practical Figma task.

## Design → Build Gate

Ready for HTML/CSS implementation only when:

- [ ] main task is clickable from start → success;
- [ ] a peer completes the task without facilitator help;
- [ ] no unresolved **MUST** usability blocker remains;
- [ ] at least two revisions trace directly to evaluation evidence;
- [ ] retest evidence is documented;
- [ ] before → evidence → change → result is complete.

If the gate fails:

> **Revise again before implementation.**

Building a known-bad interaction in code only makes the mistake more expensive.

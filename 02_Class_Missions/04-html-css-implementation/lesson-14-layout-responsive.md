# Lesson 14 — Layout and Responsive Design

**Length:** 45 minutes  
**Mission:** Build responsive layouts that preserve user priorities across viewport sizes.  
**One Required Resource / Evidence Source:** approved Figma desktop/mobile frames or teacher-provided responsive examples  
**Durable Evidence:** responsive layout implementation + viewport test log

## 0–4 min — Entry Point Check

Individually inspect a desktop layout squeezed into a narrow viewport. Mark what breaks first and rank the three most important things the user must still be able to do on a small screen.

## 4–12 min — Individual Learning / Skill Warm-up

Inspect responsive examples and record evidence for:

- normal flow;
- box model;
- Flexbox vs Grid use;
- flexible widths;
- wrapping;
- breakpoints driven by content failure rather than device names;
- image/text behavior;
- mobile content priority.

## 12–17 min — Talk Round 1

Pairs predict how one Figma layout should change as width decreases. Sketch a responsive strategy and compare it with another pair. Identify one element that should reflow rather than simply shrink.

## 17–22 min — Teacher Diagnosis / Core Pattern

Groups debug a deliberately broken responsive page. They must identify the failure cause using DevTools evidence. Teacher clarifies only common barriers such as fixed widths, overflow, Flexbox/Grid misunderstandings, or ineffective media queries.

## 22–35 min — Guided Practice / Mission Task

Implement responsive behavior for the project:

- layout using Flexbox/Grid where appropriate;
- flexible containers;
- readable line lengths;
- navigation behavior;
- images/media that do not overflow;
- breakpoints based on observed layout failure;
- test at multiple widths.

Record each failure discovered and the fix applied.

## 35–42 min — Independent Rebuild / Exit Check

Individually inspect a new responsive bug and state whether the likely fix belongs to width sizing, layout mode, wrapping, or a breakpoint. Explain the evidence.

## 42–45 min — Submission

Commit responsive changes, viewport test log/screenshots, and individual exit response.

## Success Evidence

Students can make a layout adapt to changing space and explain responsive decisions in terms of content/user needs rather than memorized device sizes.

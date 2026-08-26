# Lesson 14 — Layout and Responsive Design

**Length:** 45 minutes  
**Mission:** Build responsive layouts that preserve user priorities across viewport sizes.  
**One Required Resource / Evidence Source:** approved Figma desktop/mobile frames or teacher-provided responsive examples  
**Durable Evidence:** responsive layout implementation + viewport test log

## 0–5 min — Skill Warm-up

Inspect responsive examples and record evidence for:

- normal flow;
- box model;
- Flexbox vs Grid use;
- flexible widths;
- wrapping;
- breakpoints driven by content failure rather than device names;
- image/text behavior;
- mobile content priority.

## 5–9 min — Talk Robin 1

Pairs predict how one Figma layout should change as width decreases. Sketch a responsive strategy and compare it with another pair. Identify one element that should reflow rather than simply shrink.

## 9–14 min — Entry Check

Individually inspect a desktop layout squeezed into a narrow viewport. Mark what breaks first and rank the three most important things the user must still be able to do on a small screen.

## 14–19 min — Core Pattern

Groups debug a deliberately broken responsive page. They must identify the failure cause using DevTools evidence. Teacher clarifies only common barriers such as fixed widths, overflow, Flexbox/Grid misunderstandings, or ineffective media queries.

## 19–30 min — Guided Practice

Implement responsive behavior for the project:

- layout using Flexbox/Grid where appropriate;
- flexible containers;
- readable line lengths;
- navigation behavior;
- images/media that do not overflow;
- breakpoints based on observed layout failure;
- test at multiple widths.

Record each failure discovered and the fix applied.

## 30–40 min — Independent Rebuild

Individually inspect a new responsive bug and state whether the likely fix belongs to width sizing, layout mode, wrapping, or a breakpoint. Explain the evidence.

## 40–45 min — Talk Robin 2 + Evidence

Commit responsive changes, viewport test log/screenshots, and individual exit response.

## Success Evidence

Students can make a layout adapt to changing space and explain responsive decisions in terms of content/user needs rather than memorized device sizes.

# Lesson 13 — CSS Visual System: Typography, Color, Spacing

**Length:** 45 minutes  
**Mission:** Reproduce the Figma visual system with deliberate, reusable CSS rather than random one-off styling.  
**One Required Resource / Evidence Source:** approved Figma design-system decisions + current semantic HTML  
**Durable Evidence:** `style.css` visual tokens/rules + comparison evidence

## 0–5 min — Skill Warm-up

Inspect the Figma design system and teacher-provided CSS example. Record:

- typography roles;
- color roles;
- spacing rhythm;
- CSS cascade/specificity observations;
- reusable classes/custom properties where appropriate;
- accessibility constraints such as contrast.

## 5–9 min — Talk Robin 1

Pairs map Figma design decisions to CSS rules. Compare one typography choice, one color choice, and one spacing choice. Identify one place where copying pixel values blindly would create a brittle implementation.

## 9–14 min — Entry Check

Individually compare two CSS snippets: one repeats arbitrary font sizes/colors/spacing; the other uses a small consistent system. Predict which will be easier to change and mark three reasons.

## 14–19 min — Core Pattern

Groups debug a small stylesheet containing duplicate rules, conflicting selectors, and inconsistent spacing. Display the cause of one issue and the proposed fix. Teacher clarifies only shared barriers such as cascade, inheritance, specificity, or unit confusion.

## 19–30 min — Guided Practice

Implement the visual system:

- base typography;
- heading/text hierarchy;
- color variables/roles;
- spacing rules;
- link/button appearance;
- focus/hover states where relevant;
- accessible contrast.

Compare the browser result against the approved Figma design and document two intentional differences if exact translation is inappropriate.

## 30–40 min — Independent Rebuild

Individually explain how you would change the whole site's accent color or spacing scale with minimal edits. Point to the CSS organization that makes this possible.

## 40–45 min — Talk Robin 2 + Evidence

Commit stylesheet changes, Figma/browser comparison evidence, and individual exit response.

## Success Evidence

Students can translate design-system decisions into reusable CSS and explain cascade/organization choices that support consistency and maintainability.

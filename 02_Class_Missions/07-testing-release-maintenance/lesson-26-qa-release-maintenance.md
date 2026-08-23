# Lesson 26 — QA, Accessibility, Release, and Maintenance

**Mission:** Decide whether a product is ready to release, fix the highest-risk defects, deploy it, and plan what happens next.

## Release-Candidate Checklist (0–15)

Teams define must-pass checks for core functionality, responsive behavior, accessibility, data/state behavior, major browsers/devices available, and known constraints.

## QA Rotation (15–38)

Run systematic tests. Every defect becomes a GitHub issue with reproduction steps, expected behavior, observed behavior, severity, and evidence.

## Accessibility Pass (38–50)

Check keyboard access, focus, labels/names, heading structure, color contrast, zoom/reflow, error messaging, and non-color cues.

## Bug Triage (50–62)

Classify defects:

- release blocker;
- high priority;
- can defer with documented limitation;
- not reproducible / needs evidence.

## Fix + Regression (62–77)

Students fix the highest-priority issues through branches/PRs and retest related behavior after each fix.

## Release (77–86)

Deploy the approved version and write release notes containing shipped features, fixes, known limitations, and version/date.

## Maintenance Plan (86–90)

Record what feedback/data should be monitored and which deferred issue is most likely to enter the next version.

## Success Evidence

Students treat release as an evidence-based decision and maintenance as part of the lifecycle.

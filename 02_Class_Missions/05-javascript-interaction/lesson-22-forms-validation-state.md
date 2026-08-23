# Lesson 22 — Forms, Validation, State, and localStorage

## Mission
Collect user input responsibly, validate it, give useful feedback, and preserve only appropriate simple client-side state.

## Core Artifact
A form-based feature with validation and optional `localStorage` for non-sensitive data.

## Launch Challenge — 0–10
Students inspect form errors and rank feedback by usefulness. Identify examples that blame the user or reveal too little information.

## Evidence / Resource Scan — 10–25
Trace form submission: controls → values → validation → error/success state → render → optional persistence. Discuss why sensitive data should not be placed casually in browser storage.

## Team Sensemaking — 25–40
Teams define validation rules from product requirements and decide what should happen for empty, malformed, duplicate, or cancelled input.

## Studio Build — 40–65
Implement submit handling, validation, visible feedback, and simple state. Use `localStorage` only when the data is appropriate to remain on the device.

## Critique / Test — 65–80
Peers run a boundary-value test set and refresh/reopen the page to inspect state behavior.

## Ship Evidence — 80–90
Fix one validation/state defect and commit with test evidence.

## Success Evidence
Students distinguish validation, feedback, state, and persistence and can explain privacy limits.

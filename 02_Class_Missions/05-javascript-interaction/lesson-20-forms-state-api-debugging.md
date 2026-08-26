# Lesson 20 — Forms, State, External Data, and Debugging

**Length:** 45 minutes  
**Mission:** Build a robust user-input interaction, manage state, and debug failures using evidence rather than guessing.  
**One Required Resource / Evidence Source:** teacher-provided form/debugging example; external API/data is optional  
**Durable Evidence:** validated interaction + debug log + tests

## 0–4 min — Entry Point Check

Individually test a deliberately flawed form. Record at least three failure cases: empty input, invalid input, repeated submission, unclear feedback, or another observed issue.

## 4–12 min — Individual Learning / Skill Warm-up

Inspect the example and record:

- reading form values;
- preventing/default submission behavior where relevant;
- validation;
- state update;
- user feedback;
- console/error messages;
- network/request evidence if an external API/data source is used.

## 12–17 min — Talk Round 1

Pairs convert observed failures into test cases with **input → expected behavior → actual behavior**. Compare debugging strategies and identify which evidence source should be checked first for each failure.

## 17–22 min — Teacher Diagnosis / Core Pattern

Groups debug one broken form/data interaction using DevTools. They must show the first reliable evidence locating the problem rather than listing random fixes. Teacher clarifies only shared barriers such as validation order, stale state, asynchronous requests, or reading console/network errors.

## 22–35 min — Guided Practice / Mission Task

Implement or improve a project form/interaction:

- read and validate input;
- update state;
- show useful success/error feedback;
- prevent invalid actions;
- optionally fetch/use external data if it genuinely supports the product;
- test at least four cases;
- record one bug and the evidence used to fix it.

## 35–42 min — Independent Rebuild / Exit Check

Individually diagnose a new failure from a short console/network/output trace. State the likely cause, the next evidence you would inspect, and one fix hypothesis.

## 42–45 min — Submission

Commit code, test cases/results, debug log, and individual exit response.

## Success Evidence

Students can build a validated interaction and use observable program/browser evidence to debug instead of changing code randomly.

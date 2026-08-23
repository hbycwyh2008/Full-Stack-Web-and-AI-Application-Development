# Lesson 20 — Forms, Persistence, APIs, and Debugging

**Mission:** Build a small data-driven feature and debug it systematically.

## Form/Data Flow (0–15)

Students map one form through:

```text
input → validation → normalized data → state/storage → feedback/output
```

## Build (15–42)

Implement form handling and validation. Add local persistence (`localStorage`) or JSON-based state when appropriate.

## API Extension (42–55)

If the product benefits from external data, demonstrate `fetch()` and JSON with a safe public/teacher-provided endpoint. If not, use the time for deeper persistence/state work. APIs are useful context, not a required framework.

## Debugging Investigation (55–75)

Introduce several faults. Students maintain a log:

```text
observed behavior
expected behavior
hypothesis
experiment/evidence
fix
verification
```

Require console/dev-tools evidence before random edits.

## Regression Check (75–84)

After each fix, retest the original feature and one related behavior. Discuss why a fix can create a new bug.

## PR + Explanation (84–90)

Open a PR containing feature behavior, validation cases, test steps, and the most important debugging finding.

## Success Evidence

Students can explain both how the feature works and how they proved a bug was fixed.

# Lesson 19 — DOM, Events, and Interactive Interfaces

**Mission:** Connect user actions to program state and visible interface changes.

## Interaction Trace (0–12)

Choose one prototype interaction. Students diagram:

```text
user event → event handler → state/data change → DOM/output update
```

## DOM Investigation (12–28)

Use browser tools to inspect elements and compare HTML source with the live DOM. Practice selecting elements and reading/changing content or attributes.

## Event Lab (28–48)

Students implement click/input/change events. Require meaningful handler functions rather than large anonymous blocks.

## State-to-UI Build (48–66)

A user action changes program state and then renders the new state. Students distinguish **changing a variable** from **updating what the user sees**.

## Event Bug Hunt (66–78)

Diagnose common failures: wrong selector, listener attached too early, event on wrong element, stale state, duplicate listeners.

## Feature PR (78–90)

Implement one real interaction from the Figma prototype on a feature branch and open a PR with test steps.

## Success Evidence

Students can trace an interaction from event through state to output.

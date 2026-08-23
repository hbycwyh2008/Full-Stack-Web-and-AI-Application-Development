# Lesson 22 — Vision, Learning, Generalization, and Failure

**Reading focus:** selected sections from Chapters 4–7.  
**Mission:** Understand why strong machine-learning performance does not automatically imply robust understanding or reliability.

## Before Class

Students bring one example from the reading where an AI system succeeds impressively and one where performance reveals a limitation.

## Success/Failure Pair Analysis (0–20)

Teams compare paired cases: strong benchmark performance versus changed context, unusual input, distribution shift, adversarial/noisy case, or biased data. Record exactly what changed.

## Learning Model (20–35)

Without deriving deep-learning mathematics, students build a conceptual model:

```text
training data → learned statistical/representational patterns → prediction → evaluation on new cases
```

Discuss why `learned` does not mean `learned in the same way a human learns`.

## Generalization Spectrum (35–55)

Teams place cases on a spectrum from **memorization-like behavior → interpolation/pattern generalization → robust transfer to meaningfully new situations**. They must defend placement with evidence.

## Reliability Case Study (55–72)

Students analyze one hypothetical deployment and identify:

- expected inputs;
- out-of-distribution inputs;
- possible false positive/false negative harms;
- data/bias risks;
- what testing evidence would be needed before trusting the system.

This is an AI reliability exercise, not a web-project requirement.

## Synthesis (72–85)

Create a four-column board:

**Capability | Evidence | Failure Boundary | What We Still Cannot Claim**

## Exit Evidence (85–90)

Write one sentence explaining why benchmark accuracy and general intelligence are different claims.

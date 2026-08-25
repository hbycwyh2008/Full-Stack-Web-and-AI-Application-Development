# Lesson 22 — Vision, Generalization, and Trust

**Students:** Grade 7  
**Delivery:** three 45-minute class meetings: **22A, 22B, and 22C**  
**Only required content source:** Melanie Mitchell, *Artificial Intelligence: A Guide for Thinking Humans*  
**Student preparation:** none  
**Regular homework:** none  
**Flow:** [Grade 7 AI Literacy 45-Minute Classroom Flow](classroom-flow-45-min.md)  
**Reading locations:** [Required In-Class Reading Map](required-reading-map.md)

## Lesson Purpose

Students use Mitchell's computer-vision cases to distinguish object labels from scene understanding, read benchmark results within their actual test conditions, and connect technical failure to questions of trust and impact.

## Required Mastery

By the end of Meeting 22C, students can:

1. separate visible image details from contextual inferences;
2. state what a defined benchmark result does and does not demonstrate;
3. explain that test accuracy depends on data and conditions;
4. trace how a shortcut, rare case, or adversarial change can produce failure;
5. identify who is affected and what evidence would be needed before trusting a system.

## Teacher Setup for All Three Meetings

- Locate and record the exact page ranges from the [Required In-Class Reading Map](required-reading-map.md).
- Keep each reading within the listed **300–450-word** range and divide it where the map indicates.
- Display only the four required vocabulary words.
- Use the book's cases as evidence; do not replace them with a live vision system, article, video, product page, or online summary.
- Prepare each half-page organizer before class so ten Mission Task minutes are enough.

---

## Meeting 22A — Labels and Scene Understanding

**Essential question:** Is recognizing objects the same as seeing a scene?

**Required in-class reading — 300–400 words:** the Chapter 4 analysis of the soldier-and-dog reunion photograph, beginning with what is visibly present and ending after Mitchell contrasts human contextual inference with object recognition/labeling. Use the exact start/stop anchor and exclusions in [22A of the reading map](required-reading-map.md#22a--labels-and-scene-understanding).

| Time | Classroom-flow block | Required student action |
|---:|---|---|
| 0–3 | **Entry Point Check** | Read two short statements about the same image: one visible detail and one inferred story. Label each visible or inferred and explain one choice. |
| 3–17 | **Individual Learning** | Read the assigned Chapter 4 passage. Mark V beside a directly visible detail, I beside an inference, C beside Mitchell's claim, and ? beside one difficult point. Pause halfway to paraphrase the difference. |
| 17–22 | **Talk Round 1** | Partners compare one V and one I using: “We can see ___; we infer ___ because ___.” Add the page number for the book detail. |
| 22–28 | **Entry Points Check / Teacher Diagnosis** | Pairs show one visible/inferred pair. Teacher clarifies only a shared confusion among classification, perception, context, and inference by pointing back to the assigned passage. |
| 28–38 | **Guided Practice / Mission Task** | Complete a **Visible vs. Inferred Scene Table** with three rows. Teacher models one visible detail; students add the related inference, background knowledge, and whether an object label alone supports it. |
| 38–43 | **Exit Check** | Independently complete the four Learning Log lines for Meeting 22A. The boundary must state what labels alone do not establish. |
| 43–45 | **Submission** | Submit the Scene Table and Learning Log entry. |

### Visible vs. Inferred Scene Table

| Directly visible detail | What a person infers | Background knowledge used | Does an object label alone support this? |
|---|---|---|---|
| detail 1 | short inference | short phrase | yes / partly / no + reason |
| detail 2 | short inference | short phrase | yes / partly / no + reason |
| detail 3 | short inference | short phrase | yes / partly / no + reason |

**Success evidence:** The student can identify an inference that requires context beyond object labels.

---

## Meeting 22B — What Does a Benchmark Show?

**Essential question:** What does a high benchmark score actually show?

**Required in-class reading — 350–450 words:** the Chapter 5 passage from the purpose of ImageNet through AlexNet's 2012 result and its significance, ending after Mitchell's warning about treating a defined benchmark or “human-level” comparison as full human vision. Use the exact anchor and exclusions in [22B of the reading map](required-reading-map.md#22b--what-does-a-benchmark-show).

| Time | Classroom-flow block | Required student action |
|---:|---|---|
| 0–3 | **Entry Point Check** | Complete: “A test score tells us ___, but only if we know ___.” |
| 3–17 | **Individual Learning** | Read the assigned Chapter 5 selection. Mark T for task/test, R for reported result, S for significance, and B for boundary. Pause after the result and paraphrase what was measured. |
| 17–22 | **Talk Round 1** | Partners use: “On this benchmark, the system ___ under ___ conditions. This matters because ___, but it does not show ___.” Include a page number. |
| 22–28 | **Entry Points Check / Teacher Diagnosis** | Pairs show their bounded sentence. Teacher clarifies only shared confusion about dataset, benchmark, accuracy, or generalization. |
| 28–38 | **Guided Practice / Mission Task** | Complete a **Benchmark Boundary Card**. Teacher models the task box; students add data/conditions, reported result, justified claim, and stronger unsupported claim. |
| 38–43 | **Exit Check** | Independently complete the four Learning Log lines for Meeting 22B. The evidence line names the benchmark/result; the boundary line names what was not tested. |
| 43–45 | **Submission** | Submit the Benchmark Boundary Card and Learning Log entry. |

### Benchmark Boundary Card

| Defined task | Data/test conditions | Reported result | Claim justified by the result | Stronger claim not justified |
|---|---|---|---|---|
| short phrase | short phrase | exact book detail | one sentence | one sentence |

**Success evidence:** The student interprets the result inside its test conditions instead of turning it into a claim about all of vision.

---

## Meeting 22C — From Failure to Trust

**Essential question:** Why can an accurate system still be untrustworthy?

**Required in-class reading — 350–450 words:** two short chunks: (1) Chapter 6's adversarial-image example, from the original classification through the confident wrong classification after a small meaning-preserving change and Mitchell's explanation; (2) one Chapter 7 facial-recognition case, from the error/unequal performance through who is affected and why accuracy alone is insufficient. Use the exact anchors and exclusions in [22C of the reading map](required-reading-map.md#22c--from-failure-to-trust).

| Time | Classroom-flow block | Required student action |
|---:|---|---|
| 0–3 | **Entry Point Check** | Respond: “If a system is correct 95 times out of 100, what else must we know before trusting it?” Name one missing fact. |
| 3–17 | **Individual Learning** | Read both chunks. In Chunk 1 mark normal condition, changed condition, and failure. In Chunk 2 mark error/performance difference, affected people, and consequence. Write one short paraphrase per chunk. |
| 17–22 | **Talk Round 1** | Partners connect the cases using: “The score can hide ___; this matters for ___ because ___.” Cite one detail and page from each chapter. |
| 22–28 | **Entry Points Check / Teacher Diagnosis** | Pairs display one condition-to-failure link and one affected group. Teacher clarifies only a shared confusion about shortcut, adversarial change, bias, or trust. |
| 28–38 | **Guided Practice / Mission Task** | Build a **Failure-to-Trust Chain**: original evidence → hidden dependency → changed/unequal condition → failure → human consequence → evidence or safeguard needed. Teacher models the first arrow only. |
| 38–43 | **Exit Check** | Independently complete the four Learning Log lines for Meeting 22C. The last line names one question that should be answered before deployment. |
| 43–45 | **Submission** | Submit the Failure-to-Trust Chain and Learning Log entry. |

### Failure-to-Trust Chain

| Original success evidence | Hidden dependency | Changed or unequal condition | Failure | Who is affected / consequence | Evidence or safeguard needed |
|---|---|---|---|---|---|
| book detail | short phrase | short phrase | exact failure | one impact | one test or safeguard |

**Success evidence:** The student connects a technical performance boundary to a human trust decision without claiming that every system fails in the same way.

## Finish-Up Rule

All required reading and mission work happen during class. If time is lost, only unfinished Learning Log lines may be completed later, normally within five minutes.

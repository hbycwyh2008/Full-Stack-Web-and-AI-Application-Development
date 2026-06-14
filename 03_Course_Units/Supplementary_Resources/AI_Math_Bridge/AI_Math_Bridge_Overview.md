# AI Math Bridge: Linear Algebra for AI

> **Lesson index:** see [README.md](README.md) for all lesson guides (Lessons 1–10, NumPy lab, image project).

## Purpose

This is **not** a full traditional linear algebra course. It is a short, practical **bridge module** that helps high school students understand the math ideas behind AI, machine learning, and computer vision.

Students learn that AI systems often represent data using:

- vectors
- matrices
- feature vectors
- data tables
- image matrices
- numerical transformations

The goal is **visual intuition and project connection**, not abstract proof-based linear algebra.

---

## Where This Module Fits

**Phase 3** in the main course — after **Git & GitHub**, **Notion Portfolio**, and **AI Literacy**, and **before** Figma, TypeScript, and Next.js.

```text
Git → Notion → AI Literacy → AI Math Bridge → Figma → TypeScript → Next.js → …
```

### Teaching Logic

```text
First:  Students learn how to organize, document, and build projects.
Then:   Students learn the math intuition behind AI features.
Finally: Students apply the math ideas in AI / ML / CV projects.
```

### Reuse Later

This module can be **reviewed or reused** before:

- Computer Vision projects
- Machine Learning projects
- AI App projects (embeddings, recommendations, RAG)

Do **not** place linear algebra before GitHub, Notion, or AI Literacy. Engineering workflow and AI literacy come first.

---

## Recommended Resource Sequence

```text
3Blue1Brown selected videos (visual intuition)
→ teacher explanation + class examples
→ DeepLearning.AI Linear Algebra — Week 3 selected parts (vectors, transformations)
→ DeepLearning.AI — Week 4 selected parts (determinants, eigenvectors intuition)
→ NumPy mini lab
→ image matrix mini project
```

### Main Visual Resource

**3Blue1Brown — Essence of Linear Algebra**

- Build visual intuition for vectors, linear combinations, span, matrices as transformations, matrix multiplication, determinant intuition, eigenvectors/eigenvalues intuition.
- **Do not** require the full playlist for all students — selected videos only.

### Coursera Resource (Selected Parts)

**DeepLearning.AI — Linear Algebra for Machine Learning and Data Science**

- **Week 3:** Vectors and Linear Transformations (selected parts)
- **Week 4:** Determinants and Eigenvectors (selected parts)
- Teachers may review the full course for prep; students need only AI/ML/CV-relevant sections.

---

## Student Deliverables

Create in your **personal** GitHub repo (`student-portfolio`). See `03_Templates/Student_GitHub_Repository_Guide.md`.

```text
ai-math-bridge/
├── README.md
├── vector-notes.md
├── matrix-notes.md
├── dot-product-notes.md
├── image-as-matrix-lab.ipynb
├── numpy-mini-lab.ipynb
├── pca-reflection.md
└── screenshots/
```

Use `03_Templates/ai-math-bridge-README-template.md` for the README. Lesson guides: [README.md](README.md).

---

## Suggested Pacing

| Track | Lessons |
|---|---|
| Regular class | 4–6 core lessons |
| Dedicated AI math mini-unit | 8–10 lessons |

See `09_Teacher_Planning/Phase_Overviews/Phase_3_AI_Math_Bridge_Linear_Algebra.md` for the full lesson sequence.

---

## Why This Matters for AI

| Concept | AI / ML / CV connection |
|---|---|
| Vectors | Embeddings, feature vectors, similarity |
| Matrices | Datasets, images, weight layers |
| Dot product | Recommendations, retrieval, attention intuition |
| X and y | `model.fit(X, y)` in ML |
| Eigenvectors / PCA | Compression, visualization, preprocessing |
| Image as matrix | Computer vision pipelines |

---

## Course Philosophy (Math Bridge)

> Students should not learn math as isolated abstract content. They should learn math when it helps them understand AI systems, data, images, and models.

> Linear algebra is introduced as an **AI Math Bridge**, not as a full traditional math course.

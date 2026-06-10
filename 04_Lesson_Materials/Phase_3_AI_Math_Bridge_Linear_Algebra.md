# Phase 3: AI Math Bridge — Linear Algebra for AI

## Phase Goal
Build **visual, intuitive** linear algebra foundations connected to AI, ML, and computer vision — not a full proof-based math course.

## Key Concepts
- Vectors, matrices, feature vectors, dot product, transformations, X/y in ML, PCA intuition, images as matrices, basic NumPy.

## Required Student Output
- `ai-math-bridge/` folder in `student-portfolio` (see `00_AI_Math_Bridge/AI_Math_Bridge_Overview.md`).
- NumPy mini lab + image matrix mini project.
- Reflection connecting math to AI/ML/CV.

## Recommended Length
- **Regular track:** 4–6 lessons (core set: 1, 2, 4, 6, 9, 10).
- **Mini-unit track:** 8–10 lessons (full sequence below).

## Resources
- 3Blue1Brown — Essence of Linear Algebra (selected videos).
- DeepLearning.AI — Linear Algebra for ML (Week 3–4 selected parts).
- `01_Student_Templates/AI_Math_Bridge_README_Template.md`.

---

## Lesson Sequence

### Lesson 1: Vectors as Data
- **Goal:** Understand a vector as a list of numbers representing real data.
- **Warm-up:** "How could you describe a student using numbers only?"
- **Mini Lesson:** Vector = ordered list; student profile, image row, embedding intuition.
- **Example:** `Student A = [90, 85, 78]`, `Student B = [70, 95, 88]` (subject scores).
- **Guided Practice:** Class creates 3 vectors for fake students; compare verbally.
- **Independent Work:** Start `vector-notes.md`; watch selected 3Blue1Brown vector video.
- **Exit Ticket:** One sentence — what is a vector in your own words?
- **Homework:** Add vector example from an AI app you know.

### Lesson 2: Matrices as Tables and Images
- **Goal:** Understand matrices as tables of numbers.
- **Warm-up:** Spreadsheet = matrix?
- **Mini Lesson:** Rows/columns; dataset matrix; grayscale 2D; RGB 3D array intro.
- **Example:** `X` = student data matrix (rows = students, columns = features).
- **Guided Practice:** Draw a small 3×4 matrix on paper; label rows/columns.
- **Independent Work:** `matrix-notes.md`; sketch dataset-as-matrix.
- **Exit Ticket:** What do rows and columns mean in a data matrix?
- **Homework:** Optional DeepLearning.AI Week 3 intro (selected parts).

### Lesson 3: Feature Vectors in Machine Learning
- **Goal:** Connect one data point → feature vector; full dataset → feature matrix.
- **Warm-up:** One Titanic passenger — what numbers describe them?
- **Mini Lesson:** `[age, fare, sex_encoded, pclass]` → one row of `X`.
- **Guided Practice:** Build a tiny feature table (5 rows) on paper.
- **Independent Work:** Write ML connection paragraph in README draft.
- **Exit Ticket:** What is a feature vector?
- **Homework:** Read about `model.fit(X, y)` preview for Lesson 7.

### Lesson 4: Dot Product and Similarity
- **Goal:** Intuition for dot product as alignment/similarity (not heavy math).
- **Warm-up:** "Two students with similar scores — how would a computer notice?"
- **Mini Lesson:** Dot product intuition; recommendations and embeddings preview.
- **Guided Practice:** Simple 2D dot product with small numbers on calculator/NumPy.
- **Independent Work:** `dot-product-notes.md` with one similarity example.
- **Exit Ticket:** Why might AI systems compare vectors?
- **Homework:** Connect to RAG/embeddings (later Phase 8).

### Lesson 5: Matrix Multiplication as Transformation
- **Goal:** See matrices as transformations of space (visual).
- **Warm-up:** 3Blue1Brown clip — what happened to the grid?
- **Mini Lesson:** Rotate, stretch, shear intuition; matrix × vector.
- **Guided Practice:** Watch selected 3Blue1Brown transformation videos; discuss.
- **Independent Work:** Sketch before/after of one transformation in notes.
- **Exit Ticket:** What does "matrix as transformation" mean in plain English?
- **Homework:** Optional DeepLearning.AI Week 3 (transformations section).

### Lesson 6: Images as Matrices
- **Goal:** Images are numerical data; pixels are numbers.
- **Warm-up:** Zoom into a digital photo — what are you seeing?
- **Mini Lesson:** Grayscale matrix; RGB channels; basic processing = matrix ops.
- **Guided Practice:** Inspect a small pixel grid image on screen.
- **Independent Work:** Plan image matrix mini project (Lesson 10).
- **Exit Ticket:** Grayscale vs RGB — how many dimensions?
- **Homework:** Computer vision connection paragraph in README.

### Lesson 7: X Matrix and y Vector in ML
- **Goal:** Understand `model.fit(X, y)`.
- **Mini Lesson:** `X` = features for all samples; `y` = targets; classification preview.
- **Guided Practice:** Label X and y on a tiny Titanic-style table.
- **Independent Work:** Screenshot or pseudocode explaining fit().
- **Exit Ticket:** What is y in a spam/not-spam classifier?
- **Homework:** Optional ML glossary entry in portfolio.

### Lesson 8: Eigenvectors and PCA Intuition
- **Goal:** High-level eigenvector/PCA intuition — no formal proofs.
- **Warm-up:** "How could you summarize 100 numbers with fewer numbers?"
- **Mini Lesson:** Important directions; PCA for compression/visualization; 3Blue1Brown eigen intro (selected).
- **Guided Practice:** Class discussion — image compression, ML preprocessing.
- **Independent Work:** `pca-reflection.md`.
- **Exit Ticket:** What problem does PCA help solve?
- **Homework:** Optional DeepLearning.AI Week 4 (selected parts).

### Lesson 9: NumPy Mini Lab
- **Goal:** Hands-on arrays, shapes, dot product.

```python
import numpy as np

v = np.array([1, 2, 3])
M = np.array([[1, 2], [3, 4]])

print(v.shape)
print(M.shape)
```

- **Guided Practice:** Create vectors, matrices, one dot product together.
- **Independent Work:** Complete `numpy-mini-lab.ipynb`; commit to GitHub.
- **Exit Ticket:** What does `.shape` tell you?
- **Homework:** Prepare for image lab.

### Lesson 10: Image Matrix Mini Project
- **Goal:** Load/inspect/modify/display an image matrix; write reflection.
- **Guided Practice:** Grayscale load, inspect values, simple pixel change, display.
- **Independent Work:** `image-as-matrix-lab.ipynb` + finalize `ai-math-bridge/README.md`.
- **Exit Ticket:** How is this connected to computer vision?
- **Homework:** Submit folder; complete `AI_Math_Bridge_Checklist.md`.

---

## Submission Requirements
- [ ] `ai-math-bridge/` folder with all required files.
- [ ] README from template.
- [ ] NumPy lab + image matrix lab.
- [ ] Reflection connecting to AI/ML/CV.
- [ ] `02_Assessment/AI_Math_Bridge_Checklist.md` signed off.

## Common Student Problems
- Treating module as full math class → redirect to intuition + labs.
- Skipping labs → require GitHub evidence.
- Copy-paste definitions → require own-word examples.

## Teacher Notes
> 4–6 课时可只教核心课。Reuse this module before CV/ML projects. No proofs required. 3Blue1Brown + selected Coursera weeks + NumPy + image lab is the core path.

## AI Lens Reflection
Ask students: *"When your AI School Assistant finds similar handbook sections, how is that like comparing vectors?"*

## Assessment Criteria

Assess on:
- Conceptual clarity (vector, matrix, X/y, dot product, image-as-matrix)
- Visual understanding (3Blue1Brown / sketches)
- Basic NumPy lab completion
- Clear reflection and AI/ML/CV connection
- **Not** heavy symbolic algebra or proofs

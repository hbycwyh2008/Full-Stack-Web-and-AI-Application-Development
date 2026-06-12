# Lesson 2: Form Styling and GitHub Evidence

## Lesson Goal

Style your contact form with CSS, understand how form data is named and sent, and submit complete GitHub evidence for Phase 2.

By the end of this lesson, someone should be able to open your GitHub folder, see a styled form, and understand what data your form would send to a server.

---

## Why This Lesson Matters

HTML gives your form structure. CSS makes it readable and professional. The `name` attributes on your fields decide what data a server receives — the same idea used later when your **AI School Assistant** sends a question to a FastAPI backend.

Today you turn your draft HTML form into polished evidence in GitHub.

---

## Class Flow

```text
individual learning → Talk Robin / group discussion → group answer → Entry Points Check → teacher explains only what students do not understand → mission task → exit check → submission of evidence
```

---

## 1. Individual Learning

Open the MDN tutorial:

[MDN: Your first form](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form)

Read only these sections today:

1. **Basic form styling**
2. **Sending form data to your web server**
3. **Summary**

Focus on:

1. How CSS changes the look of a form
2. What the `name` attribute does on each field
3. What name/value pairs your form would send
4. What `action` and `method` mean when data is submitted

While reading, write short notes for these questions:

1. Which CSS rules change spacing, borders, and fonts?
2. What three name/value pairs does the MDN example form send?
3. What is the difference between `get` and `post` (high level only)?
4. Why should you customize the CSS instead of copying it exactly?

Optional support (only if you are stuck on CSS):

- [CSS styling basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)

---

## 2. Talk Robin / Group Discussion

In your group, each student answers:

1. “HTML gives my form structure; CSS gives it style because...”
2. “The `name` attribute on an input is important because...”
3. “My form would send these three pieces of data: ...”

Each person speaks once before anyone speaks twice.

---

## 3. Group Answer

As a group, write one shared answer:

> A form is ready to submit evidence only when...

Your answer should include at least three checks (styling, `name` attributes, GitHub commit).

---

## 4. Entry Points Check

The teacher checks:

1. Does your `index.html` from Lesson 1 have all required fields?
2. Do you understand what `name` attributes do?
3. Do you know how to add CSS (separate file or `<style>` block)?
4. Do you know how to write a folder `README.md`?

The teacher explains only the parts students do not understand yet.

---

## 5. Mission Task

Open your `html-css-first-form/` folder from Lesson 1.

### Part A: Add CSS

Add styling using one of these methods:

1. A separate `style.css` file linked from `index.html`, or
2. A `<style>` block in the `<head>` of `index.html`

Start from the MDN **Basic form styling** example, then change **at least three** things to make it yours:

- colors
- border radius
- fonts
- spacing or padding

Your form should look clearly different from the browser default.

### Part B: Understand Form Data

Write down the three `name` attributes on your fields. Example from MDN:

```text
user_name
user_email
user_message
```

In your own words, answer: if a user fills in the form, what three name/value pairs would be sent?

You do not need a working server today. You only need to understand the data shape.

### Part C: Add README and Commit

Add `README.md` in the same folder:

```md
# HTML/CSS First Form

## What This Is

A contact form built with HTML and CSS following the MDN "Your first form" tutorial.

## Files

- `index.html` — form structure
- `style.css` — form styling (or CSS in `<head>`)

## What I Learned

_(Write 2–3 sentences in your own words.)_

## Form Data

This form sends:

- name: ...
- email: ...
- message: ...
```

Commit with a meaningful message:

```text
Style first contact form and add README
```

### Part D: Update Notion (Optional Stretch)

If your Notion portfolio is published, add a **Learning Projects** entry for this form with your GitHub folder link.

---

## 6. Independent Rebuild / Exit Check

Without reopening the MDN tutorial, complete this check:

1. Open your form in a browser.
2. Point to one HTML tag and one CSS rule you wrote.
3. Name the three `name` attributes on your form.
4. Open your GitHub folder and show your commit history.
5. Explain in one sentence: “HTML structure + CSS style + name attributes = ...”

If your styled form does not display correctly, fix it before submission.

---

## 7. Submission of Evidence

Submit:

1. Screenshot of your styled form in the browser
2. GitHub folder link showing `index.html`, CSS, and `README.md`
3. Screenshot or link showing at least two meaningful commits
4. Written answer: what three name/value pairs does your form send?
5. One sentence: “This form connects to my future AI app because...”

---

## Success Criteria

You are successful if:

1. Your styled form opens correctly in a browser.
2. Your CSS visibly improves the form from the browser default.
3. Your folder includes `index.html`, CSS, and `README.md`.
4. Your GitHub commit history shows meaningful progress.
5. You can explain HTML structure, CSS styling, and `name` attributes in your own words.

---

## Common Problems

| Problem | Try first |
|---|---|
| CSS does not apply | Check the `<link>` path or `<style>` placement in `<head>`. |
| My form still looks default | Confirm your CSS file is saved and linked. |
| I copied MDN CSS exactly | Change at least three properties so the design is yours. |
| I forgot `name` attributes | Add `name` to every input and textarea that collects data. |
| I only submitted a screenshot | Also push to GitHub with README and commits. |

---

## Fast Track Option

If most students complete this lesson in about 45 minutes, use the rest of the 90-minute block to preview [module-02](../Front-end%20_web+knowledge/module-02-html-css-digital-business-card.md) (digital business card).

Use this only if students have:

1. A styled form in the browser.
2. A complete GitHub folder with README.
3. At least two meaningful commits.
4. An oral explanation of HTML, CSS, and form data names.

If students are missing evidence, they should fix GitHub submission before moving into `Front-end _web+knowledge`.

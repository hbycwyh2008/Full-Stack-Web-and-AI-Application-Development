# Lesson 1: HTML Form Structure

## Lesson Goal

Build the HTML structure of your first web form using the MDN tutorial, save it in your GitHub repository, and understand how labels connect to form controls.

By the end of this lesson, you should have a working contact form in the browser — even before it is styled.

---

## Why This Lesson Matters

In Phase 1, your Notion portfolio became the public showcase and your GitHub repo held your evidence.

In Phase 2, you start writing **real code**. This lesson is your first HTML page. The final **AI School Assistant** project will also use a form: a text input, a submit button, and data sent to a server. Today you build the smallest version of that pattern.

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

1. **What are web forms?**
2. **Designing your form**
3. **Implementing our form HTML**
   - The `<form>` element
   - The `<label>`, `<input>`, and `<textarea>` elements
   - The `<button>` element

Do **not** read the CSS section yet. That comes in Lesson 2.

While reading, write short notes for these questions:

1. What is a web form used for?
2. Why should you sketch or plan a form before coding?
3. What do the `action` and `method` attributes on `<form>` do?
4. Why does each `<label>` need a `for` attribute?
5. What is the difference between `<input>` and `<textarea>`?

Optional support (only if you are stuck on HTML basics):

- [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)

Do not try to style the form while reading. First understand the HTML structure.

---

## 2. Talk Robin / Group Discussion

In your group, each student answers:

1. “A web form is different from a normal paragraph because...”
2. “The `for` attribute on a label is important because...”
3. “When someone clicks my submit button, the browser will...”

Each person speaks once before anyone speaks twice.

---

## 3. Group Answer

As a group, write one shared answer:

> A well-structured HTML form must include...

Your answer should mention at least: `<form>`, `<label>`, one input type, and a submit button.

---

## 4. Entry Points Check

The teacher checks:

1. Do you understand what a form control is?
2. Do you know why labels must connect to inputs?
3. Do you have a code editor and browser ready?
4. Do you know where this project will live in your GitHub repo?

The teacher explains only the parts students do not understand yet.

---

## 5. Mission Task

Create a new folder in your `[studentName]-Full-Stack-Web-and-AI-Application` GitHub repository:

```text
html-css-first-form/
```

Build `index.html` with a contact form that includes:

1. A valid HTML document structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
2. A `<form>` element with `action` and `method` attributes
3. A **Name** field: `<label>` + `<input type="text">`
4. An **Email** field: `<label>` + `<input type="email">`
5. A **Message** field: `<label>` + `<textarea>`
6. A submit button: `<button type="submit">Send your message</button>`

Checklist while building:

- Every `<label>` has a matching `for` attribute and input `id`
- Every input that collects data has a `name` attribute
- Open the file in a browser and click each label — the correct field should activate

Do not add CSS yet unless the teacher says to preview layout. Today’s goal is HTML structure only.

Commit at least once with a meaningful message:

```text
Add HTML structure for first contact form
```

---

## 6. Independent Rebuild / Exit Check

Without reopening the MDN tutorial, check your page from top to bottom.

You should be able to:

1. Add one more labeled text field by yourself.
2. Explain what the `action` attribute on `<form>` does.
3. Explain why `<input>` does not need a closing tag but `<textarea>` does.
4. Open your form in a browser and show that labels activate their fields.

If you cannot do these without the tutorial, keep practicing before moving on.

---

## 7. Submission of Evidence

Submit:

1. Screenshot of your unstyled form in the browser
2. GitHub link to `html-css-first-form/index.html`
3. Screenshot or link showing at least one commit
4. One sentence: “Each label needs a `for` attribute because...”

---

## Success Criteria

You are successful if:

1. Your form opens correctly in a browser.
2. Your form includes name, email, message, and a submit button.
3. Every form control has a properly connected `<label>`.
4. Your GitHub folder contains `index.html` with a meaningful commit.
5. You can explain the difference between HTML structure and CSS styling.

---

## Common Problems

| Problem | Try first |
|---|---|
| My page is blank | Check that `index.html` has `<body>` and your form is inside it. |
| Clicking a label does nothing | Match `for` on `<label>` to `id` on the input. |
| My email field accepts any text | Use `type="email"` on the input. |
| I styled everything already | Save styling for Lesson 2; today is HTML only. |
| I cannot find my repo folder | Create `html-css-first-form/` in your course GitHub repo. |

---

## Fast Track Option

If most students complete this lesson in about 45 minutes, continue directly into [Lesson 2](lesson-02-html-form-styling-and-github.md) during the same 90-minute block.

Use this only if students have:

1. Built all required form fields.
2. Connected every label correctly.
3. Committed to GitHub.
4. Completed the independent rebuild without reopening the MDN tutorial.

If more than one third of the class still cannot explain labels and inputs, do not start CSS. Use the remaining time for HTML structure checks and oral explanation.

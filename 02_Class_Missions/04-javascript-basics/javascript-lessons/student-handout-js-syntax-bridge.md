# JavaScript Syntax Bridge (Python ↔ Browser JS)

Use this if you already know **Python** (or similar). You are not learning programming from zero — you are learning **JavaScript in the browser**.

---

## Same Ideas, Different Syntax

| Idea | Python | JavaScript (browser) |
|---|---|---|
| Variable | `name = "Alex"` | `let name = "Alex";` |
| Constant | `(convention)` | `const course = "Full-Stack AI";` |
| Function | `def greet():` | `function greet() { }` or `const greet = () => { }` |
| If | `if score >= 90:` | `if (score >= 90) { }` |
| Loop | `for skill in skills:` | `for (const skill of skills) { }` |
| List | `skills = ["Git", "HTML"]` | `const skills = ["Git", "HTML"];` |
| Print | `print("hello")` | `console.log("hello");` |
| Run program | Terminal: `python app.py` | Browser loads `script.js` with HTML |

---

## Web-Specific (Not in Python the Same Way)

| Concept | What it means |
|---|---|
| **DOM** | The live page tree JavaScript can read and change |
| **`document.querySelector()`** | Pick an element on the page (like targeting a widget) |
| **Event listener** | “When user clicks, run this function” |
| **`fetch()`** | Ask a URL for data (used later with FastAPI) |
| **DevTools Console** | See errors and test `console.log` |

---

## Common Mistakes When Switching from Python

1. Forgetting **semicolons** (optional but good habit) and **curly braces** `{ }`
2. Using `=` instead of `===` for comparison
3. Putting `script.js` in the wrong place — must be linked from `index.html`
4. Trying to change the page before the DOM is loaded
5. Expecting `print()` — use **`console.log()`** and open DevTools (F12)

---

## Minimum You Must Say in Your Own Words

Before Track A Lesson 2, you should explain:

1. What HTML, CSS, and JavaScript each do on one page
2. Where `script.js` runs
3. One difference between Python and JavaScript syntax you noticed

---

## Optional MDN Sections (Track A)

- [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
- [A first splash into JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/A_first_splash)

Do **not** re-do full Coursera “variables and loops” unless your teacher assigns Track B.

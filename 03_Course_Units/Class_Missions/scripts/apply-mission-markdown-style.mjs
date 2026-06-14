#!/usr/bin/env node
/**
 * Apply shared Markdown display patterns to canonical class mission lessons.
 * Idempotent: skips card if | **Time** | 90 minutes | already present; always adds Mermaid if missing.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const CANONICAL_DIRS = [
  "01_Web_Tools",
  "02Front-end",
  "03Back-end",
  "04AI_Literacy",
  "05_Vibe_Coding",
];

const MERMAID_FLOW = `\`\`\`mermaid
flowchart LR
  A["0–15<br/>Learn"] --> B["15–27<br/>Talk"]
  B --> C["27–37<br/>Group"]
  C --> D["37–45<br/>Check"]
  D --> E["45–70<br/>Mission"]
  E --> F["70–80<br/>Rebuild"]
  F --> G["80–90<br/>Submit"]
\`\`\`

`;

const MARKER = "| **Time** | 90 minutes |";

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) walk(full, files);
    else if (name.name.startsWith("lesson-") && name.name.endsWith(".md")) files.push(full);
  }
  return files;
}

function evidenceHint(content, rel) {
  if (rel.includes("05_Vibe_Coding")) {
    if (content.includes("independent-rebuild/lesson-"))
      return "`independent-rebuild/` + follow-along folder";
    return "`full-stack-practice/` or `vibe-coding/`";
  }
  if (rel.includes("04AI_Literacy")) return "`ai-literacy/`";
  if (rel.includes("Phase_01_Git") || rel.includes("Phase_02_Figma"))
    return "GitHub repo + track folder";
  if (rel.includes("FastAPI") || rel.includes("Database") || rel.includes("Back-end"))
    return "`fastapi-backend/` or course folder";
  if (
    rel.includes("React") ||
    rel.includes("JavaScript") ||
    rel.includes("Web_Basics") ||
    rel.includes("Notion")
  )
    return "student repo + phase folder";
  return "See Mission Task below";
}

function rebuildRow(content, rel) {
  const m = content.match(/independent-rebuild\/lesson-\d+/);
  if (!m) return "";
  const parts = rel.split("/");
  const depth = parts.length - 1;
  const prefix = "../".repeat(Math.max(1, depth - 1));
  if (rel.includes("05_Vibe_Coding")) {
    return `| **Independent rebuild** | \`${m[0]}/\` · [rules](${prefix}INDEPENDENT_REBUILD.md) |`;
  }
  return `| **Independent rebuild** | \`${m[0]}/\` |`;
}

function addMissionCard(content, rel) {
  const titleMatch = content.match(/^# .+\r?\n/m);
  if (!titleMatch) return content;

  const afterTitle = content.slice(titleMatch.index + titleMatch[0].length);
  const leadingWs = afterTitle.match(/^\s*/)[0];
  const trimmed = afterTitle.slice(leadingWs.length);
  const repoMatch = trimmed.match(/^\*\*Your repo:\*\*.+\r?\n/m);
  const evidence = evidenceHint(content, rel);
  const rebuild = rebuildRow(content, rel);

  let card = `\n| | |\n|:---|:---|\n| **Time** | 90 minutes |\n| **Evidence** | ${evidence} |\n`;
  if (rebuild) card += `${rebuild}\n`;
  card += `\n> [!TIP]\n> Mission card → **45–70 Mission Task** → **70–80 Rebuild/Exit** → submit evidence.\n\n`;

  if (repoMatch) {
    const repoLine = repoMatch[0];
    const rest = trimmed.slice(repoLine.length);
    return titleMatch[0] + leadingWs + card + repoLine + rest;
  }
  return titleMatch[0] + leadingWs + card + trimmed;
}

function addMermaidToFlow(content) {
  if (content.includes("```mermaid")) return content;
  return content.replace(
    /(## 90-Minute Class Flow\r?\n)(?:\r?\n)+(?=### )/,
    `$1\n${MERMAID_FLOW}`,
  );
}

function wrapChecklists(content) {
  if (content.includes("<details>")) return content;

  content = content.replace(
    /(\*\*Phase checklist[^*]*:\*\*\r?\n\r?\n)(```text\r?\n(?:\[ \].+\r?\n)+```)/g,
    `$1<details>\n<summary><strong>Phase checklist</strong> — expand before submit</summary>\n\n$2\n\n</details>`,
  );

  content = content.replace(
    /(\*\*05 Vibe Coding checklist:\*\*\r?\n\r?\n)(```text\r?\n(?:\[ \].+\r?\n)+```)/g,
    `$1<details>\n<summary><strong>05 Vibe Coding checklist</strong></summary>\n\n$2\n\n</details>`,
  );

  return content;
}

function addRebuildAlert(content) {
  if (!content.includes("### 70–80 min: Independent Rebuild")) return content;
  if (content.includes("> [!IMPORTANT]\n> Independent work")) return content;
  if (content.includes("> [!IMPORTANT]\n> Close")) return content;

  return content.replace(
    /(### 70–80 min: Independent Rebuild[^\n]*\r?\n)\r?\n(?=\*\*Required|1\.|Teacher|Oral|Cold|Perform|Stop|Open|With |Each |Student)/,
    `$1\n> [!IMPORTANT]\n> Independent work: close course videos, notes, AI tools, and follow-along code before this block.\n\n`,
  );
}

function addIndividualLearningNote(content) {
  if (!content.includes("### 0–15 min: Individual Learning")) return content;
  if (content.includes("> [!NOTE]\n> **One required resource")) return content;

  return content.replace(
    /(### 0–15 min: Individual Learning\r?\n)\r?\n(?!\> \[!NOTE\])/,
    `$1\n> [!NOTE]\n> **One required resource** for this block — see below. Do not browse extra playlists during class.\n\n`,
  );
}

function processFile(filePath) {
  const rel = path.relative(ROOT, filePath).replace(/\\/g, "/");
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  if (!content.includes(MARKER)) {
    content = addMissionCard(content, rel);
    content = addIndividualLearningNote(content);
    content = addRebuildAlert(content);
    content = wrapChecklists(content);
  }

  content = addMermaidToFlow(content);

  if (content === original) return { rel, status: "skipped" };

  fs.writeFileSync(filePath, content, "utf8");
  return { rel, status: "updated" };
}

function patchReadme(readmePath) {
  if (!fs.existsSync(readmePath)) return;
  let c = fs.readFileSync(readmePath, "utf8");
  if (c.includes("mission-display-guide.md")) return;

  const relDir = path.relative(ROOT, path.dirname(readmePath)).replace(/\\/g, "/");
  const depth = relDir ? relDir.split("/").length : 0;
  const guide = `${"../".repeat(depth + 1)}shared/mission-display-guide.md`;
  const tip = `\n> [!TIP]\n> **Easier reading:** Markdown preview (\`Ctrl+Shift+V\`) or GitHub. See [mission-display-guide.md](${guide}).\n`;

  const idx = c.indexOf("\n---");
  if (idx > 0) {
    c = c.slice(0, idx) + tip + c.slice(idx);
    fs.writeFileSync(readmePath, c, "utf8");
  }
}

const files = [];
for (const dir of CANONICAL_DIRS) {
  walk(path.join(ROOT, dir), files);
}

const results = files.map(processFile);
console.log(`Updated: ${results.filter((r) => r.status === "updated").length}`);
console.log(`Skipped: ${results.filter((r) => r.status === "skipped").length}`);

for (const dir of CANONICAL_DIRS) {
  patchReadme(path.join(ROOT, dir, "README.md"));
  if (!fs.existsSync(path.join(ROOT, dir))) continue;
  for (const d of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
    if (d.isDirectory()) patchReadme(path.join(ROOT, dir, d.name, "README.md"));
  }
}

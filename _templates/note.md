<%*
/* ──────────────────────────────────────────────────────────────
   1. Ask for post date in YYYY-MM-DD and validate input
──────────────────────────────────────────────────────────────── */
let dateInput;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;         // 2025-06-18

while (true) {
  dateInput = await tp.system.prompt(
    "Post date (YYYY-MM-DD):",
    moment().format("YYYY-MM-DD")               // default = today
  );
  if (dateRegex.test(dateInput)) break;
  await tp.system.alert("Please enter the date as YYYY-MM-DD (e.g. 2025-06-18)");
}

/* ──────────────────────────────────────────────────────────────
   2. Parse year / month / day and build folder paths
──────────────────────────────────────────────────────────────── */
const [year, month, day] = dateInput.split("-");
const baseFolder   = "notebook";
const yearFolder   = `${baseFolder}/${year}`;
const monthFolder  = `${yearFolder}/${month}`;
const dayFolder    = `${monthFolder}/${day}`;

/* Helper: create folder if it doesn’t exist */
async function ensureFolder(folderPath) {
  if (!await app.vault.adapter.exists(folderPath)) {
    await app.vault.createFolder(folderPath);
  }
}

await ensureFolder(baseFolder);
await ensureFolder(yearFolder);
await ensureFolder(monthFolder);
await ensureFolder(dayFolder);

/* ──────────────────────────────────────────────────────────────
   3. Ask for post title
──────────────────────────────────────────────────────────────── */
let title = tp.file.title.startsWith("Untitled")
  ? await tp.system.prompt("Note Title:")
  : tp.file.title;

/* ──────────────────────────────────────────────────────────────
   4. Slug-ify the file name (same rules you already had)
──────────────────────────────────────────────────────────────── */
let fileTitle = title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’:,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();

let newTitle = title;
newTitle = newTitle.replace(/[:]/g, "");

/* ──────────────────────────────────────────────────────────────
   5. Rename / move the note into the new folder
──────────────────────────────────────────────────────────────── */
console.log(dayFolder)
await tp.file.move(`${dayFolder}/${newTitle}`);
-%>
---
title: <% newTitle %>
subtitle: ""
author: 
  - errbufferoverfl
date: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
draft: true
categories:
  - draft
---
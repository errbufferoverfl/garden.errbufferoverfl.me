<%*
let title = "Reviled, reclaimed and respected: the history of the word ‘queer’"
if (!tp.file.title.startsWith("Untitled")){
	title = tp.file.title
} else {
	title = await tp.system.prompt("Bookmark Name:")
}
await tp.file.rename(`${title}`)
-%>
---
title: "<%title%>"
alias:
- "<%title%>"
created: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
URL:  "https://theconversation.com/reviled-reclaimed-and-respected-the-history-of-the-word-queer-197533"
tags:
- bookmark
---

> Recently, a number of people have questioned or critiqued the use of the word “queer” to describe LGBTIQA+ folk. One writer to the Guardian claimed that the “q-word” was as derogatory and offensive as the “n-word”, and should not be used.

[Link](https://theconversation.com/reviled-reclaimed-and-respected-the-history-of-the-word-queer-197533)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
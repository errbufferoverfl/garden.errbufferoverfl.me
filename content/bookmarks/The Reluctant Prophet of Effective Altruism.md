<%*
let title = "The Reluctant Prophet of Effective Altruism"
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
URL:  "https://www.newyorker.com/magazine/2022/08/15/the-reluctant-prophet-of-effective-altruism"
tags:
- bookmark
---

> The philosopher William MacAskill credits his personal transfiguration to an undergraduate seminar at Cambridge.

[Link](https://www.newyorker.com/magazine/2022/08/15/the-reluctant-prophet-of-effective-altruism)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
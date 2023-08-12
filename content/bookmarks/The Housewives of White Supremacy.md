<%*
let title = "The Housewives of White Supremacy"
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
URL:  "https://www.nytimes.com/2018/06/01/opinion/sunday/tradwives-women-alt-right.html"
tags:
- bookmark
---

> In a podcast interview posted last spring, Nicole Jorgenson, a singer and former schoolteacher in North Dakota, explains to her host that she has never been happier since marrying and having children.

[Link](https://www.nytimes.com/2018/06/01/opinion/sunday/tradwives-women-alt-right.html)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
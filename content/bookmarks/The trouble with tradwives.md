<%*
let title = "The trouble with tradwives"
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
URL:  "https://overland.org.au/2022/12/the-trouble-with-tradwives/"
tags:
- bookmark
---

> ‘Now tell me what you do for a living’, the Tik Tok begins. It’s from by @justpearlythings, aka Pearl Davis, and is entitled How to marry a high-value man and become a housewife. ‘I love my husband,’ replies Aly Villa (@realfemsapien), lifting her hand to show off her ring.

[Link](https://overland.org.au/2022/12/the-trouble-with-tradwives/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
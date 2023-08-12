<%*
let title = "Digital privacy and security measures for staying safe while protesting"
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
URL:  "https://blog.adafruit.com/2020/06/05/digital-privacy-and-security-measures-for-staying-safe-while-protesting/"
tags:
- bookmark
---

> Digital privacy and security measures for staying safe while protesting may feel like a confusing, moving target.

[Link](https://blog.adafruit.com/2020/06/05/digital-privacy-and-security-measures-for-staying-safe-while-protesting/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
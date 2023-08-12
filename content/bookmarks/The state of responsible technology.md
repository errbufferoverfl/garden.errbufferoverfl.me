<%*
let title = "The state of responsible technology"
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
URL:  "https://www.technologyreview.com/2023/01/11/1066303/the-state-of-responsible-technology/"
tags:
- bookmark
---

> Consideration of how to deploy technology responsibly has become critical as tech and data have become more entrenched in modern society and business operations. Our research makes clear that responsible technology use has become a subject of great interest across industries.

[Link](https://www.technologyreview.com/2023/01/11/1066303/the-state-of-responsible-technology/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
<%*
let title = "The Real Cost of Starting a Homestead"
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
URL:  "https://morningchores.com/cost-of-starting-a-homestead/"
tags:
- bookmark
---

> We’ve all seen those fantastic documentaries about people who decided to live off-grid and pursue a life in nature. It’s easy to get swept up in the Instagram posts, hoping it’s as easy as taking the photos make it look. But starting a homestead comes with a heavy cost.

[Link](https://morningchores.com/cost-of-starting-a-homestead/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
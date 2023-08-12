<%*
let title = "The Disappearing Art Of Maintenance"
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
URL:  "https://www.noemamag.com/the-disappearing-art-of-maintenance"
tags:
- bookmark
---

> The R32 trains, nicknamed the Brightliners for their shiny unpainted exteriors, were built to last 35 years. (Imagine that: Your lifespan stamped into metal, your death prefigured.

[Link](https://www.noemamag.com/the-disappearing-art-of-maintenance)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
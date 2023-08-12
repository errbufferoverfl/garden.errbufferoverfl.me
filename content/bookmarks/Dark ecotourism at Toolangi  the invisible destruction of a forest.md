<%*
let title = "Dark ecotourism at Toolangi: the invisible destruction of a forest"
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
URL:  "https://overland.org.au/2022/12/dark-ecotourism-at-toolangi-the-invisible-destruction-of-a-forest/"
tags:
- bookmark
---

> A squiggle of roads wind through the Toolangi Forest, roughly an hour out of Melbourne. The short distance between the roads renders the entirety of the forest readily accessible by truck, bisecting the land into a tessellation of prospective and present logging coupes.

[Link](https://overland.org.au/2022/12/dark-ecotourism-at-toolangi-the-invisible-destruction-of-a-forest/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
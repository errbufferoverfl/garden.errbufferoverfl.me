<%*
let title = "The lie of “expired” food and the disastrous truth of America’s food waste problem"
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
URL:  "https://www.vox.com/22559293/food-waste-expiration-label-best-before"
tags:
- bookmark
---

> Stop throwing your food away. Maybe you know the routine. Every so often, I go through my refrigerator, check labels on the items, and throw out anything that’s a month, or a week, or maybe a few days past the date on the label.

[Link](https://www.vox.com/22559293/food-waste-expiration-label-best-before)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
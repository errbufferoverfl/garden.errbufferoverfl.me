<%*
let title = "How To Ferment Low-Sodium Sauerkraut"
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
URL:  "https://www.fermentingforfoodies.com/how-to-ferment-low-sodium-sauerkraut/"
tags:
- bookmark
---

> Wash the cabbage and remove the outer leaves. Finely chop or grate the cabbage into a large bowl. Salt is optional with this particular kraut, so feel free to skip it, or add as much as you want. I recommend slowly adding salt, then tasting it until you reach the desired level of saltiness.

[Link](https://www.fermentingforfoodies.com/how-to-ferment-low-sodium-sauerkraut/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
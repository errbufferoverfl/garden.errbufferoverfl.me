<%*
let title = "Routine Maintenance, by Meghan O’Gieblyn"
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
URL:  "https://harpers.org/archive/2022/01/routine-maintenance-embracing-habit-in-an-automated-world-meghan-ogieblyn/"
tags:
- bookmark
---

> Of all the attempts to pinpoint the origin of modernity—an exercise of which modernity never tires—my favorite begins with medieval monks. According to this account, it was the Benedictines who came up with the idea that it was possible to do the same thing, at the same time, every day.

[Link](https://harpers.org/archive/2022/01/routine-maintenance-embracing-habit-in-an-automated-world-meghan-ogieblyn/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
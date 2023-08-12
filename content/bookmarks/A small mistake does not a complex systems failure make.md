<%*
let title = "A small mistake does not a complex systems failure make"
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
URL:  "https://surfingcomplexity.blog/2023/01/15/a-small-mistake-does-not-a-complex-systems-failure-make/"
tags:
- bookmark
---

> The source of the problem was reportedly a single engineer who made a small mistake with a file transfer. Here’s what I’d like you to ponder, dear reader. Think about all of the small mistakes that happen every single day, at every workplace, on the face of the planet.

[Link](https://surfingcomplexity.blog/2023/01/15/a-small-mistake-does-not-a-complex-systems-failure-make/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
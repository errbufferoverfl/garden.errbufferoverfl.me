<%*
let title = "It started as a fringe philosophical theory about humanity’s future. It’s now richly funded and increasingly dangerous"
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
URL:  "https://aeon.co/essays/why-longtermism-is-the-worlds-most-dangerous-secular-credo"
tags:
- bookmark
---

> There seems to be a growing recognition that humanity might be approaching the ‘end times’. Dire predictions of catastrophe clutter the news. Social media videos of hellish wildfires, devastating floods and hospitals overflowing with COVID-19 patients dominate our timelines.

[Link](https://aeon.co/essays/why-longtermism-is-the-worlds-most-dangerous-secular-credo)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
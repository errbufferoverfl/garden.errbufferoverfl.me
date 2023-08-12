<%*
let title = "Feature | An almanac of immeasurable things"
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
URL:  "https://overland.org.au/previous-issues/editorial-team/feature-an-almanac-of-immeasurable-things/"
tags:
- bookmark
---

> If you were in the Western Hemisphere, and you walked into a room full of strangers talking about Katrina, Harvey, Mitchell or Maria, you might know who they were talking about.

[Link](https://overland.org.au/previous-issues/editorial-team/feature-an-almanac-of-immeasurable-things/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
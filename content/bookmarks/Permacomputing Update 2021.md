<%*
let title = "Permacomputing Update 2021"
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
URL:  "http://viznut.fi/texts-en/permacomputing_update_2021.html"
tags:
- bookmark
---

> It is now more than a year since I wrote my "early notes" about Permacomputing. At that time, I was not yet aware of anyone else having similar ideas, so I've now decided to write an update that connects my ideas with the existing discussions and activities.

[Link](http://viznut.fi/texts-en/permacomputing_update_2021.html)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
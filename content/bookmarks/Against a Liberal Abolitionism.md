<%*
let title = "Against a Liberal Abolitionism"
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
URL:  "https://theanarchistlibrary.org/library/lee-shevek-against-a-liberal-abolitionism"
tags:
- bookmark
---

> In the explosion of interest in the topic of abolitionism during and after the explosive summer of 2020 its meaning and purpose has become distorted in its trek through the popular imagination.

[Link](https://theanarchistlibrary.org/library/lee-shevek-against-a-liberal-abolitionism)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
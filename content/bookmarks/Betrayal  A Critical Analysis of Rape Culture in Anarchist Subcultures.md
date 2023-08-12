<%*
let title = "Betrayal: A Critical Analysis of Rape Culture in Anarchist Subcultures"
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
URL:  "https://scrappycapydistro.info/en/publications/betrayal"
tags:
- bookmark
---

> A reprint of a zine from the US written in 2013 about the specific ways anarhist subcultures recreate and perpetuate rape culture. Downloads Diese Zine ist auch auf Deutsch erhältlich.

[Link](https://scrappycapydistro.info/en/publications/betrayal)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
<%*
let title = "Abolition, Ecology, and Afrofuturism Some Thoughts"
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
URL:  "https://theanarchistlibrary.org/library/nsambu-za-suekama-abolition-ecology-and-afrofuturism"
tags:
- bookmark
---

> For several decades, many Black activists and others have advanced an intensified focus during August on the struggle of our incarcerated family. It was especially in recognition of the spirit in which many Black revolutionaries have operated, and for which they were/are persecuted by the State.

[Link](https://theanarchistlibrary.org/library/nsambu-za-suekama-abolition-ecology-and-afrofuturism)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
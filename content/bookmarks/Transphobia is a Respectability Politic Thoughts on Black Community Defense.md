<%*
let title = "Transphobia is a Respectability Politic Thoughts on Black Community Defense"
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
URL:  "https://theanarchistlibrary.org/library/nsambu-za-suekama-transphobia-is-a-respectability-politic"
tags:
- bookmark
---

> Im a Wild Thing Man caint house me. Too wild, to fierce, too bold— caint house me!

[Link](https://theanarchistlibrary.org/library/nsambu-za-suekama-transphobia-is-a-respectability-politic)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
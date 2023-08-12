<%*
let title = "Anarchism and Cryptocurrency"
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
URL:  "https://theanarchistlibrary.org/library/rai-ling-anarchism-and-cryptocurrency"
tags:
- bookmark
---

> Cryptocurrency, a digital currency in which transactions are verified and recorded by a decentralized system using cryptography, rather than by a centralized authority, is a controversial technology amongst anarchists, even though it is often used as a tool for undermining state power.

[Link](https://theanarchistlibrary.org/library/rai-ling-anarchism-and-cryptocurrency)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
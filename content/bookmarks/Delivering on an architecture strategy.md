<%*
let title = "Delivering on an architecture strategy"
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
URL:  "https://blog.thepete.net/blog/2019/12/09/delivering-on-an-architecture-strategy/"
tags:
- bookmark
---

> Software companies always have an unended stream of product features for engineers to work on. One of the most important responsibilities of a technology leader is to carve out space so that engineers can also perform the technical work which keeps the architectural foundations of a product healthy.

[Link](https://blog.thepete.net/blog/2019/12/09/delivering-on-an-architecture-strategy/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
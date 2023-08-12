<%*
let title = "What we mean when we say ‘sovereignty was never ceded’"
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
URL:  "https://theconversation.com/what-we-mean-when-we-say-sovereignty-was-never-ceded-195205"
tags:
- bookmark
---

> In discussing the Uluru Statement from the Heart, I will be doing something that, as a lawyer, is perhaps not best practice: I am not going to define my terms or confine my comments to the law.

[Link](https://theconversation.com/what-we-mean-when-we-say-sovereignty-was-never-ceded-195205)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
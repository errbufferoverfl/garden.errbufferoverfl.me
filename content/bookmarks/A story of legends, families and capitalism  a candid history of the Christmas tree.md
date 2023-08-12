<%*
let title = "A story of legends, families and capitalism: a candid history of the Christmas tree"
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
URL:  "https://theconversation.com/a-story-of-legends-families-and-capitalism-a-candid-history-of-the-christmas-tree-196278"
tags:
- bookmark
---

> The Christmas tree is a modern invention. It is a largely secular symbol, having no basis in the Bible. There are many trees in the Bible, from the Tree of Knowledge and the Tree of Life in Genesis to the reference to Christ’s cross as a “tree” in Acts. But there is no Christmas tree.

[Link](https://theconversation.com/a-story-of-legends-families-and-capitalism-a-candid-history-of-the-christmas-tree-196278)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
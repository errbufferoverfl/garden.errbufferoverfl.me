<%*
let title = "All My Takeout Has Delivered a Mountain of Trash. So I Asked Experts How to Minimize It."
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
URL:  "https://getpocket.com/explore/item/all-my-takeout-has-delivered-a-mountain-of-trash-so-i-asked-experts-how-to-minimize-it"
tags:
- bookmark
---

> The pandemic has caused a spike in restaurant takeout containers — and the environmental damage that comes with them.

[Link](https://getpocket.com/explore/item/all-my-takeout-has-delivered-a-mountain-of-trash-so-i-asked-experts-how-to-minimize-it)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
<%*
let title = "In defence of woodlice and their complicated sex lives"
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
URL:  "https://theconversation.com/in-defence-of-woodlice-and-their-complicated-sex-lives-195325"
tags:
- bookmark
---

> Lots of adults dislike woodlice. Some are physically revolted by them. But this distaste is cultural rather than innate, since most small children are well-disposed towards woodlice and happy to handle them. Some people even keep them as pets.

[Link](https://theconversation.com/in-defence-of-woodlice-and-their-complicated-sex-lives-195325)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
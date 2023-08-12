<%*
let title = "Canadian engineers call for change to their private ‘iron ring’ ceremony steeped in colonialism"
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
URL:  "https://theconversation.com/canadian-engineers-call-for-change-to-their-private-iron-ring-ceremony-steeped-in-colonialism-194897"
tags:
- bookmark
---

> For almost a century, iron rings worn by Canadian engineers have been shrouded in mystery — at least for outsiders like me, an English professor and director of the Critical Media Lab at University of Waterloo, who teaches ethics to engineers.

[Link](https://theconversation.com/canadian-engineers-call-for-change-to-their-private-iron-ring-ceremony-steeped-in-colonialism-194897)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
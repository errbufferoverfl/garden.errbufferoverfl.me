<%*
let title = "Why your recycling doesn't always get recycled"
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
URL:  "https://www.nationalgeographic.com/environment/article/why-recycling-plastic-doesnt-always-get-recycled"
tags:
- bookmark
---

> A plastic bag, a dirty pizza box, plastic utensils, paper napkins, and a soda can—a single takeout meal can feel like a game of recycling trivia.

[Link](https://www.nationalgeographic.com/environment/article/why-recycling-plastic-doesnt-always-get-recycled)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
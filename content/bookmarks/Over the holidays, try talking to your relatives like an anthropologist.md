<%*
let title = "Over the holidays, try talking to your relatives like an anthropologist"
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
URL:  "https://theconversation.com/over-the-holidays-try-talking-to-your-relatives-like-an-anthropologist-195637"
tags:
- bookmark
---

> How is it possible to spend so much time with your parents and grandparents and not really know them? This question has puzzled me as an anthropologist. It’s especially relevant for the holiday season, when millions of people travel to spend time with their families.

[Link](https://theconversation.com/over-the-holidays-try-talking-to-your-relatives-like-an-anthropologist-195637)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
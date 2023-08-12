<%*
let title = "Modern slavery: UK’s focus on ‘genuine’ victims has failed survivors since the 1800s"
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
URL:  "https://theconversation.com/modern-slavery-uks-focus-on-genuine-victims-has-failed-survivors-since-the-1800s-192528"
tags:
- bookmark
---

> The exploitation of tens of thousands of people through modern slavery is a human rights crisis. There are an estimated 130,000 people currently living in modern slavery in the UK alone.

[Link](https://theconversation.com/modern-slavery-uks-focus-on-genuine-victims-has-failed-survivors-since-the-1800s-192528)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
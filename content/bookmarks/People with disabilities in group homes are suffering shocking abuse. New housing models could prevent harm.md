<%*
let title = "People with disabilities in group homes are suffering shocking abuse. New housing models could prevent harm"
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
URL:  "https://theconversation.com/people-with-disabilities-in-group-homes-are-suffering-shocking-abuse-new-housing-models-could-prevent-harm-197989"
tags:
- bookmark
---

> The National Disability Insurance Scheme (NDIS) was designed to be a market-based system that would shift power from government and providers to consumers.

[Link](https://theconversation.com/people-with-disabilities-in-group-homes-are-suffering-shocking-abuse-new-housing-models-could-prevent-harm-197989)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
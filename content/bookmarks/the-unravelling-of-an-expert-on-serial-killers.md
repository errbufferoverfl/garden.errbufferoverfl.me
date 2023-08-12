<%*
let title;
if (!tp.file.title.startsWith("Untitled")){
	title = tp.file.title
} else {
	title = await tp.system.prompt("Bookmark Name:")
}
const fileTitle = title.replace(/ /g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
---
title: "The Unravelling of an Expert on Serial Killers"
alias:
- "The Unravelling of an Expert on Serial Killers"
created: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
link:  "https://www.newyorker.com/magazine/2022/04/11/the-unravelling-of-an-expert-on-serial-killers"
tags:
- bookmark
---

> A brother and a sister are standing on the balcony of a sixth-floor apartment in Monte Carlo. It’s the nineteen-seventies, in May, the afternoon of the Grand Prix. The sun is glinting off the dinghies in the turquoise shallows of the harbor. The trees are so lush they’re almost black.

[Link](https://www.newyorker.com/magazine/2022/04/11/the-unravelling-of-an-expert-on-serial-killers)
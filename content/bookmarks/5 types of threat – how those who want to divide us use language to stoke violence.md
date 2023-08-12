<%*
let title = "5 types of threat – how those who want to divide us use language to stoke violence"
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
URL:  "https://theconversation.com/5-types-of-threat-how-those-who-want-to-divide-us-use-language-to-stoke-violence-196189"
tags:
- bookmark
---

> Events like the riots in Brazil, the two years before it and the mass shooting at the Colorado LGBTQ nightclub each occurred after certain groups repeatedly directed dangerous rhetoric against others. It’s the reason elected officials in the U.S.

[Link](https://theconversation.com/5-types-of-threat-how-those-who-want-to-divide-us-use-language-to-stoke-violence-196189)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
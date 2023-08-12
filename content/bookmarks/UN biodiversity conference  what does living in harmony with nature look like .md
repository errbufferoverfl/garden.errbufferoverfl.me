<%*
let title = "UN biodiversity conference: what does living in harmony with nature look like?"
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
URL:  "https://theconversation.com/un-biodiversity-conference-what-does-living-in-harmony-with-nature-look-like-196228"
tags:
- bookmark
---

> The 196 countries meeting for the UN Convention on Biological Diversity conference (COP15) in Montreal, Canada, are negotiating a new set of targets for reversing the loss of Earth’s biodiversity.

[Link](https://theconversation.com/un-biodiversity-conference-what-does-living-in-harmony-with-nature-look-like-196228)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
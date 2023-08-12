<%*
let title = "Palm kernel product imported for use on dairy farms may actually be harmful to cows"
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
URL:  "https://theconversation.com/palm-kernel-product-imported-for-use-on-dairy-farms-may-actually-be-harmful-to-cows-196569"
tags:
- bookmark
---

> Each year, New Zealand imports about 2 million tonnes of palm kernel expeller (PKE), a by-product of palm-oil processing in Indonesia and Malaysia, to feed dairy cows, at a cost of NZ$800 million. But our research shows PKE contains concentrations of some elements that may be harmful to cows.

[Link](https://theconversation.com/palm-kernel-product-imported-for-use-on-dairy-farms-may-actually-be-harmful-to-cows-196569)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
<%*
let title = "To better address the needs of older populations, researchers and media should stop fussing over aging"
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
URL:  "https://theconversation.com/to-better-address-the-needs-of-older-populations-researchers-and-media-should-stop-fussing-over-aging-195626"
tags:
- bookmark
---

> The world seems to be obsessed with aging. The media is plagued with articles about the costs of growing older, the cure to aging and secrets to aging successfully.

[Link](https://theconversation.com/to-better-address-the-needs-of-older-populations-researchers-and-media-should-stop-fussing-over-aging-195626)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
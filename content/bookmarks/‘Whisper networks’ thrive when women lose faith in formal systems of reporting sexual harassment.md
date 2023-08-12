<%*
let title = "‘Whisper networks’ thrive when women lose faith in formal systems of reporting sexual harassment"
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
URL:  "https://theconversation.com/whisper-networks-thrive-when-women-lose-faith-in-formal-systems-of-reporting-sexual-harassment-196630"
tags:
- bookmark
---

> The Research Brief is a short take about interesting academic work. Whisper networks – informal channels that women use to warn others about sexual harassment, abuse or assault – take root because formal reporting systems can re-traumatize people who have been harmed.

[Link](https://theconversation.com/whisper-networks-thrive-when-women-lose-faith-in-formal-systems-of-reporting-sexual-harassment-196630)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
<%*
let title = "Stop feeding the hype and start resisting"
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
URL:  "https://irisvanrooijcogsci.com/2023/01/14/stop-feeding-the-hype-and-start-resisting/"
tags:
- bookmark
---

> Three weeks ago, I wrote a blogpost about how ChatGPT is a “stochastic parrot” (a term coined by Bender, Gebru, McMillan-Major, & Shmitchell, 2021; see also this video for an explanation) and when used for academic (and other) writing constitutes automated plagiarism.

[Link](https://irisvanrooijcogsci.com/2023/01/14/stop-feeding-the-hype-and-start-resisting/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
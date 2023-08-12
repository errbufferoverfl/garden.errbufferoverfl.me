<%*
let title = "Porn, Piracy, Fraud: What Lurks Inside Google’s Black Box Ad Empire"
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
URL:  "https://www.propublica.org/article/google-display-ads-piracy-porn-fraud"
tags:
- bookmark
---

> In late 2021, the right-wing site Conservative Beaver published a story falsely claiming the FBI had arrested Pfizer’s CEO for fraud. It wasn’t Conservative Beaver’s first brush with fabricated news.

[Link](https://www.propublica.org/article/google-display-ads-piracy-porn-fraud)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
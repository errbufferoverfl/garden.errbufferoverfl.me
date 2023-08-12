<%*
let title = "Underpaid at home, vulnerable abroad: how seasonal job schemes are draining Pacific nations of vital workers"
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
URL:  "https://theconversation.com/underpaid-at-home-vulnerable-abroad-how-seasonal-job-schemes-are-draining-pacific-nations-of-vital-workers-194810"
tags:
- bookmark
---

> The economic impact of COVID on Pacific Island states, combined with major labour shortages in Australia and New Zealand, has created a perfect storm. A mass exodus means Pacific nations are now losing crucial workers at such volume that their own development prospects are being undermined.

[Link](https://theconversation.com/underpaid-at-home-vulnerable-abroad-how-seasonal-job-schemes-are-draining-pacific-nations-of-vital-workers-194810)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
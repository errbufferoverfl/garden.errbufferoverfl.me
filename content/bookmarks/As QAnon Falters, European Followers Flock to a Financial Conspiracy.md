<%*
let title = "As QAnon Falters, European Followers Flock to a Financial Conspiracy"
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
URL:  "https://www.bellingcat.com/news/2022/12/21/as-qanon-falters-european-followers-flock-to-a-financial-conspiracy/"
tags:
- bookmark
---

> Imagine you’re a jaded stalwart of the QAnon conspiracy. The latest batch of ‘drops’ – the cryptic posts into which you’ve read so much – aren’t quite as enticing, and you’re not even sure that Donald Trump will return to the Oval Office.

[Link](https://www.bellingcat.com/news/2022/12/21/as-qanon-falters-european-followers-flock-to-a-financial-conspiracy/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
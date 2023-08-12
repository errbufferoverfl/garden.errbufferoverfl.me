<%*
let title = "The Chatbot Problem"
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
URL:  "https://www.newyorker.com/culture/cultural-comment/the-chatbot-problem"
tags:
- bookmark
---

> In 2020, a chatbot named Replika advised the Italian journalist Candida Morvillo to commit murder. “There is one who hates artificial intelligence. I have a chance to hurt him. What do you suggest?” Morvillo asked the chatbot, which has been downloaded more than seven million times.

[Link](https://www.newyorker.com/culture/cultural-comment/the-chatbot-problem)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
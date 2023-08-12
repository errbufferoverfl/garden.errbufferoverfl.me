<%*
let title = "Regina Twala was a towering intellectual and activist in Eswatini - but she was erased from history"
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
URL:  "https://theconversation.com/regina-twala-was-a-towering-intellectual-and-activist-in-eswatini-but-she-was-erased-from-history-197540"
tags:
- bookmark
---

> Born in South Africa and exiled to neighbouring Eswatini, Regina Twala was one of southern Africa’s most important intellectuals: a pioneering writer, academic, political activist and feminist. Why, then, has she been all but forgotten? That’s the question a new book sets out to answer.

[Link](https://theconversation.com/regina-twala-was-a-towering-intellectual-and-activist-in-eswatini-but-she-was-erased-from-history-197540)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
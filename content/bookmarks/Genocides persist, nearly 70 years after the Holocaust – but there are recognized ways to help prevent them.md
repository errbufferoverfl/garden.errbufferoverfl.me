<%*
let title = "Genocides persist, nearly 70 years after the Holocaust – but there are recognized ways to help prevent them"
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
URL:  "https://theconversation.com/genocides-persist-nearly-70-years-after-the-holocaust-but-there-are-recognized-ways-to-help-prevent-them-195260"
tags:
- bookmark
---

> The newly formed United Nations passed its first international treaty on Dec. 9, 1948, just three years after the Holocaust ended. The Convention on the Prevention and Punishment of the Crime of Genocide was designed to prevent genocide from ever happening again.

[Link](https://theconversation.com/genocides-persist-nearly-70-years-after-the-holocaust-but-there-are-recognized-ways-to-help-prevent-them-195260)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
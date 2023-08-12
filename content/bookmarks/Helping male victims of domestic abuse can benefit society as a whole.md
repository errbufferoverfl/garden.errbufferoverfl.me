<%*
let title = "Helping male victims of domestic abuse can benefit society as a whole"
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
URL:  "https://theconversation.com/helping-male-victims-of-domestic-abuse-can-benefit-society-as-a-whole-196712"
tags:
- bookmark
---

> Every year in early December, the UN holds its 16 Days of Activism against Gender-Based Violence. The issue is one that can affect everyone regardless of their sex, gender or gender identity.

[Link](https://theconversation.com/helping-male-victims-of-domestic-abuse-can-benefit-society-as-a-whole-196712)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
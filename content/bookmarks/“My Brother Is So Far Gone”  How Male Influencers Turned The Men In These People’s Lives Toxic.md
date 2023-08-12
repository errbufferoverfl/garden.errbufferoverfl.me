<%*
let title = "“My Brother Is So Far Gone”: How Male Influencers Turned The Men In These People’s Lives Toxic"
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
URL:  "https://www.buzzfeednews.com/article/adeonibada/andrew-tate-fresh-fit-podcast-kevin-samuels-toxic-male"
tags:
- bookmark
---

> A beloved brother who suddenly supports violence against women, a dad who minored in women’s studies and now wants to murder “effeminate” men, a boyfriend who starts making misogynistic jokes.

[Link](https://www.buzzfeednews.com/article/adeonibada/andrew-tate-fresh-fit-podcast-kevin-samuels-toxic-male)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
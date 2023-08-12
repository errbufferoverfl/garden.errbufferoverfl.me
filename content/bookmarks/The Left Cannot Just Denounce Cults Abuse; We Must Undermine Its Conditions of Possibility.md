<%*
let title = "The Left Cannot Just Denounce Cults/Abuse; We Must Undermine Its Conditions of Possibility"
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
URL:  "https://theanarchistlibrary.org/library/nsambu-za-suekama-the-left-cannot-just-denounce-cults-abuse"
tags:
- bookmark
---

> I will not be naming names in this piece but if you know, you know. My love and solidarity to all movement survivors.

[Link](https://theanarchistlibrary.org/library/nsambu-za-suekama-the-left-cannot-just-denounce-cults-abuse)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
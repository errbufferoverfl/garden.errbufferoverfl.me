<%*
let title = "The Cake Recipe That Was a Secret for Two Decades"
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
URL:  "https://www.nytimes.com/2022/11/30/magazine/chiffon-cake-recipe.html"
tags:
- bookmark
---

> A century ago, chiffon cake did not exist. It did not grace the plates of our forebears, surreal in its fluffiness, with its thousand tiny holes, more air than sugar. It was born of American ingenuity, and perhaps a peculiarly American despair.

[Link](https://www.nytimes.com/2022/11/30/magazine/chiffon-cake-recipe.html)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
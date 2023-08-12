<%*
let title = "How to Take Notes While Reading"
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
URL:  "https://www.scotthyoung.com/blog/2019/01/29/take-notes-while-reading/"
tags:
- bookmark
---

> Note-taking is an incredibly powerful tool for learning. Notes extend your memories. I’ve explained before how writing can be seen as an external enhancement of your brain, allowing you to think more complicated thoughts and solve harder problems.

[Link](https://www.scotthyoung.com/blog/2019/01/29/take-notes-while-reading/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
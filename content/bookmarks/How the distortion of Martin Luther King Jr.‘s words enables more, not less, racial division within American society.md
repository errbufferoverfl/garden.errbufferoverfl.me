<%*
let title = "How the distortion of Martin Luther King Jr.‘s words enables more, not less, racial division within American society"
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
URL:  "https://theconversation.com/how-the-distortion-of-martin-luther-king-jr-s-words-enables-more-not-less-racial-division-within-american-society-195177"
tags:
- bookmark
---

> U.S. Rep. Chip Roy of Texas is just the latest conservative lawmaker to misuse the words of the Rev. Martin Luther King Jr. to judge a person on character and not race. In the protracted battle to elect Rep.

[Link](https://theconversation.com/how-the-distortion-of-martin-luther-king-jr-s-words-enables-more-not-less-racial-division-within-american-society-195177)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
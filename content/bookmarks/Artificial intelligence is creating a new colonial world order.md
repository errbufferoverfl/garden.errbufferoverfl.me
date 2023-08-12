<%*
let title = "Artificial intelligence is creating a new colonial world order"
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
URL:  "https://www.technologyreview.com/2022/04/19/1049592/artificial-intelligence-colonialism/"
tags:
- bookmark
---

> This story is the introduction to MIT Technology Review’s series on AI colonialism, which was supported by the MIT Knight Science Journalism Fellowship Program and the Pulitzer Center. Read the full series here. My husband and I love to eat and to learn about history.

[Link](https://www.technologyreview.com/2022/04/19/1049592/artificial-intelligence-colonialism/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
<%*
let title = "Henry Lee Lucas Was Considered America’s Most Prolific Serial Killer. But He Was Really a Serial Liar."
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
URL:  "https://getpocket.com/explore/item/henry-lee-lucas-was-considered-america-s-most-prolific-serial-killer-but-he-was-really-a-serial-liar"
tags:
- bookmark
---

> ‘The Confession Killer’ examines the true story of the man who said he killed nearly 600 people.

[Link](https://getpocket.com/explore/item/henry-lee-lucas-was-considered-america-s-most-prolific-serial-killer-but-he-was-really-a-serial-liar)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
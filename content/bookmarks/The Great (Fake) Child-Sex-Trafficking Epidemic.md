<%*
let title = "The Great (Fake) Child-Sex-Trafficking Epidemic"
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
URL:  "https://www.theatlantic.com/magazine/archive/2022/01/children-sex-trafficking-conspiracy-epidemic/620845/"
tags:
- bookmark
---

> A poster in the window of Cahoots Corner Cafe—great potatoes, good coffee—advertised a family event at the Oakdale, California, rodeo grounds. There would be food trucks, carnival games, live music, a raffle, and the opportunity to support the cause of “freeing child sex slaves.”

[Link](https://www.theatlantic.com/magazine/archive/2022/01/children-sex-trafficking-conspiracy-epidemic/620845/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
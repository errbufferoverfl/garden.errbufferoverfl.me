<%*
let title = "Threatening tech bosses with prison damages freedom of expression"
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
URL:  "https://www.openrightsgroup.org/press-releases/threatening-tech-bosses-with-prison-damages-freedom-of-expression/"
tags:
- bookmark
---

> Threatening people who provide online services with prison could result in more censorship of lawful posts. The Online Safety Bill as it stands damages our freedom of expression. Compulsory age-gating the Internet threatens all our right to privacy, and restricts everyone’s access to information.

[Link](https://www.openrightsgroup.org/press-releases/threatening-tech-bosses-with-prison-damages-freedom-of-expression/)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
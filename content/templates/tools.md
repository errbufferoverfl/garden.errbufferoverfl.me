<%*
let title;
if (!tp.file.title.startsWith("Untitled")){
	title = tp.file.title
} else {
	title = await tp.system.prompt("Tool Name:")
}
url = await tp.system.prompt("URL:")

const fileTitle = title.replace(/ /g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
---
title: "<% title %>"
alias:
- "<% title %>"
created: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
tags:
- tool
---

[Website](<%url%>)  ·  [Github Repo]()

> 

**Additional Notes**
- 
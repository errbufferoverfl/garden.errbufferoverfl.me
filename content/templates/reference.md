<%*
let title;
if (tp.file.title !== "Untitled"){
	title = tp.file.title
} else {
	title = await tp.system.prompt('Reference Title:')
}
await tp.file.rename(`${title}`)
-%>
---
title: "<% title %>"
alias:
- "<% title %>"
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.creation_date("YYYY-MM-DD") %>
image-name-key: "<% title.replace(" ", "-").toLowerCase() %>"
cover: "<% title.replace(" ", "-").toLowerCase() %>.png"
alt: ""
og_type: "article"
tags:
- reference
---

![](<% title.replace(" ", "-").toLowerCase() %>.png)

*<center>**<% title %>**</center>*
<%*
let title;
if (tp.file.title !== "Untitled"){
	title = tp.file.title
} else {
	title = await tp.system.prompt('Note Title:')
}
await tp.file.rename(`${title}`)
-%>
---
title: "<% title %>"
alias:
- "<% title %>"
created: 
modified: 
image-name-key: "<% title.replace(" ", "-").toLowerCase() %>"
cover: "<% title.replace(" ", "-").toLowerCase() %>.png"
alt: ""
og_type: "article"
tags:
- reference
---

![](<% title.replace(" ", "-").toLowerCase() %>.png)

*<center>**<% title %>**</center>*
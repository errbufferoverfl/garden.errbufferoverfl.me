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
cover: "<% title.replace(" ", "-").toLowerCase() %>.png"
alt: ""
og_type: "article"
og_img: "<% title.replace(" ", "-").toLowerCase() %>.png"
tags:
- reference
---


*<center>**<% title %>**</center>*
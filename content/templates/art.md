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
kofi: ""
resource: "/art/XXX/images/"
cover: "<% title %>.png"
tags:
- oeuvre
- digital painting
---

![<% title %>](/art/XXX/images/<% title %>.png)
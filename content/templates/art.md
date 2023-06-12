<%*
let title;
if (tp.file.title !== "Untitled"){
	title = tp.file.title
} else {
	title = await tp.system.prompt('Note Title:')
}
const imgName = title.replace(" ", "-").toLowerCase();
await tp.file.rename(`${title}`)
-%>
---
title: "<% title %>"
alias:
- "<% title %>"
created: 
modified: 
kofi: ""
image-name-key: "<% imgName %>"
resource: "/art/XXX/images/"
cover: "<% title.replace(" ", "-").toLowerCase() %>.png"
tags:
- oeuvre
- digital painting
---

![<% title %>](/art/XXX/images/<% imgName %>.png)
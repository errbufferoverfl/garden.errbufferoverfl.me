<%*
let title;
if (tp.file.title !== "Untitled"){
	title = tp.file.title
} else {
	title = await tp.system.prompt('Art Title:')
}

const imgName = title.replace(" ", "-").toLowerCase();
await tp.file.rename(`art/${title}`)
-%>
---
title: "<% title %>"
alias:
- "<% title %>"
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.creation_date("YYYY-MM-DD") %>
kofi: ""
image-name-key: "<% imgName %>"
resource: "/art/XXX/images/"
cover: "<% title.replace(" ", "-").toLowerCase() %>.png"
tags:
- oeuvre
- digital painting
---

![<% title %>](/art/XXX/images/<% imgName %>.png)
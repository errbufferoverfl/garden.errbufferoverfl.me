<%*
let title;
if (!tp.file.title.startsWith("Untitled")){
	title = tp.file.title
} else {
	title = await tp.system.prompt('Art Title:')
}

const fileTitle = title.replace(" ", "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
---
title: "<% title %>"
alias:
- "<% title %>"
created: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
kofi: ""
cover: "/img/<% fileTitle %>.png"
tags:
- oeuvre
- digital painting
---

![<% title %>](/art/imgs/<% fileTitle %>.png)
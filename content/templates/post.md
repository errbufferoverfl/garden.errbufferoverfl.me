<%*
let title;
if (tp.file.title !== "Untitled"){
	title = tp.file.title
} else {
	title = await tp.system.prompt('Note Title:')
}
tp.file.rename(`${title}`)
-%>
---
title: "<% title %>"
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.creation_date("YYYY-MM-DD") %>
tags
- seedling
---
<%*
let title;
if (tp.file.title){
	title = tp.file.title
} else {
	title = tp.system.prompt('Note Title:')
}
tp.file.rename(`${title}`)
-%>
---
title: "<% title %>"
enableToc: true
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.creation_date("YYYY-MM-DD") %>
---
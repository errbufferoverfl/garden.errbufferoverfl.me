<%*
let title;
if (!tp.file.title.startsWith("Untitled")){
	title = tp.file.title;
} else {
	title = await tp.system.prompt('Post Title:');
}
let fileTitle = title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’:,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`);
-%>
---
title: "<% title %>"
alias:
- "<% title %>"
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.creation_date("YYYY-MM-DD") %>
tags:
- reference
---

![](<% title.replace(" ", "-").toLowerCase() %>.png)

*<center>**<% title %>**</center>*

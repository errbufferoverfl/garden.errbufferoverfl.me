<%*
let title;
if (!tp.file.title.startsWith("Untitled")){
	title = tp.file.title
} else {
	title = await tp.system.prompt("Tool Name:")
}
url = await tp.system.prompt("URL:")
let fileTitle = title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’:,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`);
-%>
---
title: <% title %>
date: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
categories:
  - 
---


[Website](<%url%>)  ·  [Github Repo]()

**Additional Notes**
- 


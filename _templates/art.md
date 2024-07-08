<%*
let title;
if (!tp.file.title.startsWith("Untitled")){
	title = tp.file.title
} else {
	title = await tp.system.prompt('Art Title:')
}
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
author: 
  - errbufferoverfl
image: /imgs/<% fileTitle %>.png
categories:
  - oeuvre
---

![<% title %>](/imgs/art/<% fileTitle %>.png)

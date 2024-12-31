<%*
let title;
if (!tp.file.title.startsWith("Untitled")){
	title = tp.file.title
} else {
	title = await tp.system.prompt('Note Title:')
}
let fileTitle = title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’:,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();

let newTitle = title;
newTitle = newTitle.replace(/[:]/g, "");

await tp.file.rename(`${fileTitle}`);
-%>
---
title: <% newTitle %>
subtitle: ""
author: 
  - errbufferoverfl
date: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
draft: true
categories:
  - draft
---
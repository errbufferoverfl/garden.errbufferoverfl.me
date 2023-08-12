<%*
let title = "USENIX Security '22 - Experimental Security Analysis of the App Model in Business Collaboration..."
if (!tp.file.title.startsWith("Untitled")){
	title = tp.file.title
} else {
	title = await tp.system.prompt("Bookmark Name:")
}
await tp.file.rename(`${title}`)
-%>
---
title: "<%title%>"
alias:
- "<%title%>"
created: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
URL:  "https://www.youtube.com/watch?v=sjkGxHjNjM4"
tags:
- bookmark
---

> USENIX Security '22 - Experimental Security Analysis of the App Model in Business Collaboration Platforms
    
    Yunang Chen, Yue Gao, Nick Ceccio, Rahul Chatterjee, Kassem Fawaz, and Earlence Fernandes, University of Wisconsin–Madison
    
    Business Collaboration Platforms like Microsoft Teams and Slack ena

[Link](https://www.youtube.com/watch?v=sjkGxHjNjM4)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
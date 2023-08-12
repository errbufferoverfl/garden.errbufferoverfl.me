<%*
let title = "Climate change trauma has real impacts on cognition and the brain, wildfire survivors study shows"
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
URL:  "https://theconversation.com/climate-change-trauma-has-real-impacts-on-cognition-and-the-brain-wildfire-survivors-study-shows-197870"
tags:
- bookmark
---

> The Research Brief is a short take about interesting academic work. Psychological trauma from extreme weather and climate events, such as wildfires, can have long-term impacts on survivors’ brains and cognitive functioning, especially how they process distractions, my team’s new research shows.

[Link](https://theconversation.com/climate-change-trauma-has-real-impacts-on-cognition-and-the-brain-wildfire-survivors-study-shows-197870)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
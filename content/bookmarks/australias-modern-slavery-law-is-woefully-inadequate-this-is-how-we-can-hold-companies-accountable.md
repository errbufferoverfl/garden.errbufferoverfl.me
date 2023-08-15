<%*
const title = "Participation At Scale Can Repair The Public Square";
let fileTitle = "Participation At Scale Can Repair The Public Square";
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’:,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
---
title: "<%title%>"
alias:
- "<%title%>"
created: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
link:  "https://www.noemamag.com/participation-at-scale-can-repair-the-public-square"
tags:
- bookmark
---

> The participatory power of social networks has cast out the gatekeepers, leveling the playing field among amateurs, professionals, experts, citizens and elected representatives.

[Link](https://www.noemamag.com/participation-at-scale-can-repair-the-public-square)

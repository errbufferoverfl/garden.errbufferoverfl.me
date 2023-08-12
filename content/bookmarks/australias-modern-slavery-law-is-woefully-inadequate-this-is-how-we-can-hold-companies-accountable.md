<%*
const title = "The Future Looks Green: Hemp, Algae, and Ideas for Ecovillages and Cooperative Life";
let fileTitle = "The Future Looks Green: Hemp, Algae, and Ideas for Ecovillages and Cooperative Life";
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
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
link:  "https://anarchosolarpunk.substack.com/p/hempfutures"
tags:
- bookmark
---

> If you’ve followed me for a while you know that I tend to focus on actionable things during climate collapse.

[Link](https://anarchosolarpunk.substack.com/p/hempfutures)

<%*

-%>
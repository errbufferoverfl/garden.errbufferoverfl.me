<%*
const title = "Federated Ecovillages & Steps Towards a Modern Cybersyn";
let fileTitle = "Federated Ecovillages & Steps Towards a Modern Cybersyn";
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
URL:  "https://anarchosolarpunk.substack.com/p/ecovillages"
tags:
- bookmark
---

> Shits fucked. That’s easy enough to say right now. We’re living through collapse across many domains; economic, social, and environmental (To name a few). And that’s why we have to make the alternative a reality.

[Link](https://anarchosolarpunk.substack.com/p/ecovillages)

<%*

-%>
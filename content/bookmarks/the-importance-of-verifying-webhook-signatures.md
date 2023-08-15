<%*
const title = "Misinformation By Design: RDR Helps Lay Bare the Surveillance Advertising Business Model";
let fileTitle = "Misinformation By Design: RDR Helps Lay Bare the Surveillance Advertising Business Model";
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
link:  "https://rankingdigitalrights.org/2023/07/28/misinformation-by-design-rdr-helps-lay-bare-the-surveillance-advertising-business-model/"
tags:
- bookmark
---

> In 2018, the Cambridge Analytica scandal helped propel the perils of surveillance capitalism into the mainstream.

[Link](https://rankingdigitalrights.org/2023/07/28/misinformation-by-design-rdr-helps-lay-bare-the-surveillance-advertising-business-model/)

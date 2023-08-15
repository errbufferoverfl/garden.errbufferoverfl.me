<%*
const title = "Camming Etiquette 101: How To Be The Perfect Fan";
let fileTitle = "Camming Etiquette 101: How To Be The Perfect Fan";
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
link:  "https://tryst.link/blog/camming-etiquette-101-how-to-be-the-perfect-fan/"
tags:
- bookmark
---

> Navigating a cam session is very similar to navigating a meet, or a first date, except it’s often in the comfort of your own home behind a laptop or phone screen - this takes out a lot of the nerves and often clients use cam sessions as a stepping stone into building confidence for their fantasy m

[Link](https://tryst.link/blog/camming-etiquette-101-how-to-be-the-perfect-fan/)

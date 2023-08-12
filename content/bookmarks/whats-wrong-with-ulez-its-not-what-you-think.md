<%*
const title = "What’s wrong with ULEZ? It’s not what you think";
let fileTitle = "What’s wrong with ULEZ? It’s not what you think";
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
URL:  "https://www.openrightsgroup.org/blog/whats-wrong-with-ulez-its-not-what-you-think/"
tags:
- bookmark
---

> ULEZ – the Ultra Low Emmission Zone – has become a political football. Its significance to a general election manifesto became apparent as the Conservatives retained the Uxbridge and South Rusilip seat in a crucial by-election as plans to expand the clean air zone loomed over constituents.

[Link](https://www.openrightsgroup.org/blog/whats-wrong-with-ulez-its-not-what-you-think/)

<%*

-%>
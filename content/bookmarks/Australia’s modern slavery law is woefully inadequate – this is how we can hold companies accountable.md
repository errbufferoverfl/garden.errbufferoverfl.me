<%*
const title = "Australia’s modern slavery law is woefully inadequate – this is how we can hold companies accountable";
let fileTitle = "Australia’s modern slavery law is woefully inadequate – this is how we can hold companies accountable";
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
link:  "https://theconversation.com/australias-modern-slavery-law-is-woefully-inadequate-this-is-how-we-can-hold-companies-accountable-206605"
tags:
- bookmark
---

> A highly anticipated independent review of Australia’s Modern Slavery Act has found it has not brought “meaningful change” to the lives of people living in conditions of modern slavery since its passage more than four years ago.

[Link](https://theconversation.com/australias-modern-slavery-law-is-woefully-inadequate-this-is-how-we-can-hold-companies-accountable-206605)

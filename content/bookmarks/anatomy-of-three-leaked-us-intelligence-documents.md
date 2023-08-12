<%*
const title = "Anatomy of Three Leaked US Intelligence Documents";
let fileTitle = "Anatomy of Three Leaked US Intelligence Documents";
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
URL:  "https://www.bellingcat.com/news/2023/04/28/anatomy-of-three-leaked-us-intelligence-documents/"
tags:
- bookmark
---

> Among the documents leaked on the social messaging platform Discord in February 2023 were three purported damage assessments from recent strikes by the Ukrainian Armed Forces on Russian targets behind the front lines.

[Link](https://www.bellingcat.com/news/2023/04/28/anatomy-of-three-leaked-us-intelligence-documents/)

<%*

-%>
<%*
const title = "{{title}}"
let authors = "{{author}}".split(',');
let genre = "{{category}}".split(',');

let fileTitle = title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’:,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`);
-%>
---
title: "{{title}}"
alias:
- "{{title}}"
cover: "{{coverUrl}}"
created: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
started: <% tp.file.creation_date("YYYY-MM-DD") %>
completed:
status: "Backlog"
tags:
- book
<% genre.map(line => `- ${line}\n`.toLowerCase()) -%>
---

{{description}}

**authored by** <% authors.map(line => `[[${line.trim()}]]`).join(", ") %>

published on {{publishDate}} by {{publisher}}

## Summary


## Themes


## 3 Main Takeaways
- 
- 
- 

## Quotes


## Other Notes



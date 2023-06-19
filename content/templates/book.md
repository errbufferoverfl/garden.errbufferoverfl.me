<%*
let authors = "{{author}}".split(',');
let genre = "{{category}}".split(',');
-%>
---
title: "{{title}}"
alias:
- "{{title}}"
cover: "{{coverUrl}}"
created: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
status: "Backlog"
tags:
- book
<% genre.map(line => `- ${line}\n`.toLowerCase()) -%>
---

{{description}}

**authored by** <% authors.map(line => `[[${line.trim()}]]`).join(", ") %>

published on {{publishDate}} by {{publisher}}
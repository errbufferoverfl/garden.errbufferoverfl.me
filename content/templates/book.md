<%*
let authors = "{{author}}".split(',');
let genre = "{{category}}".split(',');
-%>
---
title: "{{title}}"
cover: "{{coverUrl}}"
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.creation_date("YYYY-MM-DD") %>
status: "Backlog"
og_type: "book"
og_img: "opengraph-template.png"
summary: "{{description}}"
tags:
- book
<% genre.map(line => `- ${line}\n`.replace(" ", "-").toLowerCase()) -%>
---

{{description}}

**authored by** <% authors.map(line => `[[${line.trim()}]]`).join(", ") %>

published on {{publishDate}} by {{publisher}}
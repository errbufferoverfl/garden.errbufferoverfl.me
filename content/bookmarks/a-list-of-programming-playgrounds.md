<%*
const title = "A list of programming playgrounds";
let fileTitle = "A list of programming playgrounds";
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
URL:  "https://jvns.ca/blog/2023/04/17/a-list-of-programming-playgrounds/"
tags:
- bookmark
---

> I really like using (and making!) programming playgrounds, and I got thinking the other day about how I didn’t have a great list of playgrounds to refer to. So I asked on Mastodon for links to cool playgrounds. Here’s what I came up with. I’d love to know what I missed.

[Link](https://jvns.ca/blog/2023/04/17/a-list-of-programming-playgrounds/)

<%*

-%>
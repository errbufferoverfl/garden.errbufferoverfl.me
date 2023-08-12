<%*
const title = "Dandelions are a lifeline for bees on the brink – we should learn to love them";
let fileTitle = "Dandelions are a lifeline for bees on the brink – we should learn to love them";
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
link:  "https://theconversation.com/dandelions-are-a-lifeline-for-bees-on-the-brink-we-should-learn-to-love-them-204504"
tags:
- bookmark
---

> Dandelions, love them or hate them, are blooming in abundance all over the UK this spring. As an ecologist who studies the insects which visit these flowers, so redolent of sunshine, I have never been able to understand why anyone might hate them.

[Link](https://theconversation.com/dandelions-are-a-lifeline-for-bees-on-the-brink-we-should-learn-to-love-them-204504)

<%*

-%>
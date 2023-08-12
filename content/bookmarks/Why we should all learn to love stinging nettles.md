<%*
let title = "Why we should all learn to love stinging nettles"
if (!tp.file.title.startsWith("Untitled")){
	title = tp.file.title
} else {
	title = await tp.system.prompt("Bookmark Name:")
}
await tp.file.rename(`${title}`)
-%>
---
title: "<%title%>"
alias:
- "<%title%>"
created: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
modified: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
URL:  "https://theconversation.com/why-we-should-all-learn-to-love-stinging-nettles-195327"
tags:
- bookmark
---

> Thinking of stinging nettles (Urtica dioica) may bring to mind childhood memories of legs burning as you whizzed down country lanes on your bike. Or itchy white bumps blooming on your hands and even face as you foraged blackberries from the hedgerow.

[Link](https://theconversation.com/why-we-should-all-learn-to-love-stinging-nettles-195327)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
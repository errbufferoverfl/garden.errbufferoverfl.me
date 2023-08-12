<%*
let title = "We live in a time of ‘late capitalism’. But what does that mean? And what’s so late about it?"
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
URL:  "https://theconversation.com/we-live-in-a-time-of-late-capitalism-but-what-does-that-mean-and-whats-so-late-about-it-191422"
tags:
- bookmark
---

> The term “late capitalism” seems to be everywhere as a trending meme – often used as a kind of shorthand to illustrate the absurdities of certain free market economies.

[Link](https://theconversation.com/we-live-in-a-time-of-late-capitalism-but-what-does-that-mean-and-whats-so-late-about-it-191422)

<%*
let fileTitle = tp.file.title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`)
-%>
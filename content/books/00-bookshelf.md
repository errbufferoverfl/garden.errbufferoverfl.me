---
title: Bookshelf
draft: true
cssclass:
  - cards
  - cards-cover
  - cards-1-2
  - cards-align-bottom
  - cards-cols-4
  - dashboard
created: 2023-08-19T22:03:39+10:00
modified: 2023-08-19T22:23:07+10:00
---

```dataviewjs
const pages = dv.pages('#book');

await dv.view('dataview/literature', {
	container: this.container,
	pages: pages
})
```
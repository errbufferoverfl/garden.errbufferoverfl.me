<%*
const title = "{{title}}"
let authors = "{{author}}".split(',');
let genre = "{{category}}".split(',');

const statuses = ["Wishlist", "Backlog", "Up Next", "In Progress", "On Hold", "Incomplete", "Complete"];
const status = await tp.system.suggester(statuses, statuses, "Reading status:");

let fileTitle = title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’:,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`);
-%>
---
title: {{title}}
date: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
image: {{coverUrl}}
cover: 
started: 
completed: 
page: 0
pages: {{totalPage}}
publisher: {{publisher}}
status: "<% status %>"
author: 
<% authors.map(line => `- ${line.trim()}\n`) -%>
categories:
<% genre.map(line => `- ${line.trim()}\n`) -%>
---

::: {.content-hidden when-format="html"}

`button-updateReadingStatus`  · `button-updateCurrentPage`

:::

:::: {.columns}

::: {.column width="40%"}

![]({{< meta cover >}})

published on {{publishDate}} by {{< meta publisher >}}

{{< progress >}}

:::

::: {.column width="10%"}
<!-- empty column to create gap -->
:::

::: {.column width="50%"}

_{{description}}_

:::

::::

## Summary


## Themes


## 3 Main Takeaways

- 
- 
- 

## Quotes


## Other Notes



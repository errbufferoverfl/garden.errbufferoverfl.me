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
title: {{title}}
date: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
image: {{coverUrl}}
cover:
started: 
completed:
publisher: {{publisher}}
status: Backlog
author:
<% authors.map(line => `- ${line}\n`) -%>
categories:
<% genre.map(line => `- ${line}\n`) -%>
---

:::: {.columns}

::: {.column width="40%"}

![]({{< meta cover >}})

published on {{publishDate}} by {{< meta publisher >}}

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



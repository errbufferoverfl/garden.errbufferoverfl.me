<%*
let title;
if (!tp.file.title.startsWith("Untitled")){
	title = tp.file.title
} else {
	title = await tp.system.prompt('Zine Title:')
}
let fileTitle = title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’:,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`);
-%>
---
title: "<% title %>"
subtitle: ""
author: "errbufferoverfl"
date: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
date-modified: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
description: ""
image: ""
image-alt: ""
categories:
- Review
---

**Author(s):** [Name(s) of the Creator(s)]

**Issue Number/Date:** [Issue Number and/or Publication Date]

**Genre/Sub-Genre:** [Genre or Sub-Genre]

**Synopsis:**

*Brief description of the zine's content and themes (1-2 sentences).*

**First Impressions:**
- Initial thoughts upon picking up and flipping through the zine.
- Cover art and overall presentation.

**Content Analysis:**
- **Writing:** Discuss the style, tone, and quality of the writing. Highlight any standout pieces or sections.
- **Art/Illustrations:** Examine the artwork, including style, technique, and how it complements the writing.
- **Themes:** Identify the main themes and motifs present in the zine.

**Favorite Parts:**
- Highlight specific pages, stories, or artwork that stood out.
- Explain why these parts resonated with you.

**Overall Design:**
- Discuss the layout, typography, and general design aesthetic.
- Note any unique or creative design elements.

**Audience:**
- Identify the target audience for the zine.
- Mention who might particularly enjoy or benefit from reading it.

**Comparison:**
- Compare the zine to similar works or other issues by the same creator.
- Note any growth or changes if reviewing multiple issues.

**Final Thoughts:**
- Summarize your overall impression of the zine.
- Mention any lingering thoughts or feelings after reading.
- Give a recommendation or rating if desired.

**Additional Notes:**
- Any other observations or thoughts that don’t fit into the above categories.
- Mention where the zine can be purchased or how to contact the creator.
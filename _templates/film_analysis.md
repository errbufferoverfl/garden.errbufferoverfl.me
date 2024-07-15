<%*
let title;
if (!tp.file.title.startsWith("Untitled")){
	title = tp.file.title
} else {
	title = await tp.system.prompt('Film Title:')
}
let fileTitle = title;
fileTitle = fileTitle.replace(/ /g, "-").toLowerCase();
fileTitle = fileTitle.replace(/[&'’‘’:,–.;?()“”$]/g, "").toLowerCase();
fileTitle = fileTitle.replace(/--/g, "-").toLowerCase();
fileTitle = fileTitle.replace(/-—-/g, "-").toLowerCase();
await tp.file.rename(`${fileTitle}`);
-%>
---
title: <% title %>
subtitle: 
author: 
  - errbufferoverfl
date: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ssZ") %>
date-modified:
description: 
image: /imgs/<% fileTitle %>.png
categories:
  - Film Analysis
---

**Director:**
**Year of Release:**
**Genre/Sub-Genre:**

## Plot Summary

*Brief description of the plot (1-2 sentences).*

## Key Themes and Motifs

- Theme 1: [Brief description]
- Theme 2: [Brief description]
- Additional themes and motifs as needed.

## Characters

### Main Characters

  - Character 1: [Name and brief description]
  - Character 2: [Name and brief description]

### Supporting Characters

  - Character 1: [Name and brief description]
  - Character 2: [Name and brief description]

## Important Scenes

- Scene 1: [Description and significance]
- Scene 2: [Description and significance]

## Visual Style and Cinematography

- *Notable camera angles, shots, and techniques.*
- *Use of color, lighting, and special effects.*

## Sound and Music

- *Key pieces of music and their impact on the film.*
- *Use of sound effects and dialogue.*

## Cultural and Historical Context

- Relevant background information about the time period or setting.
- Influence of cultural or historical events on the film.

## Critical Reception

- *Brief notes on how the film was received by critics and audiences.*
- *Awards or nominations the film received.*

## Personal Reflections

- *Initial impressions and overall thoughts.*
- *Specific elements that stood out or had a significant impact.*
- *Any connections to other films or genres.*

## Additional Notes

*Any other observations or thoughts that don’t fit into the above categories.*
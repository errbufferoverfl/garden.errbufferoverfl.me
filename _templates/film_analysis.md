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
**Screenplay by:** 
**Running Time:** 
**Countries:** 
**Year of Release:** 
**Genre/Sub-Genre:** 

*Talk about why you picked this movie. Was it mentioned in other media? How did you stumble upon it?*

*Brief description of the plot (1-2 sentences). Mention where and when the story takes place. How does the setting contribute to the overall mood?*

# Initial Impressions

*Jot down your initial thoughts. What struck you when you first watched it? Any standout moments, images, or themes that grabbed your attention? This section can be a bit more stream-of-consciousness and capture your raw, ADHD-fueled response.*

# Contextual Dive

## Time & Place

*Discuss when and where the movie was made. What was happening in Australia (or globally) during that period? How might the film reflect or respond to that time’s social, political, or cultural climate?*

## Cultural Footprint

*How does this film fit into the broader landscape of Australian cinema or horror in general? Is it part of a particular movement, like Ozploitation, or does it have a unique position within the genre?*

# Themes and Motifs

## Core Themes

*Identify the central themes of the movie. Does it deal with societal fears, the Australian landscape, isolation, or something else? How do these themes resonate with Australia's unique cultural context?*

## Motifs and Symbols

*Point out any recurring motifs or symbols. How do they contribute to the film's atmosphere or message? (E.g., the use of the outback as a symbol of danger, or certain elements that signify colonial history.)*

# Style and Execution

## Storytelling

*Describe the film's storytelling style. Is it a slow-burn, fast-paced, or something more experimental? How does this approach affect the narrative?*

## Visual and Sound

*While you might not have formal training in cinematography or sound design, mention any noticeable choices that stand out. Are there any visuals that particularly capture the Australian landscape? How does sound contribute to the mood (e.g., eerie silence, natural sounds, or an unsettling score)?*

# Cultural and Historical Reflections

## Societal Fears

*Explore what societal fears or anxieties the film might be addressing. How do these fears relate to the Australian cultural context, such as urban vs. rural tensions, environmental concerns, or colonial history?*

## Subtext

*Look beyond the surface. What underlying messages might the film be conveying, intentionally or unintentionally? This section can be speculative—lean into your analytical style and draw connections where you see them.*

# Personal Reflections

## Your Experience

*Share how the film resonated with you personally. Did it bring up any specific thoughts or emotions? What did you find intriguing, unsettling, or thought-provoking?*

## Why It Matters

*Offer insights into why this film is worth discussing. What makes it significant within Australian horror? How does it contribute to or challenge the horror genre as a whole?*

# Closing Thoughts

*Wrap up with your key thoughts. Not a verdict on whether it’s "good" or "bad," but rather a reflection on what the film says, how it says it, and its place in the broader conversation around horror.*

 *Pose any lingering questions the film leaves you with. How might it be interpreted differently by other audiences or in different contexts?*
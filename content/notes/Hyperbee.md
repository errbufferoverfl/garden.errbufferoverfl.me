---
title: "Hyperbee"
created: 2023-06-11
modified: 2023-06-11
source: ""
og_type: "article"
og_img: "opengraph-template.png"
summary: ""
tags:
- seedling
---

An append-only [B-tree](notes/B-tree.md) running on Hypercode. It provides a key-value store API with mechanisms that can be used for:
	- Inserting and retrieving key-value pairs;
	- Atomic batch insertion;
	- Creation of sorted iterators.
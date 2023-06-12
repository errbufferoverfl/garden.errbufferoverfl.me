---
title: "Hyperbee"
created: 2023-06-11
modified: 2023-06-12
og_type: "article"
tags:
- seedling
- distributed system
- hypercore
---

An append-only [B-tree](notes/B-tree.md) running on Hypercore. It provides a key-value store API with mechanisms that can be used for:
	- Inserting and retrieving key-value pairs;
	- Atomic batch insertion;
	- Creation of sorted iterators.
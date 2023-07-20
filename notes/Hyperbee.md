---
title: "Hyperbee"
alias:
  - "Hyperbee"
created: 2023-06-11T00:00:00+10:00
modified: 2023-06-17T21:37:31+10:00
tags:
- seedling
- distributed system
- hypercore
---

An append-only [b-tree](notes/b-tree.md) running on Hypercore. It provides a key-value store API with mechanisms that can be used for:
	- Inserting and retrieving key-value pairs;
	- Atomic batch insertion;
	- Creation of sorted iterators.
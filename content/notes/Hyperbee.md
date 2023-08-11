---
title: "Hyperbee"
alias:
  - "Hyperbee"
created: 2023-06-11T00:00:00+10:00
modified: 2023-08-09T12:48:46+10:00
tags:
- seed
- dweb
---

An append-only [b-tree](b-tree.md) running on Hypercore. It provides a key-value store API with mechanisms that can be used for:
	- Inserting and retrieving key-value pairs;
	- Atomic batch insertion;
	- Creation of sorted iterators.
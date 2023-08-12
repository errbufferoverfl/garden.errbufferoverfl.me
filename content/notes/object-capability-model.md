---
title: Object-capability model
aliases: []
created: 2023-08-09T12:14:29+10:00
modified: 2023-08-09T12:42:29+10:00
tags:
  - seed
  - technical
source: https://en.wikipedia.org/wiki/Object-capability_model
---
The object-capability model (also seen written as "ocap") is a [[object-capability security]] concept that describes a computer security model. In ocap a capability describes a transferable right to perform one or more operations on a given object.

To implement a object-capability model you need:
- An unforgeable reference that can be sent in messages;
- A message that specifies the operation to be performed.

> [!note]
> 
> This security model relies on not being able to forge references.

Many of the benefits of object-oriented programming (OOP), like encapsulation, modularity and separation of concerns correspond to a security goal in capability-based programming.

Because ocap seems to use OOP as an underlying programming paradigm it favours modularity in code design and reliable encapsulation. As a consequence it can be easier to analyse security properties, for example: information flow properties.

This means that its easier to establish and maintain the security properties when adding new objects that contain unknown and possibly malicious code.

These assertions are enforceable because of two structural properties enforced when using ocap:
1. An object _A_ can send a message to _B_ only if object _A_ holds a reference to _B_.
2. An object _A_ can obtain a reference to _C_ only if object _A_ receives a message containing a reference to _C_.

An analogy used by E. Dean Tribble to describe the ocap model was it's like giving a valet the key to your car, without handing over the right to car ownership.

> [!warning]
> 
> I don't know how much I like that analogy (and perhaps some contextual resolution has been lost over time) because in the real world "only connectivity begets connectivity" doesn't hold up outside of pre-established social contracts?

## ❓Open Questions

**How does a system provide an unforgeable reference to an object?**
There is part of me that gets the sense that the whole system needs to be built with object-capability security in mind, from the hardware, to the kernel and operating system, etc.
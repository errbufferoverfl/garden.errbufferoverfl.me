---
title: "Object-capability model"
author:
  - errbufferoverfl
date: 2023-08-09T11:44:29+09:30
date-modified: 2024-07-06T13:36:41+09:30
image: "/imgs/ashkan-forouzani-v31lgBn5114-unsplash.jpg"
categories:
  - Security
  - Security Model
  - Seed
---
The object-capability model (also seen written as "ocap") is a [object-capability security](object-capability%20security) concept that describes a computer security model. In ocap a capability describes a transferable right to perform one or more operations on a given object.

To implement a object-capability model you need:

- An unforgeable reference that can be sent in messages;

- A message that specifies the operation to be performed.

::: {.callout-note}

This security model relies on not being able to forge references.

:::

Many of the benefits of object-oriented programming (OOP), like encapsulation, modularity and separation of concerns correspond to a security goal in capability-based programming.

Because OCAP seems to use OOP as an underlying programming paradigm it favours modularity in code design and reliable encapsulation. As a consequence it can be easier to analyse security properties, for example: information flow properties.

This means that its easier to establish and maintain the security properties when adding new objects that contain unknown and possibly malicious code.

These assertions are enforceable because of two structural properties enforced when using OCAP:

1. An object *A* can send a message to *B* only if object *A* holds a reference to *B*.
2. An object *A* can obtain a reference to *C* only if object *A* receives a message containing a reference to *C*.

An analogy used by E. Dean Tribble to describe the OCAP model was it's like giving a valet the key to your car, without handing over the right to car ownership.

::: {.callout-warning}

I don't know how much I like that analogy (and perhaps some contextual resolution has been lost over time) because in the real world "only connectivity begets connectivity" doesn't hold up outside of pre-established social contracts?

:::

## ❓Open Questions

**How does a system provide an unforgeable reference to an object?**

There is part of me that gets the sense that the whole system needs to be built with object-capability security in mind, from the hardware, to the kernel and operating system, etc.

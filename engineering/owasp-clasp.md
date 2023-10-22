---
title: "OWASP CLASP"
subtitle: ""
author: "errbufferoverfl"
date: 2023-10-11T09:06:28+11:00
description: "Introduces OWASP CLASP, a 'comprehensive' and 'lightweight' application security process that aims to integrate security into software development programs in a structured and measurable way. It outlines the different views and components of CLASP and discusses the vulnerability use cases and taxonomy."
image: "/imgs/owasp-clasp.png"
image-alt: ""
categories:
- Seed
- Definition
- Security
- OWASP
---

OWASP (Comprehensive, Lightweight Application Security Process) CLASP is an activity-driven, role-based set of processes which look to build security into an existing or new software development program in a structured, repeatable and, measurable way.

![](/imgs/owasp-clasp.png)

There are 5 CLASP views:

- Concepts View
- Role-Based View
- Activity-Assessment View
- Activity-Implementation View
- Vulnerability View

The CLASP Vulnerability use cases show conditions where security services can become vulnerable in software.

::: {callout-warning}

The vulnerability use cases are based on common component architectures such as: monolithic UNIX, monolithic mainframe and distributed (HTTPS & TCP/IP) architectures so there _might_ be gaps when used with modern software architecture.

:::

## The CLASP Taxonomy

- **Problem types** underlying security-related vulnerabilities.
- **Categories** into which the problem types are divided for diagnostic and resolution purposes.
- **Exposure periods** (i.e., SDLC phases) in which vulnerabilities can be inadvertently introduced into application source code.
- **Consequences** of exploited vulnerabilities for basic security services.
- **Platforms** and programming languages which may be affected by a vulnerability.
- **Resources** required for attack against vulnerabilities.
- **Risk assessment** of exploitable/exploited vulnerabilities.
- **Avoidance and mitigation periods** (i.e., SDLC phases) in which preventative measures and countermeasures can be applied.

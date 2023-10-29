---
title: "Cutting Edge React Security"
subtitle: "Session 1, Part 1"
author: "errbufferoverfl"
date: 2023-10-18T13:28:20+11:00
categories:
- Seed
- Pragmatic Web Security
- React Security
- JavaScript
- Web Security
---

## Security Model of the Web

### Origins

`{scheme}://{host}:{port}`

**Same Origin Policy** - content on the same origin can be interacted with, without restriction. Content on a different origin cannot.

- Applies to the DOM and all it's contents
- Applies to WebPermissions
- Applies to WebStorage
- Applies to JS-base XHR requests, including the ability to load resource and inspect their content

::: {callout-warning}
eTLD (i.e., effective top-level domain) changes this model because there is no way to arithmetically determine if a domain name suffix is publicly registrable or not.

Therefore, the eTLD+1 of these domains is regarded as part of the same organisation.
:::

Once a threat actor can run code within your origin, it's difficult to provide any security.

![Do you want cross-site scripting? Because this is what happens when you get cross-site scripting.](/imgs/cutting-edge-react-security.png){fig-alt="Still photo from the 2006 edition of \"When a Stranger Calls\", Jill Johnson is holding a phone away from her ear with a look of fear on her face. The subtitles read \"We traced the call. It's coming from inside the house.\"" fig-align="center"}

JavaScript vulnerabilities also apply to contexts such as Electron apps and WebViews and are fundamentally governed the same way as browsers.

### Remote Code Inclusion

- Loading remote code at run-time can present a significant risk if not managed, or improperly managed. Remote code inclusions means that when the remote code changes, every user who loads the resource will receive the modified version.
- Remote code inclusions relies on having the full trust of the remote server, all it's components, and in many circumstances the remote resources **it** connects to.
- Remote code inclusions isn't an easy risk to mitigate, when it's being leveraged as a feature.

#### RCI Mitigation

> If Google Analytics gets compromised then 99% of the Internet is screwed.
>
> -- Dr. Philippe De Ryck, Security model of the web / XSS in React

- Self-hosting the remote code being included.
- Using sub-resource integrity or code isolation techniques[^1]
- Using a Content Security Policy can provide more control over what code can be loaded[^2]

### Web App Compartmentalization

Further Reading:

> 40% of packages rely on known vulnerable code[^3]
>
> -- Dr. Philippe De Ryck, Security model of the web / XSS in React

- [Towards a Theory of Application Compartmentalisation](https://link.springer.com/chapter/10.1007/978-3-642-41717-7_4)
- [Exploring Compartmentalisation Hypotheses with SOAAP](https://www.researchgate.net/publication/260346153_Exploring_Compartmentalisation_Hypotheses_with_SOAAP)
- [Chrompartments: Hybrid Compartmentalisation for Web Browsers](https://kclpure.kcl.ac.uk/portal/en/projects/chrompartments-hybrid-compartmentalisation-for-web-browsers)

## Cross-Site Scripting in React

## Introduction to Cross-Site Scripting

### XSS Mitigation

- Encoding dangerous characters prevents XSS, important to note is that encoding can avoid browser confusion, but doesn't provide context information.
- Sinks aren't always obvious and depending on the context in which you're operating, data can end up in HTML attributes, populating URLs, in CSS or in JavaScript.
  - All of these contexts can change the security requirements and how data should be encoded.
- The only way to achieve this, is to ensure you use context-sensitive output encoding which ensures that given an operating-context the data encoded is exist in that context.
  - Even then there is the risk that data is being passed through different contexts within the same operation?

## Advanced Cross-Site Scripting

## Content Security Policy

## Trusted Types

## Server-Side Rendering

[^1]: What are these?
[^2]: [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://research.google/pubs/pub45542/)
[^3]: [Small World with High Risks: A Study of Security Threats in the npm Ecosystem](https://www.usenix.org/conference/usenixsecurity19/presentation/zimmerman)
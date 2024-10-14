---
title: Why are Fragments not Allowed in RFC 6749?
subtitle: Exploring the security rationale behind RFC 6749's prohibition of fragment components in OAuth 2 redirects.
author:
  - errbufferoverfl
date: 2024-10-13T10:56:50+10:30
date-modified: 2024-10-14T12:12:35+10:30
description: Discover why RFC 6749 forbids the use of fragment components in OAuth 2's `redirect_uri`. This post delves into the history, security implications, and best practices surrounding this decision, with insights from OAuth Working Group discussions and real-world vulnerabilities like the 2014 covert redirect.
categories:
  - OAuth
  - Technology Archeology
  - Why?
---

## Why Are Fragment Components Forbidden in the `redirect_uri`?

::: {.callout-note}

This post delves into technology archeology, exploring discussions and decisions that date back nearly a decade. The information presented is based on historical documentation and relies on the original authors' insights and justifications at the time.

:::

I recently found myself pondering this question. After being failed by Google search results, which seemed to fall somewhere between half-hearted answers like "because the spec says so" and "because fragments are passed in 3xx redirects," I decided to find the answer myself.


### The History of Fragments in OAuth

After digging into the OAuth Working Group email threads, I stumbled upon [a 2011 discussion](https://mailarchive.ietf.org/arch/msg/oauth/YZqzreL0N6TSgxXB1OzSFOI18s8/) about an early draft (version 16) of the OAuth framework where fragments were still allowed:

> From section 4.2.1 of the draft:  
> The authorization server validates the request to ensure all required parameters are present and valid. The authorization server MUST verify that the redirect URI to which it will redirect the access token matches a redirect URI pre-registered by the client.  
> The authorization server MUST verify the scheme, authority, and path components of the redirection URI and SHOULD verify the query and fragment components.

However, a subsequent email response sheds light on the shift away from allowing fragments:

> If a fragment was registered (or not), and if the **authorization server policy required that any fragment provided in the callback matched a pre-registered value**. Historically, fragments weren't very important and didn’t have significant security implications. However, with the rise of browser-based applications, **fragments are used to maintain application state** and can potentially be exploited to run malicious code on the client through a valid registered callback.  
> **I’m okay with banning fragments completely**, but I much prefer and will soon propose that we require full, string-wise comparison of redirection URIs to their registered value. **Clients can use the state parameter** for any customization they need (and they can register multiple URIs). This seems like a safer, saner approach that doesn’t take away any real functionality.

(Emphasis added.)

### The Security Role of Fragments in OAuth 2

In later versions of OAuth, particularly as public clients became more common, the decision to disallow fragments became more security-centric. OAuth 2's implicit flow initially relied on a subtle browser behaviour: fragments were not propagated across redirects. This was particularly important because fragments could be used to carry access tokens or sensitive state information, and ensuring fragments weren’t passed to unintended parties was crucial.

However, as noted in a blog post by Eric, an Internet Explorer engineer, about [URL Fragments and Redirects](https://learn.microsoft.com/en-gb/archive/blogs/ieinternals/url-fragments-and-redirects) in 2011, browsers like Firefox, Chrome, and Opera began to re-attach fragments after an HTTP/3xx redirection. This change created new risks, that the framework authors were aware of and were looking to address.

### The Covert Redirect Vulnerability

A key demonstration of why banning fragments was important came in 2014, when Ph.D. student Wang Jing wrote about the "[covert redirection vulnerability](https://miyagawa.co/blog/covert-redirect-vulnerability-with-oauth-2)." This report sparked debates over whether this was a new security issue or simply a poor implementation of the OAuth protocol.

[@ve7jtb](http://twitter.com/ve7jtb) responded in May 2014 on their blog, [Thread Safe](http://www.thread-safe.com/2014/05/covert-redirect-and-its-real-impact-on.html), emphasizing that open redirectors had long been recognized as a problem in OAuth 2 and OpenID Connect, with existing mitigations in place. While these attacks could theoretically expose authorization codes or access tokens in certain flows, the commonly used "code" response type mitigated this risk by requiring a second call with client credentials to retrieve the access token.

@ve7jtb further highlighted an example involving Facebook and ESPN, where Facebook’s lenient redirect URI validation was exploited. However, the attack seemed exaggerated, as typical browser behavior would prevent such exploits unless the browser itself had been compromised.

These concerns were also well documented in an OAuth Working Group thread from 2016 titled "Security concern for URI fragment as Implicit grant." The group reaffirmed that allowing fragments, especially in implicit grant flows, posed unnecessary risks, particularly in browser-based applications.

From [@ve7jtb](https://mailarchive.ietf.org/arch/msg/oauth/WQI86tDTSSrM_rNQsbjf4KQucP4/):

> The OAuth WG is considering better alternatives to using fragment encoding for in browser JS clients as well.  
> 
> For the moment the only standard for the in browser client is fragment encoding. In the future we hope to have more modern methods based on post message.

So while I wouldn't call myself an OAuth expert, I've drawn two clear conclusions from this:

- **For confidential clients**, using the `state` parameter or other query parameters became the preferred approach for customization. This meant developers didn’t need to register as many `redirect_uris`, and the fragment was no longer necessary for state management.
- **For public clients**, disallowing fragments is a way to mitigate the threat of token leakage, especially since RFC 6749 still supported the implicit grant type. By removing fragments, OAuth prevents potential misuse of sensitive information in the redirection process.

---
title: "Security Vulnerabilities in Single-Sign On"
subtitle: "A very unscientific meta analysis"
author:
  - errbufferoverfl
date: 2023-10-28T21:12:30+10:30
date-modified: 2024-07-06T13:36:41+09:30
description: ""
image: "/imgs/julia-joppien-XFUqd0u5U7w-unsplash.jpg"
categories:
  - OAuth
  - OAuth Vulnerabilities
  - Seed
  - SSO
  - Vulnerabilities
image-alt: "A smashed computer lying on the floor."
---

In 2014, automated testing of the top twenty thousand top-ranked websites using the Facebook SDK, found over 20% were suffering from at least one of five security vulnerabilities.[^1]

The study focused on five unique vulnerabilities:

- **Access Token misuse** - a vulnerability where the access token is used to authenticate users rather than authorising users.
- **Signed Request misuse** - a vulnerability where the developer does not verify the signature of a signed request, however, trusts the data contained within the request.
- **App Secret leaks** - a vulnerability where the code and app_secret exchange occurs client side rather than server side.
- **User OAuth credentials leak** - two vulnerabilities, one where OAuth credentials are leaked via the referer header. The other, where untrusted or unverified third-party content is contained within the same frame that authentication occurs in.

Regarding vulnerabilities identified:

- Total sample size of 1660 sites that incorporate Facebook SSO buttons
- 39 sites display Facebook SOO buttons but have buggy implementations
    - Most frequently setting the application to 'sandbox', or
    - Providing an incorrect application ID
- 202 sites misuse credentials
    - 126 sites are misusing both the `access_token` and `signed_request`
- 146 sites leak Facebook SSO credentials
    - 72 sites are leaking through both referrer headers and the DOM
- 345 sites suffered from at least one vulnerability
    - 3 sites suffered from both credential misuse and leakage problems

Regarding the profile of affected sites:

- More popular sites are more like to misuse credentials
- Less popular sites are mote likely to leak credentials
- Of the top-1000 ranked sites:
    - 60 out of 270 support Facebook SSO and suffer at least one vulnerability
- The vulnerability rate is similar for the top 10,000 and the bottom 10,000. This suggests that development practices at larger companies are no more secure than smaller companies
- Websites using preconfigured widgets are more likely to misuse credentials, likely because they expose raw access tokens and signed requests.
    - Convenience factor may lead to more neglectful development practices.
- Websites using the SDK and widgets are better at hiding credentials.

Regarding remediation:

- Out of 20 notifications, only 8 responses were received
    - 3 sites set an automated response
        - 4 months later, 1 site removed the integration citing "content deemed inappropriate"[^2]
    - 1 engineer responded, but never followed up after additional information was provided
    - 1 company remediated the issue after follow up via personal channels
        - Their initial attempt at remediation was unsuccessful
- Nine months later they retesting the 345 affected sites, including the 20 contacted
    - 48 sites had successfully remediated the identified vulnerabilities, including 1 company that was contacted directly
        - 22 were identified as leaking credentials
        - 27 were misusing credentials
            - 1 site affected by both vulnerabilities, fixed both
- An unspecified number of sites that were misusing credentials had migrated from token or signed request flows, to code flow.

Regarding Facebook:[^3] ^and^ [^4]

- Facebook engineers stated concern with the access token leakage through referer headers
- Facebook requested a list of vulnerable clients and contacted 95 sites
    - They said they would "take enforcement action as necessary" against 10 sites leaking access tokens in the referer header
- One month later, only an additional 4 of the 95 reported sites had been remediated
    - 2 of 10 sites leaking access tokens had been remediated

[^1]: Zhou and Evans, “SSOScan: Automated Testing of Web Applications for Single Sign-On Vulnerabilities.”
[^2]: ***What does this even mean?!*** 😂
[^3]: At the time personal data belonging to millions of Facebook users was collected without their consent by British consulting firm Cambridge Analytica.
[^4]: One year prior to this paper being published in June 2013, there was news that a bug in the contact information archive that allowed personal data of approximately 6 million Facebook users to be leaked online. It is believed that the original issue was introduced in 2012.

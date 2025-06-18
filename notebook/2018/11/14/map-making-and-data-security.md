---
title: What the Map Makers of the 1930s Can Teach Us About Protecting Data in 2018
author:
  - errbufferoverfl
date: 2018-11-14T12:09:33+10:30
date-modified: 2025-06-18T15:00:18+09:30
categories:
  - Conference Talk
  - Data Security
---

Throughout 2018, I presented a conference talk entitled "Agloe: What the map makers-of the 1930s can teach us about protecting data in 2018" where we looked back to the 1930’s to see what the General Drafting Company could teach us about securing data and breach notification in the modern day. In the talk I discussed how using free and open-source solutions, defensive thinking and a bit of creativity, we can easily identify network breaches, and catch the bad guys in the act.

::: {.callout-note}

**03 December 2024**

This blog post has been migrated from **errbufferoverfl.me** to **garden.errbufferoverfl.me**. During the migration process, some formatting changes have been made, and social media links have been updated to reflect current platforms.

:::

::: {.callout-note}

**01 September 2021**

Updated the blog post structure and content, and breaks the one longer post into two smaller parts - part one covers paper towns and canary token concepts, part two covers technical implementation and configuration tips.

:::

If you missed out on seeing the talk live, no fuss, you can watch a replay of it on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/dA_rwYoy81U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In part one of this blog post, which is an extension of my original talk, I want to recap some of the key concepts that I covered in my original talk. In part two I will dive deeper into some of the Thinkst Canary Token setup and configuration options that are available, but not necessarily obvious to hobbyists or those just getting started.  
  
So let's get started --

## 🗺️ The Story of Agloe
  
Phantom settlements or "Paper Towns" are settlements, towns or locations that appear in maps but don't actually exist. They are created by accident, or more often than not are created as copyright traps. This is done because the very nature of maps describes "what is" and this can make copyright infringement hard to prove.  
  
Throughout history there have been a number of notable examples of paper towns that exist on maps but not in the real world, for example:  
  
- Agloe, Colchester, NY which first appeared in 1930  
- Argleton, Lancashire, UK which was first identified in 2008 by Mike Nolan [^1] 
- Beatosu and Goblu, Ohio, US that first appeared in the 1978–1979 official state map of Michigan[^2]
  
But there are likely many more of these locations that exist, at least on paper.  
  
But today, we'll be looking at the small town of Agloe, that came to exist after the General Drafting Company was founded by Otto G. Lindberg in 1909.[^3] However, it wasn't until some time in the 1930's that Lindberg and his assistant Ernest Alpers assigned an anagram of their initials to a dirt-road intersection (AGLOE) as a copyright trap to catch out map thieves.[^4]  
  
The original location of this fictional town was a dirt-road intersection in the Catskill Mountains: NY 206 and Morton Hill Road, north of Roscoe, New York, which is shown below on Google maps:  
  
<iframe src="https://www.google.com/maps/d/embed?mid=1mqnEskdZtt7oehUF4n1gQkGG0JE&hl=en" width="640" height="480"></iframe>  
  
In the 1950s, something strange occurred though -- a small general store was built on the intersection on the map and named the "Agloe General Store" this occurred because the General Drafting Company was the exclusive publisher of maps for Standard Oil of New Jersey, later Esso and Exxon.  
  
So for many years, this small general store persisted as a fairly nondescript building, below is an image of the former Agloe General Store, from [a video](https://www.youtube.com/watch?v=tj6T6atITWo) by YouTube user and John Green fan [ObviouslyBenHughes](https://www.youtube.com/watch?v=tj6T6atITWo), who visited Agloe in 2010.

![A photo showing a large brown shack, with a missing door and overgrown scrub.](/imgs/agloe-part-one/agloe-what-map-makers-1.png)
  
As the story goes, several years, after the Agloe General Store was established the town of Agloe started to appear on Rand McNally[^5] maps, who was a competing map maker at the time.  
  
This triggered the trap, and Esso being the primary license holder tried to sue McNally for copyright infringement. But in a classic Yu-Gi-Oh move McNally activated a trap card of their own.

![A photo of a man holding Yu-Gi-Oh trading cards with a sinister look on his face. Over laid is white text that reads "You have activated my trap card".](/imgs/memes/you-activated-my-trap-card.jpg)
  
It turned out that because the Agloe General Store existed, and was registered with the Delaware County administration as existing in the hamlet of Agloe, it basically brought the town into existence and made the original trap set by the General Drafting Company ineffective.  
  
So because McNally had followed the process of creating their map off of the Delaware County administration records no infringements could be shown and thus litigation was ceased. In the end, the Agloe General Store went out of business, but the town continued to appear on maps, Google Maps listed Agloe as a town until it was silently removed in 2014. So while that brings us to the end of the story about Agloe, we still have a lot to explore about the concept of paper towns and data protection.  
  
## 🐱‍💻 Threats Faced
  
If you're a security consultant, or have done any work in gateway / perimeter security you may have noticed an interesting trend where organisations put considerable effort into perimeter security but may spend less engineering effort in applying multi-layered controls once you pass that perimeter, missing out on the benefits of defence in depth -- a topic that [LiamO](https://bsky.app/profile/liamosaur.ragequ.it) explored in some depth in his talk [Security Architecture from Ancient Times](https://youtu.be/PdmIwcJqRZw).  
  
But coming back to our perimeter, you'll often find that once you get past the hard-crunchy outside of the organisations network, whether that be a firewall, web application firewall or some other control, you will often find yourself smack bang in the middle of either their corporate environment, production environment or somewhere else they probably don't want you to be.  
  
Of course in other cases, you may not be as concerned about external threat actors, and may be hunting for something a bit more sinister in the form of an internal threat actor, like someone who might already work for the company and wants to inflict reputational or monetary damage. Which isn't as uncommon as it may seem.  
  
In 2020, a former employee of medical packaging company was charged with sabotaging electronic shipping records leading to the delay of PPE to healthcare providers.[^6]  
  
During January and March 2017 a Bupa employee accessed the sensitive information of 547,000 global customers – including almost 20,000 Australians. The information was then put on sale on the dark web.[^7]  
  
Finally, in July 2020, Jean Patrice Delia, pleaded guilty to conspiring to steal trade secrets from General Electric Company (GE) so he could launch a company to compete against his employer.[^8]  
  
## 🐦 Canary Tokens
  
Like our paper town of Agloe, that acted as a copyright trap for General Drafting Company, canary tokens are pieces of information that allow us to implement traps in our systems. So when an unsuspecting threat actor comes along and interacts with the file you get a notification.  
  
It's important to note though that for canary tokens to be useful, they should be wrapped up in a compelling pretext, you want threat actors to see the tokens and feel compelled to interact rather than take one look and know it's a trap -- crafting that pretext can be tricky and it's important to understand to some level what motivates your threat actor.  
  
For example, an internal threat actor may be looking to steal trade secrets and may not be as interested in usernames and passwords, while an external threat actor may be looking for usernames and passwords to sensitive services so they can gain a better foothold in the network.  
  
If you plan on rolling your own tokens, or token system there are other qualities you want to ensure that tokens have, to ensure their practicality for the job, such as being easily detectable, once a threat actor has found and triggered a token, it should have the ability to trigger a log, or generate an alert -- if their usage goes unnoticed because of a lack of logging, monitoring or alerting canaries lose all value.  
  
Tokens should also have no value other than detecting their use - if there is any meaningful value to the token a threat actor gaining access to it could spell game over for your environment.  
  
It's important to acknowledge that this technology isn't new with canaries and tripwires discussed at length by others: in 1994, Eugene H. Spafford & Gene H. Kim from Purdue University wrote a paper on Using Integrity Checkers for Intrusion Detection,[^9] Lance Spitzner from Symantec writing about Canary Tokens in 2003,[^10] while Microsoft's Defender for Identity has included the ability to deploy canary tokens (referred to as honey tokens) since 2018.[^11]  
  
There are other variations of canary-like solutions that have existed, for example, [Canary Watch](https://canarywatch.org/) was developed by a group of organisations who helped monitor organisations published statements about receiving legal process that it would otherwise be prohibited from saying it had received.  

![A screen capture of the canary watch website with an attention banner that reads "Attention: Canary Watch is no longer being maintained, and the links listed have not been updated past the last checked date. Please read our blog post for more info.](/imgs/agloe-what-map-makers-2.jpg)
  
So while it's handy to conceptually understand how canary tokens work, and what tools already exist, in this blog post I'll be writing about [Thinkst Applied Research's](https://thinkst.com/) free [Canary Tokens](https://canarytokens.org/generate) solution. However, if you want to explore Microsoft's Defender for Identity solution as well I wrote a stand alone article on creating [Office 365 honeytoken user](/engineering/O365-creating-a-honeytoken-user/) in late 2020.
  
## 🔔 Canary Tokens by Thinkst
  
<div class="github-card" data-github="thinkst/canarytokens" data-width="400" data-height="296" data-theme="medium"></div>  
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

The open source version of [Canary Tokens can be found on Github](https://github.com/thinkst/canarytokens) is licensed under [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html) and as of September 2021, offers 16 types of tokens:  
  
- **Web bug / URL token:** Alert when a URL is visited  
- **DNS token:** Alert when a hostname is requested  
- **Unique email address:** Alert when an email is sent to a unique address  
- **Custom image web bug:** Alert when an image you uploaded is viewed  
- **Microsoft Word document:** Get alerted when a document is open in Microsoft Word  
- **Microsoft Excel document:** Get alerted when a document is open in Microsoft Excel  
- **Acrobat Reader PDF document:** Get Alerted when a PDF document is opened in Acrobat Reader  
- **Windows folder:** Be notified when a Windows Folder is browsed in Windows Explorer  
- **Custom exe / binary:** Fire an alert when an EXE or DLL is executed  
- **Cloned website:** Trigger and alert when your website is cloned  
- **SQL server:** Get alerted when MS SQL Server databases are accessed  
- **QR code:** Generate a QR code for physical tokens  
- **SVN:** Alert when someone checks out an SVN repository  
- **AWS keys:** Alert when AWS keys are used  
- **Fast redirect:** Alert when a URL is visited (user is redirected)  
- **Slow redirect:** Alert when a URL is visited (user is redirected, and fingerprinting is done)  
  
However, since this blog post was written in 2018, no progress has been made on Thinkst offering a Git based token.[^12]  
  
## ❓ Why Canary Tokens?
  
So what sets Thinkst's tokens apart from the rest, and why should you consider them an option in your own organisation?  
  
- The software based canary solution is free, and if you purchase their hardware based solution (which has additional features) the token generation features comes built in and can be managed from the combined admin panel.  
- Canary tokens integrate very easily with service like [Mailgun](https://www.mailgun.com/) so at a minimum, if you don't need to log directly to a ingester, and can consume email sources, there is likely an option for you.  
- Unlike other services, canary tokens are cross-platform and the token generator is relatively easy to deploy on existing infrastructure, I also want to say the alerting is relatively easy to configure.  
- When deployed correctly canaries have a low signal to noise ratio, meaning that unlike canaries in coal mines, you shouldn't hear a peep from them unless someone has forgotten their security training, or something has gone wrong and you have an intruder on your network.  
  
## ❌ Why Not Canary Tokens?
  
The primary downside to canary tokens is that they only provide a microscopic view of what is going on, so just because you've deployed some tokens throughout the environment, it doesn't mean other security logging and monitoring can be disabled or ignored. So to get the most value out of canary tokens in a business context, they are best used in conjunction with other practises like logging and alerting so you're able to build out that macroscopic view of the environment.  
  
Depending on the organisations understanding threats posed internally and externally, you may find that establishing suitable pretexts to be a difficult activity, as I mentioned earlier to get the most benefit out of canary tokens you want to make sure you have a believable scenario mapped out so as to elicit the right response from the right threat actors.  
  
Like any technology, there are always ways for threat actors to bypass detections, in the case of canary tokens, a sophisticated threat actor may identify ways to sink hole traffic meant for the canary host to alert on, but understanding how this risk may impact your own deployment is something that should be explored during the proof of concept or modelled as part of a wider deployment strategy.  
  
Finally, you might realise either now or in future as your organisation grows, or you look to deploy more canaries using the free generator, scale can also be a limiting factor and depending on the resources available to the team this may be more or less a limiting factor -- so it might be a good time to investigate their [paid solution](https://canary.tools/), that allows mass deployment and management.  
  
## 🎁 The Wrap Up
  
Map makers have showed us that using techniques like paper towns and similar traps grant defenders the ability to catch unsuspecting threat actors in the act, reducing the time needed to identify and evict these threat actors from our corporate networks in a cost effective way avoiding some of the pitfalls associated with log and log alerting fatigue.  
  
We discussed that like any technology solution canary tokens in any form rely heavily on informed deployment for the highest value, and that there are some risks attached to threat actors bypassing detection techniques making canaries alone an insufficient control -- however, this is something that should be explored and modelled and the likelihood x impact assessed and framed appropriately.  
  
However, they still provide several benefits to small and medium sized businesses who may have limited time and resources: the option to deploy a free token generator in the environment allows security teams to hit the ground running and trial canary tokens, it also makes detection tools more accessible to companies that may not have access to a large security budget. While the ability to deploy a variety of different types of token makes this option flexible and allows engineers to "plug and play" without the need to re-architect large portions of their corporate infrastructure.  
  
So, try out Thinkst's [free canary token solution](https://canarytokens.org/generate) and see if it's the right fit for your organisation today!  
In my next post on Thinkst's free canary token solution I will dive deeper into some of the Thinkst Canary Token setup and configuration options that are available, but not necessarily obvious to hobbyists or those just getting started.  
  
## 📚 Definition List

hamlet
: a small village or a group of houses.  

town  
: a settlement or an area with residential districts, shops and amenities, and its own local government.

[^1]: [Wikipedia - Argleton](https://en.wikipedia.org/wiki/Argleton)  
[^2]: [Wikipedia - Beatosu & Goblu](https://en.wikipedia.org/wiki/Beatosu_and_Goblu)  
[^3]: [Wikipedia - The General Drafting Company](https://en.wikipedia.org/wiki/General_Drafting)  
[^4]: [Wikipedia - Agloe, New York](https://en.wikipedia.org/wiki/Agloe,_New_York)  
[^5]: [Wikipedia - Rand McNally](https://en.wikipedia.org/wiki/Rand_McNally)  
[^6]: [Former employee of medical packaging company charged with sabotaging electronic shipping records leading to the delay of PPE to healthcare providers](https://www.justice.gov/usao-ndga/pr/former-employee-medical-packaging-company-allegedly-sabotages-electronic-shipping)  
[^7]: [Bupa fined after rogue employee put customers' information up for sale on the dark web in stunning data breach](https://www.healthcareit.com.au/article/bupa-fined-after-rogue-employee-put-customers-information-sale-dark-web-stunning-data-breach)  
[^8]: [Investigation Into Theft of Intellectual Property from GE Leads to Two Guilty Pleas](https://www.fbi.gov/news/stories/two-guilty-in-theft-of-trade-secrets-from-ge-072920)  
[^9]: [Experiences with Tripwire: Using Integrity Checkers for Intrusion Detection](https://docs.lib.purdue.edu/cgi/viewcontent.cgi?article=2114&context=cstech)  
[^10]: [Honeytokens: The Other Honeypot](https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=74450cf5-2f11-48c5-8d92-4687f5978988&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments)  
[^11]: [Release reference of Microsoft Defender for Identity - Azure ATP release 2.49](https://docs.microsoft.com/en-us/defender-for-identity/release-reference#azure-atp-release-249)  
[^12]: [Github - Why is there no git token when there is already a svn token? #79](https://github.com/thinkst/canarytokens/issues/79)

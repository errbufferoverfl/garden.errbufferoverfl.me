---
title: We Don't Deserve the Marketplaces We've Built
author: 
  - errbufferoverfl
date: 2025-06-20T13:02:15+09:30
draft: true
categories:
  - draft
---

I recently found out that in early June, Apple issued a warning[^1] to the Australian government, claiming that following the European Union’s lead on app sideloading—by making it mandatory under laws similar to the Digital Markets Act—would pose serious security and privacy risks for users.

> [!NOTE]
> The Electronic Frontier Foundation (EFF) did an analysis of the [Digital Services Act](https://www.eff.org/pages/adoption-dsadma-notre-analyse) package if you want to learn more about what the EU proposes.

This warning has come about because late last year the Australian Treasury started to investigate a new competition regime for digital platforms. The investigation[^3] by the Treasury seems to be have spurred on by the findings of the The Australian Competition and Consumer Commission (ACCC) who reported in their Digital Platform Services Inquiry "the positions of substantial market power held by large digital platforms give them the ability and incentive to engage in strategic conduct to entrench and extend that market power. These systemic issues can impact businesses and consumers through higher prices, reduced choice, and lower innovation and quality of products and services."

The Treasury seems to have accepted the conclusions of the ACCC findings that existing provisions aren't enough to address current or potential future competition harms and a new digital competition regime is required.

Since Apple's warning was reported in the media, the EFF's Cory Doctorow has written about Apple's warning to Australia[^2] calling it "a scaremongering, self-serving warning aimed at the Australian government". Doctorow points out the double standard: Apple insists that opening iOS is dangerous yet happily weakens its own privacy guarantees when it profits.

For example, Apple rolled out ATT in 2021, boasting that it would curb cross-app tracking. Meta estimated the change would cost it **US$10 billion** in 2022 alone—hardly a sign that user privacy is an afterthought. [itpro.com](https://www.itpro.com/security/privacy/362151/meta-says-apples-ios-privacy-changes-will-cost-it-10-billion-in-2022)

At the same time, independent researchers (and several class-action suits) have shown that Apple continues to vacuume up granular usage data—even when users switch “iPhone Analytics” off. [gizmodo.com](https://gizmodo.com/apple-iphone-analytics-tracking-even-when-off-app-store-1849757558)

And so it's easy to see how the “user-safety” narrative starts to wobble once you look past the press release. Apple’s track record on privacy is mixed at best, and its warnings feel more like a defence of its business model than a genuine call to protect users. Australia should be looking to introduce DMA-style legislation because there is a lot to admire about the approach. It tries to rebalance the power between users and platforms especially in an age where users are at the mercy of the broligarchy.

But from where I sit there’s an important part of the conversation we haven’t wrangled with yet: **What happens once we leave the walled garden?**

Don't get me wrong! It's important to make clear that I support DMA-style legislation, it's good for making tech marketplaces more democratic. But I don't know if **everyone** is ready for the marketplaces we've built.

For a lot of everyday users, especially those less immersed in tech, app marketplaces—particularly Apple’s—are seen as bastions of safety and trust. And to be fair, there’s some truth to that… but only _to a point_.

In March 2025, Bitdefender researchers uncovered a massive ad fraud campaign on the Google Play Store, involving _hundreds_ of malicious apps with over 60 million downloads. These apps showed out-of-context ads and even attempted phishing attacks to steal credentials and credit card details[^4].

Just a month earlier, on February 6, Kaspersky identified ‘SparkCat’ malware hidden in multiple iOS apps, designed to steal cryptocurrency[^5].

So even in these tightly walled gardens, threats get through, and in my opinion we're only seeing a fraction of the problem. Most reports focus on high-profile or large-scale cases, but we rarely hear about the less popular apps that quietly collect data, serve misleading ads, or engage in shady behaviour before being uninstalled and forgotten. Plenty of users don’t realise something went wrong. They uninstall an app that seemed buggy or suspicious, not knowing it may have already stolen personal data, dropped trackers, or opened the door to further compromise. These issues often go unreported, untracked, and unresolved—leaving both users and researchers in the dark.

The other problem is that many marketplaces have seemingly leaned into security theatre — projecting an image of stricter security control than what is reasonably possible given how long it takes to get from submission to app store listing. And it's not to say that Apple and Google's app review process doesn't do anything for security — these processes do provide important protections for users, however, as the ACCC noted in March 2021[^6] "consumer feedback and analysis of app marketplace reviews suggests apps with the potential to harm consumers continue to be present on both app marketplaces."

In particular the ACCC noted that they think "that Apple and Google should take steps to more proactively monitor those apps which have made it through their review processes and are available on their app marketplaces for continued compliance with their marketplace policies."

And so outside of tech, amongst normal users there’s often a widespread belief that every app is thoroughly reviewed, nothing malicious or harmful gets through, and as long as you stick to the App Store, you’re safe. And let's be honest, it doesn't serve the Apple or Google marketplace to refute these beliefs. 

And so the problem I see here is, sideloading makes an already messy problem space even more complex. It’s already hard enough to monitor legitimate app stores. We don’t have good data on how many apps in official stores are dangerous, exploitable, or outright malicious—let alone those floating around in unofficial channels. And this is something that Apple talks about extensively in their *Submission in response to the Digital Platform Services Inquiry Discussion Paper* as to why Australia shouldn't persue DMC-style legislation 




[^1]: Apple warns Australia against joining EU in mandating iPhone app sideloading, https://www.neowin.net/news/apple-warns-australia-against-joining-eu-in-mandating-iphone-app-sideloading/

[^2]: Apple to Australians: You’re Too Stupid to Choose Your Own Apps, https://www.eff.org/deeplinks/2025/06/apple-australians-youre-too-stupid-choose-your-own-apps

[^3]: A new digital competition regime Proposal Paper https://treasury.gov.au/sites/default/files/2024-12/c2024-547447-pp.pdf

[^4]: Hundreds of Malicious Google Play-Hosted Apps Bypassed Android 13 Security With Ease https://www.bitdefender.com/en-au/blog/labs/malicious-google-play-apps-bypassed-android-security

[^5]: iOS App Store apps with screenshot-reading malware found for the first time https://www.theverge.com/news/606649/ios-iphone-app-store-malicious-apps-malware-crypto-password-screenshot-reader-found

[^6]: Digital platform services inquiry Interim report No. 2 - App Marketplaces https://www.accc.gov.au/system/files/Digital%20platform%20services%20inquiry%20-%20March%202021%20interim%20report.pdf

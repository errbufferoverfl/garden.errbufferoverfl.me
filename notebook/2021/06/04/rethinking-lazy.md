---
title: Rethinking Lazy
subtitle: Understanding the Barriers Behind Inaction
description: "An essay on why calling people, teams, or systems lazy hides structural barriers such as burnout, competing priorities, poor tooling, and lack of support."
author:
  - errbufferoverfl
date: 2021-06-04T10:04:13+10:30
date-modified: 2025-06-18T15:01:08+09:30
canonical-url: true
categories:
  - Security Culture
---

::: {.callout-note}

**03 December 2024**

This blog post has been migrated from **errbufferoverfl.me** to **garden.errbufferoverfl.me**. It has been updated with new insights, improved clarity, and new thoughts about the original content.

:::

The word "lazy" is pervasive in tech and security circles, frequently used to explain gaps in security, productivity, or performance. It appears in conversations about insecure web applications, unpatched systems, or resistance to feedback from reports. In postmortems, we hear phrases like "users are lazy," or "the team was lazy," presented as root causes for incidents. But framing issues as laziness oversimplifies complex dynamics, ignores systemic barriers, and perpetuates unproductive blame.

At its core, "lazy" is a dismissive term that fails to acknowledge the broader context behind actions—or inactions. When we label someone or something as lazy, we are essentially reducing a situation to a personal failure without exploring the underlying causes. Reflecting on moments when you might have felt or been called "lazy," the examples likely centre around behaviours such as staying in bed all day, missing deadlines, or being disengaged at work. But, these behaviours often stem from unseen barriers rather than an inherent unwillingness to work.

When we label a team, individual, or system as lazy, we misrepresent these barriers and overlook critical factors such as:

- Competing priorities
- Lack of resources or support
- Knowledge gaps
- Systemic inefficiencies
- Burnout or stress

By doing so, we fail to address the real issues that lead to missed deadlines, overlooked security measures, or incidents.

Consider this common scenario: you're doing a penetration test with a tight deadline. As you dig into the system, you notice glaring security issues—a lack of encryption, inadequate access controls, and a backlog of unpatched vulnerabilities. It’s easy to conclude that the developers or IT were "lazy." You might even hint at this during your report walkthrough, suggesting a lack of effort or care.

But labelling contributors as lazy misses the mark. Behind every issue is a complex set of pressures, decisions, and constraints. Developers and engineers often operate under deadlines, with limited resources and competing priorities. Security fixes may be deprioritized in favour of delivering user-facing features, or there may be insufficient buy-in from leadership to allocate time and budget for improvements.

In this context, "lazy" becomes not only inaccurate but also unhelpful. It shifts attention away from structural issues and toward personal blame, making it harder to identify and address the real barriers to improvement.

Having worked with numerous organisations, I can confidently say that rarely do people choose to deliberately ignore security because they are unwilling to work. Instead, contributors make these decisions based on a range of factors:

- Issues deemed low-risk may be deferred in favour of high-priority tasks.
- Teams may lack the time, staff, or funding to address every vulnerability.
- Engineers may not have the security expertise needed to address certain issues effectively.
- Leadership may prioritise speed and features over robustness, leaving contributors unable to focus on security without falling behind on other deliverables.
- In organisations with poor security culture, contributors may feel overwhelmed by unrealistic expectations or unsupported in their efforts.

Understanding these barriers allows us to replace vague criticisms with targeted solutions. By being specific, we can uncover root causes and work collaboratively to address them.

Removing "lazy" from our vocabulary opens the door to more productive conversations and solutions. Here’s how we can approach this shift:

- Highlight the tangible consequences of security issues to justify investment in fixes. Provide real-world examples and clear risk assessments to help stakeholders understand the stakes.
- Accept that some organisations lack the capacity to address all identified risks immediately. Work with them to prioritise the most critical issues and create a manageable plan for improvement.
- Recognise that your threat model might not align perfectly with the organisation’s priorities. Respect differences in risk tolerance and collaborate to find common ground.
- Offer resources, training, or workshops to empower contributors who are motivated to improve security but lack the necessary support from leadership. If possible, provide free or discounted resources to facilitate these efforts.
- Advocate for a cultural shift that views mistakes and shortcomings as opportunities for growth rather than failures to punish. This approach fosters openness, learning, and innovation.

By removing the word "lazy" from our vocabulary, we can shift the focus from blame to understanding. This small change in language can have a profound impact on how we interact with colleagues, clients, and stakeholders. It encourages empathy, fosters collaboration, and creates an environment where people feel supported in addressing challenges rather than judged for them.

"Lazy" is a convenient but ultimately harmful label. It obscures the real reasons behind problems and discourages constructive dialogue. By replacing it with specific, actionable insights, we can help individuals and organisation's identify and address the unseen barriers that stand in the way of progress.

As [Tatiana Mac](https://twitter.com/TatianaTMac) succinctly put it:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Whether in avoiding ableist language or writing clear tickets for QA, being more specific is the universal answer.</p>&mdash; Tatiana Mac (@TatianaTMac) <a href="https://twitter.com/TatianaTMac/status/1293229165987000320?ref_src=twsrc%5Etfw">August 11, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---
title: "Consensus and Humming in the IETF"
alias:
  - "Consensus and Humming in the IETF"
created: 2023-06-20T18:37:06+10:00
modified: 2023-06-20T21:26:54+10:00
tags:
- seedling
- consensus building
- humming
- shut up about humming in the ietf Bec
---

This post summarises the key points of [RFC 7282](https://datatracker.ietf.org/doc/html/rfc7282) an informational RFC (Request for Comment) published in 2014. This post is? will be? part of an ongoing collection on decision making and consensus building that looks to explore how groups make decisions and why.

> We reject: kinds, presidents and voting.
> We believe in: rough consensus and running code.
> 
> \-Dave Clark, 1992 plenary presentation on decision making in the IETF.

The IETF (Internet Engineering Task Force) does a lot of their technical work through a consensus process, taking into account different views amongst participants and aims to come to a rough consensus using a majority rule philosophy.

But this is often mistaken as voting which it isn't. Requiring full consensus, while nice, allows a single inflexible person who keeps saying no to stop the process cold.

Instead the IETF have a tradition of humming – for example, when there is a face to face meeting and the chair wants to get a sense of the room they will request people hum on a particular question either for or against.

**But this doesn't answer why humming and not voting.**

## 1. Lack of disagreement is more important than agreement.
Consider the following:
> The chair asks on the mailing list, "Is everyone OK with format A?"  Inevitably, a number of people object to format A for one or another technical reason.  The chair then says, "It sounds like we don't have consensus to use format A.  Is everyone OK with format B?" This time even more people object to format B, on different technical grounds.  The chair, not having agreement on either format A or format B, is left perplexed, thinking the working group has deadlocked.

The problem experienced is the chair conflated **determining** consensus, with **coming to** a consensus, with **having** consensus.

While it might be subtle, it comes down to understanding tradeoffs, which engineering in all forms is about. There will always be appealing and unappealing options. So what's the difference?

- **Determining consensus:** is about separating the choices that are unappealing from those that are problematic. Acceptable vs. complete.
- **Coming to consensus:** is when everyone comes to the conclusion that either the objections are valid, and therefore make a change to address the objection, or that the objection was not really a matter of importance, but merely a matter of taste.

So really:

> Consensus is when everyone is sufficiently satisfied with the
   chosen solution.

## 2. Rough consensus is achieved when all issues are addressed, but not necessarily accommodated

In the IETF, a working group will likely encounter an objection where:
- Everyone understands the issue.
- Acknowledges that it's a real shortcoming in the proposal.
- Agree that accommodating the objection is not worth the tradeoff of fixing the problem.
In some cases, the person(s) raising the objection may not agree with this. 

In these cases, if the chair finds that the issue has been well considered, and that the vast majority of the working group has come to the conclusion that a tradeoff is worth making, even in the face of continued objection, the chair can declare the group has come to a rough consensus.

> [!note] RFC 1603 vs RFC 7282
> 
> This is a change from how rough consensus has been characterised in the IETF where is has been described as "the dominant view" of the group .[^1]

And while [RFC 2418](https://www.rfc-editor.org/rfc/rfc2418.html) puts some percentages on what "rough consensus" looks like, RFC 7282 warns that being able to count and quantify how many people agree or disagree risks overlooking important minority views.

So it's important that a **rough consensus model** addresses (not necessarily fixes) important minority views.

## 3. Humming should be the start of a conversation

Final decisions are supposed to be taken on the mailing list, but sometimes, the chair will want to determine they are coming to consensus.

Introduce *humming*.

While some will conflate this with an anonymous vote, hums are not votes. Sometimes the hum can tell a chair that the room isn't all that contentious, it's only a few being particularly vocal.

Sometimes the hum will make it clear that one choice has more support than another and it's a good place to start the discussion, for example:

> Let's have the people that think 'foo' is a bad idea come up and tell us why it is problematic.

So the hum is a starting point. It's a temperature.

A small but loud group of hums for option A and a larger, but more non-committal hum for option B might tell us that some people have some concerns with option B, but it's overall more popular.

You could also be surprised to find that the hums is unanimous and no further discussion is needed.

## 4. Consensus is the path, not the destination

The IETF doesn't see consensus as the destination, rather consensus-building is a tool to get the best technical outcome. They found voting can result in important minority views being ignored, and, ultimately worse technical outcomes.

---

The author [Pete Resnick](https://www.episteme.net/Work/) goes into more detail and provides more examples in the RFC so I recommend reading it in full to learn more about it.

[^1]: https://datatracker.ietf.org/doc/html/rfc1603
---
title: "OAuth2.1 State Machine"
alias:
  - "OAuth2.1 State Machine"
created: 2023-06-28T21:36:45+10:00
modified: 2023-06-28T23:11:57+10:00
tags:
- seedling
---

```mermaid
---
title: OAuth 2.1 Authorization State Diagram
---
stateDiagram-v2
	[*] --> Request
	Request --> Verifing: Exchange Client Params
	Verifing --> Waiting_Approval: Grant Valid
	Verifing --> Unauthorised: Grant Invalid
	Waiting_Approval --> Authorised: Grant Approved
	Waiting_Approval --> Unauthorised: Grant Denied
	Waiting_Approval --> Timed_Out: Grant Unserviced
	Authorised --> Revoked: Grant Revoked
	Revoked --> [*]
	Timed_Out --> [*]
	Unauthorised --> [*]
	Authorised --> [*]
```
*Built for [erlaubnis](https://github.com/errbufferoverfl/erlaubnis).*
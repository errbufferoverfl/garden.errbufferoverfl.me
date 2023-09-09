---
title: "Restricting SSH Sessions for CI CD with GNU Rush"
alias:
- "Restricting SSH Sessions for CI CD with GNU Rush"
created: 2023-08-12T16:36:37+10:00
modified: 2023-08-12T16:41:24+10:00
link:  "https://ec0.io/post/restricting-ssh-sessions-for-ci-with-gnu-rush/"
tags:
- bookmark
---

> One method for deployment that addresses these requirements when deploying to remote *nix systems is SSH coupled with rsync. The only gap is that typically, even if you use SSH as a transport (encryption, authentication) you by default provide the deployment service account with a full shell. In order to meet the principle of least privilege, you need to allow only the access required to deploy your CI/CD artefacts…

[Link](https://ec0.io/post/restricting-ssh-sessions-for-ci-with-gnu-rush/)
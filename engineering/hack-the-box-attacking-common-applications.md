---
title: "Hack the Box"
subtitle: "Module: Attacking Common Applications"
author: "errbufferoverfl"
date: 2023-10-21T19:23:04+11:00
categories:
- Learning
- Hack the Box
- Hack the Box Academy
- Offensive
---

## Scope

::: {{callout-note}}
Not all hosts in the scope list are accessible when spawning the target below.
:::

-   app.inlanefreight.local
-   dev.inlanefreight.local
-   drupal-dev.inlanefreight.local
-   drupal-qa.inlanefreight.local
-   drupal-acc.inlanefreight.local
-   drupal.inlanefreight.local
-   blog-dev.inlanefreight.local
-   blog.inlanefreight.local
-   app-dev.inlanefreight.local
-   jenkins-dev.inlanefreight.local
-   jenkins.inlanefreight.local
-   web01.inlanefreight.local
-   gitlab-dev.inlanefreight.local
-   gitlab.inlanefreight.local
-   support-dev.inlanefreight.local
-   support.inlanefreight.local
-   inlanefreight.local
-   10.129.201.50

## Discovery/Enumeration

### Scans

### Live Hosts

## Application Discovery

### Scans

### Interesting/Notable Hosts

::: callout-note
<div>

**Remember**

Hosts with `dev` as part of the FQDN are worth noting down as they may be running untested features or have things like debug mode enabled.

</div>
:::

## Exploitation

## Post-Exploitation

## Tools

### `nmap`

``` shell-session
nmap -p 80,443,8000,8080,8180,8888,1000 --open -oA web_discovery -iL scope_list
```

### Eyewitness

### Aquatone

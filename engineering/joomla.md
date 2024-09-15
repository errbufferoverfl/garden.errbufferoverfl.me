---
title: "Joomla"
subtitle: ""
author:
  - errbufferoverfl
date: 2023-10-28T11:55:27+10:30
date-modified: 2024-09-15T12:25:13+09:30
categories:
  - Fundamentals
  - Joomla
  - Seed
---

## Basic Information

- Flexible Content Management System (CMS)
- PHP based

### Discovery & Footprinting

#### `robots.txt`

A standard Joomla `robots.txt` file looks something like:

```shell-session
# If the Joomla site is installed within a folder
# eg www.example.com/joomla/ then the robots.txt file
# MUST be moved to the site root
# eg www.example.com/robots.txt
# AND the joomla folder name MUST be prefixed to all of the
# paths.
# eg the Disallow rule for the /administrator/ folder MUST
# be changed to read
# Disallow: /joomla/administrator/
#
# For more information about the robots.txt standard, see:
# https://www.robotstxt.org/orig.html

User-agent: *
Disallow: /administrator/
Disallow: /bin/
Disallow: /cache/
Disallow: /cli/
Disallow: /components/
Disallow: /includes/
Disallow: /installation/
Disallow: /language/
Disallow: /layouts/
Disallow: /libraries/
Disallow: /logs/
Disallow: /modules/
Disallow: /plugins/
Disallow: /tmp/
```

#### `meta generator`

Viewing the raw HTML can reveal WordPress either in the `meta generator` or in other places.

```shell-session
curl -s http://dev.inlanefreight.local/ | grep Joomla

 <meta name="generator" content="Joomla! - Open Source Content Management" />
```

#### `README.txt`

If the target has poor operational hygiene, we can fingerprint the Joomla version if the README.txt file is present:

```shell-session
curl -s http://dev.inlanefreight.local/README.txt | head -n 5

1- What is this?
 * This is a Joomla! installation/upgrade package to version 3.x
 * Joomla! Official site: https://www.joomla.org
 * Joomla! 3.9 version history - https://docs.joomla.org/Special:MyLanguage/Joomla_3.9_version_history
 * Detailed changes in the Changelog: https://github.com/joomla/joomla-cms/commits/staging
```

The `cache.xml` file can help to give us the approximate version. It is located at `plugins/system/cache/cache.xml`.

#### Included JavaScript Files

In certain Joomla installs, we may be able to fingerprint the version from JavaScript files in the `media/system/js/` directory or by browsing to `administrator/manifests/files/joomla.xml`.

```shell-session
curl -s http://dev.inlanefreight.local/administrator/manifests/files/joomla.xml | xmllint --format -

<?xml version="1.0" encoding="UTF-8"?>
<extension version="3.6" type="file" method="upgrade">
  <name>files_joomla</name>
  <author>Joomla! Project</author>
  <authorEmail>admin@joomla.org</authorEmail>
  <authorUrl>www.joomla.org</authorUrl>
  <copyright>(C) 2005 - 2019 Open Source Matters. All rights reserved</copyright>
  <license>GNU General Public License version 2 or later; see LICENSE.txt</license>
  <version>3.9.4</version>
  <creationDate>March 2019</creationDate>
```

## Remote Code Execution

- If you can get admin credentials you can get remote code execution by adding a snippet of PHP code to a template.

## Tools

- [droopescan](https://github.com/droope/droopescan) - a plugin-based scanner that works for SilverStripe, WordPress, and Drupal with limited functionality for Joomla and Moodle.
- [JoomlaScan](https://github.com/drego85/JoomlaScan)
- [joomscan](https://github.com/OWASP/joomscan) - deprecated
- [joomla-brute.py](https://github.com/ajnik/joomla-bruteforce)

## Further Reading

- [Joomla](https://book.hacktricks.xyz/network-services-pentesting/pentesting-web/joomla)

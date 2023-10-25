---
title: "WordPress"
subtitle: ""
author: "errbufferoverfl"
date: 2023-10-24T19:59:51+11:00
description: ""
image: ""
image-alt: ""
categories:
- Seed
- WordPress
- Fundamentals
---

## Basic Information

- Flexible Content Management System (CMS)
	- Offers 50,000+ plugins
	- A study showed that roughly 8% of WordPress hacks happen due to weak passwords, while 60% were due to an outdated WordPress version
	- According to WPScan, out of nearly 4,000 known vulnerabilities, 54% are from plugins, 31.5% are from WordPress core, and 14.5% are from WordPress themes.

## Discovery & Footprinting

- `wp-activate.php` is used for the email activation process when setting up a new WordPress site.
- Login folders (may be renamed to hide it):
	- `/wp-admin/login.php`
	- `/wp-admin/wp-login.php`
	- `/login.php`
	- `/wp-login.php`
- `xmlrpc.php` is a file that enables WordPress to transmit XML data via HTTP with HTTP. This type of communication has been replaced by the WordPress.
- The `wp-content` folder is the main directory where plugins and themes are stored.
	- Plugins are stored in `wp-content/plugins`
	- Themes are stored in `wp-content/themes`
- `wp-content/uploads/` Is the directory where any files uploaded to the platform are stored.
- `wp-includes/` This is the directory where core files are stored, such as certificates, fonts, JavaScript files, and widgets.
- The `wp-config.php` file contains information required by WordPress to connect to the database such as the database name, database host, username and password, authentication keys and salts, and the database table prefix. This configuration file can also be used to activate DEBUG mode, which can useful in troubleshooting.

### `robots.txt`

A standard WordPress `robots.txt` file looks something like:

```
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Disallow: /wp-content/uploads/wpforms/

Sitemap: https://example.com/wp-sitemap.xml
```

- `wp-admin` and `wp-content` are default WordPress directories.
- Attempting to navigate to `/wp-admin` will redirect you to `/wp-login.php`

### `meta generator`

Viewing the raw HTML can reveal WordPress either in the `meta generator` or in other places.

```shell
curl -s http://blog.inlanefreight.local | grep WordPress

...

<meta name="generator" content="WordPress 5.8" /
```

## Authorisation

There are five types of users on a standard WordPress installation.

1. Administrator: This user has access to administrative features within the website. This includes adding and deleting users and posts, as well as editing source code.
2. Editor: An editor can publish and manage posts, including the posts of other users.
3. Author: They can publish and manage their own posts.
4. Contributor: These users can write and manage their own posts but cannot publish them.
5. Subscriber: These are standard users who can browse posts and edit their profiles.

Getting access to an administrator is sufficient to obtain code execution on the server. Editors and authors may have access to vulnerable plugins, which normal users don’t.

## Tools

- [WPScan](https://github.com/wpscanteam/wpscan)

## Further Reading

- [Hacking WordPress](https://academy.hackthebox.com/course/preview/hacking-wordpress)
---
title: Quarto Supports `rel=me` Out of the Box
subtitle: Today I Learnt
author:
  - errbufferoverfl
date: 2024-12-03T10:57:32+10:30
date-modified: 2025-06-18T15:01:08+09:30
categories:
  - Quarto
  - Today I Learnt
series: Today I Learnt
---

For a while now, I’ve been wrestling with how to make my social links more functional, specifically for platforms like Mastodon and Bluesky that use `rel=me` for identity verification. Adding `rel=me` to links isn't hard per se, but automating it in a way that fits seamlessly into my site’s build process has been surprisingly tedious.

## The Problem: Adding `rel=me` to Links

Initially, I wrote a Python script to handle this. Using `BeautifulSoup`, the script parsed the rendered HTML, found all the `<a>` tags with the `class="about-link"` attribute, and ensured they included the `rel="me"` attribute. Here's a simplified version of what that looked like:

```python
import os
from bs4 import BeautifulSoup

about_me_page = "public/index.html"

def add_rel_me_to_links(file_path):
    if not os.path.exists(file_path):
        print(f"File {file_path} not found.")
        return

    with open(file_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    for link in soup.find_all('a', href=True, class_='about-link'):
        if 'rel' in link.attrs:
            current_rel = link['rel']
            if isinstance(current_rel, list):
                current_rel = " ".join(current_rel)
            if "me" not in current_rel.split():
                link['rel'] = f"{current_rel} me".strip()
        else:
            link['rel'] = "me"

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(str(soup))

add_rel_me_to_links(about_me_page)
```

This worked fine, but it relied on `BeautifulSoup`, which meant adding a dependency and managing a Python environment with tools like Poetry. I wanted something simpler, so I rewrote the script using only built-in Python libraries. That was… a mistake. While it seemed promising at first, managing and reconstructing the HTML with `html.parser` introduced more headaches than it solved, like garbled attributes and clunky handling of nested tags.

## RIP Me: Quarto Handles This Already

Frustrated, I started looking for a better way to integrate `rel=me` directly into my site’s build process. My site is built with Quarto, and surely I wasn’t the only one who wanted custom `rel` attributes for links. After a bit of digging, I stumbled across [this closed GitHub issue](https://github.com/quarto-dev/quarto-cli/issues/3212) from 2022. Turns out, Quarto already supports `rel=me` out of the box for social media links in the `about` configuration.

All I needed to do was add `rel: "me"` directly to the `links` section of my `_quarto.yml`. Here's an example:

```
about:
  template: jolla
  image-width: 80px
  links:
    - icon: chat-square-quote-fill
      text: Bluesky
      href: https://bsky.app/profile/errbufferoverfl.bsky.social
      rel: "me"
    - icon: mastodon
      text: Mastodon
      href: https://genericsocialmediapage.com/@errbufferoverfl
      rel: "me"
```

While this feature has been in Quarto for over a year, it doesn't seem to appear in their official docs! By using Quarto’s built-in functionality, I’ve removed the need for custom scripts entirely, which means I'm avoiding potential issues with HTML parsing scripts.

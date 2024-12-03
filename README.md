<h1 align="center">garden.errbufferoverfl.me</h1>

<div align="center">
  💻🔥🪤
</div>
<div align="center">
  <strong>A digital garden built on <a href="https://quarto.org">Quarto.</a></strong>
</div>
<div align="center">
  Digital garden, second brain.
</div>
<br/>

<div align="center">
  <h3>
    <a href="https://gitlab.com/errbufferoverfl/garden-errbufferoverfl-me">
      GitLab
    </a>
    <span> | </span>
    <a href="https://garden.errbufferoverfl.me">
      Website
    </a>
    <span> | </span>
    <a href="https://quarto.org/docs/guide/">
      Quarto Handbook
    </a>
  </h3>
</div>

<div align="center">
  <br>
  <sub>The little experiment that could. Built with ❤︎ by
  <a href="https://bsky.app/profile/errbufferoverfl.bsky.social">errbufferoverfl</a>
</div>

## Introduction

[garden.errbufferoverfl.me](https://garden.errbufferoverfl.me) is a digital garden filled to the brim with half-finished notes about society, microfarming, and sometimes security engineering. This digital garden is a space where my ideas and thoughts are cultivated and allowed to grow organically. It serves as a repository for exploring various topics and concepts, ranging from societal structures and cultural observations to practical insights on microfarming techniques and principles of security engineering.

## Table of Contents

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deploying the Site](#deploying-the-site)
  - [robots.txt](#robotstxt)
    - [robots.txt File](#robotstxt-file)
    - [Applying the robots.txt](#applying-the-robotstxt)
- [Common Issues](#common-issues)
  - [Error: Not Found](#error-not-found)
- [License](#license)
- [Contact](#contact)

## Tech Stack

Here's a brief high-level overview of the tech stack [garden.errbufferoverfl.me](https://garden.errbufferoverfl.me) uses:

- **[Quarto](https://quarto.org/docs/guide/)**: Quarto is used for theming and static website generation. It supports various formats and can integrate code, text, and multimedia.
- **[Obsidian](https://obsidian.md/)**: Content is managed using Obsidian, a note-taking application that uses a local Markdown file system. Its graph view and backlinking features.
- **Deployed to GitLab Pages**: The site is deployed to GitLab Pages, a hosting service for static websites.

## Getting Started

The website configuration can be found in the `_quarto.yml`. This provides website options as well as defaults for HTML documents created within the site.

To preview the website you can run:

```shell
quarto preview
```

To render, but not preview a website you can run:

```shell
quarto render 
```

## Deploying the Site

For more information on how to configure a custom domain for your own deployment, checkout the GitLab guide to [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/).

### robots.txt

To manage how search engines and web crawlers interact with the site, a [robots.txt](robots.txt) file is included. This file specifies which bots are disallowed from accessing your site and where the sitemap can be found. It's important to note that while well-established companies such as Google and OpenAI will typically adhere to `robots.txt` protocols, some poorly designed AI bots will ignore your `robots.txt` completely.

#### Applying the robots.txt

To apply the `robots.txt` to your Quarto website ensure the robots.txt file is placed in the root of your directory. When you build your website it will be automatically picked up by the builder.

## Other Tools

- [xsl4quarto](https://gitlab.com/errbufferoverfl/xsl4quarto) - A Quarto post-render project script for attaching XSL files to XML.
- [obsidian-scripts](https://gitlab.com/errbufferoverfl/obsidian-scripts) - Scripts used to make my note-taking experience better.

## Common Issues

### Error: Not Found

The following error often occurs when you're trying to preview or render the Quarto site while Obsidian is open. Likely due to a plugin that is installed or something about file resolution.

```shell
ERROR: NotFound: No such file or directory (os error 2), rename '/Users/.../.../garden.errbufferoverfl.me/CODE_OF_CONDUCT.html' -> '/Users/.../.../garden.errbufferoverfl.me/_site/CODE_OF_CONDUCT.html'

NotFound: No such file or directory (os error 2), rename '/Users/.../.../garden.errbufferoverfl.me/CODE_OF_CONDUCT.html' -> '/Users/.../.../garden.errbufferoverfl.me/_site/CODE_OF_CONDUCT.html'
    at Object.renameSync (deno:runtime/js/30_fs.js:175:9)
    at renderProject (file:///Users/.../Applications/quarto/bin/quarto.js:86832:22)
    at async Command.fn (file:///Users/.../Applications/quarto/bin/quarto.js:90856:32)
    at async Command.execute (file:///Users/.../Applications/quarto/bin/quarto.js:8437:13)
    at async quarto (file:///Users/.../Applications/quarto/bin/quarto.js:127545:5)
    at async file:///Users/.../Applications/quarto/bin/quarto.js:127563:9
```

To resolve this issue:

- Close Obsidian
- Delete the `_site` directory
- Rerun the command

<!-- LICENSE -->

## License

Quarto is distributed under [GNU GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html).

All pages on garden.errbufferoverfl.me are licence under [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/). For detailed information about how content can be reused, please refer to the [deed](https://creativecommons.org/licenses/by-nc-sa/4.0/).

<!-- CONTACT -->

## Contact

For issues relating to this repository and content hosted on [https://garden.errbufferoverfl.me](https://garden.errbufferoverfl.me) please raise a [GitLab issue](https://gitlab.com/errbufferoverfl/garden-errbufferoverfl-me/-/issues) and use the provided templates to ensure your issue is promptly addressed.

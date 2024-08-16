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
  <img src="https://gitlab.com/errbufferoverfl/garden-errbufferoverfl-me/-/raw/hugo/screenshot.png" width="500"><br>
  <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a><br>
  <sub>The little experiment that could. Built with ❤︎ by
  <a href="https://twitter.com/errbufferoverfl">errbufferoverfl</a>
</div>

## Introduction

[garden.errbufferoverfl.me](https://garden.errbufferoverfl.me) is a digital garden filled to the brim with half-finished notes about society, microfarming, and sometimes security engineering. This digital garden is a space where my ideas and thoughts are cultivated and allowed to grow organically. It serves as a repository for exploring various topics and concepts, ranging from societal structures and cultural observations to practical insights on microfarming techniques and principles of security engineering.

In this garden, you will find:

- **Society**: Musings and reflections on social structures, human interactions, cultural trends, and more.
- **Microfarming**: Practical notes and experiments related to small-scale farming, sustainable agriculture, and innovative farming techniques.
- **Security Engineering**: Occasional deep dives into cybersecurity principles, practices, and emerging threats.

The garden is a work in progress, with each note representing a step in the journey of understanding and discovery. Whether you are looking for inspiration, knowledge, or a fresh perspective.

## Table of Contents

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deploying the Site](#deploying-the-site)
  - [Setting a Content Security Policy (CSP)](#setting-a-content-security-policy-csp)
    - [CSP Directive Details](#csp-directive-details)
    - [Directive Breakdown](#directive-breakdown)
    - [Applying the CSP](#applying-the-csp)
  - [robots.txt](#robotstxt)
    - [robots.txt File](#robotstxt-file)
    - [Applying the robots.txt](#applying-the-robotstxt)
- [Progress Quarto Extension](#progress-quarto-extension)
  - [Installation](#installation)
  - [Usage](#usage)
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

The website configuration can be found in the `_quarto.yml`, and `_quarto.yml.local`/. This provides website options as well as defaults for HTML documents created within the site.

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

### Setting a Content Security Policy (CSP)

A Content Security Policy (CSP) has been implemented on `garden.errbufferoverfl.me`. This is achieved by including a custom [csp.html](csp.html) file in the website header.

The [csp.html](csp.html) file is included in the Quarto website by specifying it in the _quarto.yml configuration file as follows:

```yaml
include-in-header: "csp.html"
```

#### CSP Directive Details

The [csp.html](csp.html) file contains the following meta tag to define the Content Security Policy:

```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self' https://garden.errbufferoverfl.me localhost:8086 'unsafe-inline'; 
               script-src 'self' https://cdn.jsdelivr.net/npm/mathjax@3/es5/ https://polyfill.io/v3/polyfill.min.js 'unsafe-inline'; 
               style-src 'self' https://fonts.googleapis.com/css2/ 'unsafe-inline'; 
               img-src 'self' data:; 
               font-src data: https://garden.errbufferoverfl.me https://fonts.gstatic.com/s/lato/v24/ https://cdn.jsdelivr.net/npm/mathjax@3/es5/ localhost:8086; 
               connect-src 'self' ws://localhost:8086 https://api.simplesvg.com/simple-icons.json https://api.iconify.design/simple-icons.json?icons=gitlab; 
               media-src 'self' localhost:8086; 
               object-src 'none'; 
               prefetch-src https://garden.errbufferoverfl.me; 
               child-src 'none'; 
               frame-src 'none'; 
               worker-src 'none'; 
               form-action 'none'; 
               upgrade-insecure-requests; 
               disown-opener; 
               base-uri 'self'; 
               manifest-src 'self'">
```

#### Directive Breakdown

- **default-src**: Specifies the default policy for fetching resources such as scripts, styles, and images. Here, only the site's own domain, a specified remote domain, localhost, and inline content are allowed.
- **script-src**: Specifies valid sources for JavaScript. This includes the site's own domain, a CDN for MathJax and polyfills, and inline scripts.
- **style-src**: Specifies valid sources for stylesheets. This includes the site's own domain, Google Fonts, and inline styles.
- **img-src**: Specifies valid sources for images. This includes the site's own domain and data URIs.
- **font-src**: Specifies valid sources for fonts. This includes data URIs, the site's own domain, Google Fonts, and the MathJax CDN.
- **connect-src**: Specifies valid sources for `fetch`, `XHR`, WebSocket, and EventSource connections. This includes the site's own domain, localhost WebSocket, and specific API endpoints for SVG icons.
- **media-src**: Specifies valid sources for media files such as audio and video. This includes the site's own domain and localhost.
- **object-src**: Disallows the use of `<object>`, `<embed>`, and `<applet>` elements.
- **prefetch-src**: Specifies valid sources to prefetch. This includes the site's own domain.
- **child-src, frame-src, worker-src**: Disallows the use of child browsing contexts (like `<iframe>`), frames, workers.
- **form-action**: Restricts the URLs which can be used as the action of HTML forms to the site's own domain.
- **upgrade-insecure-requests**: Instructs the browser to upgrade insecure HTTP requests to HTTPS.
- **disown-opener**: Ensures that a window opened from this document does not have access to the originating window.
- **base-uri**: Restricts the URLs which can be used in a document's `<base>` element to the site's own domain.
- **manifest-src**: Specifies valid sources for the web app manifest.

#### Applying the CSP

To apply the CSP to your Quarto website:

1. Ensure the `csp.html` file is placed in the root directory of your Quarto project.
2. Add the `include-in-header` directive to your `_quarto.yml` file as shown above.
3. Customize the CSP directives as needed for your specific use case.

### robots.txt

To manage how search engines and web crawlers interact with the site, a [robots.txt](robots.txt) file is included. This file specifies which bots are disallowed from accessing your site and where the sitemap can be found. It's important to note that while well-established companies such as Google and OpenAI will typically adhere to `robots.txt` protocols, some poorly designed AI bots will ignore your `robots.txt` completely.

#### robots.txt File

The robots.txt file contains directives that instruct web crawlers on how they should crawl the pages of your website. This file is included in your Quarto website to restrict access to certain user agents and to provide the location of the sitemap.

#### Applying the robots.txt

To apply the `robots.txt` to your Quarto website ensure the robots.txt file is placed in the root of your directory. When you build your website it will be automatically picked up by the builder.

## Progress Quarto Extension

The Quarto Progress Plugin is a custom shortcode designed to display a reading progress bar in your Quarto documents. This shortcode uses document metadata to determine the total number of pages and the current page, dynamically generating an HTML progress bar that visually indicates the reader's progress.

The raw Lua code can be found in the [Progress](Progress) directory of this repository.

### Installation

By default Progress should be installed under the [_extensions](_extensions) directory. However, if for some reason it's not you can reinstall it by running:

```shell
quarto add Progress
```

### Usage

To use the Quarto Progress Plugin in your `.qmd` or `.md` files, you need to define the pages and page metadata at the top of your document. Then, you can use the shortcode to display the progress bar.

1. **Define Metadata**

   Add metadata for the total number of pages and the current page at the top of your Quarto document.

   ```markdown
   ---
   title: "Your Document Title"
   pages: 100
   page: 25
   ---
   ```

2. **Insert Shortcode**

   Insert the `progress` shortcode in your document where you want the progress bar to appear.

   ```markdown
    {{< progress >}}
   ```

   The shortcode will automatically generate the following HTML:

   ```html
   <progress max="100" value="25"></progress>
   <p>Progress: 25/100 pages</p>
   ```
   
## Other Tools

- [xsl4quarto](https://gitlab.com/errbufferoverfl/xsl4quarto) - A Quarto post-render project script for attaching XSL files to XML.
- [quarto-progress-bar](https://gitlab.com/errbufferoverfl/quarto-progress-bar) - A Lua script designed for Quarto to display the reading progress of a document as a progress bar in HTML format.
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

All pages on garden.errbufferoverfl.me are labeled with the license for the document under the `#reuse` anchor. For detailed information about how content can be reused, please refer to the licensing information provided there.

<!-- CONTACT -->

## Contact

For issues relating to this repository and content hosted on [https://garden.errbufferoverfl.me](https://garden.errbufferoverfl.me) please raise a [GitLab issue](https://gitlab.com/errbufferoverfl/garden-errbufferoverfl-me/-/issues) and use the provided templates to ensure your issue is promptly addressed.

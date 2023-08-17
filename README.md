<h1 align="center">garden.errbufferoverfl.me</h1>

<div align="center">
  💻🔥🪤
</div>
<div align="center">
  <strong>A second brain and digital garden built on <a href="https://quartz.jzhao.xyz/">Quartz.</a></strong>
</div>
<div align="center">
  Digital garden, second brain
</div>
<br />

<div align="center">
  <!-- Stability -->
  <!-- Build Status -->
<a href="https://github.com/errbufferoverfl/garden.errbufferoverfl.me/actions/workflows/deploy.yml"><img alt="GitHub Workflow Status for Hugo Build" src="https://img.shields.io/github/actions/workflow/status/errbufferoverfl/garden.errbufferoverfl.me/deploy.yml?label=Hugo%20Build&style=for-the-badge"></a>

<a href="https://github.com/errbufferoverfl/garden.errbufferoverfl.me/actions/workflows/distributed-press-publish.yml"><img alt="GitHub Workflow Status for Hugo Build" src="https://img.shields.io/github/actions/workflow/status/errbufferoverfl/garden.errbufferoverfl.me/distributed-press-publish.yml?label=Distributed%20Press%20Build&style=for-the-badge"></a>
  <!-- Test Coverage --> 
  <!-- Downloads -->
  <!-- Standard -->
</div>

<div align="center">
  <h3>
    <a href="https://garden.errbufferoverfl.me">
      Website
    </a>
    <span> | </span>
    <a href="https://garden.errbufferoverfl.me">
      Handbook
    </a>
  </h3>
</div>

<div align="center">
  <img src="https://github.com/errbufferoverfl/garden.errbufferoverfl.me/blob/dae58c0d36c388d5132bb5a45c37987ae3814033/screenshot.png" width="500"><br>
  <sub>The little experiment that could. Built with ❤︎ by
  <a href="https://twitter.com/errbufferoverfl">errbufferoverfl</a>
</div>

## Introduction

garden.errbufferoverfl.me is my second brain and mind garden. It's an alternative to a traditional blog and used to 
explore a variety of indieweb, distributed publishing techniques and lower-tech online publishing. 

## Table of contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [License](#license)
- [Thank you!](#thank-you)

## Tech Stack 

Here's a brief high-level overview of the tech stack garden.errbufferoverfl.me uses:

- Hugo is used for static website generation.
- Quartz for mind-garden theming, and `hugo-obsidian` to scrape Obsidian vault for links for easy consumption by Hugo.
- Content is managed using [Obsidian](https://obsidian.md/).
- Deployment to Hypercore & IPFS.

## Getting Started

### Local Development

<!-- GETTING STARTED -->

**Install Prerequisites**

Install the extended version of Hugo on [your operating system of choice](https://gohugo.io/installation/).

**Clone the Repository**

git clone this repository to your local computer:

```shell
git clone https://github.com/errbufferoverfl/quartz
```

**Setup the Editor**

All content in my garden can found in the `/content` folder. To make edits, you can open any of the files and make changes
directly and save it. I recommend using [Obsidian](https://obsidian.md/) when working in the garden. For more information
on how to setup Obsidian for Quartz checkout [this guide by Jacky Zhao](https://quartz.jzhao.xyz/notes/obsidian/).

**Preview Changes Locally**

This step is helpful because it will show you the local backlinks and interactive graph so you can ensure everything is
rendered correctly.

If you’d like to preview what your Quartz site looks like before deploying it to the Internet you will need to install
`hugo-obsidian`.

```shell
go install github.com/jackyzha0/hugo-obsidian@latest
```

**Note:** If you are running into an error saying that command not found: `hugo-obsidian`, make sure you set your 
`GOPATH` correctly

Once you have installed `hugo-obsidian`, navigate to your Quartz directory:

```shell
cd <location-of-your-local-quartz>
```

Start the local Hugo server using the custom [Makefile](Makefile:

```shell
make serve
```

View the local site at http://localhost:1313/

### Publishing Content

This site is deployed via Github actions, the workflows are defined in [.github/workflows/deploy.yml]. To update the website,
`git add` and `git commit` as normal. This will trigger a new build and deployment.

For information on how to setup Github workflows for Quartz, checkout [this guide by Jacky Zhao](https://quartz.jzhao.xyz/notes/hosting/)

### DNS Configuration

For more information on how to configure a custom domain for your own deployment, checkout the GitHub guide to ["Configuring a custom domain for your GitHub Pages site"](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

```text
CNAME <subdomain> <username>.github.io
```

### Directory Structure Explained

Some notes to myself about Hugo file structure to contextualize things:
- assets directory stores all the files which need be processed by Hugo Pipes. Only the files whose `.Permalink` or`.RelPermalink` are used will be published to the public directory.
- data directory is used to store configuration files that can be used by Hugo when generating your website. All the website customization is handed by the `config.yaml` file, while formatting of the interactive graph is done in `graphConfig.yaml`.
- `config.toml` should only be used for configuring Hugo.

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](LICENSE.txt) for more information.

<!-- CONTACT -->

## Contact

For issues relating to this repository and content hosted on https://garden.errbufferoverfl.me contact:

errbufferoverfl - [@errbufferoverfl](https://twitter.com/errbufferoverfl)

For issues relating to the Quartz theme, please refer to the [Quartz repository](https://github.com/jackyzha0/quartz)

<!-- THANK YOU -->

## Thank You

* [Jacky Zhao](https://github.com/jackyzha0/) - for all the amazing work to create this theme.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/errbufferoverfl/garden.errbufferoverfl.me.svg?style=flat-square

[contributors-url]: https://github.com/errbufferoverfl/garden.errbufferoverfl.me/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/errbufferoverfl/garden.errbufferoverfl.me.svg?style=flat-square

[forks-url]: https://github.com/errbufferoverfl/garden.errbufferoverfl.me/network/members

[stars-shield]: https://img.shields.io/github/stars/errbufferoverfl/garden.errbufferoverfl.me.svg?style=flat-square

[stars-url]: https://github.com/errbufferoverfl/garden.errbufferoverfl.me/stargazers

[license-shield]: https://img.shields.io/github/license/errbufferoverfl/garden.errbufferoverfl.me.svg?style=flat-square

[license-url]: https://github.com/errbufferoverfl/garden.errbufferoverfl.me/blob/master/LICENSE.txt

[product-screenshot]: screenshot.png

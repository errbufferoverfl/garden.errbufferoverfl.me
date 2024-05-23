# Quarto Progress Plugin

## Overview

The Quarto Progress Plugin is a Lua script designed to display the reading progress of a document as a progress bar in HTML format. This plugin extracts metadata about the total number of pages and the current page number to dynamically generate and display a progress bar within your Quarto document.

## Features

- Automatically displays a progress bar indicating the reading progress.
- Uses document metadata to determine the total number of pages and the current page.
- Displays a textual representation of the progress below the progress bar.

## Prerequisites

- [Quarto](https://quarto.org) installed and set up in your environment.
- Basic understanding of how to use Quarto with Lua filters.

## Installation

1. Save the Lua script as `progress.lua` in your Quarto project directory.

    ```lua
    return {
      ['progress'] = function(args, kwargs, meta)
        local pages = pandoc.utils.stringify(meta["pages"])
        if (pages == nil or pages == "") 
        then
          pages = 0
        end

        local page = pandoc.utils.stringify(meta["page"])
        if (page == nil or page == "") 
        then
          page = 0
        end

        return pandoc.RawBlock("html", "<progress max=" .. pages .. " value=" .. page .."></progress><p>Progress: " .. page .. "/" .. pages .. " pages<p>")
      end
    }
    ```

2. In your Quarto project, include the Lua filter by adding it to your `_quarto.yml` file:

    ```yaml
    filters:
      - progress.lua
    ```

## Usage

To use the progress plugin, you need to define the `pages` and `page` metadata in your Quarto document. Here is an example of how to include this metadata at the top of your document:

```qmd
---
title: "Progress Example"
pages: 100
page: 25
---

# Introduction

{{< progress >}}
```

- `pages`: Total number of pages in the document.
- `page`: Current page number.

When you render the document, the plugin will automatically generate a progress bar and display it, indicating the progress through the document.

### Example

Given the above metadata, the progress bar will display as follows:

```html
<progress max="100" value="25"></progress>
<p>Progress: 25/100 pages<p>
```

## Customization

You can customize the appearance of the progress bar by modifying the HTML output in the Lua script. For instance, you can add classes or styles to the `<progress>` and `<p>` elements to better integrate with your site's design.

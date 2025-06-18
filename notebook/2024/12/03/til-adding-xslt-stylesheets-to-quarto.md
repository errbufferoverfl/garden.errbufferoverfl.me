---
title: Adding XSLT Stylesheets to Quarto
subtitle: Today I Learnt
author:
  - errbufferoverfl
date: 2024-12-03T11:21:57+10:30
date-modified: 2025-06-18T15:01:08+09:30
categories:
  - Quarto
  - Today I Learnt
series: Today I Learnt
---

For the past year I've been using Quarto as my static website generator, it has great support for Jupyter notebooks and rendering dynamic content in blog posts.

However, like most tools, it has limitations, and one of them is the lack of built-in support for attaching XSL stylesheets to XML files such as RSS feeds or sitemaps. Today, I’ll share how I addressed this in my own blog setup and why it’s useful.

## What is XSL and Why is it Handy?

XSL (Extensible Stylesheet Language) is a set of technologies designed to transform and style XML documents. Among its components, the one most relevant here is **XSLT (XSL Transformations)**. XSLT allows you to define how XML content should be displayed or converted into other formats, such as HTML.

Let’s be honest: XML doesn’t have the best reputation. It’s often seen as verbose, clunky, and difficult to work with, and I can’t say I disagree. But XSL is one of the rare features that makes XML not completely shit to work with (at least as a website maintainer).

Here’s why: while XML excels as a machine-readable format, it’s terrible for humans to look at. XSL bridges that gap by transforming raw XML into a styled, readable format when viewed in a browser. Instead of a wall of undecipherable tags, you get clean, structured content.

This has practical benefits, too:

- Styled XML makes it simpler to spot errors or validate data structures during development. For instance, while working on my RSS feed, XSL helped me identify formatting issues that not only improved how the feed looked in browsers but also ensured better parsing in RSS readers.
- When someone opens your sitemap or RSS feed in a browser, they’ll see a neatly formatted and user-friendly view instead of raw XML, which can be overwhelming and unhelpful.

To be honest it’s probably the only tool that redeems XML.

## Adding XSL to Quarto

Out of the box, Quarto doesn’t provide a way to attach XSL files to XML outputs like `sitemap.xml` or `rss.xml`. This means you’re left with raw XML, which is fine for search engines and feed readers but not ideal for browsers or casual inspection.

I wanted a way to automatically attach an XSL stylesheet to my Quarto-generated XML files during the build process. However:

- Quarto doesn’t natively support adding XSL processing instructions to XML files.
- Manually editing XML files after every build is tedious.

## A Simple Script to Automate XSL Attachment

To solve this, I wrote a post-render Python script that attaches an XSL stylesheet to specific XML files in my Quarto output.

It works by scanning the `public` directory, or any other output directory you specify, for XML files. It then checks each XML file to determine whether it already includes an XSL processing instruction. If the file doesn't contain the instruction, the script inserts it immediately after the XML declaration (`<?xml version="1.0" encoding="UTF-8"?>`).

Here’s the script:

```python
import os
import glob

def attach_xsl_to_xml(xml_file_path, xsl_file_name):
    """
    Attach an XSL file to the XML file if it's not already attached.
    """
    with open(xml_file_path, 'r', encoding='utf-8') as file:
        xml_content = file.read()

    if f'<?xml-stylesheet type="text/xsl" href="{xsl_file_name}"?>' in xml_content:
        print(f'Skipping {xml_file_path} as it already has the XSL processing instruction.')
        return

    xsl_instruction = f'<?xml-stylesheet type="text/xsl" href="{xsl_file_name}"?>\n'
    modified_xml_content = xml_content.replace(
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<?xml version="1.0" encoding="UTF-8"?>\n{xsl_instruction}',
        1
    )

    with open(xml_file_path, 'w', encoding='utf-8') as file:
        file.write(modified_xml_content)
    print(f'Attached {xsl_file_name} to {xml_file_path}')

def main():
    output_dir = 'public'  # Adjust if needed
    xsl_mapping = {
        'sitemap.xml': 'assets/sitemap.xsl',
        'rss.xml': 'assets/rss.xsl',
    }

    xml_files = glob.glob(os.path.join(output_dir, '*.xml'))

    for xml_file in xml_files:
        file_name = os.path.basename(xml_file)
        if file_name in xsl_mapping:
            attach_xsl_to_xml(xml_file, xsl_mapping[file_name])

if __name__ == '__main__':
    main()
```

You can also download it directly from my GitLab repository: [errbufferoverfl/xsl4quarto](https://gitlab.com/errbufferoverfl/xsl4quarto/).

While it's a small change, I think it makes a big difference to how users experience sitemaps and RSS feeds, especially the less technically inclined.

It also allows you to make you sitemap and RSS feed feel more cohesive with the rest of your blog.

There is an open issue with [Quarto](https://github.com/quarto-dev/quarto-cli/issues/4800) to add official support for this feature. While it would be a neat addition, it’s definitely more of a nice-to-have than a core functionality, making it understandable that it hasn’t been prioritized.

In the meantime, I've found this workaround provides enough flexibility to improving the look and feel of XML outputs. Until Quarto introduces native support, this approach works perfectly for those who want a little extra polish.

Happy styling! 🚀

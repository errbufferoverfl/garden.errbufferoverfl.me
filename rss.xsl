<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
            <head>
                <title>
                    RSS Feed | <xsl:value-of select="/atom:feed/atom:title"/>
                </title>
                <meta charset="utf-8"/>
                <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" as="style" href="/styles/rss.css"/>
            </head>
            <body>
                <header>
                    <div class="callout-info">
                        <p>
                            <strong>This is an RSS feed</strong>. Subscribe by copying
                            the URL from the address bar into your newsreader. Visit
                            <a href="https://aboutfeeds.com">About Feeds</a>
                            to learn more and get started. It’s free.
                        </p>
                    </div>
                    <h1>
                        <svg enable-background="new 0 0 100 100" height="100px" id="Layer_1" version="1.1" viewBox="0 0 100 100" width="100px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><defs><rect height="100" id="SVGID_1_" width="100"/></defs><path
                                d="M25.4,74.568c2.18,2.178,3.506,5.132,3.514,8.421c-0.008,3.282-1.334,6.237-3.506,8.405   L25.4,91.398c-2.176,2.166-5.148,3.49-8.453,3.49c-3.301,0-6.266-1.328-8.441-3.494C6.336,89.227,5,86.275,5,82.989   c0-3.289,1.336-6.25,3.506-8.423v0.002c2.176-2.168,5.141-3.502,8.441-3.502C20.252,71.066,23.221,72.404,25.4,74.568 M25.4,74.566   v0.002h0.004L25.4,74.566z M8.506,91.398v-0.004H8.502L8.506,91.398z M5.01,35.604v17.185c11.219,0.007,21.83,4.414,29.771,12.367   c7.939,7.928,12.328,18.555,12.346,29.812h0.006V95h17.256c-0.014-16.37-6.668-31.198-17.426-41.964   C36.203,42.272,21.381,35.614,5.01,35.604 M5.041,5v17.177C45.145,22.206,77.746,54.857,77.773,95H95   c-0.012-24.811-10.096-47.288-26.393-63.596C52.305,15.101,29.842,5.011,5.041,5"/></g></svg>
                        RSS Feed Preview
                    </h1>
                    <h2>
                        <xsl:value-of select="/atom:feed/atom:title"/>
                    </h2>
                    <p>
                        <xsl:value-of select="/atom:feed/atom:description"/>
                    </p>
                    <p>
                        <a>
                            <xsl:attribute name="href">
                                <xsl:value-of select="/atom:feed/atom:link[1]/@href"/>
                            </xsl:attribute>
                            Visit Website &#x2192;
                        </a>
                    </p>
                </header>

                <main class="container">
                    <h2>Recent blog posts</h2>
                    <xsl:for-each select="/atom:feed/atom:entry">
                        <article>
                            <h3>
                                <a>
                                    <xsl:attribute name="href">
                                        <xsl:value-of select="atom:link/@href"/>
                                    </xsl:attribute>
                                    <xsl:value-of select="atom:title"/>
                                </a>
                            </h3>
                            <footer>
                                <p>Published on <xsl:value-of select="substring(atom:published, 0, 11)"/></p>
                            </footer>
                        </article>
                    </xsl:for-each>
                </main>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
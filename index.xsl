<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:atom="http://www.w3.org/2005/Atom">

    <!-- Output method -->
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <!-- Template to match the root element -->
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
            <head>
                <title>
                    RSS Feed | <xsl:value-of select="title"/>
                </title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    .item {
                        margin-bottom: 20px;
                        padding-bottom: 10px;
                        border-bottom: 1px solid #ccc;
                    }
                    .item-title {
                        font-size: 18px;
                        font-weight: bold;
                    }
                    .item-description {
                        margin-top: 10px;
                    }
                    .item-category {
                        margin-top: 5px;
                        font-style: italic;
                    }
                    .item-pubdate {
                        margin-top: 5px;
                        color: gray;
                    }
                    img {
                        max-width: 100px;
                        margin-top: 10px;
                    }
                </style>
            </head>
            <body>
                <p>
                    This is an RSS feed. Visit
                    <a href="https://aboutfeeds.com">About Feeds</a>
                    to learn more and get started. It’s free.
                </p>
                <h1>
                    <xsl:value-of select="title"/>
                </h1>
                <p>
                    <xsl:value-of select="description"/>
                </p>
                <xsl:for-each select="item">
                    <div class="item">
                        <div class="item-title">
                            <a href="{link}">
                                <xsl:value-of select="title"/>
                            </a>
                        </div>
                        <div class="item-creator">
                            <xsl:text>Author: </xsl:text>
                            <xsl:value-of select="dc:creator"/>
                        </div>
                        <div class="item-description">
                            <xsl:value-of select="description"/>
                        </div>
                        <div class="item-category">
                            <xsl:for-each select="category">
                                <xsl:value-of select="."/>
                                <xsl:if test="position() != last()">, </xsl:if>
                            </xsl:for-each>
                        </div>
                        <div class="item-pubdate">
                            <xsl:value-of select="pubDate"/>
                        </div>
                        <xsl:if test="media:content">
                            <img src="{media:content/@url}" alt="Media content"/>
                        </xsl:if>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>

<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>Sitemap | garden.errbufferoverfl.me</title>
        <meta charset="utf-8"/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="/xsl.css"/>
      </head>
      <body>
        <main class="layout-content">
          <div class="py-7">
            <h1 class="flex items-start">
              Sitemap
            </h1>
            <xsl:for-each select="/sitemap:urlset/sitemap:url">
              <div class="pb-7">
                <div class="text-4 font-bold">
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:attribute>
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </div>
                <div class="text-2 text-offset">
                  Last updated:
                  <xsl:value-of select="substring(sitemap:lastmod, 0, 11)" />
                </div>
              </div>
            </xsl:for-each>
          </div>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

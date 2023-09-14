import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "Ko-Fi": "https://ko-fi/errbufferoverfl",
      "Mastodon": "https://genericsocialmediapage.com/@errbufferoverfl",
      "Art Mastodon": "https://mastodon.art/@errbufferoverfl",
      "GitHub": "https://github.com/errbufferoverfl",
      "Twitter": "https://twitter.com/errbufferoverfl"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Notes",
        limit: 2,
        filter: (f) => f.slug!.startsWith("the-notebook/"),
        linkToMore: "the-notebook/" as SimpleSlug,
      }),
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Writing",
        limit: 2,
        filter: (f) =>
          f.slug!.startsWith("posts/") && f.slug! !== "posts/" && !f.frontmatter?.noindex,
        linkToMore: "posts/" as SimpleSlug,
      })),
  ],
  right: [Component.DesktopOnly(Component.TableOfContents()), Component.Graph(), Component.Backlinks()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}

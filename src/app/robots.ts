import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://magmastudio.pro";
  const wwwBaseUrl = "https://www.magmastudio.pro";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/studio/",
          "/admin/",
          "/private/",
          "/*.json$",
          "/*.xml$",
          "/_next/",
          "/static/",
          "/images/raw/",
          "/node_modules/",
          "/vendor/",
          "/wp-admin/",
          "/wp-includes/",
          "/wp-content/plugins/",
          "/wp-content/cache/",
          "/wp-content/themes/",
          "/trackback/",
          "/comments/",
          "/category/*",
          "/tag/*",
          "/author/*",
          "/date/*",
          "/search/*",
          "/feed/*",
          "/rss/*",
          "/atom/*",
          "/sitemap.xml",
          "/robots.txt",
        ],
      },
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
      {
        userAgent: "Googlebot-Image",
        disallow: ["/images/raw/"],
        allow: ["/images/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl || wwwBaseUrl,
  };
}

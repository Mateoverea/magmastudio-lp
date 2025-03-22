import { MetadataRoute } from "next";

const pages = [
  "",
  "/blog",
  "/legals/terms",
  "/legals/privacy-policy",
  "/legals/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://magmastudio.pro";
  const wwwBaseUrl = "https://www.magmastudio.pro";

  const staticPages = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const staticPagesWWW = pages.map((page) => ({
    url: `${wwwBaseUrl}${page}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  // Unir las URL normales y las www
  return [...staticPages, ...staticPagesWWW];
}

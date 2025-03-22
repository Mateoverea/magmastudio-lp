import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://magmastudio.pro";
  const wwwBaseUrl = "https://www.magmastudio.pro";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/studio/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl || wwwBaseUrl,
  };
}

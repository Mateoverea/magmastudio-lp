import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://studioix.agency";
  const wwwBaseUrl = "https://www.studioix.agency";
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

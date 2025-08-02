import { MetadataRoute } from "next";

const pages = [
  {
    path: "",
    priority: 1.0,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/blog",
    priority: 0.9,
    changeFrequency: "daily" as const,
  },
  {
    path: "/projects",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/services",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/contact",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/legals/terms",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/legals/privacy-policy",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/legals/cookie-policy",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://magmastudio.pro";
  
  // ✅ Solo generar URLs canónicas (sin duplicados www)
  // Esto reduce de 16 URLs duplicadas a 8 URLs únicas
  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

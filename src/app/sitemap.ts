import { MetadataRoute } from "next";

const pages = [
  {
    path: "",
    priority: 1.0,
    changeFrequency: "weekly" as const,
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

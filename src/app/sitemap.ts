import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/config";

// Necessário para static export (output: "export")
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tipdash.com.au",
      lastModified: new Date(),
    },
    {
      url: "https://tipdash.com.au/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://tipdash.com.au/terms",
      lastModified: new Date(),
    },
  ];
}
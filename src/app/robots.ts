import { MetadataRoute } from "next";
import { createClient } from "next-sanity";
import { groq } from "next-sanity";

const client = createClient({
  projectId: "01qv31nl",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export default async function robots(): Promise<MetadataRoute.Robots> {
  const query = groq`{
    "siteSettings": *[_type == "siteSettings"][0]
  }`;

  const data = await client.fetch(query);
  const baseUrl = data?.siteSettings?.baseUrl || "https://barnyard.ae";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

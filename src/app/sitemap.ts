import { MetadataRoute } from 'next';
import { createClient } from 'next-sanity';
import { groq } from 'next-sanity';

const client = createClient({
  projectId: "01qv31nl",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const query = groq`{
    "siteSettings": *[_type == "siteSettings"][0],
    "pages": {
      "homepage": *[_type == "homepage"][0] { seo },
      "about": *[_type == "aboutPage"][0] { seo },
      "services": *[_type == "servicesPage"][0] { seo },
      "projects": *[_type == "projectsPage"][0] { seo }
    },
    "projects": *[_type == "project"] { "slug": slug.current, seo },
    "services_list": *[_type == "service"] { "slug": slug.current, seo }
  }`;

  const data = await client.fetch(query);
  const baseUrl = data.siteSettings?.baseUrl || 'https://barnyard.ae';

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static Pages
  const staticPages = [
    { url: '', seo: data.pages.homepage?.seo },
    { url: '/about', seo: data.pages.about?.seo },
    { url: '/services', seo: data.pages.services?.seo },
    { url: '/projects', seo: data.pages.projects?.seo },
    { url: '/contact', seo: {} }, // Contact usually indexed
  ];

  staticPages.forEach((page) => {
    if (!page.seo?.noIndex) {
      sitemapEntries.push({
        url: `${baseUrl}${page.url}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page.url === '' ? 1 : 0.8,
      });
    }
  });

  // Dynamic Projects
  data.projects.forEach((project: any) => {
    if (!project.seo?.noIndex && project.slug) {
      sitemapEntries.push({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  });

  return sitemapEntries;
}

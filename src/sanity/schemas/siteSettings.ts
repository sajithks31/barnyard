import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
    }),
    defineField({
      name: "googleSearchConsole",
      title: "Google Search Console Verification",
      type: "string",
      description: "Verification code for GSC.",
    }),
    defineField({
      name: "globalSchema",
      title: "Global Schema Markup",
      type: "text",
      rows: 5,
      description: "JSON-LD schema markup that applies to the entire site.",
    }),
    defineField({
      name: "baseUrl",
      title: "Base URL",
      type: "url",
      description: "The live URL of the site (e.g., https://barnyard.ae). Used for sitemaps.",
    }),
  ],
});

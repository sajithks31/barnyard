import { defineType, defineField } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO Settings",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "SEO Title",
      type: "string",
      description: "Title used for search engines and browser tabs.",
      validation: (Rule) => Rule.max(70).warning("Longer titles may be truncated in search results."),
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "A brief summary of the page for search results.",
      validation: (Rule) => Rule.max(160).warning("Longer descriptions may be truncated in search results."),
    }),
    defineField({
      name: "canonical",
      title: "Canonical URL",
      type: "url",
      description: "The preferred URL for this page (helps avoid duplicate content issues).",
    }),
    defineField({
      name: "ogImage",
      title: "OG Image",
      type: "image",
      description: "Social media sharing image.",
    }),
    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
      description: "Hide this page from search engines.",
    }),
    defineField({
      name: "schemaMarkup",
      title: "Page Schema Markup",
      type: "text",
      rows: 5,
      description: "JSON-LD schema markup for this specific page.",
    }),
  ],
});

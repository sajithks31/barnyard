import { defineType, defineField } from "sanity";

export const projectsPage = defineType({
  name: "projectsPage",
  title: "Projects Page Settings",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title Lines",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["FEATURED", "PROJECTS"],
      description: "The main big heading words for the projects page",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});

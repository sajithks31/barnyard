import { defineType, defineField } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services Page Settings",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title Lines",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["FROM", "CONCEPT TO", "FINAL FRAME"],
      description: "The main big heading words",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});

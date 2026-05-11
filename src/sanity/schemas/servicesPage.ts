import { defineType, defineField } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services Page Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
      description: "The main big heading (e.g. FROM CONCEPT TO FINAL FRAME)",
    }),
    defineField({
      name: "subtitle",
      title: "Hero Subtitle",
      type: "string",
      description: "Optional smaller text above or below the title",
    }),
  ],
});

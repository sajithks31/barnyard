import { defineType, defineField } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "array",
      of: [{ type: "string" }],
      description: "Lines of the big title (e.g. ABOUT, BARNYARD, PRODUCTIONS)",
    }),
    defineField({
      name: "aboutBadge",
      title: "About Section Badge",
      type: "string",
      initialValue: "ABOUT BARNYARD",
    }),
    defineField({
      name: "marqueeImages",
      title: "Marquee Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "bannerHeadline",
      title: "Banner Headline",
      type: "array",
      of: [{ type: "string" }],
      description: "The big text in the video banner section",
    }),
    defineField({
      name: "bannerParagraph",
      title: "Banner Paragraph",
      type: "text",
    }),
    defineField({
      name: "bannerVideo",
      title: "Banner Video",
      type: "file",
      options: { accept: "video/*" },
    }),
    defineField({
      name: "visionMission",
      title: "Vision & Mission",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "philosophyTitle",
      title: "Philosophy Section Title",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["OUR", "CREATIVE", "PHILOSOPHY"],
    }),
    defineField({
      name: "philosophyItems",
      title: "Philosophy Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID (e.g. 01)", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "content", title: "Content", type: "text" },
          ],
        },
      ],
    }),
  ],
});

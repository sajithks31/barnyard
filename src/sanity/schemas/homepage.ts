import { defineType, defineField } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "heroDesktop",
      title: "Hero Background (Desktop)",
      type: "object",
      fields: [
        { name: "type", type: "string", title: "Media Type", options: { list: ["video", "image"] }, initialValue: "video" },
        { name: "video", type: "file", title: "Video File", hidden: ({ parent }) => parent?.type !== "video" },
        { name: "image", type: "image", title: "Image File", hidden: ({ parent }) => parent?.type !== "image" },
      ],
      description: "Background media for desktop screens.",
    }),
    defineField({
      name: "heroMobile",
      title: "Hero Background (Mobile)",
      type: "object",
      fields: [
        { name: "type", type: "string", title: "Media Type", options: { list: ["video", "image"] }, initialValue: "video" },
        { name: "video", type: "file", title: "Video File", hidden: ({ parent }) => parent?.type !== "video" },
        { name: "image", type: "image", title: "Image File", hidden: ({ parent }) => parent?.type !== "image" },
      ],
      description: "Background media for mobile screens. If left empty, desktop media will be used.",
    }),
    defineField({
      name: "heroTitleLines",
      title: "Hero Title Lines",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["CREATING", "STORIES+", "THAT MOVE"],
      description: "The big headline words like 'CREATING', 'STORIES+', 'THAT MOVE'",
    }),
    defineField({
      name: "heroButtons",
      title: "Hero Buttons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "url", type: "string", title: "URL (e.g. #services)" },
          ],
        },
      ],
      initialValue: [
        { label: "OUR SERVICES", url: "#services" },
        { label: "OUR WORK", url: "/projects" },
      ],
    }),
    defineField({
      name: "introHeadline",
      title: "Intro Headline",
      type: "text",
    }),
    defineField({
      name: "introSubheadline",
      title: "Intro Subheadline",
      type: "string",
    }),
    defineField({
      name: "introParagraph",
      title: "Intro Paragraph",
      type: "text",
    }),
  ],
});

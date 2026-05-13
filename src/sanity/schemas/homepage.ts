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
        { _key: "button1", label: "OUR SERVICES", url: "#services" },
        { _key: "button2", label: "OUR WORK", url: "/projects" },
      ],
    }),
    defineField({
      name: "introHeadline",
      title: "Intro Headline",
      type: "text",
      initialValue: "POWERING BRANDS WITH\nCREATIVE THINKING &\nSEAMLESS EXECUTION",
    }),
    defineField({
      name: "introSubheadline",
      title: "Intro Subheadline",
      type: "string",
      initialValue: "ABOUT US",
    }),
    defineField({
      name: "introParagraph",
      title: "Intro Paragraph",
      type: "text",
      initialValue: "Barnyard Productions is a creative-led production studio crafting cinematic video, photography, and visual content for modern brands. From first idea to final frame, we combine creative thinking with seamless execution—bringing stories to life in ways that feel authentic, impactful, and impossible to ignore.",
    }),
    defineField({
      name: "introButtonLabel",
      title: "Intro Button Label",
      type: "string",
      initialValue: "READ MORE",
    }),
    defineField({
      name: "introButtonUrl",
      title: "Intro Button URL",
      type: "string",
      initialValue: "/about",
    }),
    defineField({
      name: "servicesSectionBadge",
      title: "Services Section Badge",
      type: "string",
      initialValue: "OUR SERVICES",
    }),
    defineField({
      name: "servicesSectionTitle",
      title: "Services Section Title",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["FROM CONCEPT", "TO FINAL FRAME"],
    }),
    defineField({
      name: "projectsSectionBadge",
      title: "Projects Section Badge",
      type: "string",
      initialValue: "OUR WORK",
    }),
    defineField({
      name: "projectsSectionTitle",
      title: "Projects Section Title",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["CREATIVITY", "IN ACTION"],
    }),
    defineField({
      name: "projectsSectionButtonLabel",
      title: "Projects Section Button Label",
      type: "string",
      initialValue: "VIEW PORTFOLIO",
    }),
    defineField({
      name: "projectsSectionButtonUrl",
      title: "Projects Section Button URL",
      type: "string",
      initialValue: "/projects",
    }),
  ],
});

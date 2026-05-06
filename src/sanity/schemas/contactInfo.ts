import { defineType, defineField } from "sanity";

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Contact Info & Settings",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phonePrimary",
      title: "Primary Phone",
      type: "string",
    }),
    defineField({
      name: "phoneSecondary",
      title: "Secondary Phone (Mobile)",
      type: "string",
    }),
    defineField({
      name: "addressLines",
      title: "Address Lines",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Platform Name", type: "string" },
            { name: "url", title: "URL", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "navbarCta",
      title: "Navbar CTA Button",
      type: "object",
      fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "url", title: "URL", type: "string" },
      ],
    }),
    defineField({
      name: "footerCta",
      title: "Footer CTA Button",
      type: "object",
      fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "url", title: "URL", type: "string" },
      ],
    }),
    defineField({
      name: "termsUrl",
      title: "Terms URL",
      type: "string",
    }),
    defineField({
      name: "privacyUrl",
      title: "Privacy URL",
      type: "string",
    }),
    defineField({
      name: "footerCopyright",
      title: "Footer Copyright Text",
      type: "string",
    }),
  ],
});

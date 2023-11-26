export default {
  name: "imageWithAlt",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    {
      name: "alt",
      title: "Alternative text",
      type: "localeString",
      description: "Important for accessibility and SEO",
      validation: (Rule) => Rule.required(),
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
};

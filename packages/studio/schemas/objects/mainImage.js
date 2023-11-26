export default {
  name: "mainImage",
  title: "Main Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    {
      name: "alt",
      title: "Alternative text",
      type: "string",
      description: "Important for accessibility and SEO",
      validation: (Rule) => Rule.required(),
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
      description: "This is shown next to the image on the frontend",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
};

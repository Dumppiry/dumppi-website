export default {
  name: "blogSettings",
  title: "Blog Settings",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "imageWithAlt",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Blog Settings",
      };
    },
  },
};

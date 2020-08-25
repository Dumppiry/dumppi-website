export default {
  name: "blogSettings",
  title: "Blog Settings",
  type: "document",
  fieldsets: [
    {
      name: "translations",
      title: "Translations",
    },
  ],
  fields: [
    {
      name: "noPostsText",
      title: "No posts text",
      type: "localeString",
      description: "Text to be shown when there are no posts in a list.",
      validation: (Rule) => Rule.required(),
      fieldset: "translations",
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

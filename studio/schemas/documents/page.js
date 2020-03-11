export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
      validation: Rule => Rule.required()
    },
    {
      name: "content",
      title: "Content",
      type: "portableText"
    }
  ],
  preview: {
    select: {
      title: "title"
    }
  }
};

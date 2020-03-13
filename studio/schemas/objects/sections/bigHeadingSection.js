export default {
  name: "bigHeadingSection",
  title: "Big Heading",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "localeHeadingPortableText"
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "localeString" }]
    }
  ]
};

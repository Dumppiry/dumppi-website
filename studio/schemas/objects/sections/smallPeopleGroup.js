export default {
  name: "smallPeopleGroup",
  title: "Small people group",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "localeHeadingPortableText"
    },
    {
      name: "people",
      title: "People",
      type: "array",
      of: [{ type: "reference", to: [{ type: "person" }] }]
    }
  ]
};

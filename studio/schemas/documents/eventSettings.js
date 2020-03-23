export default {
  name: "eventSettings",
  title: "Event Settings",
  type: "document",
  fields: [
    {
      name: "readMoreText",
      title: "Read more text",
      type: "localeString",
      validation: Rule => Rule.required()
    },
    {
      name: "defaultFutureEventsDescription",
      title: "Default Future Events Description",
      type: "localeHeadingPortableText",
      validation: Rule => Rule.required()
    }
  ]
};

export default {
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    {
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "siteDescription",
      title: "Site description",
      type: "localeText",
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      validation: Rule => Rule.required()
    }
  ]
};

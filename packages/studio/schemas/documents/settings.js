export default {
  name: "settings",
  title: "Settings",
  type: "document",
  fieldsets: [
    {
      name: "socialMedia",
      title: "Social media",
      options: {
        collapsible: true,
      },
    },
    {
      name: "translations",
      title: "Translations",
      options: {
        collapsible: true,
      },
    },
    {
      name: "placeholders",
      title: "Placeholders",
      options: {
        collapsible: true,
      },
    },
  ],
  fields: [
    {
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "siteDescription",
      title: "Site description",
      type: "localeText",
      rows: 5,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "facebookUrl",
      title: "Facebook",
      type: "url",
      fieldset: "socialMedia",
      validation: (Rule) => Rule.uri({ schemes: ["https"] }).required(),
    },
    {
      name: "instagramUrl",
      title: "Instagram",
      type: "url",
      fieldset: "socialMedia",
      validation: (Rule) => Rule.uri({ schemes: ["https"] }).required(),
    },
    {
      name: "twitterUrl",
      title: "Twitter",
      type: "url",
      fieldset: "socialMedia",
      validation: (Rule) => Rule.uri({ schemes: ["https"] }).required(),
    },
    {
      name: "linkedinUrl",
      title: "LinkedIn",
      type: "url",
      fieldset: "socialMedia",
      validation: (Rule) => Rule.uri({ schemes: ["https"] }).required(),
    },
    {
      name: "postalAddress",
      title: "Postal address",
      type: "array",
      of: [
        {
          type: "block",
          title: "Block",
          styles: [{ title: "Normal", value: "normal" }],
          marks: {
            decorators: [],
            annotations: [],
          },
          lists: [],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "contactInfoText",
      title: "Contact info",
      type: "localeString",
      fieldset: "translations",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "placeholderPersonImage",
      title: "Person placeholder image",
      type: "image",
      fieldset: "placeholders",
      validation: (Rule) => Rule.required(),
    },
  ],
};

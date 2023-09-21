export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    { name: "title", type: "localeString" },
    {
      name: "link",
      type: "array",
      of: [
        {
          type: "internalLink",
        },
        {
          type: "externalLink",
        },
      ],
      validation: (Rule) => Rule.length(1).required(),
    },
  ],
  preview: {
    select: {
      title: "title.fi",
      link: "link.0",
      reference: "link.0.page.title.fi",
    },
    prepare({ title, link, reference }) {
      let subtitle;

      switch (link._type) {
        case "internalLink":
          subtitle = `Internal link to: ${reference}`;
          break;

        case "externalLink":
          subtitle = `External link to: ${link.url}`;
          break;

        default:
          break;
      }

      return {
        title,
        subtitle,
      };
    },
  },
};

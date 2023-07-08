import { FiMessageSquare } from "react-icons/fi";

export default {
  name: "contactForm",
  title: "Contact Form",
  type: "document",
  icon: FiMessageSquare,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "submitText",
      title: "Submit text",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    },
    {
      // FIXME Slack is not used anymore. This should probably be deleted.
      name: "slackChannel",
      title: "Slack Channel",
      description:
        "NOT IMPLEMENTED YET! Choose where to post the message. E.g. #channel or @user.",
      type: "string",
      validation: (Rule) =>
        Rule.custom((channel) => {
          return !channel ||
            channel?.startsWith("#") ||
            channel?.startsWith("@")
            ? true
            : "Specify a channel or user correctly";
        }),
    },
    {
      name: "successMessage",
      title: "Success message",
      type: "localeHeadingPortableText",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "errorMessage",
      title: "Error message",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fields",
      title: "Fields",
      type: "array",
      of: [
        { type: "textField" },
        { type: "singleSelection" },
        { type: "checkbox" },
      ],
      validation: (Rule) => Rule.min(1),
    },
  ],
  preview: {
    select: {
      title: "title",
      fields: "fields",
    },
    prepare({ title, fields }) {
      const length = fields.length;

      return {
        title,
        subtitle: `${length} ${length > 1 ? "fields" : "field"}`,
        media: FiMessageSquare,
      };
    },
  },
};

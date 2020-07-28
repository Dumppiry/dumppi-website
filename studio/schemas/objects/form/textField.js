import { MdShortText, MdWrapText } from "react-icons/md";

export default {
  name: "textField",
  title: "Text Field",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fieldId",
      title: "ID",
      type: "slug",
      description:
        "Unique identifier for a field within the form. It is used when sending the form, so make it human understandable.",
      options: {
        source: (doc, options) => {
          const { label } = options.parent;
          return label?.en;
        },
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "required",
      title: "Required field",
      type: "boolean",
      description: "Indicates whether this field is mandatory or not",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "multiline",
      title: "Multi-line",
      type: "boolean",
      description: "Should the field allow multi-line entries or not?",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "label.fi",
      required: "required",
      multiline: "multiline",
      fieldId: "fieldId.current",
    },
    prepare({ title, required, multiline, fieldId }) {
      const subtitle = `${fieldId} | ${required ? "required" : "optional"} | ${
        multiline ? "multi-line" : "one-line"
      }`;
      const media = multiline ? MdWrapText : MdShortText;

      return {
        title,
        subtitle,
        media,
      };
    },
  },
};

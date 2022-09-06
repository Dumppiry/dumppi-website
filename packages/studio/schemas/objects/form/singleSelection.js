import { MdRadioButtonChecked } from "react-icons/md";

export default {
  name: "singleSelection",
  title: "Single selection",
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
      name: "selectionOptions",
      title: "Selection options",
      type: "array",
      of: [{ type: "localeString" }],
      description: "Enter the list of options here.",
      validation: (Rule) => Rule.required().min(2),
    },
  ],
  preview: {
    select: {
      title: "label.fi",
      required: "required",
      fieldId: "fieldId.current",
      options: "selectionOptions",
    },
    prepare({ title, required, fieldId, options }) {
      const subtitle = `${fieldId} | ${required ? "required" : "optional"} | ${
        options.length
      } options`;

      return {
        title,
        subtitle,
        media: MdRadioButtonChecked,
      };
    },
  },
};

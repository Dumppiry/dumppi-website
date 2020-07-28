import { MdCheckBox } from "react-icons/md";

export default {
  name: "checkbox",
  title: "Checkbox",
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
  ],
  preview: {
    select: {
      title: "label.fi",
      required: "required",
      fieldId: "fieldId.current",
    },
    prepare({ title, required, fieldId }) {
      const subtitle = `${fieldId} | ${required ? "required" : "optional"}`;

      return {
        title,
        subtitle,
        media: MdCheckBox,
      };
    },
  },
};

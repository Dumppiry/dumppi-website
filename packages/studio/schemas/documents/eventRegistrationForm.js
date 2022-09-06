import { FiPenTool } from "react-icons/fi";

export default {
  name: "eventRegistrationForm",
  title: "Event Registration Form",
  type: "document",
  icon: FiPenTool,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "fields",
      title: "Fields",
      type: "array",
      of: [{ type: "field" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        media: FiPenTool,
      };
    },
  },
};

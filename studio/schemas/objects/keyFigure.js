import { FiPercent } from "react-icons/fi";

export default {
  name: "keyFigure",
  title: "Key figure",
  type: "object",
  icon: FiPercent,
  fields: [
    {
      name: "description",
      title: "Description",
      type: "localeString"
    },
    {
      name: "figure",
      title: "Figure",
      type: "string",
      description: "This should be a number like thing"
    }
  ],
  preview: {
    select: {
      title: "figure",
      subtitle: "description.fi"
    }
  }
};

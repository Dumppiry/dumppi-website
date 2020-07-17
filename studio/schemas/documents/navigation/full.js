import { FiAlignRight } from "react-icons/fi";

export default {
  name: "fullNavigation",
  title: "Full Navigation",
  type: "document",
  icon: FiAlignRight,
  fields: [
    {
      name: "topLevelItems",
      title: "Top-level Items",
      type: "array",
      of: [{ type: "navigationItem" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Full Navigation",
      };
    },
  },
};

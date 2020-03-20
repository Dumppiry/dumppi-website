import { FiAlignRight } from "react-icons/fi";

export default {
  name: "mainNavigation",
  title: "Main Navigation",
  type: "document",
  icon: FiAlignRight,
  fields: [
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "reference", to: [{ type: "page" }] }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Main Navigation"
      };
    }
  }
};
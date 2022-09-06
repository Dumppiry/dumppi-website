import { FiAlignRight } from "react-icons/fi";

import linkableItems from "../../utils/linkableItems";

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
      of: [
        {
          type: "reference",
          to: linkableItems,
        },
      ],
      validation: (Rule) =>
        Rule.max(4).warning(
          "Are you sure you want this many items in the main navigation?"
        ),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Main Navigation",
      };
    },
  },
};

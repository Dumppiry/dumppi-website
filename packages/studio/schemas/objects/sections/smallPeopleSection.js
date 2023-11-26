import { FiUsers } from "react-icons/fi";

import { defaultLanguage } from "../../../supportedLanguages";

export default {
  name: "smallPeopleSection",
  title: "Small People :D",
  type: "object",
  icon: FiUsers,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "localeString",
    },
    {
      name: "groups",
      title: "Groups",
      type: "array",
      of: [{ type: "smallPeopleGroup" }],
    },
  ],
  preview: {
    select: {
      heading: "heading",
      groups: "groups",
    },
    prepare({ heading, groups }) {
      const subtitle = groups
        .map((group) => {
          try {
            return group.heading[defaultLanguage][0].children
              .map((child) => child.text)
              .join("");
          } catch {
            return "Untitled";
          }
        })
        .join(", ");
      return {
        title: heading[defaultLanguage],
        subtitle,
      };
    },
  },
};

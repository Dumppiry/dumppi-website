import { FiUsers } from "react-icons/fi";

import { defaultLanguage } from "../../../supportedLanguages";

export default {
  name: "bigPeopleSection",
  title: "Big People :D",
  type: "object",
  icon: FiUsers,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "localeHeadingPortableText"
    },
    {
      name: "people",
      title: "People",
      type: "array",
      of: [{ type: "reference", to: [{ type: "person" }] }]
    }
  ],
  preview: {
    select: {
      heading: "heading"
    },
    prepare({ heading }) {
      return {
        title: heading[defaultLanguage][0].children
          .map(child => child.text)
          .join(""),
        subtitle: heading[defaultLanguage][1]?.children
          .map(child => child.text)
          .join("")
      };
    }
  }
};

import { FiType } from "react-icons/fi";

import { defaultLanguage } from "../../../supportedLanguages";

export default {
  name: "bigHeadingSection",
  title: "Big Heading",
  type: "object",
  icon: FiType,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "localeBigHeadingPortableText",
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }) {
      return {
        title: heading[defaultLanguage][0]?.children
          .map((child) => child.text)
          .join(""),
        subtitle: heading[defaultLanguage][1]?.children
          .map((child) => child.text)
          .join(""),
      };
    },
  },
};

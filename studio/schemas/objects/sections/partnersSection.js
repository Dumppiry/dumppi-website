import { FaRegHandshake } from "react-icons/fa";

import { defaultLanguage } from "../../../supportedLanguages";

export default {
  name: "partnersSection",
  title: "Partners",
  type: "object",
  icon: FaRegHandshake,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "localeHeadingPortableText"
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

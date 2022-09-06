import { FiMessageSquare } from "react-icons/fi";

import { defaultLanguage } from "../../../supportedLanguages";

export default {
  name: "formSection",
  title: "Form Section",
  type: "object",
  icon: FiMessageSquare,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "localeHeadingPortableText",
    },
    {
      name: "form",
      title: "Form",
      type: "reference",
      to: [{ type: "contactForm" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }) {
      return {
        title: heading[defaultLanguage][0].children
          .map((child) => child.text)
          .join(""),
        subtitle: heading[defaultLanguage][1]?.children
          .map((child) => child.text)
          .join(""),
      };
    },
  },
};

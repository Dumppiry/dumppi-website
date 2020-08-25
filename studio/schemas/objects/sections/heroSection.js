import { GiBrutalHelm } from "react-icons/gi";

import { defaultLanguage } from "../../../supportedLanguages";

export default {
  name: "heroSection",
  title: "Hero",
  type: "object",
  icon: GiBrutalHelm,
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heading",
      title: "Heading",
      type: "localeBigHeadingPortableText",
      validation: (Rule) => Rule.required(),
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

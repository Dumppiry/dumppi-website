import { FiCalendar } from "react-icons/fi";

import { defaultLanguage } from "../../../supportedLanguages";

export default {
  name: "jobsSection",
  title: "Jobs",
  type: "object",
  icon: FiCalendar,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "localeHeadingPortableText",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "All", value: "all" },
          { title: "Recent (only 3 most recently added)", value: "recent" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "emptyStateMessage",
      title: "Empty state message",
      type: "localeString",
      description: "Text to show if there no jobs available.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cta",
      title: "Call to action",
      type: "link",
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

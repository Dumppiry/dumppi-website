import { FiCalendar } from "react-icons/lib/fi";

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
        list: ["All", "Recent (only 3 most recently added)"],
        layout: "radio",
      },
    },
    {
      name: "allJobsPage",
      title: "Link to all jobs page",
      type: "link",
      description: "Provide a link to all jobs page (optional)",
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

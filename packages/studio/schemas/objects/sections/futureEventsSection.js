import { FiCalendar } from "react-icons/fi";

import { defaultLanguage } from "../../../supportedLanguages";

export default {
  name: "futureEventsSection",
  title: "Future Events",
  type: "object",
  icon: FiCalendar,
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
        subtitle: heading[defaultLanguage][1].children
          .map(child => child.text)
          .join("")
      };
    }
  }
};

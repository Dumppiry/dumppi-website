import { FiFileText } from "react-icons/fi";

export default {
  name: "page",
  title: "Page",
  type: "document",
  icon: FiFileText,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "bigHeadingSection" },
        { type: "bigPeopleSection" },
        { type: "smallPeopleSection" },
        { type: "futureEventsSection" },
        { type: "partnersSection" },
        { type: "jobsSection" },
        { type: "keyFiguresSection" },
        { type: "productsSection" }
      ]
    }
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare({ title }) {
      return {
        title: title.fi
      };
    }
  }
};

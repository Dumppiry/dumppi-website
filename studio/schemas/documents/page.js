import { FiFileText } from "react-icons/fi";

export default {
  name: "page",
  title: "Page",
  type: "document",
  icon: FiFileText,
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true }
    }
  ],
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
        { type: "smallPeopleSection" }
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

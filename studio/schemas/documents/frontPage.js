import { FiFileText } from "react-icons/fi";

export default {
  name: "frontPage",
  title: "Front Page",
  type: "document",
  icon: FiFileText,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString"
    },
    {
      name: "image",
      title: "Image",
      type: "image"
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
        { type: "partnersSection" }
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

import { FiBookmark } from "react-icons/fi";

export default {
  name: "eventCategory",
  title: "Event Category",
  type: "document",
  icon: FiBookmark,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString"
    },
    {
      name: "color",
      title: "Color",
      type: "color"
    }
  ],
  preview: {
    select: {
      title: "title.fi"
    },
    prepare({ title }) {
      return {
        title,
        media: FiBookmark
      };
    }
  }
};

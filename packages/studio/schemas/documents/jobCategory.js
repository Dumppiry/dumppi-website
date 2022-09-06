import { FiBookmark } from "react-icons/fi";

export default {
  name: "jobCategory",
  title: "Job Category",
  type: "document",
  icon: FiBookmark,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
  ],
  preview: {
    select: {
      title: "title.fi",
    },
  },
};

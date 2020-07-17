import { FiFileText } from "react-icons/fi";

export default {
  name: "textSection",
  title: "Text",
  type: "object",
  icon: FiFileText,
  fields: [
    {
      name: "content",
      title: "Content",
      type: "localePortableText",
    },
  ],
  preview: {
    select: {
      content: "content.fi",
    },
    prepare({ content }) {
      return {
        title: content[0]?.children.map((child) => child.text).join(""),
      };
    },
  },
};

import { FiLink2 } from "react-icons/fi";

export default {
  name: "eventLink",
  title: "Event link",
  type: "object",
  icon: FiLink2,
  fields: [
    { type: "string", name: "title", title: "Title" },
    {
      name: "url",
      type: "url",
      validation: Rule => Rule.uri({ scheme: "https" })
    }
  ]
};

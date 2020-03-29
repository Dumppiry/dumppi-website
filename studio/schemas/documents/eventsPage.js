import { FiFileText } from "react-icons/fi";

export default {
  name: "eventsPage",
  title: "Events Page",
  type: "document",
  icon: FiFileText,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "localeEventSlug",
      validation: Rule => Rule.required()
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "bigHeadingSection" },
        { type: "bigPeopleSection" },
        { type: "smallPeopleSection" },
        { type: "partnersSection" },
        { type: "recentJobsSection" }
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
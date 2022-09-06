import { FiArchive } from "react-icons/fi";

export default {
  name: "legalDocument",
  title: "Legal Document",
  type: "document",
  icon: FiArchive,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "localeSlug",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "textSection" }, { type: "smallPeopleSection" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title.fi,
      };
    },
  },
  orderings: [
    {
      title: "Title, ASC",
      name: "titleAsc",
      by: [{ field: "title.fi", direction: "asc" }],
    },
    {
      title: "Title, DESC",
      name: "titleDesc",
      by: [{ field: "title.fi", direction: "desc" }],
    },
  ],
};

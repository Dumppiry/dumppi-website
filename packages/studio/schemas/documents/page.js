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
      of: [
        { type: "heroSection" },
        { type: "bigHeadingSection" },
        { type: "textSection" },
        { type: "bigPeopleSection" },
        { type: "smallPeopleSection" },
        { type: "peopleProfilesSection" },
        { type: "futureEventsSection" },
        { type: "partnersSection" },
        { type: "jobsSection" },
        { type: "keyFiguresSection" },
        { type: "productsSection" },
        { type: "formSection" },
        { type: "mainPartnersSection" },
        { type: "pastEventsSection" },
      ],
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

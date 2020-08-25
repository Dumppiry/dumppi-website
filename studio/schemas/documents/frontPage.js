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
      type: "localeString",
    },
    {
      name: "hero",
      title: "Hero",
      type: "heroSection",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
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
};

import React from "react";
import { FiBookmark } from "react-icons/fi";

const ColorPreview = ({ color }) => {
  return (
    <span
      style={{ backgroundColor: color?.hex, width: "100%", height: "100%" }}
    />
  );
};

export default {
  name: "blogCategory",
  title: "Blog Category",
  type: "document",
  icon: FiBookmark,
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
      name: "description",
      title: "Description",
      type: "localeText",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "color",
      title: "Color",
      type: "color",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title.fi",
      description: "description.fi",
      color: "color",
    },
    prepare({ title, description, color }) {
      return {
        title,
        subtitle: description,
        media: () => <ColorPreview color={color} />,
      };
    },
  },
};

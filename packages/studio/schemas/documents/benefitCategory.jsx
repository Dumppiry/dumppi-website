import React from "react";
import { FiBookmark } from "react-icons/fi";

const ColorPreview = ({ color }) => (
  <span
    style={{ backgroundColor: color?.hex, width: "100%", height: "100%" }}
  />
);

export default {
  name: "benefitCategory",
  title: "Benefit Category",
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
      type: "color",
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: "title.fi",
      color: "color"
    },
    prepare({ title, color }) {
      return {
        title,
        media: () => <ColorPreview color={color} />
      };
    }
  }
};

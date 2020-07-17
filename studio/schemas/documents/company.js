import React from "react";
import { FiDollarSign } from "react-icons/lib/fi";

export default {
  name: "company",
  title: "Company",
  type: "document",
  icon: FiDollarSign,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["https"] }).required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "localeString",
      description:
        "Fill this if you want company to appear in main partners section.",
    },
    {
      name: "cardColor",
      title: "Card base color",
      type: "color",
      description: "NOTE: if set, white font will be used. Be cautious!",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};

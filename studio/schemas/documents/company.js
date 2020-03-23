import { FiDollarSign } from "react-icons/fi";

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
      validation: Rule => Rule.required()
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: Rule => Rule.uri({ scheme: ["https"] }).required()
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "address",
      title: "Address",
      type: "string"
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
};

import { FiTruck } from "react-icons/fi";

export default {
  name: "job",
  title: "Job",
  type: "document",
  icon: FiTruck,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "company",
      title: "Company",
      type: "reference",
      to: [{ type: "company" }],
      validation: Rule => Rule.required()
    },
    {
      name: "type",
      title: "Type",
      type: "reference",
      to: [{ type: "jobType" }],
      validation: Rule => Rule.required()
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "jobCategory" }],
      validation: Rule => Rule.required()
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: Rule => Rule.uri({ scheme: ["https"] }).required()
    }
  ],
  preview: {
    select: {
      title: "title",
      company: "company.name",
      location: "location",
      media: "company.image"
    },
    prepare({ title, company, location, media }) {
      return {
        title,
        subtitle: `${company}, ${location}`,
        media
      };
    }
  }
};

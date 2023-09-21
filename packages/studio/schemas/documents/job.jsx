import React from "react";
import { FiTruck } from "react-icons/fi";

const Expired = () => (
  <span style={{ backgroundColor: "red", width: "100%", height: "100%" }} />
);

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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "company",
      title: "Company",
      type: "reference",
      to: [{ type: "company" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "reference",
      to: [{ type: "jobType" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "jobCategory" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["https"] }).required(),
    },
    {
      name: "expireDate",
      title: "Expire Date",
      description:
        "Set a date when the job posting should be hidden and marked for removal.",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      company: "company.name",
      location: "location",
      expireDate: "expireDate",
      image: "company.image",
    },
    prepare({ title, company, location, expireDate, image }) {
      const isExpired = new Date() > new Date(expireDate);

      return {
        title,
        subtitle: `${isExpired ? "Expired. " : ""}${company}, ${location}`,
        media: !isExpired ? image : () => <Expired />,
      };
    },
  },
  orderings: [
    {
      name: "expireDateAsc",
      title: "Expire Date, Asc",
      by: [{ field: "expireDate", direction: "asc" }],
    },
    {
      name: "expireDateDesc",
      title: "Expire Date, Desc",
      by: [{ field: "expireDate", direction: "desc" }],
    },
    {
      name: "companyAsc",
      title: "Company, Asc",
      by: [{ field: "company.name", direction: "asc" }],
    },
    {
      name: "companyDesc",
      title: "Company, Desc",
      by: [{ field: "company.name", direction: "desc" }],
    },
    {
      name: "titleAsc",
      title: "Title, Asc",
      by: [{ field: "title", direction: "asc" }],
    },
    {
      name: "titleDesc",
      title: "Title, Desc",
      by: [{ field: "title", direction: "desc" }],
    },
  ],
};

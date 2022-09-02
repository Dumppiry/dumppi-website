import { FiGift } from "react-icons/fi";

export default {
  name: "benefit",
  title: "Benefit",
  type: "document",
  icon: FiGift,
  fields: [
    {
      name: "company",
      title: "Company",
      type: "reference",
      to: [{ type: "company" }],
      validation: Rule => Rule.required()
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "benefitCategory" }],
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Description",
      type: "localePortableText",
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: "company.name",
      subtitle: "category.title.fi",
      media: "company.image"
    }
  }
};

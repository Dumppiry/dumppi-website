import { FiPackage } from "react-icons/fi";

export default {
  name: "productsSection",
  title: "Products",
  type: "object",
  icon: FiPackage,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "localeString"
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [{ type: "product" }]
    }
  ],
  preview: {
    select: {
      title: "heading.fi",
      products: "products"
    },
    prepare({ title, products }) {
      return {
        title,
        subtitle: products.map(p => p.title.fi).join(", ")
      };
    }
  }
};

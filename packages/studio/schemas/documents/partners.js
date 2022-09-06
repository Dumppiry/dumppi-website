import { FaRegHandshake } from "react-icons/fa";

export default {
  name: "partners",
  title: "Partners",
  type: "document",
  icon: FaRegHandshake,
  fields: [
    {
      name: "partners",
      title: "Partners",
      type: "array",
      of: [{ type: "reference", to: [{ type: "company" }] }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Partners"
      };
    }
  }
};

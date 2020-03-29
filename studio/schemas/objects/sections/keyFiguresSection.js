import { FiActivity } from "react-icons/fi";

export default {
  name: "keyFiguresSection",
  title: "Key figures",
  type: "object",
  icon: FiActivity,
  fields: [
    {
      name: "figures",
      title: "Figures",
      type: "array",
      of: [{ type: "keyFigure" }]
    }
  ],
  preview: {
    select: {
      figures: "figures"
    },
    prepare({ figures }) {
      return {
        title: figures.map(f => `${f.figure} ${f.description.fi}`).join(", ")
      };
    }
  }
};

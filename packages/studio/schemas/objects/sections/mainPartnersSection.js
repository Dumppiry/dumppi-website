import { FaRegHandshake } from "react-icons/fa";
//import { useClient } from "sanity";

import { defaultLanguage } from "../../../supportedLanguages";

export default {
  name: "mainPartnersSection",
  title: "Main partners",
  type: "object",
  icon: FaRegHandshake,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "localeHeadingPortableText",
    },
    {
      name: "partners",
      title: "Partners",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "company" }],
          // Removed validation because of incorrect use of hooks
          // TODO Add back if a way is figured to validate without hook
          /*validation: (Rule) =>
            Rule.custom(async (doc) => {
              // Fetch company
              console.log(Rule);
              const company = await useClient().fetch(
                `*[_id == $id][0] {name, description, cardColor}`,
                { id: doc._ref }
              );
              // Return error if company does not have a description
              return !company.description
                ? "Company needs a description"
                : true;
            }),*/
        },
      ],
      validation: (Rule) => Rule.required().max(4),
    },
  ],
  preview: {
    select: {
      heading: "heading",
      partner0: "partners.0.name",
      partner1: "partners.1.name",
      partner2: "partners.2.name",
      partner3: "partners.3.name",
    },
    prepare({ heading, partner0, partner1, partner2, partner3 }) {
      const partners = [partner0, partner1, partner2, partner3].filter(Boolean);
      return {
        title: heading[defaultLanguage][0].children
          .map((child) => child.text)
          .join(""),
        subtitle: partners.join(", "),
      };
    },
  },
};

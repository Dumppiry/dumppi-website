import { defaultLanguage } from "../../../supportedLanguages";

export default {
  name: "smallPeopleGroup",
  title: "Small people group",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "localeHeadingPortableText",
    },
    {
      name: "people",
      title: "People",
      type: "array",
      of: [{ type: "reference", to: [{ type: "person" }] }],
    },
  ],
  preview: {
    select: {
      heading: "heading",
      person0: "people.0.name",
      person1: "people.1.name",
      person2: "people.2.name",
      person3: "people.3.name",
    },
    prepare({ heading, person0, person1, person2, person3 }) {
      const people = [person0, person1, person2].filter(Boolean);
      const subtitle = people.length > 0 ? people.join(", ") : "";
      const hasMorePeople = Boolean(person3);
      try {
        return {
          title: heading[defaultLanguage][0].children
            .map((child) => child.text)
            .join(""),
          subtitle: hasMorePeople ? `${subtitle}…` : subtitle,
        };
      } catch {
        return {
          title: "Untitled",
          subtitle: hasMorePeople ? `${subtitle}…` : subtitle,
        };
      }
    },
  },
};

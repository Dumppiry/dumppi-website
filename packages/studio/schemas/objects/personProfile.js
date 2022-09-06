export default {
  name: "personProfile",
  title: "Person profile",
  type: "object",
  fields: [
    {
      name: "person",
      title: "Person",
      type: "reference",
      to: [{ type: "person" }],
    },
    {
      name: "bio",
      title: "Bio",
      type: "localePortableText",
    },
  ],
  preview: {
    select: {
      name: "person.name",
    },
    prepare({ name }) {
      return {
        title: name,
      };
    },
  },
};

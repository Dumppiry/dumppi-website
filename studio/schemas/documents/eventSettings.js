export default {
  name: "eventSettings",
  title: "Event Settings",
  type: "document",
  fieldsets: [
    {
      name: "registration",
      title: "Registration"
    }
  ],
  fields: [
    {
      name: "registrationDefaultFields",
      title: "Registration Default Fields",
      type: "array",
      of: [{ type: "defaultField" }],
      fieldset: "registration"
    },
    {
      name: "readMoreText",
      title: "Read more text",
      type: "localeString",
      validation: Rule => Rule.required()
    },
    {
      name: "defaultFutureEventsDescription",
      title: "Default Future Events Description",
      type: "localeHeadingPortableText",
      validation: Rule => Rule.required()
    },
    {
      name: "noEventsText",
      title: "No events text",
      type: "localeString",
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Event Settings"
      };
    }
  }
};

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
      title: "Default Fields",
      type: "array",
      of: [{ type: "defaultField" }],
      fieldset: "registration"
    },
    {
      name: "registrationTitle",
      title: "Title",
      type: "localeString",
      fieldset: "registration",
      validation: Rule => Rule.required()
    },
    {
      name: "registrationGuideText",
      title: "Guide Text",
      type: "localePortableText",
      fieldset: "registration",
      validation: Rule => Rule.required()
    },
    {
      name: "registrationOpensText",
      title: "Registration opens text",
      type: "localeString",
      fieldset: "registration",
      validation: Rule => Rule.required()
    },
    {
      name: "registrationClosesText",
      title: "Registration closes text",
      type: "localeString",
      fieldset: "registration",
      validation: Rule => Rule.required()
    },
    {
      name: "registrationSubmitButtonText",
      title: "Submit button text",
      type: "localeString",
      fieldset: "registration",
      validation: Rule => Rule.required()
    },
    {
      name: "registrationAttendeesTitle",
      title: "Attendees title",
      type: "localeString",
      fieldset: "registration",
      validation: Rule => Rule.required()
    },
    {
      name: "registrationAttendeesText",
      title: "Attendees text",
      type: "localeString",
      fieldset: "registration",
      validation: Rule => Rule.required()
    },
    {
      name: "registrationNoAttendeesText",
      title: "No attendees text",
      type: "localeString",
      fieldset: "registration",
      validation: Rule => Rule.required()
    },
    {
      name: "registrationSuccessText",
      title: "Success text",
      type: "localeString",
      fieldset: "registration",
      validation: Rule => Rule.required()
    },
    {
      name: "registrationErrorText",
      title: "Error text",
      type: "localeString",
      fieldset: "registration",
      validation: Rule => Rule.required()
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

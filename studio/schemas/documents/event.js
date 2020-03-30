import { FiCalendar } from "react-icons/fi";

import supportedLanguages from "../../supportedLanguages";

const requiredIfHasRegistration = (field, context) => {
  const { document } = context;

  return document.hasRegistration && !field
    ? "Required if event has registration"
    : true;
};

export default {
  name: "event",
  title: "Event",
  type: "document",
  icon: FiCalendar,
  fieldsets: [
    {
      name: "time",
      title: "Time",
      options: { collapsible: false }
    },
    {
      name: "registration",
      title: "Registration",
      options: { collapsible: true }
    }
  ],
  initialValue: {
    hasRegistration: false
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
      validation: Rule =>
        Rule.custom(title => {
          const emptyTitles = supportedLanguages.filter(
            lang => !title[lang.id]
          );
          return emptyTitles.length === 0 ? true : "Title cannot be empty";
        })
    },
    {
      name: "slug",
      title: "Slug",
      type: "localeSlug",
      validation: Rule => Rule.required()
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }]
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "eventCategory" }]
    },
    {
      name: "price",
      title: "Price, €",
      type: "number",
      validation: Rule => Rule.min(0).precision(2)
    },
    {
      name: "contactPerson",
      title: "Contact person",
      type: "reference",
      to: [{ type: "person" }]
    },
    {
      name: "startDate",
      title: "Start",
      type: "datetime",
      fieldset: "time",
      validation: Rule => Rule.required()
    },
    {
      name: "endDate",
      title: "End",
      type: "datetime",
      fieldset: "time",
      validation: Rule => Rule.required().min(Rule.valueOfField("startDate"))
    },
    {
      name: "description",
      title: "Description",
      type: "localePortableText",
      validation: Rule => Rule.required()
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "eventLink" }]
    },
    {
      name: "hasRegistration",
      title: "Has registration",
      type: "boolean",
      fieldset: "registration",
      validation: Rule => Rule.required()
    },
    {
      name: "registrationStartDate",
      title: "Start",
      type: "datetime",
      fieldset: "registration",
      validation: Rule =>
        Rule.max(Rule.valueOfField("startDate")).custom(
          requiredIfHasRegistration
        )
    },
    {
      name: "registrationEndDate",
      title: "End",
      type: "datetime",
      fieldset: "registration",
      validation: Rule =>
        Rule.min(Rule.valueOfField("registrationStartDate"))
          .max(Rule.valueOfField("startDate"))
          .custom(requiredIfHasRegistration)
    },
    {
      name: "registrationMaxCapacity",
      title: "Maximum Capacity",
      type: "number",
      fieldset: "registration",
      validation: Rule =>
        Rule.custom(requiredIfHasRegistration)
          .min(0)
          .integer()
    },
    {
      name: "registrationForm",
      title: "Registration Form",
      type: "reference",
      to: [{ type: "eventRegistrationForm" }],
      fieldset: "registration",
      validation: Rule => Rule.custom(requiredIfHasRegistration)
    },
    {
      name: "registrationSubmissions",
      title: "Registration Submissions",
      type: "array",
      of: [{ type: "string" }],
      // readOnly: true,
      fieldset: "registration"
    }
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare({ title }) {
      return {
        title: title?.fi
      };
    }
  }
};

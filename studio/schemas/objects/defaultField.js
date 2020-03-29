import React from "react";
import {
  MdLabelOutline,
  MdShortText,
  MdWrapText,
  MdCheckBox,
  MdRadioButtonChecked
} from "react-icons/md";

export default {
  name: "defaultField",
  title: "Default field",
  type: "object",
  fields: [
    {
      name: "showInList",
      title: "Show in list",
      type: "boolean",
      description:
        "Set to true if you want the value of this field to be shown in the public list of attendees.",
      validation: Rule => Rule.required()
    },
    {
      name: "fallbackField",
      title: "Fallback field",
      type: "string",
      description:
        "ID of the field you want to fallback if it is not present, otherwise the field will be empty.",
      validation: Rule =>
        Rule.custom((fallbackField, context) => {
          const { registrationDefaultFields } = context.document;

          const fieldIds = registrationDefaultFields.map(
            df => df.field.fieldId.current
          );

          return fallbackField && !fieldIds.includes(fallbackField)
            ? "Has to be an existing field ID"
            : true;
        })
    },
    {
      name: "field",
      title: "Field",
      type: "field",
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      label: "field.label.fi",
      required: "field.required",
      inputType: "field.inputType",
      showInList: "showInList",
      fallbackField: "fallbackField"
    },
    prepare({ label, required, inputType, showInList, fallbackField }) {
      const req = required ? "Required." : "Optional.";
      const inList = showInList && "Shows in list.";
      const fbField = fallbackField ? ` Fallback: ${fallbackField}` : null;

      return {
        title: label,
        subtitle: [req, inList, fbField].filter(Boolean).join(" "),
        media: () => {
          switch (inputType) {
            case "input":
              return <MdShortText />;

            case "textarea":
              return <MdWrapText />;

            case "checkbox":
              return <MdCheckBox />;

            case "radio":
              return <MdRadioButtonChecked />;

            default:
              return <MdLabelOutline />;
          }
        }
      };
    }
  }
};

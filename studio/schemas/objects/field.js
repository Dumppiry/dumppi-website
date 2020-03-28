import React from "react";
import {
  MdLabelOutline,
  MdShortText,
  MdWrapText,
  MdCheckBox,
  MdRadioButtonChecked
} from "react-icons/md";

export default {
  name: "field",
  title: "Field",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "localeString",
      validation: Rule => Rule.required()
    },
    {
      name: "required",
      title: "Required field",
      type: "boolean",
      validation: Rule => Rule.required()
    },
    {
      name: "inputType",
      title: "Input Type",
      type: "string",
      options: {
        list: ["input", "textarea", "checkbox", "radio"]
      },
      validation: Rule => Rule.required()
    },
    {
      name: "inputValues",
      title: "Inut Values",
      description: "If you selected  `radio`, set the possible values here.",
      type: "array",
      of: [{ type: "string", validation: Rule => Rule.required() }],
      validation: Rule =>
        Rule.custom((values, { parent }) => {
          return ["radio"].includes(parent.inputType) && !values
            ? "Required if inputType is  `radio`"
            : true;
        })
    }
  ],
  preview: {
    select: {
      label: "label.fi",
      required: "required",
      inputType: "inputType"
    },
    prepare({ label, required, inputType }) {
      return {
        title: label,
        subtitle: required ? "Required" : "Optional",
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

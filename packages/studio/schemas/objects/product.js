import React from "react";
import * as Fi from "react-icons/fi";
import { FiPackage } from "react-icons/fi";

const Icon = ({ name }) => {
  const TagName = Fi[name];
  return !!TagName ? <TagName /> : <p>{name}</p>;
};

export default {
  name: "product",
  title: "Product",
  type: "object",
  icon: FiPackage,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString"
    },
    {
      name: "description",
      title: "Description",
      type: "localeString"
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      description:
        "Please select an icon from here https://react-icons.netlify.com/#/icons/fi. E.g. FiActivity, otherwise contact support lol."
    }
  ],
  preview: {
    select: {
      title: "title.fi",
      icon: "icon"
    },
    prepare({ title, icon }) {
      return {
        title,
        media: () => icon && <Icon name={icon} />
      };
    }
  }
};

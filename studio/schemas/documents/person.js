import { FiUser } from "react-icons/fi";

export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: FiUser,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "phoneNumber",
      title: "Phone number",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "title",
      title: "Title",
      type: "localeString"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title.fi",
      media: "image"
    }
  }
};

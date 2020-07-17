import { FiMapPin } from "react-icons/fi";

export default {
  name: "location",
  title: "Location",
  type: "document",
  icon: FiMapPin,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "address",
      title: "Address",
      type: "string"
    },
    {
      name: "googleMapsLink",
      title: "Google Maps link",
      type: "url",
      validation: Rule => Rule.uri({ scheme: "https" })
    }
  ]
};

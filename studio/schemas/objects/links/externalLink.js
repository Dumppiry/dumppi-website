import React from "react";

const ExternalLinkRender = ({ children }) => <span>{children} 🌍</span>;

export default {
  title: "External Link",
  name: "externalLink",
  type: "object",
  fields: [
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "Prefer https links",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ["http", "https"],
        }).required(),
    },
  ],
  blockEditor: {
    icon: () => "🌍",
    render: ExternalLinkRender,
  },
};

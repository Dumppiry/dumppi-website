import React from "react";

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  name: "internalLink",
  title: "Internal Link",
  type: "object",
  fields: [
    {
      name: "page",
      title: "Page",
      type: "reference",
      to: [{ type: "page" }, { type: "frontPage" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  blockEditor: {
    icon: () => "🔗",
    render: InternalLinkRender,
  },
  preview: {
    select: {
      title: "page.title.fi",
    },
  },
};

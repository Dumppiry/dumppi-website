import { FiLink } from "react-icons/fi";

import { defaultLanguage } from "../../supportedLanguages";

export default {
  name: "page-route",
  title: "Route",
  type: "document",
  icon: FiLink,
  fields: [
    {
      name: "page",
      title: "Page",
      type: "reference",
      to: [{ type: "page" }, { type: "benefitsPage" }]
    },
    {
      name: "slug",
      title: "Slug",
      type: "localeSlug"
    },
    {
      name: "subRoutes",
      title: "Sub Routes",
      type: "array",
      of: [{ type: "subRoute" }]
    }
  ],
  preview: {
    select: {
      slug: "slug",
      pageTitle: "page.title"
    },
    prepare: ({ slug, pageTitle }) => {
      const path = slug[defaultLanguage]?.current;
      return {
        title: `${pageTitle[defaultLanguage]}`,
        subtitle: path === "/" ? "/" : `/${path}`
      };
    }
  }
};

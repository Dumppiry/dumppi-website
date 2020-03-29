import { defaultLanguage } from "../../supportedLanguages";

export default {
  name: "subRoute",
  title: "Sub-route",
  type: "object",
  fields: [
    {
      name: "page",
      type: "reference",
      description: "Select the page that this route should point to",
      to: [{ type: "page" }, { type: "eventsPage" }, { type: "benefitsPage" }]
    },
    {
      name: "slug",
      title: "Slug",
      type: "localeSlug"
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

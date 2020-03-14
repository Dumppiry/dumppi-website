import client from "part:@sanity/base/client";
import supportedLanguages from "../../../supportedLanguages";

export default {
  name: "localeEventSlug",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "slug",
    fieldset: lang.isDefault ? null : "translations",
    options: {
      source: async doc => {
        return doc.title[lang.id];
      }
    }
  }))
};

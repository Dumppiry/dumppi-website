import client from "part:@sanity/base/client";
import supportedLanguages from "../../supportedLanguages";

export default {
  name: "localeSlug",
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
      source: async (doc, options) => {
        console.log(options);
        let id;

        if (options.parentPath.some(p => p === "subRoutes")) {
          const key = options.parentPath.find(p => p?._key)._key;
          const sr = doc.subRoutes?.find(sr => sr._key === key);
          id = sr?.page._ref;
        } else {
          id = doc.page?._ref;
        }
        const res = await client.fetch("*[_id == $id]", {
          id
        });
        console.log(res);
        return res[0].title[lang.id];
      }
    }
  }))
};

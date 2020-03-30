import supportedLanguages from "../../../supportedLanguages";

export default {
  name: "localeSlug",
  title: "Slug",
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
    validation: Rule => Rule.required(),
    fieldset: lang.isDefault ? null : "translations",
    options: {
      source: doc => doc.title[lang.id]
    }
  }))
};

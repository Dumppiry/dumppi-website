import supportedLanguages from "../../../supportedLanguages";

export default {
  name: "localeText",
  title: "Text",
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
    type: "text",
    rows: 5,
    fieldset: lang.isDefault ? null : "translations"
  }))
};

import supportedLanguages from "../../../supportedLanguages";

export default {
  name: "localeHeadingPortableText",
  title: "Heading Text",
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
    type: "headingPortableText",
    fieldset: lang.isDefault ? null : "translations"
  }))
};

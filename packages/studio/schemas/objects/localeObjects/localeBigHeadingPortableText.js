import supportedLanguages from "../../../supportedLanguages";

export default {
  name: "localeBigHeadingPortableText",
  title: "Big Heading Text",
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
    type: "bigHeadingPortableText",
    fieldset: lang.isDefault ? null : "translations"
  }))
};

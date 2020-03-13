const supportedLanguages = [
  { id: "fi", title: "Finnish", isDefault: true },
  { id: "en", title: "English" }
  // Add as many languages as you need to support
];

export default supportedLanguages;

export const defaultLanguage = supportedLanguages.find(lang => lang.isDefault)
  .id;

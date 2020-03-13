// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import page from "./documents/page";
import pageRoute from "./documents/pageRoute";
import settings from "./documents/settings";

// Object types
// Localed fields
import localeHeadingPortableText from "./objects/localeObjects/localeHeadingPortableText";
import localePortableText from "./objects/localeObjects/localePortableText";
import localeSlug from "./objects/localeObjects/localeSlug";
import localeString from "./objects/localeObjects/localeString";
// Portable text variants
import portableText from "./objects/portableText/portableText";
import headingPortableText from "./objects/portableText/headingPortableText";
// Sections
import bigHeadingSection from "./objects/sections/bigHeadingSection";
// Other
import subRoute from "./objects/subRoute";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // Document types
    page,
    pageRoute,
    settings,

    // Object types
    localeHeadingPortableText,
    localePortableText,
    localeSlug,
    localeString,
    headingPortableText,
    portableText,
    bigHeadingSection,
    subRoute
  ])
});

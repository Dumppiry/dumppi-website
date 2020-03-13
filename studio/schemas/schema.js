// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import page from "./documents/page";
import pageRoute from "./documents/pageRoute";
import settings from "./documents/settings";

// Object types
import localePortableText from "./objects/localePortableText";
import localeSlug from "./objects/localeSlug";
import localeString from "./objects/localeString";
import portableText from "./objects/portableText";
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
    localePortableText,
    localeSlug,
    localeString,
    portableText,
    subRoute
  ])
});

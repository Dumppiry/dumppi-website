// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import company from "./documents/company";
import event from "./documents/event";
import eventCategory from "./documents/eventCategory";
import eventRegistrationForm from "./documents/eventRegistrationForm";
import eventSettings from "./documents/eventSettings";
import location from "./documents/location";
import job from "./documents/job";
import jobCategory from "./documents/jobCategory";
import jobType from "./documents/jobType";
import page from "./documents/page";
import frontPage from "./documents/frontPage";
import eventsPage from "./documents/eventsPage";
import benefitsPage from "./documents/benefitsPage";
import partners from "./documents/partners";
import person from "./documents/person";
import settings from "./documents/settings";
import benefit from "./documents/benefit";
import benefitCategory from "./documents/benefitCategory";

// Navigations
import mainNavigation from "./documents/navigation/main";
import fullNavigation from "./documents/navigation/full";

// Object types
// Localed fields
import localeBigHeadingPortableText from "./objects/localeObjects/localeBigHeadingPortableText";
import localeHeadingPortableText from "./objects/localeObjects/localeHeadingPortableText";
import localePortableText from "./objects/localeObjects/localePortableText";
import localeSlug from "./objects/localeObjects/localeSlug";
import localeString from "./objects/localeObjects/localeString";
import localeText from "./objects/localeObjects/localeText";
// Portable text variants
import portableText from "./objects/portableText/portableText";
import bigHeadingPortableText from "./objects/portableText/bigHeadingPortableText";
import headingPortableText from "./objects/portableText/headingPortableText";
// Sections
import bigHeadingSection from "./objects/sections/bigHeadingSection";
import bigPeopleSection from "./objects/sections/bigPeopleSection";
import futureEventsSection from "./objects/sections/futureEventsSection";
import partnersSection from "./objects/sections/partnersSection";
import jobsSection from "./objects/sections/jobsSection";
import smallPeopleSection from "./objects/sections/smallPeopleSection";
import smallPeopleGroup from "./objects/sections/smallPeopleGroup";
import keyFigureSection from "./objects/sections/keyFiguresSection";
import productsSection from "./objects/sections/productsSection";
import mainPartnersSection from "./objects/sections/mainPartnersSection";
// Event stuff
import eventLink from "./objects/event/link";
// Links
import externalLink from "./objects/links/externalLink";
import internalLink from "./objects/links/internalLink";
import link from "./objects/links/link";
// Other
import defaultField from "./objects/defaultField";
import field from "./objects/field";
import keyFigure from "./objects/keyFigure";
import mainImage from "./objects/mainImage";
import navigationItem from "./objects/navigationItem";
import product from "./objects/product";
import youtube from "./objects/youtube";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // Document types
    company,
    event,
    eventCategory,
    eventRegistrationForm,
    eventSettings,
    location,
    job,
    jobCategory,
    jobType,
    page,
    frontPage,
    eventsPage,
    benefitsPage,
    partners,
    person,
    settings,
    mainNavigation,
    fullNavigation,
    benefit,
    benefitCategory,

    // Object types
    bigHeadingSection,
    bigPeopleSection,
    futureEventsSection,
    partnersSection,
    mainPartnersSection,
    jobsSection,
    smallPeopleSection,
    keyFigureSection,
    productsSection,
    smallPeopleGroup,
    eventLink,
    externalLink,
    internalLink,
    link,
    defaultField,
    field,
    navigationItem,
    keyFigure,
    mainImage,
    product,
    youtube,
    localeBigHeadingPortableText,
    localeHeadingPortableText,
    localePortableText,
    localeSlug,
    localeString,
    localeText,
    portableText,
    bigHeadingPortableText,
    headingPortableText,
  ]),
});

// Document types
import blogCategory from "./documents/blog/blogCategory";
import blogPost from "./documents/blog/blogPost";
import blogSettings from "./documents/blog/blogSettings";
import company from "./documents/company";
import contactForm from "./documents/contactForm";
import event from "./documents/event";
import eventCategory from "./documents/eventCategory";
import eventRegistrationForm from "./documents/eventRegistrationForm";
import eventSettings from "./documents/eventSettings";
import location from "./documents/location";
import job from "./documents/job";
import jobCategory from "./documents/jobCategory";
import jobType from "./documents/jobType";
import legalDocument from "./documents/legalDocument";
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
import formSection from "./objects/sections/formSection";
import futureEventsSection from "./objects/sections/futureEventsSection";
import heroSection from "./objects/sections/heroSection";
import jobsSection from "./objects/sections/jobsSection";
import keyFigureSection from "./objects/sections/keyFiguresSection";
import mainPartnersSection from "./objects/sections/mainPartnersSection";
import partnersSection from "./objects/sections/partnersSection";
import peopleProfilesSection from "./objects/sections/peopleProfilesSection";
import productsSection from "./objects/sections/productsSection";
import smallPeopleGroup from "./objects/sections/smallPeopleGroup";
import smallPeopleSection from "./objects/sections/smallPeopleSection";
import textSection from "./objects/sections/textSection";
import pastEventsSection from "./objects/sections/pastEventsSection";
// Event stuff
import eventLink from "./objects/event/link";
// Links
import externalLink from "./objects/links/externalLink";
import internalLink from "./objects/links/internalLink";
import link from "./objects/links/link";
// Navigation
import navigationItem from "./objects/navigation/navigationItem";
import subPage from "./objects/navigation/subPage";
// Form fields
import checkbox from "./objects/form/checkbox";
import singleSelection from "./objects/form/singleSelection";
import textField from "./objects/form/textField";
// Other
import defaultField from "./objects/defaultField";
import field from "./objects/field";
import keyFigure from "./objects/keyFigure";
import imageWithAlt from "./objects/imageWithAlt";
import mainImage from "./objects/mainImage";
import personProfile from "./objects/personProfile";
import product from "./objects/product";
import youtube from "./objects/youtube";

// Then we give our schema to the builder and provide the result to Sanity
export default [
  /* Your types here! */
  // Document types
  blogCategory,
  blogPost,
  blogSettings,
  company,
  contactForm,
  event,
  eventCategory,
  eventRegistrationForm,
  eventSettings,
  location,
  job,
  jobCategory,
  jobType,
  legalDocument,
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
  formSection,
  futureEventsSection,
  heroSection,
  jobsSection,
  keyFigureSection,
  mainPartnersSection,
  partnersSection,
  peopleProfilesSection,
  productsSection,
  smallPeopleGroup,
  smallPeopleSection,
  textSection,
  pastEventsSection,
  eventLink,
  externalLink,
  internalLink,
  link,
  navigationItem,
  subPage,
  checkbox,
  singleSelection,
  textField,
  defaultField,
  field,
  keyFigure,
  imageWithAlt,
  mainImage,
  personProfile,
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
]

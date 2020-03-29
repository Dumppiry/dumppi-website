export default {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    {
      name: "page",
      title: "Page",
      type: "reference",
      to: [
        { type: "page" },
        { type: "frontPage" },
        { type: "eventsPage" },
        { type: "benefitsPage" }
      ]
    },
    {
      name: "subPages",
      title: "Sub Pages",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }, { type: "frontPage" }, { type: "eventsPage" }]
        }
      ]
    }
  ],
  preview: {
    select: {
      page: "page.title.fi",
      subPage0: "subPages.0.title.fi",
      subPage1: "subPages.1.title.fi",
      subPage2: "subPages.2.title.fi",
      subPage3: "subPages.3.title.fi",
      subPage4: "subPages.4.title.fi",
      subPage5: "subPages.5.title.fi",
      subPage6: "subPages.6.title.fi"
    },
    prepare({
      page,
      subPage0,
      subPage1,
      subPage2,
      subPage3,
      subPage4,
      subPage5,
      subPage6
    }) {
      const subtitle = [
        subPage0,
        subPage1,
        subPage2,
        subPage3,
        subPage4,
        subPage5
      ]
        .filter(Boolean)
        .join(", ");

      return {
        title: page,
        subtitle: subPage6 ? `${subtitle} and more` : subtitle
      };
    }
  }
};

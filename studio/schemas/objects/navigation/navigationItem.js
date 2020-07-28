import linkableItems from "../../utils/linkableItems";

export default {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    {
      name: "page",
      title: "Page",
      type: "reference",
      to: linkableItems,
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const pageId = field._ref;
          const { document: doc, parent } = context;

          const allTopLevelItemIds = doc.topLevelItems
            .filter((tl) => tl._key !== parent._key)
            .map((tl) => tl.page._ref);
          const allSubLevelItemIds = doc.topLevelItems
            .map((tl) => tl.subPages?.map((sp) => sp.page._ref))
            .filter(Boolean)
            .flat();
          const allItemIds = [...allTopLevelItemIds, ...allSubLevelItemIds];

          return allItemIds.includes(pageId) ? "Duplicate item" : true;
        }),
    },
    {
      name: "subPages",
      title: "Sub Pages",
      type: "array",
      of: [{ type: "subPage" }],
    },
  ],
  preview: {
    select: {
      page: "page.title.fi",
      subPage0: "subPages.0.page.title.fi",
      subPage1: "subPages.1.page.title.fi",
      subPage2: "subPages.2.page.title.fi",
      subPage3: "subPages.3.page.title.fi",
      subPage4: "subPages.4.page.title.fi",
      subPage5: "subPages.5.page.title.fi",
      subPage6: "subPages.6.page.title.fi",
    },
    prepare({
      page,
      subPage0,
      subPage1,
      subPage2,
      subPage3,
      subPage4,
      subPage5,
      subPage6,
    }) {
      const subtitle = [
        subPage0,
        subPage1,
        subPage2,
        subPage3,
        subPage4,
        subPage5,
      ]
        .filter(Boolean)
        .join(", ");

      return {
        title: page,
        subtitle: subPage6 ? `${subtitle} and more` : subtitle,
      };
    },
  },
};

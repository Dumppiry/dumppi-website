export default {
  name: "subPage",
  title: "Sub Page",
  type: "object",
  fields: [
    {
      name: "page",
      title: "Page",
      type: "reference",
      to: [{ type: "page" }, { type: "eventsPage" }, { type: "benefitsPage" }],
      validation: (Rule) => {
        return Rule.custom((field, context) => {
          const pageId = field._ref;
          // Key of the item in an array.
          // This used to not show validation error on self.
          const subPageKey = context.parent._key;
          const { document: doc } = context;

          const allTopLevelItemIds = doc.topLevelItems.map(
            (tl) => tl.page._ref
          );

          const allSubLevelItemIds = doc.topLevelItems
            .map((tl) =>
              tl.subPages
                ?.filter((sp) => sp._key !== subPageKey) // Filter out self
                .map((sp) => sp.page._ref)
            )
            .filter(Boolean)
            .flat();

          const allItemIds = [...allTopLevelItemIds, ...allSubLevelItemIds];

          return allItemIds.includes(pageId) ? "Duplicate item" : true;
        });
      },
    },
    {
      name: "showInSubNavigation",
      title: "Show in subnavigation",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "page.title.fi",
      showInSubNav: "showInSubNavigation",
    },
    prepare({ title, showInSubNav }) {
      return {
        title,
        subtitle: showInSubNav ? "In subnav" : "Not in subnav",
      };
    },
  },
};
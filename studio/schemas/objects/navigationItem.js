export default {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    {
      name: "page",
      title: "Page",
      type: "reference",
      to: [{ type: "page" }]
    },
    {
      name: "subPages",
      title: "Sub Pages",
      type: "array",
      of: [{ type: "reference", to: [{ type: "page" }] }]
    }
  ]
};

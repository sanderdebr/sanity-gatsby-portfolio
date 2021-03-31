export default {
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "Keywords",
      title: "keywords",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

import { FiEdit } from "react-icons/fi";

export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  icon: FiEdit,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishDate",
      title: "Publish date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "blogCategory" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "person" }] }],
      validation: (Rule) =>
        Rule.min(1).warning(
          "Assigning an author or two makes the text nicer to read."
        ),
    },
    {
      name: "image",
      title: "Image",
      type: "imageWithAlt",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      description: "Short preview text",
      type: "text",
      validation: (Rule) => [
        Rule.required().min(50),
        Rule.max(200).warning("A bit shorter text would be nicer."),
        Rule.max(250).error(
          "Please write a shorter excerpt, max. 250 characters."
        ),
      ],
    },
    {
      name: "content",
      title: "Post content",
      type: "portableText",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title.fi",
      media: "image",
    },
  },
};

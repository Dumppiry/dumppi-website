import React from "react"

const BlogCard = ({ title, excerpt, category }) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{category.title}</p>
      <p>{excerpt}</p>
    </article>
  )
}

export default BlogCard

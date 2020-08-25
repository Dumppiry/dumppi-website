import React from "react"
import styled from "styled-components"

import BlogCard from "../../components/blog/blog-card"

const BlogList = ({ posts, emptyString }) => {
  return posts.nodes.length <= 0 ? (
    <h2>{emptyString}</h2>
  ) : (
    <S.List>
      {posts.nodes.map((post) => {
        return (
          <S.ListItem>
            <BlogCard
              key={post._id}
              _id={post._id}
              title={post.title}
              excerpt={post.excerpt}
              publishDate={post.publishDate}
              category={post.category}
              image={post.image}
            />
          </S.ListItem>
        )
      })}
    </S.List>
  )
}

export default BlogList

const S = {}

S.List = styled.ul`
  --grid-columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 2rem;
  margin: 0;

  @media (min-width: 575px) {
    --grid-columns: 2;
  }
`

S.ListItem = styled.li`
  list-style: none;
  display: flex;
`

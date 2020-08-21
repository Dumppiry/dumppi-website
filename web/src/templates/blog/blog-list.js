import React from "react"

const BlogList = ({ data }) => {
  return (
    <div>
      <h2>Posts</h2>
      {data.posts.nodes.map((post) => {
        return (
          <article>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </article>
        )
      })}
    </div>
  )
}

export default BlogList

export const query = graphql`
  query BlogListTemplateQuery {
    posts: allSanityBlogPost {
      nodes {
        _id
        title
        authors {
          _id
          name
        }
        category {
          title {
            __typename
            fi
            en
          }
          color {
            hex
          }
        }
        excerpt
      }
    }
  }
`

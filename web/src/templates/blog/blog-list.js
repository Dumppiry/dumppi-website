import React, { useEffect } from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BlogCard from "../../components/blog/blog-card"

import SectionBlockContent from "../../sections/section-block-content"

import { useCurrentPage } from "../../hooks/current-page"
import localize from "../../hoc/localize"

const BlogList = ({ data, pageContext }) => {
  const { page, posts } = data
  const { setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    setCurrentPageId(pageContext.id)
  })

  return (
    <Layout page={page}>
      <SEO title={page.title} />
      <S.Content>
        <SectionBlockContent blocks={page.content} />
        {posts.nodes.map((post) => {
          return (
            <BlogCard
              key={post._id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
            />
          )
        })}
      </S.Content>
    </Layout>
  )
}

export default localize(BlogList)

export const query = graphql`
  query BlogListTemplateQuery {
    settings: sanityBlogSettings {
      image {
        asset {
          _id
        }
        alt {
          _type
          fi
          en
        }
      }
    }
    page: sanityPage(_id: { regex: "/(drafts.|)blogPage/" }) {
      _id
      _type
      title {
        _type
        en
        fi
      }
      content: _rawContent(resolveReferences: { maxDepth: 8 })
    }
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
            _type
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

const S = {}

S.Content = styled.div`
  margin: 3rem 0;
`

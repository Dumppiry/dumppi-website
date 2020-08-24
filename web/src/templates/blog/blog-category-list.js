import React, { useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BlogList from "../../components/blog/blog-list"

import { useCurrentPage } from "../../hooks/current-page"
import localize from "../../hoc/localize"

const BlogCategoryListTemplate = ({ data, pageContext }) => {
  const { category, posts } = data
  const { parent, subNavigationItems } = pageContext

  const { setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    setCurrentPageId(pageContext.id)
  })

  return (
    <Layout page={parent} subNavItems={subNavigationItems}>
      <SEO title={category.title} />
      <S.Content>
        <BlogList posts={posts} />
      </S.Content>
    </Layout>
  )
}

export default localize(BlogCategoryListTemplate)

export const query = graphql`
  query BlogCategoryListTemplateQuery($locale: String!, $id: String) {
    category: sanityBlogCategory(_id: { eq: $id }) {
      _id
      title {
        _type
        fi
        en
      }
    }
    posts: allSanityBlogPost(
      filter: { category: { _id: { eq: $id } } }
      sort: { fields: publishDate, order: DESC }
    ) {
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
        publishDate(fromNow: true, locale: $locale)
        image {
          asset {
            _id
          }
        }
      }
    }
  }
`

const S = {}

S.Content = styled.div`
  margin: 3rem 0;
`

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
        <S.Heading>
          <h2>{category.title}</h2>
          <p>{category.description}</p>
        </S.Heading>
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
      description {
        _type
        en
        fi
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

S.Heading = styled.div`
  h2 {
    margin: 1rem 0;
    font-size: min(10vw, 3.75rem);
    color: #2c2c2c;
  }
  p {
    margin: 1.5rem 0;
    font-size: min(4vw, 1.25rem);
    color: #949494;
  }
`

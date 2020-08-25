import React, { useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BlogList from "../../components/blog/blog-list"

import SectionBlockContent from "../../sections/section-block-content"

import { useCurrentPage } from "../../hooks/current-page"
import localize from "../../hoc/localize"
import urlFor from "../../utils/url-for"

const BlogListTemplate = ({ data, pageContext }) => {
  const { page, posts, settings } = data
  const { subNavigationItems } = pageContext
  const { setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    setCurrentPageId(pageContext.id)
  })

  return (
    <Layout page={page} subNavItems={subNavigationItems}>
      <SEO title={page.title} />
      <S.Content>
        <SectionBlockContent blocks={page.content} />
        <BlogList posts={posts} />
      </S.Content>
    </Layout>
  )
}

export default localize(BlogListTemplate)

export const query = graphql`
  query BlogListTemplateQuery($locale: String!) {
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
    posts: allSanityBlogPost(sort: { fields: publishDate, order: DESC }) {
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

S.Content = styled.div``

S.Img = styled.img`
  margin: 3rem 0;
  border-radius: 0.625rem;
  max-height: 50vh;
`

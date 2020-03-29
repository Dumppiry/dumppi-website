import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import localize from "../hoc/localize"
import { useCurrentPage } from "../hooks/current-page"

import SectionBlockContent from "../sections/section-block-content"
import BigHeadingSection from "../sections/big-heading-section"

const PageTemplate = ({ data, pageContext, ...rest }) => {
  const { _id, title, image, content, hero } = data.page
  const { setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    setCurrentPageId(_id)
  })

  return (
    <Layout>
      <SEO title={title} />
      <S.Img fluid={image.asset.fluid} />
      <S.Content>
        <BigHeadingSection {...hero} />
        <SectionBlockContent blocks={content} />
      </S.Content>
    </Layout>
  )
}

export default localize(PageTemplate)

export const query = graphql`
  query FrontPageTemplateQuery {
    page: sanityFrontPage {
      _id
      _type
      title {
        _type
        en
        fi
      }
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      hero: _rawHero(resolveReferences: { maxDepth: 8 })
      content: _rawContent(resolveReferences: { maxDepth: 8 })
    }
  }
`

const S = {}

S.Img = styled(Img)`
  width: 100vw;
  min-height: 500px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-height: 40vh;
`

S.Content = styled.div`
  margin-top: -250px;
  position: relative;
`

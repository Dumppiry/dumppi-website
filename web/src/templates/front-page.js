import React, { useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import localize from "../hoc/localize"
import { useCurrentPage } from "../hooks/current-page"

import SectionBlockContent from "../sections/section-block-content"
import BigHeadingSection from "../sections/big-heading-section"

import urlFor from "../utils/url-for"

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
      {/* <S.Img fluid={image.asset.fluid} /> */}
      <S.Img src={urlFor(image).height(800).width(2200).fit("crop").url()} />
      <S.Content>
        <BigHeadingSection {...hero} isFrontPage />
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
          _id
          metadata {
            lqip
          }
        }
        crop {
          top
          bottom
          left
          right
        }
        hotspot {
          x
          y
          height
          width
        }
      }
      hero: _rawHero(resolveReferences: { maxDepth: 8 })
      content: _rawContent(resolveReferences: { maxDepth: 8 })
    }
  }
`

const S = {}

S.Img = styled.img`
  min-height: 500px;
  max-height: 40vh;
  width: 100vw;
  min-width: 100vw;
  margin-left: calc(50% - 50vw);
  object-fit: cover;
`

S.Content = styled.div`
  margin-top: -250px;
  position: relative;
`

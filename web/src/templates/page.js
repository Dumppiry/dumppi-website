import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import localize from "../hoc/localize"
import { useCurrentPage } from "../hooks/current-page"

import SectionBlockContent from "../sections/section-block-content"
import EventList from "../components/event-list"

const PageTemplate = ({ data, pageContext, ...rest }) => {
  const { _id, title, content } = data.page
  const { setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    setCurrentPageId(_id)
  })

  return (
    <Layout>
      <SEO title={title} />
      <SectionBlockContent blocks={content} />
      <EventList events={data.events.nodes} />
    </Layout>
  )
}

export default localize(PageTemplate)

export const query = graphql`
  query PageTemplateQuery($id: String!, $locale: String!) {
    page: sanityPage(_id: { eq: $id }) {
      _id
      _type
      title {
        _type
        en
        fi
      }
      content: _rawContent(resolveReferences: { maxDepth: 5 })
    }
    events: allSanityEvent(sort: { fields: startDate, order: ASC }) {
      nodes {
        _id
        title: _rawTitle
        slug: _rawSlug
        location: _rawLocation(resolveReferences: { maxDepth: 1 })
        image {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
        startDate
        endDate
        fStartDate: startDate(formatString: "dddd DD.MM. LT", locale: $locale)
        fEndDate: endDate(formatString: "dddd DD.MM. LT", locale: $locale)
      }
    }
  }
`

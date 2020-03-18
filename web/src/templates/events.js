import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventList from "../components/event-list"

import localize from "../hoc/localize"
import { useCurrentPage } from "../hooks/current-page"

const EventTemplate = ({ data, pageContext, ...rest }) => {
  const { events } = data
  const { setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    // TODO: Keksi tälle jostain joku id, myös gatsby-node.js
    // setCurrentPageId(event._id)
  })

  return (
    <Layout>
      <SEO title="REPLACE THIS tapahtumat" />
      <EventList events={events} />
    </Layout>
  )
}

export default localize(EventTemplate)

export const query = graphql`
  query EventsTemplateQuery {
    events: allSanityEvent {
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
      }
    }
  }
`

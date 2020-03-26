import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventList from "../components/event-list"

import localize from "../hoc/localize"
import { useCurrentPage } from "../hooks/current-page"

const EventTemplate = ({ data, pageContext, ...rest }) => {
  const { events, page } = data
  const { setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    setCurrentPageId(page._id)
  })

  return (
    <Layout pageTitle={page.title}>
      <SEO title={page.title} />
      <EventList events={events} />
    </Layout>
  )
}

export default localize(EventTemplate)

export const query = graphql`
  query EventsTemplateQuery {
    page: sanityEventsPage {
      _id
      title: _rawTitle
    }
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
        hasRegistration
        registrationStartDate
        registrationEndDate
        registrationMaxCapacity
      }
    }
  }
`

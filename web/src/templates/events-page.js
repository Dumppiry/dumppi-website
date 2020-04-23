import React, { useEffect } from "react"
import { graphql } from "gatsby"
import isEmpty from "lodash/isEmpty"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventList from "../components/event-list"

import localize from "../hoc/localize"
import { useCurrentPage } from "../hooks/current-page"

const EventTemplate = ({ data, pageContext, ...rest }) => {
  const { events, page } = data
  const { parent, subNavigationItems } = pageContext
  const { setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    setCurrentPageId(page._id)
  })

  return (
    <Layout
      page={!isEmpty(parent) ? parent : page}
      subNavItems={subNavigationItems}
    >
      <SEO title={page.title} />
      <EventList events={events} />
    </Layout>
  )
}

export default localize(EventTemplate)

export const query = graphql`
  query EventsTemplateQuery($locale: String!) {
    page: sanityEventsPage {
      _id
      title: _rawTitle
    }
    events: allSanityEvent(sort: { fields: startDate, order: ASC }) {
      nodes {
        _id
        title: _rawTitle
        slug: _rawSlug
        location: _rawLocation(resolveReferences: { maxDepth: 1 })
        image {
          asset {
            _id
          }
        }
        startDate
        endDate
        hasRegistration
        registrationStartDate
        registrationEndDate
        registrationMaxCapacity
        month: startDate(formatString: "MMMM YYYY", locale: $locale)
      }
    }
  }
`

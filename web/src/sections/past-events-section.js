import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import EventList from "../components/event-list"

import { useCurrentPage } from "../hooks/current-page"

const EVENTS_QUERY = graphql`
  query PastEventsQuery {
    events: allSanityEvent(sort: { fields: startDate, order: DESC }) {
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
        price
        hasRegistration
        registrationStartDate
        registrationEndDate
        registrationMaxCapacity
      }
    }
    settings: sanityEventSettings {
      noEventsText {
        fi
        en
      }
    }
  }
`

// a handy roundabout
const addMonth = (events, locale) => {
  return {
    nodes: [
      ...events
        .filter((e) => new Date(e.startDate) < new Date())
        .map((e) => ({
          ...e,
          month: new Date(e.startDate).toLocaleDateString(locale, {
            month: "long",
            year: "numeric",
          }),
        })),
    ],
  }
}

const PastEventsSection = ({ heading, ...rest }) => {
  const { locale } = useCurrentPage()
  const data = useStaticQuery(EVENTS_QUERY)
  const events = addMonth(data.events.nodes, locale)

  return <EventList events={events} showPast />
}

export default PastEventsSection

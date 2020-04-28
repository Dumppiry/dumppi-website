import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import axios from "axios"
import _ from "lodash"

import EventCard from "../event-card"
import List from "./list"
import MonthsList from "./months-list"

import { useCurrentPage } from "../../hooks/current-page"

const EVENTS_QUERY = graphql`
  query EventsQuery {
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

const addSubmissionCount = (events, submissions) => {
  return events.map((event) => ({
    ...event,
    submissionCount: submissions?.find(
      (submission) => submission._id === event._id
    ).submissionCount,
  }))
}

const EventList = ({ events, showPast, ...rest }) => {
  const { locale } = useCurrentPage()
  const data = useStaticQuery(EVENTS_QUERY)

  const [submissions, setSubmissions] = useState(null)
  useEffect(() => {
    const eventIds = events
      ? events.nodes.map((event) => event._id)
      : data.events.nodes.map((event) => event._id)
    axios
      .get(
        `/.netlify/functions/get-event-attendee-counts?eventIds=${eventIds.join(
          ","
        )}`
      )
      .then(({ data }) => {
        if (_.isArray(data)) setSubmissions(data)
      })
  }, [])

  return events ? (
    <MonthsList
      events={addSubmissionCount(events.nodes, submissions)}
      locale={locale}
      noEventsText={data.settings.noEventsText}
      showPast={showPast}
      {...rest}
    />
  ) : (
    <NextEvents
      events={addSubmissionCount(data.events.nodes, submissions)}
      locale={locale}
      {...rest}
    />
  )
}

export default EventList

const NextEvents = ({ events, locale, ...rest }) => {
  return (
    <List {...rest}>
      {events
        .filter((event) => new Date(event.startDate) > new Date())
        .slice(0, 3)
        .map((event) => (
          <EventCard key={event._id} {...event} title={event.title[locale]} />
        ))}
    </List>
  )
}

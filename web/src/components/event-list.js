import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import _ from "lodash"
import moment from "moment"
// for some reason this needs to be imported, lol :D
import "moment/locale/fi"

import EventCard from "./event-card"

import { useCurrentPage } from "../hooks/current-page"

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

const getAllMonths = (start, end, locale) => {
  moment.locale(locale)
  const startDate = moment(start)
  const endDate = moment(end)
  let dates = []

  let month = moment(startDate) //clone the startDate

  while (month.month() <= endDate.month()) {
    dates.push(month.format("MMMM YYYY"))
    month.add(1, "month")
  }
  return dates
}

const includeEmptyMonths = (months, eventsByMonths) => {
  let monthsObj = _.keyBy(months, m => m)
  _.keys(monthsObj).map(
    key =>
      (monthsObj[key] = eventsByMonths.hasOwnProperty(key)
        ? eventsByMonths[key]
        : [])
  )
  return monthsObj
}

const EventList = ({ events, ...rest }) => {
  const { locale } = useCurrentPage()
  const data = useStaticQuery(EVENTS_QUERY)
  const months =
    events &&
    getAllMonths(
      events.nodes[0].startDate,
      events.nodes[events.nodes.length - 1].startDate,
      locale
    )

  let eventData = events
    ? _.groupBy(
        events.nodes.filter(n => new Date(n.startDate) > new Date()),
        n => n.month
      ) // { march: [], april: [] ...}
    : data.events.nodes
  if (months) eventData = includeEmptyMonths(months, eventData)

  return events ? (
    _.keys(eventData).map(month => (
      <S.Container>
        <S.Title hasMargin>{month}</S.Title>
        {eventData[month].length === 0 ? (
          <p>{data.settings.noEventsText[locale]}</p>
        ) : (
          <S.List {...rest}>
            {eventData[month].map(event => (
              <EventCard key={event._id} {...event} title={event.title} />
            ))}
          </S.List>
        )}
      </S.Container>
    ))
  ) : (
    <S.List {...rest}>
      {eventData
        .filter(event => new Date(event.startDate) > new Date())
        .slice(0, 3)
        .map(event => (
          <EventCard key={event._id} {...event} title={event.title[locale]} />
        ))}
    </S.List>
  )
}

export default EventList

const S = {}

S.List = styled.div`
  --grid-columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 2rem;

  @media (min-width: 575px) {
    --grid-columns: 2;
  }
  @media (min-width: 768px) {
    --grid-columns: 3;
  }
`

S.Title = styled.h1`
  text-transform: capitalize;
`
S.Container = styled.div`
  margin-top: 5rem;
`

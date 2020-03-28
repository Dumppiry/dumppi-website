import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import _ from "lodash"

import EventCard from "./event-card"
import PortableText from "../components/portable-text/heading"

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
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
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
  }
`

const EventList = ({ events, ...rest }) => {
  const { locale } = useCurrentPage()
  const data = useStaticQuery(EVENTS_QUERY)

  const eventData = events
    ? _.groupBy(events.nodes, n => n.month) // { march: [], april: [] ...}
    : data.events.nodes

  return events ? (
    _.keys(eventData).map(month => (
      <S.Container>
        <S.Title hasMargin>{month}</S.Title>
        <S.List {...rest}>
          {eventData[month].map(event => (
            <EventCard key={event._id} {...event} title={event.title[locale]} />
          ))}
        </S.List>
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

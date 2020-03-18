import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import EventCard from "./event-card"

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
      }
    }
  }
`

const EventList = () => {
  const { events } = useStaticQuery(EVENTS_QUERY)
  return (
    <S.List>
      {events.nodes
        .filter(event => new Date(event.startDate) > new Date())
        .slice(0, 3)
        .map(event => (
          <EventCard key={event._id} event={event} />
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

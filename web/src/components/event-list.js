import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

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

const EventList = ({ type }) => {
  const { locale } = useCurrentPage()
  const { events } = useStaticQuery(EVENTS_QUERY)

  return (
    <S.Container>
      <S.List>
        {events.nodes
          ?.filter((e) => {
            const end = new Date(e.endDate)
            const now = new Date()

            switch (type) {
              case "allFuture":
              case "nextThree":
                return end >= now

              case "allPast":
                return end < now

              default:
                return end >= now
            }
          })
          .slice(0, type === "nextThree" ? 3 : undefined)
          .sort(type === "allPast" ? (a, b) => a - b : undefined)
          .map((event) => (
            <EventCard key={event._id} {...event} title={event.title[locale]} />
          ))}
      </S.List>
    </S.Container>
  )
}

EventList.propTypes = {
  type: PropTypes.oneOf(["allFuture", "allPast", "nextThree"]).isRequired,
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
  margin: 3rem 0;
`

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import PortableText from "../components/portable-text/heading"
import EventList from "../components/event-list"
import ButtonLink from "../components/button-link"

import { useCurrentPage } from "../hooks/current-page"

const FUTURE_EVENTS_QUERY = graphql`
  query FutureEventsSectionQuery {
    eventsPage: sanityEventsPage {
      _id
    }
    settings: sanityEventSettings {
      readMoreText {
        fi
        en
      }
    }
  }
`

const FutureEventsSection = ({ heading }) => {
  const { eventsPage, settings } = useStaticQuery(FUTURE_EVENTS_QUERY)
  const { locale } = useCurrentPage()

  return (
    <S.Section>
      <PortableText blocks={heading} />
      <S.EventList type="nextThree" />
      <S.ButtonLink
        title={settings.readMoreText[locale]}
        link={{ _type: "internalLink", page: { _id: eventsPage._id } }}
      />
    </S.Section>
  )
}

export default FutureEventsSection

const S = {}

S.Section = styled.section`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
`

S.EventList = styled(EventList)`
  margin: 2.5rem 0;
`

S.ButtonLink = styled(ButtonLink)`
  align-self: center;
`

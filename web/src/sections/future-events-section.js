import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import PortableText from "../components/portable-text/heading"
import EventList from "../components/event-list"
import Link from "../components/link"
import Button from "../components/button"
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
      <S.EventList />
      <S.ButtonLink page={eventsPage} title={settings.readMoreText[locale]} />
    </S.Section>
  )
}

export default FutureEventsSection

const S = {}

S.Section = styled.section`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 1.25rem 0;
    font-size: 2.5rem;
    color: #2c2c2c;
  }
  p {
    margin: 1.25rem 0;
    font-size: 1.25rem;
    color: #949494;
  }
`

S.EventList = styled(EventList)`
  margin-top: 5rem;
  margin-bottom: 2.5rem;
`

S.ButtonLink = styled(ButtonLink)`
  align-self: center;
`

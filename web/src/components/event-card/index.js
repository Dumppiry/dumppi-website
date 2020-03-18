import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { useCurrentPage } from "../../hooks/current-page"
import Link from "../link"

const EVENT_SETTINGS_QUERY = graphql`
  query EventSettingsQuery {
    settings: sanityEventSettings {
      readMoreText {
        fi
        en
      }
    }
  }
`

const EventCard = ({ event }) => {
  const { locale } = useCurrentPage()
  const { settings } = useStaticQuery(EVENT_SETTINGS_QUERY)

  const options = {
    weekday: "long",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }

  return (
    <S.Container>
      <S.EventImage fluid={event.image.asset.fluid} />
      <S.EventInfo>
        {event.startDate && (
          <S.AdditionalInfo>
            {new Intl.DateTimeFormat(locale, options).format(
              new Date(event.startDate)
            )}
          </S.AdditionalInfo>
        )}
        <S.Name>{event.title[locale]}</S.Name>
        {event.location?.title && (
          <S.AdditionalInfo>{`@ ${event.location.title}`}</S.AdditionalInfo>
        )}
        <S.Link id={event._id} locale={locale}>
          {settings.readMoreText[locale]} ->
        </S.Link>
      </S.EventInfo>
      <S.StatusBar status={event.status} />
    </S.Container>
  )
}

export default EventCard

const S = {}

S.Container = styled.article`
  height: 410px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 5px 40px 0 #f0f0f0;
`
S.EventImage = styled(Img)`
  width: 100%;
  height: 42%;
  border-radius: 10px 10px 0 0;
`

S.EventInfo = styled.div`
  height: 55%;
  display: flex;
  flex-direction: column;
  padding: 25px 25px 0 25px;
`
S.Name = styled.span`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
`
S.AdditionalInfo = styled.span`
  color: #949494;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.31px;
  line-height: 17px;

  /* Capitalize the first letter because of Intl stuff */
  &::first-letter {
    text-transform: uppercase;
  }
`

S.Link = styled(Link)`
  height: 20px;
  color: #af271d;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 20px;
  margin-top: 20px;
  cursor: pointer;
`

const statusColors = {
  open: "#54c754",
  free: "#437ad3",
  full: "#af271d",
}

S.StatusBar = styled.div`
  width: 100%;
  height: 13%;
  background-color: ${({ status }) => statusColors[status] || "#f0f0f0"};
  border-radius: 0 0 10px 10px;
`

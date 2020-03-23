import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from "styled-components"
import { FiUserCheck, FiUserX } from "react-icons/fi"

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

  const status = event.price === 0 || !event.price ? "free" : event.status

  return (
    <S.Container>
      <S.EventImage fluid={event.image?.asset.fluid} />
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
      <S.StatusBar status={status}>
        {status === "free" ? (
          <>
            <S.Icon>
              <FiUserCheck />
            </S.Icon>
            <span>Kukkuu</span>
          </>
        ) : (
          <>
            <S.Icon>
              <FiUserX />
            </S.Icon>
            <span>Kukkuu</span>
          </>
        )}
      </S.StatusBar>
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.5rem;
`
S.Name = styled.h4`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
  margin: 0.35em 0;
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
  margin-top: auto;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 20px;
  color: #af271d;
  text-decoration: none;
  cursor: pointer;
`

const statusColors = {
  open: "#54c754",
  free: "#437ad3",
  full: "#af271d",
}

const FreeStyles = css`
  background-color: ${() => statusColors.free};
  color: white;
`

S.StatusBar = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 0 0 10px 10px;
  padding: 1rem 1.5rem;
  color: #2c2c2c;

  ${props => props.status === "free" && FreeStyles}
`

S.Icon = styled.span`
  margin-right: 0.5em;
`

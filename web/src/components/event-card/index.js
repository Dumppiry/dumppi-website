import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import styled from "styled-components"

import { sanity } from "../../../client-config"

import { useCurrentPage } from "../../hooks/current-page"
import Link from "../link"
import EventStatus from "./event-status"

const EVENT_SETTINGS_QUERY = graphql`
  query EventSettingsQuery {
    settings: sanityEventSettings {
      readMoreText {
        fi
        en
      }
      placeholderEventImage {
        asset {
          _id
        }
      }
    }
  }
`

const EventCard = ({
  _id,
  image,
  title,
  startDate,
  endDate,
  location,
  price,
  hasRegistration,
  registrationStartDate,
  registrationEndDate,
  registrationMaxCapacity,
}) => {
  const { locale } = useCurrentPage()
  const { settings } = useStaticQuery(EVENT_SETTINGS_QUERY)

  const fluidProps = getFluidGatsbyImage(
    image?.asset?._id ?? settings.placeholderEventImage.asset._id,
    { maxWidth: 290 },
    sanity
  )

  const options = {
    weekday: "long",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }
  const dateTimeFormat = new Intl.DateTimeFormat(locale, options)
  const localizeDate = dateString => dateTimeFormat.format(new Date(dateString))

  return (
    <S.Container id={_id}>
      <S.EventImage fluid={fluidProps} />
      <S.EventInfo>
        {startDate && (
          <S.AdditionalInfo>{localizeDate(startDate)}</S.AdditionalInfo>
        )}
        <S.Name>{title}</S.Name>
        {location?.title && (
          <S.AdditionalInfo>{`@ ${location.title}`}</S.AdditionalInfo>
        )}
        <S.ReadMore>{settings.readMoreText[locale]} -></S.ReadMore>
      </S.EventInfo>
      <EventStatus
        {...{
          price,
          hasRegistration,
          registrationStartDate,
          registrationEndDate,
          registrationMaxCapacity,
        }}
      />
    </S.Container>
  )
}

export default EventCard

const S = {}

S.Container = styled(Link)`
  height: 410px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 5px 40px 0 #f0f0f0;
  transition: all 200ms ease-in-out;
  text-decoration: none;

  :hover {
    box-shadow: 0 5px 40px 10px #f0f0f0;
    transform: translateY(-3px);
  }
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

S.ReadMore = styled.span`
  margin-top: auto;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 20px;
  color: #af271d;
`

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FiMapPin } from "react-icons/fi"
import styled, { css } from "styled-components"

import EventRegistration from "./event-registration"
import PortableText from "../components/block-content"
import { ExternalLink } from "../components/link"
import { useCurrentPage } from "../hooks/current-page"

const TRANSLATIONS_QUERY = graphql`
  query EventTranslationsQuery {
    translations: sanityEventSettings {
      time: _rawTime
      location: _rawLocation
      price: _rawPrice
      links: _rawLinks
      category: _rawCategory
      contactPerson: _rawContactPerson
    }
  }
`

const Event = props => {
  const {
    _id,
    title,
    image,
    description,
    location,
    category,
    price,
    startDate,
    endDate,
    links,
    contactPerson,
    registrationDefaultFields,
    hasRegistration,
    registrationStartDate,
    registrationEndDate,
    registrationMaxCapacity,
    registrationForm,
  } = props

  const { locale } = useCurrentPage()
  const { translations } = useStaticQuery(TRANSLATIONS_QUERY)

  return (
    <S.Event>
      {image?.asset && <S.Img fluid={image?.asset.fluid} />}
      <h1>{title}</h1>
      <S.Meta>
        <S.Card>
          <S.CardTitle>{translations.time[locale]}</S.CardTitle>
          <S.CardSubtitle>
            {new Date(startDate).toLocaleDateString(locale, {
              weekday: "long",
              day: "2-digit",
              month: "2-digit",
            })}
          </S.CardSubtitle>
          <S.CardText>
            {new Date(startDate).toLocaleTimeString(
              locale === "fi" ? [] : locale, //sorry, but this works
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}
          </S.CardText>
        </S.Card>
        {location && (
          <S.Card>
            {" "}
            <S.CardTitle>{translations.location[locale]}</S.CardTitle>
            <S.CardSubtitle>
              <FiMapPin /> {location.title}
            </S.CardSubtitle>
            {location.address && <S.CardText>{location.address}</S.CardText>}
          </S.Card>
        )}
        {typeof price === "number" && (
          <S.Card>
            <S.CardTitle>{translations.price[locale]}</S.CardTitle>
            <S.CardSubtitle huge>{price.toFixed(2)} €</S.CardSubtitle>
          </S.Card>
        )}
        {links?.length > 0 && (
          <S.Card>
            <S.CardTitle>{translations.links[locale]}</S.CardTitle>
            {links.map(link => (
              <S.CardLink href={link.url}>{link.title}</S.CardLink>
            ))}
          </S.Card>
        )}
        {category?.title && (
          <S.Card>
            <S.CardTitle>{translations.category[locale]}</S.CardTitle>
            <S.CardSubtitle>{category.title}</S.CardSubtitle>
          </S.Card>
        )}
        {contactPerson?.name && (
          <S.Card>
            <S.CardTitle>{translations.contactPerson[locale]}</S.CardTitle>
            <S.CardSubtitle>{contactPerson.name}</S.CardSubtitle>
            <S.EmailLink href={`mailto:${contactPerson.email}`}>
              {contactPerson.email}
            </S.EmailLink>
          </S.Card>
        )}
      </S.Meta>
      <S.Content>
        <h2>Tapahtuman kuvaus:</h2>
        <PortableText blocks={description} />
        {hasRegistration && (
          <EventRegistration
            eventId={_id}
            startDate={registrationStartDate}
            endDate={registrationEndDate}
            maxCapacity={registrationMaxCapacity}
            form={registrationForm}
            defaultFields={registrationDefaultFields}
          />
        )}
      </S.Content>
    </S.Event>
  )
}

export default Event

const S = {}

S.Event = styled.article`
  margin: 5rem 0;

  h1 {
    color: #2c2c2c;
    font-family: Inter;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: -0.87px;
    line-height: 49px;
  }
`

S.Content = styled.section`
  max-width: 570px;

  h2 {
    color: #2c2c2c;
    font-family: Inter;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -0.7px;
    line-height: 39px;
  }
`

S.Img = styled(Img)`
  margin: 5rem 0;
  border-radius: 0.625rem;
  max-height: 50vh;
`

S.Meta = styled.div`
  --grid-columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 2.5rem 2.75rem;
  margin: 2.5rem 0 5rem;

  @media (min-width: 640px) {
    --grid-columns: 2;
  }
  @media (min-width: 991px) {
    --grid-columns: 3;
  }
`

S.Card = styled.div`
  box-sizing: border-box;
  padding: 2.2rem 2.75rem;
  border: 2px solid #e3e3e3;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
`

S.CardTitle = styled.span`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
  margin-bottom: 1.2rem;
`

const SubtitleStyles = css`
  color: #af271d;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;

  margin: 0.15rem 0;
`

S.CardSubtitle = styled.span`
  ${SubtitleStyles}

  ${props =>
    props.huge &&
    css`
      font-size: 42px;
      letter-spacing: -1.09px;
      line-height: 1;
    `}
`

S.CardLink = styled(ExternalLink)`
  ${SubtitleStyles}
  margin-bottom: 1rem;
  text-decoration: none;
  transition: color 200ms ease-in-out;

  :hover {
    color: #8a1e16;
  }
`

const TextStyles = css`
  color: #949494;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.44px;
  line-height: 24px;

  margin: 0.15rem 0;
`

S.CardText = styled.span`
  ${TextStyles}
`

S.EmailLink = styled(ExternalLink)`
  ${TextStyles}
  text-decoration: none;
  transition: color 200ms ease-in-out;
  :hover {
    color: #666;
  }
`

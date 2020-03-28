import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import PortableText from "../components/block-content"
import EventRegistration from "./event-registration"

const Event = props => {
  const {
    _id,
    title,
    image,
    description,
    location,
    category,
    price,
    contactPerson,
    hasRegistration,
    registrationStartDate,
    registrationEndDate,
    registrationMaxCapacity,
    registrationForm,
  } = props

  return (
    <S.Event>
      <S.Img fluid={image.asset.fluid} />
      <h1>{title}</h1>
      {location && <h3>{location.title}</h3>}
      {category && <h3>{category.title}</h3>}
      {typeof price === "number" && <h3>{price.toFixed(2)} €</h3>}
      {contactPerson && <h3>{contactPerson.name}</h3>}
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
          />
        )}
      </S.Content>
    </S.Event>
  )
}

export default Event

const S = {}

S.Event = styled.article``

S.Content = styled.section`
  max-width: 570px;
`

S.Img = styled(Img)`
  margin: 5rem 0;
  border-radius: 0.625rem;
  max-height: 50vh;
`

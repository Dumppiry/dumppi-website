import React, { useEffect, useState } from "react"
import axios from "axios"
import styled, { css } from "styled-components"

import RegistrationForm from "./registration-form"
import RegistrationSubmissions from "./registration-submissions"
import { useCurrentPage } from "../hooks/current-page"

const EventRegistration = ({
  eventId,
  startDate,
  endDate,
  maxCapacity,
  form,
  defaultFields,
}) => {
  const { locale } = useCurrentPage()
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    axios
      .get(`/.netlify/functions/get-event-attendees?eventId=${eventId}`)
      .then(({ data }) => {
        setSubmissions(data)
      })
  }, [])

  const handleRefresh = () => {
    axios
      .get(`/.netlify/functions/get-event-attendees?eventId=${eventId}`)
      .then(({ data }) => {
        setSubmissions(data)
      })
  }

  const localizeDate = dateString =>
    new Date(dateString).toLocaleString(locale, {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

  return (
    <S.Section>
      {/* // TODO: Translate */}
      <h2>Ilmoittautuminen:</h2>
      <p>
        HUOM! Ilmoittautumalla tapahtumaan hyväksyt ilmoittautumisen pelisäännöt
        sekä lisäämisesi tapahtumarekisteriin.
      </p>
      <S.Meta>
        <S.HeadingRed>Aukeaa:</S.HeadingRed>
        <S.Date>{localizeDate(startDate)}</S.Date>
      </S.Meta>
      <S.Meta>
        <S.HeadingRed>Sulkeutuu:</S.HeadingRed>
        <S.Date>{localizeDate(endDate)}</S.Date>
      </S.Meta>
      <S.NarrowContainer>
        <S.BarContainer>
          <S.Bar percentage={(submissions.length / maxCapacity) * 100} />
          <span>
            Ilmoittautuneita {submissions.length}/{maxCapacity}
          </span>
        </S.BarContainer>
        <RegistrationForm
          eventId={eventId}
          defaultFields={defaultFields}
          fields={form.fields}
          refresh={handleRefresh}
        />
        <RegistrationSubmissions submissions={submissions} />
      </S.NarrowContainer>
    </S.Section>
  )
}

export default EventRegistration

const S = {}

S.Section = styled.section`
  margin: 5rem 0;

  h2 {
    margin: 1.25rem 0;
    font-size: 2.5rem;
    color: #2c2c2c;
  }
  p {
    margin: 1.25rem 0;
  }
`

S.Meta = styled.p`
  font-size: 20px;
  letter-spacing: -0.44px;
  line-height: 24px;
`

S.HeadingRed = styled.span`
  color: #af271d;
  font-weight: 600;

  margin-right: 1em;
`

S.Date = styled.span`
  color: #2c2c2c;
  font-weight: 400;
`

S.NarrowContainer = styled.div`
  max-width: 470px;
`

S.BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.Bar = styled.div`
  margin: 0.625rem 0;
  width: 100%;
  height: 1.25rem;
  border-radius: 6px;
  background-color: #f0f0f0;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    max-width: 100%;
    width: ${props => props.percentage}%;
    height: 1.25rem;
    border-radius: 6px;
    transition: all 500ms ease-in-out;

    --bg-color: #54c754;
    ${props => {
      if (props.percentage <= 75)
        return css`
          --bg-color: #54c754;
        `

      if (props.percentage >= 100)
        return css`
          --bg-color: #af271d;
        `

      if (props.percentage > 75)
        return css`
          --bg-color: #437ad3;
        `
    }}
    background-color: var(--bg-color);
  }
`

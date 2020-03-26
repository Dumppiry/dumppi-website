import React from "react"
import styled, { css } from "styled-components"

import { useCurrentPage } from "../hooks/current-page"

const EventRegistration = ({ startDate, endDate, maxCapacity }) => {
  const { locale } = useCurrentPage()

  const attendeeCount = 14 // TODO: Calculate this

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
      <div>
        <S.Meta>
          <S.HeadingRed>Aukeaa:</S.HeadingRed>
          <S.Date>{localizeDate(startDate)}</S.Date>
        </S.Meta>
        <S.Meta>
          <S.HeadingRed>Sulkeutuu:</S.HeadingRed>
          <S.Date>{localizeDate(endDate)}</S.Date>
        </S.Meta>
        <S.BarContainer>
          <S.Bar percentage={(attendeeCount / maxCapacity) * 100} />
          <span>
            Ilmoittautuneita {attendeeCount}/{maxCapacity}
          </span>
        </S.BarContainer>
      </div>
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

S.BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 470px;
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

    --bg-color: #2c2c2c;
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

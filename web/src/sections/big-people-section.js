import React from "react"
import styled from "styled-components"

import PortableText from "../components/portable-text/heading"
import Person from "../components/big-person-card"

const BigPeopleSection = ({ heading, people }) => {
  return (
    <S.Section>
      <PortableText blocks={heading} />
      {people.length > 0 && (
        <S.People>
          {people.map((person) => (
            <Person key={person._id} person={person} />
          ))}
        </S.People>
      )}
    </S.Section>
  )
}

export default BigPeopleSection

const S = {}

S.Section = styled.section`
  margin: 5rem 0;
`

S.People = styled.div`
  --grid-columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 2rem;
  justify-items: center;

  @media (min-width: 575px) {
    --grid-columns: 2;
  }
  @media (min-width: 768px) {
    --grid-columns: 3;
  }
`

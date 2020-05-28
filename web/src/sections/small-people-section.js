import React from "react"
import styled from "styled-components"

import PortableText from "../components/portable-text/heading"
import Person from "../components/small-person-card"

const SmallPeopleSection = ({ heading, groups }) => {
  return (
    <S.Section>
      <h2>{heading}</h2>
      {groups?.length > 0 &&
        groups.map((section) => (
          <S.Group key={section._key}>
            <PortableText blocks={section.heading} />
            <S.People>
              {section.people.map((person) => (
                <Person key={person._id} person={person} />
              ))}
            </S.People>
          </S.Group>
        ))}
    </S.Section>
  )
}

export default SmallPeopleSection

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
    font-size: 1.25rem;
    color: #949494;
  }
`

S.Group = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 5rem;

  h2 {
    font-size: 1.75rem;
  }
`

S.People = styled.div`
  --grid-columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 2rem;

  /* @media (min-width: 575px) {
    --grid-columns: 2;
  } */
  @media (min-width: 768px) {
    --grid-columns: 2;
  }
`

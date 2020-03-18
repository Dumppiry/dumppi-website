import React from "react"
import styled from "styled-components"

import PortableText from "../components/portable-text/heading"
import Person from "../components/small-person-card"

const SmallPeopleSection = ({ heading, sections }) => {
  return (
    <S.Section>
      <h2>{heading}</h2>
      {sections.length > 0 &&
        sections.map(section => (
          <>
            <PortableText blocks={section.heading} />
            <S.People>
              {section.people.map(person => (
                <S.Person key={person._key} person={person} />
              ))}
            </S.People>
          </>
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

S.People = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

S.Person = styled(Person)`
  width: calc(100% / 2 - 1.5rem);
  margin: 1.5rem 0;
`

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
          {people.map(person => (
            <S.Person person={person} />
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
  width: calc(100% / 3 - 1.5rem);
  margin: 1.5rem 0;
`

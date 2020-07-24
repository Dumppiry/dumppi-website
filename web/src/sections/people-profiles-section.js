import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import styled from "styled-components"

import config from "../../client-config"

import Heading from "../components/portable-text/heading"
import BlockContent from "../components/block-content"

const PeopleProfilesSection = ({ heading, people }) => {
  return (
    <S.Section>
      <Heading blocks={heading} />
      {people && (
        <S.People>
          {people.map((p) => (
            <Person person={p.person} bio={p.bio} />
          ))}
        </S.People>
      )}
    </S.Section>
  )
}

export default PeopleProfilesSection

const Person = ({ person, bio }) => {
  const fluidProps = getFluidGatsbyImage(
    person.image.asset._id,
    { maxWidth: 400 },
    config.sanity
  )
  return (
    <S.Person>
      <S.Img fluid={fluidProps} alt={person.name} />
      <div>
        <h3>{person.name}</h3>
        <BlockContent blocks={bio} />
      </div>
    </S.Person>
  )
}

const S = {}

S.Section = styled.section`
  margin: 3rem 0;

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
  margin: 2rem 0;
`

S.Person = styled.article`
  margin: 3rem 0;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 2rem;

  border-bottom: 2px solid #f0f0f0;
  :last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: 400px auto;
  }

  p {
    margin: inherit;
    font-size: inherit;
    color: inherit;
  }
`

S.Img = styled(Img)`
  width: 100%;
  max-width: 400px;
  height: 400px;
`

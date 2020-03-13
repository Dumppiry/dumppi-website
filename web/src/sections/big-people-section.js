import React from "react"
import styled from "styled-components"

import Link from "../components/link"
import PortableText from "../components/portable-text/heading"

const BigPeopleSection = ({ heading, people }) => {
  return (
    <S.Section>
      <PortableText blocks={heading} />
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

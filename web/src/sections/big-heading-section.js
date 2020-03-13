import React from "react"
import PortableText from "@sanity/block-content-to-react"
import styled from "styled-components"

import Button from "../components/button"

const serializers = {
  marks: {
    highlight: ({ children, mark }) => (
      <span style={{ color: "#AF271D" }}>{children}</span>
    ),
  },
}

const BigHeadingSection = ({ heading, buttons }) => {
  return (
    <S.Section>
      <S.Content>
        <PortableText blocks={heading} serializers={serializers} />
        {buttons.map((button, index) => (
          <Button primary={index === 0} title={button} />
        ))}
      </S.Content>
    </S.Section>
  )
}

export default BigHeadingSection

const S = {}

S.Section = styled.section`
  margin: 5rem 0;
  text-align: center;
  border-radius: 1rem;
  padding: 5rem;

  h1 {
    margin: 2.5rem 0;
    font-size: 3.75rem;
    color: #2c2c2c;
  }
  p {
    margin: 2.5rem 0;
    font-size: 1.25rem;
    color: #949494;
  }
`

S.Content = styled.div`
  max-width: 38rem;
  margin: auto;
`

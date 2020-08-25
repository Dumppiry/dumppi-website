import React from "react"
import styled from "styled-components"

import ButtonLink from "../components/button-link"
import PortableText from "../components/portable-text/heading"

const BigHeadingSection = ({ heading, buttons }) => {
  return (
    <S.Section>
      <S.Content>
        <PortableText blocks={heading} />
        {buttons?.length > 0 && (
          <S.ButtonContainer oneChild={buttons.length === 1}>
            {buttons.map((b, index) => (
              <S.ButtonLink
                key={b._key}
                link={b.link[0]}
                title={b.title}
                primary={index === 0}
              />
            ))}
          </S.ButtonContainer>
        )}
      </S.Content>
    </S.Section>
  )
}

export default BigHeadingSection

const S = {}

S.Section = styled.section`
  text-align: left;
  border-radius: 1rem;
  background-color: white;
  padding: 0;
  margin: 3rem 0;

  h1 {
    margin: 1rem 0;
    font-size: min(10vw, 3.75rem);
    color: #2c2c2c;
  }
  p {
    margin: 1.5rem 0;
    font-size: min(4vw, 1.25rem);
    color: #949494;
  }
`

S.Content = styled.div`
  max-width: 38rem;
`

S.ButtonContainer = styled.div`
  display: flex;

  & > * {
    margin-right: 1.25rem;
  }
`

S.ButtonLink = styled(ButtonLink)`
  height: 100%;
  justify-self: center;

  @media (min-width: 768px) {
    :nth-child(even) {
      justify-self: start;
    }
    :nth-child(odd) {
      justify-self: end;
    }
    :only-child {
      justify-self: center;
    }
  }
`

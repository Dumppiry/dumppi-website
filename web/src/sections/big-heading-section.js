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
          <S.ButtonContainer>
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
  margin: 5rem 0;
  text-align: center;
  border-radius: 1rem;
  padding: 2rem;
  background-color: white;

  h1 {
    margin: 0 0 2.5rem 0;
    font-size: min(10vw, 3.75rem);
    color: #2c2c2c;
  }
  p {
    margin: 2.5rem 0;
    font-size: min(4vw, 1.25rem);
    color: #949494;
  }

  @media (min-width: 768px) {
    padding: 5rem;
  }
`

S.Content = styled.div`
  max-width: 38rem;
  margin: auto;
`

S.ButtonContainer = styled.div`
  --grid-columns: 1;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 1.25rem;

  @media (min-width: 575px) {
  }
  @media (min-width: 768px) {
    --grid-columns: 2;
    width: 80%;
    align-items: stretch;
    justify-content: stretch;
  }
  @media (min-width: 991px) {
  }
  @media (min-width: 1199px) {
  }
`

S.ButtonLink = styled(ButtonLink)`
  height: 100%;
  :nth-child(even) {
    justify-self: start;
  }
  :nth-child(odd) {
    justify-self: end;
  }
`

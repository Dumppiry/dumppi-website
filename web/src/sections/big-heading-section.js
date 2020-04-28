import React from "react"
import styled, { css } from "styled-components"

import ButtonLink from "../components/button-link"
import PortableText from "../components/portable-text/heading"

const BigHeadingSection = ({ heading, buttons, isFrontPage }) => {
  return (
    <S.Section isFrontPage={isFrontPage}>
      <S.Content isFrontPage={isFrontPage}>
        <PortableText blocks={heading} />
        {buttons?.length > 0 && (
          <S.ButtonContainer
            isFrontPage={isFrontPage}
            oneChild={buttons.length === 1}
          >
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
  text-align: left;
  border-radius: 1rem;
  background-color: white;
  padding: 2rem 0;

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

  ${(props) =>
    props.isFrontPage &&
    css`
      text-align: center;
      padding: 2rem;

      @media (min-width: 768px) {
        padding: 5rem;
      }
    `}
`

S.Content = styled.div`
  max-width: 38rem;

  ${(props) =>
    props.isFrontPage &&
    css`
      margin: auto;
    `}
`

const BCFrontPageStyles = css`
  --grid-columns: 1;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 1.25rem;

  @media (min-width: 768px) {
    --grid-columns: ${(props) => (props.oneChild ? "1" : "2")};
    width: 80%;
    align-items: stretch;
    justify-content: stretch;
  }
`

const BCNormalStyles = css`
  display: flex;

  & > * {
    margin-right: 1.25rem;
  }
`

S.ButtonContainer = styled.div`
  ${(props) => (props.isFrontPage ? BCFrontPageStyles : BCNormalStyles)}
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

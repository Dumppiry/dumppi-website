import React from "react"
import styled, { css } from "styled-components"

import ButtonLink from "../components/button-link"
import PortableText from "../components/portable-text/heading"

import urlFor from "../utils/url-for"

const HeroSection = ({ image, heading, buttons }) => {
  return (
    <S.Section>
      <S.Img src={urlFor(image).height(800).width(2200).fit("crop").url()} />
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

export default HeroSection

const S = {}

S.Section = styled.section`
  text-align: left;

  background-color: white;
  padding: 0;
  margin-bottom: 3rem;

  h1 {
    font-size: min(10vw, 3.75rem);
    color: #2c2c2c;
    margin: 0 0 2.5rem 0;
  }
  p {
    margin: 2.5rem 0;
    font-size: min(4vw, 1.25rem);
    color: #949494;
  }

  text-align: center;
`

S.Content = styled.div`
  margin: auto;
  margin-top: -250px;
  background-color: white;
  border-radius: 1rem;
  position: relative;

  padding: 2rem;
  @media (min-width: 768px) {
    padding: 5rem;
    padding-bottom: 2rem;
  }
`

S.Img = styled.img`
  min-height: 500px;
  max-height: 40vh;
  width: 100vw;
  min-width: 100vw;
  margin-left: calc(50% - 50vw);
  object-fit: cover;
`

S.ButtonContainer = styled.div`
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

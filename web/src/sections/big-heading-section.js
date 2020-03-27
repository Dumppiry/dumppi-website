import React from "react"
import styled from "styled-components"

import Button from "../components/button"
import Link from "../components/link"
import PortableText from "../components/portable-text/heading"

const BigHeadingSection = ({ heading, buttons }) => {
  return (
    <S.Section>
      <S.Content>
        <PortableText blocks={heading} />
        {buttons?.length > 0 && (
          <S.ButtonContainer>
            {buttons.map((page, index) => (
              <Link key={page._id} id={page._id}>
                <S.Button primary={index === 0} title={page.title} />
              </Link>
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

S.Button = styled(Button)`
  width: 100%;
  height: 100%;
`

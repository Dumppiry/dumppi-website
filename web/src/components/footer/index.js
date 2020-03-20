import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Footer = () => {
  const { settings } = useStaticQuery(graphql`
    query FooterQuery {
      settings: sanitySettings {
        siteTitle
      }
    }
  `)

  return (
    <S.Footer>
      <S.Content>
        <h2>{settings.siteTitle}</h2>
      </S.Content>
    </S.Footer>
  )
}

export default Footer

const S = {}

S.Footer = styled.footer`
  width: 100%;
  margin-top: 60px;
  padding: 5rem 1rem;
  background-color: #292929;
  color: white;
`

S.Content = styled.div`
  max-width: 940px;
  margin: auto;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`

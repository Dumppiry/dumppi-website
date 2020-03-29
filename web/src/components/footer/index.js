import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Nav from "./nav"

const Footer = () => {
  const { settings, nav } = useStaticQuery(graphql`
    query FooterQuery {
      settings: sanitySettings {
        siteTitle
      }
      nav: sanityFullNavigation {
        items: topLevelItems {
          _key
          page {
            ...PageFragment
            ...BenefitsPageFragment
          }
          subPages {
            ...PageFragment
          }
        }
      }
    }

    fragment PageFragment on SanityPage {
      _id
      title: _rawTitle
    }
    fragment BenefitsPageFragment on SanityBenefitsPage {
      _id
      title: _rawTitle
    }
  `)

  return (
    <S.Footer>
      <S.Content>
        <h2>{settings.siteTitle}</h2>
        <S.Nav items={nav.items} />
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
    color: #ffffff;
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.52px;
    line-height: 29px;
  }
`

S.Nav = styled(Nav)`
  margin-top: 4rem;
`

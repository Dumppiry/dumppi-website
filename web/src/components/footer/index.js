import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { css } from "styled-components"

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

import BlockContent from "../block-content"
import Nav from "./nav"
import SomeLinks from "./some-links"
import { useCurrentPage } from "../../hooks/current-page"

const Footer = () => {
  const { locale } = useCurrentPage()

  const { settings, nav } = useStaticQuery(graphql`
    query FooterQuery {
      settings: sanitySettings {
        siteTitle
        facebookUrl
        instagramUrl
        twitterUrl
        linkedinUrl
        postalAddress: _rawPostalAddress
        contactInfoText: _rawContactInfoText
      }
      nav: sanityFullNavigation {
        items: topLevelItems {
          _key
          page {
            ...PageFragment
            ...BenefitsPageFragment
            ...EventsPageFragment
          }
          subPages {
            ...PageFragment
            ...BenefitsPageFragment
            ...EventsPageFragment
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
    fragment EventsPageFragment on SanityEventsPage {
      _id
      title: _rawTitle
    }
  `)

  const soMeLinks = [
    {
      icon: FaFacebook,
      url: settings.facebookUrl,
    },
    {
      icon: FaInstagram,
      url: settings.instagramUrl,
    },
    {
      icon: FaTwitter,
      url: settings.twitterUrl,
    },
    {
      icon: FaLinkedin,
      url: settings.linkedinUrl,
    },
  ]

  return (
    <S.Footer>
      <S.Container>
        <h2>{settings.siteTitle}</h2>
        <S.Content>
          <Nav items={nav.items} />
          <S.Contact>
            <S.Title>{settings.contactInfoText[locale]}</S.Title>
            <BlockContent blocks={settings.postalAddress} />
            <S.SomeLinks links={soMeLinks} />
            <S.Text>© {settings.siteTitle}</S.Text>
          </S.Contact>
        </S.Content>
      </S.Container>
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

S.Container = styled.div`
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

S.Content = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.75rem;

  @media (min-width: 575px) {
    grid-template-columns: 4fr 1fr;
  }
`

S.Contact = styled.div`
  display: flex;
  flex-direction: column;
`

S.Title = styled.span`
  color: #ffffff;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.31px;
  line-height: 17px;
  text-transform: uppercase;
  margin-bottom: 1.5em;
`

S.Text = styled.p`
  color: #ffffff;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.31px;
  line-height: 17px;
`

S.SomeLinks = styled(SomeLinks)`
  margin: 2.5rem 0;
`

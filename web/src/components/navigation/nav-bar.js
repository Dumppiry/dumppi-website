import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { useCurrentPage } from "../../hooks/current-page"

import ToggleNavButton from "./toggle-nav-button"
import { InternalLink } from "../link"

const NavBar = () => {
  const { settings, mainNav, frontPage } = useStaticQuery(graphql`
    query NavigationQuery {
      settings: sanitySettings {
        siteTitle
        logo {
          _type
          asset {
            fixed(height: 50, width: 50) {
              ...GatsbySanityImageFixed_noBase64
            }
          }
        }
      }
      mainNav: sanityMainNavigation {
        items {
          ... on SanityEventsPage {
            _id
            title: _rawTitle
          }
          ... on SanityBenefitsPage {
            _id
            title: _rawTitle
          }
          ... on SanityPage {
            _id
            title: _rawTitle
          }
        }
      }
      frontPage: sanityFrontPage {
        _id
      }
    }
  `)

  const { locale } = useCurrentPage()

  return (
    <S.NavBar>
      <S.BrandLink id={frontPage._id}>
        <S.Img
          fixed={settings.logo.asset.fixed}
          objectFit="contain"
          alt="Logo"
          loading="eager"
        />
        <S.SiteTitle>{settings.siteTitle}</S.SiteTitle>
      </S.BrandLink>
      <S.List>
        <S.Span>
          {mainNav.items.map((item) => (
            <S.ListItem key={item._id}>
              <S.Link id={item._id}>{item.title[locale] ?? ""}</S.Link>
            </S.ListItem>
          ))}
        </S.Span>
        <S.ListItem nav>
          <ToggleNavButton />
        </S.ListItem>
      </S.List>
    </S.NavBar>
  )
}

export default NavBar

const S = {}

S.NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`

S.Img = styled(Img)`
  img {
    margin: 0;
  }
`

S.List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`

S.Span = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`

S.ListItem = styled.li`
  margin: 1em;
  margin-right: ${(props) => (props.nav ? 0 : "2em")};
  display: flex;
  align-items: center;
`

S.Link = styled(InternalLink)`
  text-decoration: none;
  color: inherit;
`

S.BrandLink = styled(S.Link)`
  display: flex;
  align-items: center;
`

S.SiteTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 1.8rem;
`

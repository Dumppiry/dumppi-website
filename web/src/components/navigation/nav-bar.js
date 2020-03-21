import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import { useCurrentPage } from "../../hooks/current-page"

import ToggleNavButton from "./toggle-nav-button"
import LanguageMenu from "./language-menu"
import Link from "../link"

const NavBar = ({ hideItems }) => {
  const { settings, mainNav } = useStaticQuery(graphql`
    query NavigationQuery {
      settings: sanitySettings {
        siteTitle
      }
      mainNav: sanityMainNavigation {
        items {
          _id
          title {
            _type
            en
            fi
          }
        }
      }
    }
  `)

  const { locale } = useCurrentPage()

  return (
    <S.NavBar>
      <span>{settings.siteTitle}</span>
      <S.List>
        {!hideItems ? (
          mainNav.items.map(item => (
            <S.ListItem>
              <S.Link id={item._id}>{item.title[locale]}</S.Link>
            </S.ListItem>
          ))
        ) : (
          <S.ListItem>
            <LanguageMenu />
          </S.ListItem>
        )}
        <S.ListItem>
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

S.List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`

S.ListItem = styled.li`
  margin: 1em 2em;
  display: flex;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }
`

S.Link = styled(Link)`
  text-decoration: none;
  color: white;

  :hover {
    opacity: 0.8;
  }
`

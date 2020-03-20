import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { FiAlignRight } from "react-icons/fi"

import Link from "../link"

import { useCurrentPage } from "../../hooks/current-page"

const languages = [
  { code: "fi", icon: "🇫🇮" },
  { code: "en", icon: "🇬🇧" },
]

const Navigation = ({ pageTitle }) => {
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
    <S.Navigation>
      <S.NavBar>
        <span>{settings.siteTitle}</span>
        <S.List>
          {mainNav.items.map(item => (
            <S.ListItem>
              <S.Link id={item._id}>{item.title[locale]}</S.Link>
            </S.ListItem>
          ))}
          <S.ListItem>
            <FiAlignRight size={24} />
          </S.ListItem>
        </S.List>
      </S.NavBar>
      {pageTitle && (
        <S.Heading>
          <h1>{pageTitle}</h1>
        </S.Heading>
      )}
    </S.Navigation>
  )
}

export default Navigation

const S = {}

S.Navigation = styled.header`
  z-index: 100;
  top: 0;
  width: 100%;
  background: linear-gradient(#70130c, #ab1d13);
  color: white;
`

S.NavBar = styled.nav`
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

S.Heading = styled.div`
  max-width: 940px;
  margin: auto;
  padding: 5rem 0;

  h1 {
    font-size: 3.75rem;
  }
`

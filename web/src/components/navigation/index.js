import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Link from "../link"

import { useCurrentPage } from "../../hooks/current-page"

const languages = [
  { code: "fi", icon: "🇫🇮" },
  { code: "en", icon: "🇬🇧" },
]

const Navigation = ({ pageTitle }) => {
  const { settings } = useStaticQuery(graphql`
    query NavigationQuery {
      settings: sanitySettings {
        siteTitle
      }
    }
  `)

  const { currentPageId } = useCurrentPage()
  return (
    <S.Navigation>
      <S.NavBar>
        <span>{settings.siteTitle}</span>
        <S.List>
          {languages.map(lang => (
            <S.ListItem>
              <S.Link id={currentPageId} locale={lang.code}>
                {lang.icon}
              </S.Link>
            </S.ListItem>
          ))}
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
  /* position: fixed; */
  z-index: 100;
  top: 0;
  width: 100%;
  /* height: 4.5rem; */
  padding: 0.5rem 1rem;
  background: linear-gradient(#70130c, #ab1d13);
  color: white;
`

S.NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

S.List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`

S.ListItem = styled.li`
  margin: 0.25em;
`

S.Link = styled(Link)`
  font-size: 1.75rem;
  text-decoration: none;
`

S.Heading = styled.div`
  max-width: 940px;
  margin: 5rem auto;

  h1 {
    font-size: 3.75rem;
  }
`

import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Link from "../link"

import { useCurrentPage } from "../../hooks/current-page"

const languages = [
  { code: "fi", icon: "🇫🇮" },
  { code: "en", icon: "🇬🇧" },
]

const Navigation = () => {
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
    </S.Navigation>
  )
}

export default Navigation

const S = {}

S.Navigation = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  height: 4.5rem;
  background-color: pink;
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

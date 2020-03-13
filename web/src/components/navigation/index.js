import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Link from "../link"

import { useCurrentPage } from "../../hooks/current-page"

const languages = ["fi", "en"]

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      settings: sanitySettings {
        siteTitle
      }
    }
  `)

  const { currentPageId } = useCurrentPage()
  return (
    <S.Navigation>
      <span>{data.settings.siteTitle}</span>
      <ul>
        {languages.map(lang => (
          <li>
            <Link id={currentPageId} locale={lang}>
              {lang}
            </Link>
          </li>
        ))}
      </ul>
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
  background-color: pink;
  display: flex;
  justify-content: space-between;
`

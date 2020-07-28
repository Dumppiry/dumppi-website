import React from "react"
import styled from "styled-components"

import { InternalLink } from "../link"
import { useCurrentPage } from "../../hooks/current-page"

const languages = [
  { code: "fi", icon: "🇫🇮", title: "Suomeksi" },
  { code: "en", icon: "🇬🇧", title: "In English" },
]

const LanguageMenu = () => {
  const { currentPageId } = useCurrentPage()

  return (
    <div>
      {languages.map((lang) => (
        <S.Link key={lang.code} id={currentPageId} locale={lang.code}>
          {lang.title}
        </S.Link>
      ))}
    </div>
  )
}

export default LanguageMenu

const S = {}

S.Link = styled(InternalLink)`
  text-decoration: none;
  font-size: inherit;
  color: inherit;
  margin: 0.5em 1em 0.5em 0;
  transition: color 200ms ease-in-out;

  :hover {
    color: #af271d;
  }
`

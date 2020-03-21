import React from "react"
import styled from "styled-components"

import Link from "../link"
import { useCurrentPage } from "../../hooks/current-page"

const languages = [
  { code: "fi", icon: "🇫🇮" },
  { code: "en", icon: "🇬🇧" },
]

const LanguageMenu = () => {
  const { currentPageId } = useCurrentPage()

  return (
    <div>
      {languages.map(lang => (
        <S.Link id={currentPageId} locale={lang.code}>
          {lang.icon}
        </S.Link>
      ))}
    </div>
  )
}

export default LanguageMenu

const S = {}

S.Link = styled(Link)`
  text-decoration: none;
  font-size: inherit;
  margin: 0.25em;
`

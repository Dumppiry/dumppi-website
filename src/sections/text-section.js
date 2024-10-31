import React from "react"
import styled from "styled-components"

import BlockContent from "../components/block-content"

const TextSection = ({ content }) => {
  return (
    <S.Section>
      <BlockContent blocks={content} />
    </S.Section>
  )
}

export default TextSection

const S = {}

S.Section = styled.section`
  margin: 3rem 0;
`

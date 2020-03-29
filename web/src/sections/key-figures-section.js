import React from "react"
import styled from "styled-components"

import KeyFigureList from "../components/key-figures/key-figure-list"

const KeyFiguresSection = ({ figures, ...rest }) => (
  <S.Section {...rest}>
    <KeyFigureList figures={figures} />
  </S.Section>
)

export default KeyFiguresSection

const S = {}

S.Section = styled.section`
  display: flex;
`

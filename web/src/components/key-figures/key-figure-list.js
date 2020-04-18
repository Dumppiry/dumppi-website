import React from "react"
import styled from "styled-components"

import KeyFigure from "./figure"

const KeyFigureList = ({ figures, ...rest }) => (
  <S.List {...rest}>
    {figures.map(f => (
      <S.Item key={f._key}>
        <KeyFigure figure={f.figure} description={f.description} />
      </S.Item>
    ))}
  </S.List>
)

export default KeyFigureList

const S = {}

S.List = styled.ul`
  --grid-columns: 2;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 1rem;
  list-style: none;
  margin: 0;
  width: 100%;

  @media (min-width: 768px) {
    --grid-columns: 4;
  }
`
S.Item = styled.li``

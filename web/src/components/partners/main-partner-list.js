import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const MainPartnerList = ({ ...rest }) => {
  return (
    <S.List {...rest}>
      <S.item></S.item>
    </S.List>
  )
}

export default MainPartnerList

const S = {}

S.List = styled.ul`
  --grid-columns: 2;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 3rem 15%;
  list-style: none;
  margin: 0;

  @media (min-width: 768px) {
    --grid-columns: 3;
  }
`

S.Item = styled.li``

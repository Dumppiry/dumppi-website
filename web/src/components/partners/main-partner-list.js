import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const MAIN_PARTNERS_QUERY = graphql`
  query MainPartnersQuery {
    allSanityCompany(
      filter: { description: { fi: { ne: null }, en: { ne: null } } }
    ) {
      nodes {
        _id
        link
        name
        cardColor {
          hex
        }
        description {
          en
          fi
          _type
        }
      }
    }
  }
`

const MainPartnerList = ({ ...rest }) => {
  const { allSanityCompany } = useStaticQuery(MAIN_PARTNERS_QUERY)
  console.log(allSanityCompany)
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

import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import MainPartnerCard from "./main-partner-card"

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
        image {
          asset {
            fluid(maxWidth: 150) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

const MainPartnerList = ({ ...rest }) => {
  const { allSanityCompany } = useStaticQuery(MAIN_PARTNERS_QUERY)

  return (
    <S.List {...rest}>
      {allSanityCompany.nodes.map(company => (
        <MainPartnerCard key={company._id} partner={company} />
      ))}
    </S.List>
  )
}

export default MainPartnerList

const S = {}

S.List = styled.div`
  --grid-columns: 2;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 2rem;
  list-style: none;
  margin: 0;

  @media (min-width: 768px) {
    --grid-columns: 3;
  }
`

S.Item = styled.li``

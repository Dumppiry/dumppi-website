import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

const PARTNERS_QUERY = graphql`
  query PartnersQuery {
    sanityPartners {
      partners {
        _id
        name
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

const PartnerList = props => {
  const { sanityPartners } = useStaticQuery(PARTNERS_QUERY)

  return (
    <S.List {...props}>
      {sanityPartners.partners.map(partner => (
        <S.Item key={partner._id}>
          <Img fluid={partner.image.asset.fluid} objectFit="contain" />
        </S.Item>
      ))}
    </S.List>
  )
}

export default PartnerList

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

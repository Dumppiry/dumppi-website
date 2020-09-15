import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

import { ExternalLink } from "../link"

const PARTNERS_QUERY = graphql`
  query PartnersQuery {
    sanityPartners {
      partners {
        _id
        name
        link
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

const PartnerList = (props) => {
  const { sanityPartners } = useStaticQuery(PARTNERS_QUERY)

  return (
    <S.List {...props}>
      {sanityPartners.partners.map((partner) => (
        <ExternalLink key={partner._id} href={partner.link}>
          <S.Item>
            <Img fluid={partner.image.asset.fluid} objectFit="contain" />
          </S.Item>
        </ExternalLink>
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
  align-items: center;
  list-style: none;
  margin: 0;

  @media (min-width: 768px) {
    --grid-columns: 3;
  }
`

S.Item = styled.li``

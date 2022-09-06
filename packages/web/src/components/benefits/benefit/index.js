import React from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import _ from "lodash"

import PortableText from "../../block-content"
import { ExternalLink } from "../../link"

const Benefit = ({ benefit, ...rest }) => {
  const { company, description } = benefit

  return (
    <S.Container {...rest}>
      <S.ImageContainer>
        <S.Link href={company.link}>
          <Img fluid={company.image.asset.fluid} objectFit="contain" />
        </S.Link>
      </S.ImageContainer>
      <S.InfoContainer>
        <S.CompanyName>
          <S.Link href={company.link}>{company.name}</S.Link>
        </S.CompanyName>
        {!_.isEmpty(company.address) && (
          <S.Address>{company.address}</S.Address>
        )}
        <PortableText blocks={description} />
      </S.InfoContainer>
    </S.Container>
  )
}

export default Benefit

const S = {}

S.Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2.5rem 0;
`
S.InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
`
S.ImageContainer = styled.div`
  min-width: 200px;
  margin-top: 0.6rem;
`
S.CompanyName = styled.span`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.61px;
  line-height: 34px;
`

S.Address = styled.span`
  color: #949494;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 24px;
  margin-bottom: 1rem;
`

S.Link = styled(ExternalLink)`
  text-decoration: none;
  color: inherit;

  :hover {
    color: #af271d;
  }
`

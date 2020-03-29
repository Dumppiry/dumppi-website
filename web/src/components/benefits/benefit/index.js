import React from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import _ from "lodash"

import PortableText from "../../block-content"

const Benefit = ({ benefit, ...rest }) => {
  const { company, description } = benefit

  return (
    <S.Container {...rest}>
      <S.ImageContainer>
        <Img fluid={company.image.asset.fluid} objectFit="contain" />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.CompanyName>{company.name}</S.CompanyName>
        <S.Address>
          {_.isEmpty(company.Address) ? "" : company.address}
        </S.Address>
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

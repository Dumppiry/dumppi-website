import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import styled from "styled-components"

import { sanity } from "../../../client-config"

const BigPersonCard = ({ person, ...rest }) => {
  const { title, name, phoneNumber, email, image } = person

  const fluidProps = getFluidGatsbyImage(
    image?.asset._id,
    { maxWidth: 290 },
    sanity
  )

  return (
    <S.Container {...rest}>
      <S.BigPersonImage fluid={fluidProps} />
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Name>{name}</S.Name>
        <S.AdditionalInfo>
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </S.AdditionalInfo>
        <S.AdditionalInfo>
          <a href={`mailto:${email}`}>{email}</a>
        </S.AdditionalInfo>
      </S.Info>
    </S.Container>
  )
}

export default BigPersonCard

const S = {}

S.Container = styled.div`
  height: 493px;
  width: 100%;
  max-width: 360px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 5px 40px 0 #f0f0f0;
`

S.BigPersonImage = styled(Img)`
  width: 100%;
  height: 60%;
  border-radius: 10px 10px 0 0;
`

S.Info = styled.div`
  margin: 1.5rem 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`

S.Title = styled.span`
  color: #af271d;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
  margin-bottom: auto;
`

S.Name = styled.span`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
`

S.AdditionalInfo = styled.span`
  color: #949494;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.31px;
  line-height: 17px;

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #af271d;
    }
  }
`

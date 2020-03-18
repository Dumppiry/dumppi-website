import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { getFixedGatsbyImage } from "gatsby-source-sanity"

import { sanity } from "../../../client-config"

const SmallPersonCard = ({ person, ...rest }) => {
  const fluidProps = getFixedGatsbyImage(
    person.image.asset._id,
    { width: 100, height: 100 },
    sanity
  )

  return (
    <S.Container {...rest}>
      <S.SmallPersonImage fixed={fluidProps} />
      <S.Info>
        {person.title && <S.Title>{person.title}</S.Title>}
        <S.Name>{person.name}</S.Name>
        <S.AdditionalInfo>{person.phoneNumber}</S.AdditionalInfo>
        <S.AdditionalInfo>{person.email}</S.AdditionalInfo>
      </S.Info>
    </S.Container>
  )
}

export default SmallPersonCard

const S = {}

S.Container = styled.div`
  display: flex;
  align-items: center;
`

S.SmallPersonImage = styled(Img)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
S.Info = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`

S.Title = styled.span`
  height: 24px;
  color: #af271d;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 24px;
`

S.Name = styled.span`
  height: 24px;
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
`

S.AdditionalInfo = styled.span`
  height: 17px;
  color: #949494;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.31px;
  line-height: 17px;
`

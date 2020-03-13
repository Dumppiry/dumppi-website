import React from "react"
import styled from "styled-components"

import img from "../../images/gatsby-astronaut.png"

const BigPersonCard = ({ person, ...rest }) => (
  <S.Container {...rest}>
    <S.BigPersonImage src={img} />
    <S.Title>{person.title}</S.Title>
    <S.Info>
      <S.Name>{person.name}</S.Name>
      <S.AdditionalInfo>{person.phoneNumber}</S.AdditionalInfo>
      <S.AdditionalInfo>{person.email}</S.AdditionalInfo>
    </S.Info>
  </S.Container>
)

export default BigPersonCard

const S = {}

S.Container = styled.div`
  height: 493px;
  width: 290px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 5px 40px 0 #f0f0f0;
`

S.BigPersonImage = styled.img`
  width: 100%;
  height: 57%;
  border-radius: 10px 10px 0 0;
`

S.Title = styled.span`
  margin: 20px 25px 0 25px;
  height: 48px;
  width: 240px;
  color: #af271d;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
`

S.Info = styled.div`
  margin: 20px 25px 43px 25px;
  height: 68px;
  display: flex;
  flex-direction: column;
`

S.Name = styled.span`
  height: 24px;
  width: 240px;
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
`

S.AdditionalInfo = styled.span`
  height: 17px;
  width: 240px;
  color: #949494;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.31px;
  line-height: 17px;
`

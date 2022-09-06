import React from "react"
import styled from "styled-components"

const KeyFigure = ({ figure, description, ...rest }) => (
  <S.Container {...rest}>
    <S.Figure>{figure}</S.Figure>
    <S.Description>{description}</S.Description>
  </S.Container>
)

export default KeyFigure

const S = {}

S.Container = styled.div`
  display: flex;
  flex-direction: column;
`

S.Figure = styled.span`
  color: #af271d;
  font-family: Inter;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: -0.87px;
  line-height: 49px;
  margin-bottom: 0.6rem;
`

S.Description = styled.span`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.44px;
  line-height: 24px;
`

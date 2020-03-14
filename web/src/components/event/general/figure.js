import React from "react"
import styled from "styled-components"

const Figure = ({ figure, ...rest }) => (
  <S.Container>
    <S.Flex>
      <S.Title>{figure.title}</S.Title>
      {figure.children}
    </S.Flex>
  </S.Container>
)

export default Figure

const S = {}

S.Container = styled.div`
  box-sizing: border-box;
  height: 179px;
  width: 284px;
  border: 2px solid #e3e3e3;
  border-radius: 10px;
  background-color: #ffffff;
  display: block;
  padding: 35px 45px;
`

S.Flex = styled.div`
  display: flex;
  flex-direction: column;
`

S.Title = styled.span`
  height: 24px;
  width: 99px;
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
`

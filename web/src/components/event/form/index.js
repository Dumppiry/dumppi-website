import React from "react"
import styled from "styled-components"

import Button from "../../button"

const Form = props => {
  return (
    <S.Container>
      <S.Flex>
        <S.Label>Moro</S.Label>
        <S.Input />

        <Button primary title="Ilmoittaudu" />
      </S.Flex>
    </S.Container>
  )
}

export default Form

const S = {}

S.Container = styled.div``

S.Flex = styled.div`
  display: flex;
  flex-direction: column;
`
S.Title = styled.span`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.7px;
  line-height: 39px;
`

S.AdditionalInfo = styled.span`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 24px;
`

S.StatusBar = styled.div`
  :before {
    width: 100%;
  }
`

S.Label = styled.label`
  color: #292929;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 24px;
`

S.Input = styled.input`
  height: 60px;
  width: 470px;
  border-radius: 10px;
  background-color: #f0f0f0;
  border: none;
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
`

S.TextArea = styled.textarea``

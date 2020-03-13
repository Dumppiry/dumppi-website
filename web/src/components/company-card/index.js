import React from "react"
import styled from "styled-components"

const CompanyCard = ({ company, ...rest }) => (
  <S.Container>
    <S.Flex>
      <S.CompanyLogo />
      <S.Description>{company.description}</S.Description>
    </S.Flex>
  </S.Container>
)

export default CompanyCard

const S = {}

S.Container = styled.div`
  height: 350px;
  width: 290px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 5px 40px 0 #f0f0f0;
  display: block;
`

S.Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
`

S.CompanyLogo = styled.img``

S.Description = styled.span`
  height: 144px;
  color: #949494;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 24px;
`

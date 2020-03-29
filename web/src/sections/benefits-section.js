import React from "react"
import styled from "styled-components"

import BenefitList from "../components/benefits/benefit-list"

const BenefitsSection = ({ ...props }) => {
  return (
    <S.Section>
      <BenefitList />
    </S.Section>
  )
}

export default BenefitsSection

const S = {}

S.Section = styled.section`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
`

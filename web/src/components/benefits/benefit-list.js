import React from "react"
import styled from "styled-components"
import _ from "lodash"

import Benefit from "./benefit"

const BenefitList = ({ benefits, ...rest }) => {
  console.log(benefits.nodes)
  console.log(_.groupBy(benefits.nodes, n => n.category.title))
  const benefitsByCategory = _.groupBy(benefits.nodes, n => n.category.title)
  return (
    <S.List>
      {_.keys(benefitsByCategory).map(category => (
        <>
          <S.Category>{category}</S.Category>
          <S.List>
            {benefitsByCategory[category].map(benefit => (
              <S.Benefit benefit={benefit} />
            ))}
          </S.List>
        </>
      ))}
    </S.List>
  )
}

export default BenefitList

const S = {}

S.List = styled.div`
  display: flex;
  flex-direction: column;
`

S.Benefit = styled(Benefit)`
  margin-bottom: 1rem;
`

S.Category = styled.span`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: -0.87px;
  line-height: 49px;
  margin: 2rem 0;
`

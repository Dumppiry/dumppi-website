import React from "react"
import styled from "styled-components"

import MainPartnerCard from "./main-partner-card"

const MainPartnerList = ({ partners, ...rest }) => {
  return (
    <S.List {...rest}>
      {partners.map((company) => (
        <MainPartnerCard key={company._id} partner={company} />
      ))}
    </S.List>
  )
}

export default MainPartnerList

const S = {}

S.List = styled.div`
  --grid-columns: 2;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 2rem;
  list-style: none;
  margin: 0;

  @media (min-width: 768px) {
    --grid-columns: 3;
  }
`

S.Item = styled.li``

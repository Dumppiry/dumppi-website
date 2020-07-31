import React from "react"
import styled from "styled-components"

import PortableText from "../components/portable-text/heading"
import MainPartnerList from "../components/partners/main-partner-list"

const MainPartnersSection = ({ heading, partners }) => {
  return (
    <S.Section>
      <PortableText blocks={heading} />
      <MainPartnerList partners={partners} />
    </S.Section>
  )
}

export default MainPartnersSection

const S = {}

S.Section = styled.section`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 1.25rem 0;
    font-size: 2.5rem;
    color: #2c2c2c;
  }
  p {
    margin: 1.25rem 0;
    font-size: 1.25rem;
    color: #949494;
  }
`

S.MainPartnerList = styled(MainPartnerList)`
  margin-top: 2.5rem;
`

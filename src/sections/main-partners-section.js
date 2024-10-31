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
`

S.MainPartnerList = styled(MainPartnerList)`
  margin-top: 2.5rem;
`

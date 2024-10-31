import React from "react"
import styled from "styled-components"

import PortableText from "../components/portable-text/heading"
import PartnerList from "../components/partners/partner-list"

const PartnersSection = ({ heading }) => {
  return (
    <S.Section>
      <PortableText blocks={heading} />
      <S.PartnerList />
    </S.Section>
  )
}

export default PartnersSection

const S = {}

S.Section = styled.section`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
`

S.PartnerList = styled(PartnerList)`
  margin-top: 2.5rem;
`

import React from "react"
import styled from "styled-components"

import { ExternalLink } from "../link"

const SocialMediaLinks = ({ links = [], ...rest }) => {
  return (
    <S.Container {...rest}>
      {links.map((link) => {
        const Icon = link.icon
        return (
          <S.Link key={link.key} href={link.url} aria-label={link.key}>
            {<Icon />}
          </S.Link>
        )
      })}
    </S.Container>
  )
}

export default SocialMediaLinks

const S = {}

S.Container = styled.div`
  display: flex;
`

S.Link = styled(ExternalLink)`
  font-size: 2.5rem;
  color: #ffffff;
  margin-right: 1.25rem;
`

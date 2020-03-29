import React from "react"
import styled from "styled-components"

const SocialMediaLinks = ({ links = [], ...rest }) => {
  return (
    <S.Container {...rest}>
      {links.map(link => {
        const Icon = link.icon
        return (
          <S.Link href={link.url} target="_blank" rel="noopener noreferrer">
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

S.Link = styled.a`
  font-size: 2.5rem;
  color: #ffffff;
  margin-right: 1.25rem;
`

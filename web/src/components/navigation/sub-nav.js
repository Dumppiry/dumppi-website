import React from "react"
import styled from "styled-components"

import { InternalLink } from "../link"

const SubNav = ({ items }) => {
  return items?.nodes.length > 0 ? (
    <S.SubNav>
      <S.Content>
        {items.nodes.map((item) => (
          <S.Link id={item._id} activeClassName="active">
            {item.title}
          </S.Link>
        ))}
      </S.Content>
    </S.SubNav>
  ) : null
}

export default SubNav

const S = {}

S.SubNav = styled.div`
  border-bottom: 2px solid #f0f0f0;
`

S.Content = styled.div`
  max-width: 940px;
  margin: auto;
  padding: 1rem 1rem;
  display: flex;
  flex-wrap: wrap;
`

S.Link = styled(InternalLink)`
  color: #949494;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.44px;
  line-height: 24px;

  margin: 0.75rem 2rem 0.75rem 0;
  text-decoration: none;

  &.active {
    color: #af271d;
  }

  :hover {
    color: #af271d;
  }
`

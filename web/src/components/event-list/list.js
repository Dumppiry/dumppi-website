import React from "react"
import styled from "styled-components"

const List = ({ children, ...rest }) => {
  return <S.List {...rest}>{children}</S.List>
}

export default List

const S = {}

S.List = styled.div`
  --grid-columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 2rem;

  @media (min-width: 575px) {
    --grid-columns: 2;
  }
  @media (min-width: 768px) {
    --grid-columns: 3;
  }
`

import React from "react"
import styled from "styled-components"

const Chip = ({ color, children }) => {
  return <S.Chip color={color}>{children}</S.Chip>
}

export default Chip

const S = {}

S.Chip = styled.span`
  display: inline-block;
  border-radius: 5em;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.color ?? "#949494"};
  color: white;
`

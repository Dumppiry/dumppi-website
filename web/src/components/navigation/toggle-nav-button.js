import React from "react"
import { FiAlignRight, FiX } from "react-icons/fi"
import styled from "styled-components"

import { useNavigation } from "../../hooks/navigation"

const ToggleNavButton = () => {
  const { showNav, toggleNav } = useNavigation()

  return (
    <S.Toggle onClick={toggleNav}>
      {showNav ? <FiX size={24} /> : <FiAlignRight size={24} />}
    </S.Toggle>
  )
}

export default ToggleNavButton

const S = {}

S.Toggle = styled.button`
  appearance: none;
  background: none;
  border: none;
  color: inherit;
  display: inline-flex;
  align-items: center;
  margin: 0;
  outline: none;
  cursor: pointer;
`

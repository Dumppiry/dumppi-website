import React from "react"
import styled from "styled-components"

const Navigation = () => {
  return <S.Navigation>TERE</S.Navigation>
}

export default Navigation

const S = {}

S.Navigation = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background-color: pink;
`

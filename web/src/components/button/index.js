import React from "react"
import styled, { css } from "styled-components"

export const PrimaryButton = ({ text, onClick }) => (
  <S.PrimaryButton onClick={onClick}>{text}</S.PrimaryButton>
)

export const SecondaryButton = ({ text, onClick }) => (
  <S.SecondaryButton onClick={onClick}>{text}</S.SecondaryButton>
)

const S = {}

const baseStyle = css`
  border-radius: 10px;
  border: none;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.35px;
  padding: 0.875em 2.53em 0.8125em 2.53em;
  line-height: 1.5em;
`

S.PrimaryButton = styled.button`
  ${baseStyle}
  background-color: #af271d;
  color: #ffffff;
  :hover {
    background-color: #8a1e16;
  }
`
S.SecondaryButton = styled.button`
  ${baseStyle}
  background-color: #f0f0f0;
  color: #292929;
  :hover {
    background-color: #dbdbdb;
  }
`

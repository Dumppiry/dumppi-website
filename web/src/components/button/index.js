import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const Button = ({ title, primary, onClick }) => (
  <S.Button primary={primary} onClick={onClick}>
    {title}
  </S.Button>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  primary: false,
}

export default Button

const S = {}

S.Button = styled.button`
  border-radius: 10px;
  border: none;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.35px;
  padding: 0.875em 2.53em 0.8125em 2.53em;
  line-height: 1.5em;
  transition: all 80ms ease-in;

  background-color: #f0f0f0;
  color: #292929;
  :hover {
    background-color: #dbdbdb;
  }

  ${props =>
    props.primary &&
    css`
      background-color: #af271d;
      color: #ffffff;
      :hover {
        background-color: #8a1e16;
      }
    `}
`

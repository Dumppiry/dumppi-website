import React from "react"
import PropTypes from "prop-types"
import { AnimatePresence } from "framer-motion"
import styled, { css } from "styled-components"

import ThreeDotsWave from "../loaders/three-dots-wave"

const Button = ({ title, primary, onClick, loading, disabled, ...rest }) => (
  <S.Button primary={primary} onClick={onClick} disabled={disabled} {...rest}>
    <AnimatePresence initial={false}>
      {loading && <ThreeDotsWave />}
    </AnimatePresence>
    {title}
  </S.Button>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
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

  display: flex;
  align-items: center;

  background-color: #f0f0f0;
  color: #292929;
  :hover {
    background-color: #dbdbdb;
    cursor: pointer;
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

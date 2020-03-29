import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Button from "../button"
import Link from "../link"

const ButtonLink = ({ page, title, primary, ...rest }) => (
  <S.Link key={page._id} id={page._id} {...rest}>
    <Button primary={primary} title={title ? title : page.title} as="span" />
  </S.Link>
)

export default ButtonLink

ButtonLink.propTypes = {
  page: PropTypes.object.isRequired,
  primary: PropTypes.bool,
  title: PropTypes.string,
}

const S = {}

S.Link = styled(Link)`
  text-decoration: none;
  width: fit-content;
`

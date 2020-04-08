import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Button from "../button"
import Link from "../link"

const ButtonLink = ({ title, primary, link, ...rest }) => {
  switch (link?._type) {
    case "internalLink":
      return (
        <S.Link key={link.page._id} id={link.page._id} {...rest}>
          <Button primary={primary} title={title} as="span" />
        </S.Link>
      )

    case "externalLink":
      return (
        <S.ExtLink href={link.url} target="_blank" rel="noopener noreferrer">
          <Button primary={primary} title={title} as="span" />
        </S.ExtLink>
      )

    default:
      return null
  }
}

export default ButtonLink

ButtonLink.propTypes = {
  title: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  link: PropTypes.shape({
    _type: PropTypes.oneOf(["internalLink", "externalLink"]),
    url: props => {
      switch (props._type) {
        case "externalLink":
          if (!props.url) {
            return new Error(
              "Please provide a url prop when link is of type `externalLink`"
            )
          }
          break

        case "internalLink":
          if (!props.page) {
            return new Error(
              "Please provide a page prop when link is of type `internalLink`"
            )
          }
          break

        default:
          break
      }
    },
  }).isRequired,
}

const S = {}

S.Link = styled(Link)`
  text-decoration: none;
  width: fit-content;
`

S.ExtLink = styled.a`
  text-decoration: none;
  width: fit-content;
`

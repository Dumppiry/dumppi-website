import React from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import { useCurrentPage } from "../../hooks/current-page"

export const ExternalLink = ({ href, children, ...rest }) => {
  return (
    <S.ExtLink href={href} target="_blank" rel="nooppener noreferrer" {...rest}>
      {children}
    </S.ExtLink>
  )
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export const InternalLink = ({ id, locale, children, ...rest }) => {
  // Fetch all pages with their path and context
  const data = useStaticQuery(graphql`
    query LinkQuery {
      allSitePage {
        nodes {
          path
          context {
            id
            locale
          }
        }
      }
    }
  `)

  const { locale: currentLocale } = useCurrentPage()

  // Find the path to the wanted page with the id and locale
  const path = data.allSitePage.nodes.find(
    (node) =>
      node.context?.id === id &&
      node.context?.locale === (locale ?? currentLocale)
  )?.path

  return (
    <S.IntLink to={path} {...rest}>
      {children}
    </S.IntLink>
  )
}

InternalLink.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const S = {}

const LinkStyles = css`
  color: #af271d;
  transition: all 120ms ease-in-out;
  :hover {
    opacity: 0.95;
  }
`

S.ExtLink = styled.a`
  ${LinkStyles}
`

S.IntLink = styled(GatsbyLink)`
  ${LinkStyles}
`

import React from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"

import { useCurrentPage } from "../../hooks/current-page"

const Link = ({ id, locale, children, ...rest }) => {
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
    node =>
      node.context.id === id &&
      node.context.locale === (locale ?? currentLocale)
  )?.path

  return (
    <GatsbyLink to={path} {...rest}>
      {children}
    </GatsbyLink>
  )
}

export default Link

Link.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

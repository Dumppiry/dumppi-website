import React from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"

const Link = ({ id, children }) => {
  const locale = "en"
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

  // Find the path to the wanted page with the id and locale
  const path = data.allSitePage.nodes.find(
    node => node.context.id === id && node.context.locale === locale
  ).path

  return <GatsbyLink to={path}>{children}</GatsbyLink>
}

export default Link

Link.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

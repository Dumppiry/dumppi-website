import React from "react"
import { graphql } from "gatsby"

// import localize from "../components/hoc/localize"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Moro</h1>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allSanityPage {
      edges {
        node {
          id
          title {
            _type
            fi
            en
          }
        }
      }
    }
  }
`

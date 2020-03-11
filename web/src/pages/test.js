import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlockContent from "../components/block-content"

const Test = ({ data }) => {
  return (
    <Layout>
      <SEO title="Test" />
      <h1>{data.allSanityPage.nodes[0].title.fi}</h1>
      <BlockContent blocks={data.allSanityPage.nodes[0]._rawContent.fi} />
      <h1>{data.allSanityPage.nodes[0].title.en}</h1>
      <BlockContent blocks={data.allSanityPage.nodes[0]._rawContent.en} />
    </Layout>
  )
}

export default Test

export const query = graphql`
  query TestQuery {
    allSanityPage {
      nodes {
        title {
          fi
          en
        }
        _rawContent
      }
    }
  }
`

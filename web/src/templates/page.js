import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import localize from "../hoc/localize"

import SectionBlockContent from "../sections/section-block-content"

const PageTemplate = ({ data, ...rest }) => {
  const { _id, title, content } = data.page
  return (
    <Layout>
      <SEO title={title} />
      <SectionBlockContent blocks={content} />
    </Layout>
  )
}

export default localize(PageTemplate)

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(_id: { eq: $id }) {
      _id
      _type
      title {
        _type
        en
        fi
      }
      content: _rawContent(resolveReferences: { maxDepth: 4 })
    }
  }
`

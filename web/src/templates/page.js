import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import localize from "../hoc/localize"
import { useCurrentPage } from "../hooks/current-page"

import SectionBlockContent from "../sections/section-block-content"

const PageTemplate = ({ data, pageContext, ...rest }) => {
  const { _id, title, content } = data.page
  const { parent, subNavItems } = data
  const { setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    setCurrentPageId(_id)
  })

  return (
    <Layout pageTitle={parent.title ?? title} subNavItems={subNavItems}>
      <SEO title={title} />
      <SectionBlockContent blocks={content} />
    </Layout>
  )
}

export default localize(PageTemplate)

export const query = graphql`
  query PageTemplateQuery(
    $id: String!
    $parentId: String
    $subNavigationItems: [String!]
  ) {
    page: sanityPage(_id: { eq: $id }) {
      _id
      _type
      title {
        _type
        en
        fi
      }
      content: _rawContent(resolveReferences: { maxDepth: 8 })
    }
    subNavItems: allSanityPage(filter: { _id: { in: $subNavigationItems } }) {
      nodes {
        _id
        title: _rawTitle
      }
    }
    parent: sanityPage(_id: { eq: $parentId }) {
      _id
      title: _rawTitle
    }
  }
`

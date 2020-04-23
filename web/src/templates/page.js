import React, { useEffect } from "react"
import { graphql } from "gatsby"
import isEmpty from "lodash/isEmpty"

import Layout from "../components/layout"
import SEO from "../components/seo"
import localize from "../hoc/localize"
import { useCurrentPage } from "../hooks/current-page"

import SectionBlockContent from "../sections/section-block-content"

const PageTemplate = ({ data, pageContext, ...rest }) => {
  const { parent, page } = data
  const { _id, title, content } = page
  const { subNavigationItems } = pageContext
  const { setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    setCurrentPageId(_id)
  })

  return (
    <Layout
      page={!isEmpty(parent) ? parent : page}
      subNavItems={subNavigationItems}
    >
      <SEO title={title} />
      <SectionBlockContent blocks={content} />
    </Layout>
  )
}

export default localize(PageTemplate)

export const query = graphql`
  query PageTemplateQuery($id: String!, $parentId: String) {
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
    parent: sanityPage(_id: { eq: $parentId }) {
      _id
      title: _rawTitle
    }
  }
`

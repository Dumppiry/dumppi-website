import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BenefitList from "../components/benefits/benefit-list"

import localize from "../hoc/localize"
import { useCurrentPage } from "../hooks/current-page"

const BenefitTemplate = ({ data, pageContext, ...rest }) => {
  const { benefits, page } = data
  const { setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    setCurrentPageId(page._id)
  })

  return (
    <Layout pageTitle={page.title}>
      <SEO title={page.title} />
      <BenefitList benefits={benefits} />
    </Layout>
  )
}

export default localize(BenefitTemplate)

export const query = graphql`
  query BenefitsTemplateQuery {
    page: sanityBenefitsPage {
      _id
      title: _rawTitle
    }
    benefits: allSanityBenefit {
      nodes {
        _id
        description: _rawDescription
        category {
          title {
            _type
            fi
            en
          }
        }
        company {
          _id
          name
          address
          link
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

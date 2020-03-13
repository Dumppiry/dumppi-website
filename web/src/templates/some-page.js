import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SomePage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </Layout>
  )
}

export default SomePage

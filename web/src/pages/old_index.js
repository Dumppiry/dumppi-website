import React from "react"

import localize from "../hoc/localize"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Link from "../components/link"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Moro</h1>

      <Link id="443ef666-ff94-41da-acc4-8fb3a05ea127" locale="fi">
        <Button primary title="Paina tästä jos siltä tuntuu" />
      </Link>
    </Layout>
  )
}

export default localize(IndexPage)

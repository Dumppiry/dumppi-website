import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useCurrentPage } from "../hooks/current-page"

import SadPenguin from "../images/sad-penguin.png"

const NotFoundPage = () => {
  const { setLocale, setCurrentPageId } = useCurrentPage()

  const { frontPage } = useStaticQuery(graphql`
    query NotFoundPageQuery {
      frontPage: sanityFrontPage {
        _id
      }
    }
  `)

  useEffect(() => {
    setLocale("fi")
    setCurrentPageId(frontPage._id)
  })

  return (
    <Layout pageTitle="404 – Not Found">
      <SEO title="404: Not found" />
      <S.Content>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <img
          src={SadPenguin}
          alt="Sad penguin"
          style={{ width: "100%", maxWidth: "380px" }}
        />
      </S.Content>
    </Layout>
  )
}

export default NotFoundPage

const S = {}

S.Content = styled.div`
  margin: 5rem 0;
`

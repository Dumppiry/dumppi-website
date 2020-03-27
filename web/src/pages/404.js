import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SadPenguin from "../images/sad-penguin.png"

const NotFoundPage = () => (
  <Layout pageTitle="404 – Not Found">
    <SEO title="404: Not found" />
    <S.Content>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <img src={SadPenguin} style={{ width: "100%", maxWidth: "380px" }} />
    </S.Content>
  </Layout>
)

export default NotFoundPage

const S = {}

S.Content = styled.div`
  margin: 5rem 0;
`

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Navigation from "./navigation"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <S.Layout>
      <Navigation />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Layout>
  )
}

const S = {}

S.Layout = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  margin-top: 4.5rem;
`

S.Content = styled.main`
  flex: 1 0 auto;
  max-width: 940px;
  margin: auto;
  padding: 1rem;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

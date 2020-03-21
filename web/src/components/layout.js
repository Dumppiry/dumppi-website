import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Navigation from "./navigation"
import Footer from "./footer"

import { useNavigation } from "../hooks/navigation"

const Layout = ({ children, pageTitle }) => {
  const { hideNav } = useNavigation()

  useEffect(() => {
    hideNav()
  }, [])

  return (
    <S.Layout>
      <Navigation pageTitle={pageTitle} />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Layout>
  )
}

const S = {}

S.Layout = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
`

S.Content = styled.main`
  flex: 1 0 auto;
  max-width: 940px;
  margin: auto;
  padding: 0 1rem;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

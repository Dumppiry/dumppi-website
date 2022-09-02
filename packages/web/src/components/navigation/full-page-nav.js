import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { createPortal } from "react-dom"
import { RemoveScroll } from "react-remove-scroll"
import { motion } from "framer-motion"
import styled from "styled-components"

import NavBar from "./nav-bar"
import LanguageMenu from "./language-menu"
import MenuItems from "./menu-items"

import { useNavigation } from "../../hooks/navigation"

export const FullPageNavQuery = graphql`
  query FullPageNavQuery {
    nav: sanityFullNavigation {
      items: topLevelItems {
        _key
        page {
          ...BenefitsPageFragment
          ...EventsPageFragment
          ...FrontPageFragment
          ...LegalDocFragment
          ...PageFragment
        }
        subPages {
          hideFromFullNavigation
          page {
            ...BenefitsPageFragment
            ...EventsPageFragment
            ...FrontPageFragment
            ...LegalDocFragment
            ...PageFragment
          }
        }
      }
    }
  }

  fragment BenefitsPageFragment on SanityBenefitsPage {
    _id
    title: _rawTitle
  }
  fragment EventsPageFragment on SanityEventsPage {
    _id
    title: _rawTitle
  }
  fragment FrontPageFragment on SanityFrontPage {
    _id
    title: _rawTitle
  }
  fragment LegalDocFragment on SanityLegalDocument {
    _id
    title: _rawTitle
  }
  fragment PageFragment on SanityPage {
    _id
    title: _rawTitle
  }
`

const MenuModal = () => {
  const { nav } = useStaticQuery(FullPageNavQuery)
  const { showNav } = useNavigation()

  return showNav ? (
    <RemoveScroll removeScrollBar>
      <S.Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <S.Header>
          <NavBar />
        </S.Header>
        <S.Content>
          <LanguageMenu />
          <MenuItems items={nav.items} />
        </S.Content>
      </S.Wrapper>
    </RemoveScroll>
  ) : null
}

const FullPageNav = (props) => {
  const portalRoot =
    typeof document !== `undefined`
      ? document.getElementById("fullpage-menu")
      : null
  const portalElement =
    typeof document !== `undefined` ? document.createElement("div") : null

  useEffect(() => {
    portalRoot.appendChild(portalElement)
    return () => {
      portalRoot.removeChild(portalElement)
    }
  })

  if (portalElement) {
    return createPortal(
      <MenuModal {...props} />,
      document.querySelector("#fullpage-menu")
    )
  } else {
    return null
  }
}

export default FullPageNav

const S = {}

S.Wrapper = styled(motion.div)`
  background-color: white;
  width: 100vw;
  height: 100vh;
  margin: auto;
  position: fixed;
  top: 0;
  z-index: 1000;
`

S.Branding = styled.div`
  font-weight: 600;
  flex: 1;
`

S.Header = styled.div`
  display: flex;
  width: 100vw;
  position: relative;
`

S.HeaderWrapper = styled.div`
  max-width: 940px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

S.Content = styled.div`
  width: 100%;
  margin: auto;
  padding: 2rem;
  height: 100%;
  overflow: auto;
`

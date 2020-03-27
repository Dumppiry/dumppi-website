import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"

import NavBar from "./nav-bar"
import FullPageNav from "./full-page-nav"

const Navigation = ({ pageTitle }) => {
  return (
    <S.Navigation>
      <NavBar />
      <AnimatePresence>
        {pageTitle && (
          <S.Heading
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            <h1>{pageTitle}</h1>
          </S.Heading>
        )}
      </AnimatePresence>
      <FullPageNav />
    </S.Navigation>
  )
}

export default Navigation

const S = {}

S.Navigation = styled.header`
  z-index: 100;
  top: 0;
  width: 100%;
  background: linear-gradient(#70130c, #ab1d13);
  color: white;
`

S.Heading = styled(motion.div)`
  max-width: 940px;
  margin: auto;
  padding: 5rem 1rem;

  h1 {
    font-size: 3.75rem;
  }
`

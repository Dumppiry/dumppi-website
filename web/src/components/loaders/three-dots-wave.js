import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const loadingContainerVariants = {
  start: {
    opacity: 0,
    width: 0,
    margin: "0 0 0 0",
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    opacity: 1,
    width: "auto",
    margin: "0 0.5em 0 0",
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
}

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
}

const LoadingCircle = () => (
  <S.LoadingCircle
    variants={loadingCircleVariants}
    transition={loadingCircleTransition}
  />
)

const ThreeDotsWave = props => {
  return (
    <S.LoadingContainer
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
      exit="start"
      {...props}
    >
      <LoadingCircle />
      <LoadingCircle />
      <LoadingCircle />
    </S.LoadingContainer>
  )
}

export default ThreeDotsWave

const S = {}

S.LoadingContainer = styled(motion.div)`
  width: 2em;
  height: 1em;
  display: flex;
  justify-content: space-around;
`

S.LoadingCircle = styled(motion.span)`
  display: block;
  width: 0.4em;
  height: 0.4em;
  margin: 0 0.2rem;
  background-color: white;
  border-radius: 50%;
`

import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import styled from "styled-components"

import config from "../../../client-config"

const Image = ({ asset, alt }) => {
  const fluidProps = getFluidGatsbyImage(
    asset._ref,
    { maxWidth: 960 },
    config.sanity
  )
  return <S.Img fluid={fluidProps} alt={alt} />
}

export default Image

const S = {}

S.Img = styled(Img)`
  border-radius: 10px;
  box-shadow: 0 0 25px 0 #dddddd;
  overflow: hidden;
  margin: 2rem 0;
`

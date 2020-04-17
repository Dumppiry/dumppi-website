import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import styled from "styled-components"

import config from "../../../client-config"

const Image = ({ asset, alt, caption }) => {
  const fluidProps = getFluidGatsbyImage(
    asset._id,
    { maxWidth: 960 },
    config.sanity
  )
  return (
    <S.Figure>
      <S.Img fluid={fluidProps} alt={alt} />
      {caption && <S.Caption>{caption}</S.Caption>}
    </S.Figure>
  )
}

export default Image

const S = {}

S.Figure = styled.figure`
  margin: 2rem 0;
`

S.Img = styled(Img)`
  border-radius: 10px;
  box-shadow: 0 0 25px 0 #dddddd;
  overflow: hidden;
`

S.Caption = styled.figcaption`
  margin-top: 1em;
  color: #949494;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 20px;
`

import React from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import { getFluidGatsbyImage } from "gatsby-source-sanity"

import { ExternalLink } from "../link"

import config from "../../../client-config"

const MainPartnerCard = ({ partner }) => {
  const { description = "", image, link, cardColor, ...rest } = partner
  const fluidProps = getFluidGatsbyImage(
    image.asset._id,
    { maxWidth: 150 },
    config.sanity
  )

  return (
    <S.Container href={link} {...rest} color={cardColor}>
      <S.Img fluid={fluidProps} objectFit="contain" objectPosition="0%" />
      <S.Description color={cardColor}>{description}</S.Description>
    </S.Container>
  )
}

export default MainPartnerCard

const S = {}

S.Container = styled(ExternalLink)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({ color }) =>
    color && color.rgb
      ? `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
      : "#ffffff"};
  box-shadow: 0 5px 40px 0 #f0f0f0;
  transition: all 200ms ease-in-out;
  min-height: 350px;
  text-decoration: none;
  padding: 2rem;

  :hover {
    box-shadow: 0 5px 40px 10px #f0f0f0;
    transform: translateY(-3px);
  }
`

S.Description = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 24px;
  color: ${(props) => (props.color ? "#ffffff" : "#949494")};
  margin-top: auto;
`

S.Img = styled(Img)`
  height: 15rem;
  width: 100%;
  margin-bottom: 2rem;
`

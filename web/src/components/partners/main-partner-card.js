import React from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"

import { useCurrentPage } from "../../hooks/current-page"

const MainPartnerCard = ({ partner }) => {
  const { locale } = useCurrentPage()
  const { description, image, link, cardColor, ...rest } = partner

  return (
    <S.Container
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      {...rest}
      color={cardColor}
    >
      <S.Img
        fluid={image.asset.fluid}
        objectFit="contain"
        objectPosition="0%"
      />
      <S.Description color={!!cardColor}>{description[locale]}</S.Description>
    </S.Container>
  )
}

export default MainPartnerCard

const S = {}

S.Container = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${props => (props.color ? props.color.hex : "#ffffff")};
  box-shadow: 0 5px 40px 0 #f0f0f0;
  transition: all 200ms ease-in-out;
  height: 350px;
  width: 290px;
  text-decoration: none;

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
  color: ${props => (props.color ? "#ffffff" : "#949494")};
  margin: auto 2rem 2rem 2rem;
`

S.Img = styled(Img)`
  height: 2rem;
  margin-top: 2rem;
  margin-left: 2rem;
`

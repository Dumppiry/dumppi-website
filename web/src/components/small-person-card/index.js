import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { getFixedGatsbyImage } from "gatsby-source-sanity"
import styled from "styled-components"

import { sanity } from "../../../client-config"

const QUERY = graphql`
  query SmallPersonCardQuery {
    settings: sanitySettings {
      placeholderPersonImage {
        asset {
          _id
        }
      }
    }
  }
`

const SmallPersonCard = ({ person, ...rest }) => {
  const { title, name, phoneNumber, email, image } = person
  const { settings } = useStaticQuery(QUERY)

  const fixedProps = getFixedGatsbyImage(
    image?.asset._id ?? settings.placeholderPersonImage.asset._id,
    { width: 100, height: 100 },
    sanity
  )

  return (
    <S.Container {...rest}>
      <S.SmallPersonImage fixed={fixedProps} />
      <S.Info>
        {title && <S.Title>{title}</S.Title>}
        <S.Name>{name}</S.Name>
        <S.AdditionalInfo>
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </S.AdditionalInfo>
        <S.AdditionalInfo>
          <a href={`mailto:${email}`}>{email}</a>
        </S.AdditionalInfo>
      </S.Info>
    </S.Container>
  )
}

export default SmallPersonCard

const S = {}

S.Container = styled.div`
  display: flex;
  align-items: center;
`

S.SmallPersonImage = styled(Img)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
S.Info = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`

S.Title = styled.span`
  color: #af271d;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 24px;
`

S.Name = styled.span`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
`

S.AdditionalInfo = styled.span`
  color: #949494;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.31px;
  line-height: 17px;

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: #af271d;
    }
  }
`

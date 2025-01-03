import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import urlFor from "../../utils/url-for"

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

  return (
    <S.Container {...rest}>
      <S.SmallPersonImage
        src={urlFor(image ?? settings.placeholderPersonImage.asset._id)
          .width(100)
          .height(100)
          .fit("crop")
          .url()}
        alt={name}
        loading="lazy"
      />
      <S.Info>
        {title && <S.Title>{title}</S.Title>}
        <S.Name>{name}</S.Name>
        {phoneNumber && (
          <S.AdditionalInfo>
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </S.AdditionalInfo>
        )}
        {email && (
          <S.AdditionalInfo>
            <a href={`mailto:${email}`}>{email}</a>
          </S.AdditionalInfo>
        )}
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

S.SmallPersonImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0;
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

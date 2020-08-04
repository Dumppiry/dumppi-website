import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import urlFor from "../../utils/url-for"

const QUERY = graphql`
  query BigPersonCardQuery {
    settings: sanitySettings {
      placeholderPersonImage {
        asset {
          _id
        }
      }
    }
  }
`

const BigPersonCard = ({ person, ...rest }) => {
  const { title, name, phoneNumber, email, image } = person
  const { settings } = useStaticQuery(QUERY)

  return (
    <S.Container {...rest}>
      <S.ImgWrapper>
        <S.BigPersonImage
          src={urlFor(image ?? settings.placeholderPersonImage.asset._id)
            .height(493)
            .width(360)
            .fit("crop")
            .url()}
          alt={name}
          contain={!image}
        />
      </S.ImgWrapper>
      <S.Info>
        <S.Title>{title}</S.Title>
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

export default BigPersonCard

const S = {}

S.Container = styled.div`
  height: 493px;
  width: 100%;
  max-width: 360px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 5px 40px 0 #f0f0f0;
`

S.ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 60%;
`

S.BigPersonImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px 10px 0 0;
  object-fit: ${(props) => (props.contain ? "contain" : "cover")};
  object-position: center;
`

S.Info = styled.div`
  margin: 1.5rem 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`

S.Title = styled.span`
  color: #af271d;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
  margin-bottom: auto;
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
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #af271d;
    }
  }
`

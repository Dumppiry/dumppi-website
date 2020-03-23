import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"
import { FiMapPin, FiClock } from "react-icons/fi"

import { useCurrentPage } from "../../../hooks/current-page"

const JobCard = ({ title, link, type, category, location, company }) => {
  const { locale } = useCurrentPage()

  return (
    <S.Container href={link} target="_blank" rel="noreferrer noopener">
      <S.Content>
        {type && <S.Type color={type.color.hex}>{type.title[locale]}</S.Type>}
        <S.Title>{title}</S.Title>
        <S.Details>
          {location && (
            <S.Detail>
              <FiMapPin />
              <span>{location}</span>
            </S.Detail>
          )}
          {category && (
            <S.Detail>
              <FiClock />
              <span>{category.title[locale]}</span>
            </S.Detail>
          )}
        </S.Details>
        <S.Img
          fluid={company.image.asset.fluid}
          objectFit="contain"
          objectPosition="0%"
        />
      </S.Content>
    </S.Container>
  )
}

export default JobCard

const S = {}

S.Container = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 5px 40px 0 #f0f0f0;
  min-height: 12rem;
  transition: all 200ms ease-in-out;
  text-decoration: none;

  :hover {
    box-shadow: 0 5px 40px 10px #f0f0f0;
    transform: translateY(-3px);

    h4 {
      color: #af271d;
    }
  }
`
S.Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`

S.Type = styled.span`
  color: #292929;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.26px;
  line-height: 15px;

  display: inline-flex;
  align-items: center;

  ::before {
    --size: 0.8rem;
    content: "";
    display: inline-block;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-right: var(--size);
  }
`

S.Title = styled.h4`
  margin: 1.25rem 0;
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
  transition: color 200ms ease-in-out;
`

S.Details = styled.div`
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`

S.Detail = styled.span`
  color: #949494;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.26px;
  line-height: 15px;

  display: inline-flex;
  align-items: center;

  span {
    margin-left: 0.5em;
  }
`

S.Img = styled(Img)`
  margin-top: auto;
  height: 2rem;

  img {
    margin: 0;
  }
`

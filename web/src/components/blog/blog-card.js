import React from "react"
import styled from "styled-components"

import { InternalLink as Link } from "../link"

import { useCurrentPage } from "../../hooks/current-page"
import urlFor from "../../utils/url-for"

const BlogCard = ({ _id, title, excerpt, publishDate, category, image }) => {
  return (
    <S.Container id={_id}>
      <S.Image src={urlFor(image.asset._id).height(360).url()} />
      <S.Content>
        <S.Subtitle>{publishDate}</S.Subtitle>
        <S.Title>{title}</S.Title>
        <p>{excerpt}</p>
      </S.Content>
      <S.CardFooter color={category.color.hex}>{category.title}</S.CardFooter>
    </S.Container>
  )
}

export default BlogCard

const S = {}

S.Container = styled(Link)`
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 5px 40px 0 #f0f0f0;
  transition: all 200ms ease-in-out;
  text-decoration: none;
  color: inherit;

  :hover {
    box-shadow: 0 5px 40px 10px #f0f0f0;
    transform: translateY(-3px);
  }
`
S.Image = styled.div`
  width: 100%;
  height: 12rem;
  border-radius: 10px 10px 0 0;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

S.Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.5rem;
`

S.Title = styled.h4`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
  margin: 0.35em 0;
`

S.Subtitle = styled.span`
  color: #949494;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.31px;
  line-height: 17px;

  /* Capitalize the first letter because of Intl stuff */
  &::first-letter {
    text-transform: uppercase;
  }
`

S.CardFooter = styled.div`
  width: 100%;
  background-color: ${(props) => props.color ?? "#949494"};
  border-radius: 0 0 10px 10px;
  padding: 1rem 1.5rem;
  color: white;
`

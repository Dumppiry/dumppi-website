import React from "react"
import styled from "styled-components"
import * as Fi from "react-icons/fi"

const Icon = ({ name, ...rest }) => {
  const TagName = Fi[name]
  return <TagName {...rest} />
}

const ProductCard = ({ product, ...rest }) => (
  <S.Container {...rest}>
    <S.Icon name={product.icon} />
    <S.Title>{product.title}</S.Title>
    <S.Description>{product.description}</S.Description>
  </S.Container>
)

export default ProductCard

const S = {}

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
  background-color: #fafafa;
  height: 255px;
  padding: 2rem 4rem 3rem 4rem;
`

S.Icon = styled(Icon)`
  min-width: 20px;
  min-height: 20px;
  margin-bottom: 1rem;
  stroke: #af271d;
`

S.Title = styled.span`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.61px;
  line-height: 34px;
  margin-bottom: 1.25rem;
`

S.Description = styled.span`
  color: #949494;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 24px;
`

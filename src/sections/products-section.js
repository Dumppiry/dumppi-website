import React from "react"
import styled from "styled-components"

import ProductList from "../components/products/product-list"

const ProductsSection = ({ heading, products, ...rest }) => (
  <S.Section {...rest}>
    <S.Heading>{heading}</S.Heading>
    <ProductList products={products} />
  </S.Section>
)

export default ProductsSection

const S = {}

S.Section = styled.section`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
`

S.Heading = styled.span`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.7px;
  line-height: 39px;
  margin-bottom: 2.5rem;
`

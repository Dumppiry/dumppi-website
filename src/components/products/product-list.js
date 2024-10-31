import React from "react"
import styled from "styled-components"

import ProductCard from "./product"

const ProductList = ({ products, ...rest }) => (
  <S.List {...rest}>
    {products.map(p => (
      <S.Item>
        <ProductCard product={p} />
      </S.Item>
    ))}
  </S.List>
)

export default ProductList

const S = {}

S.List = styled.ul`
  --grid-columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 1rem;
  list-style: none;
  margin: 0;

  @media (min-width: 768px) {
    --grid-columns: 2;
  }
`
S.Item = styled.li``

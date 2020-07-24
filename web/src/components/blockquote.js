import React from "react"
import styled from "styled-components"

const Blockquote = ({ children }) => {
  return <S.Quote>{children}</S.Quote>
}

export default Blockquote

const S = {}

S.Quote = styled.blockquote`
  font-size: 2.5rem;
  text-align: center;
  color: #949494;
  width: 90%;
  margin: 1.5rem auto 2.5rem;
  padding: 1rem 2rem;
  --border: 2px #f0f0f0 solid;
  border-top: var(--border);
  border-bottom: var(--border);
  position: relative;

  &:after {
    position: absolute;
    font-family: "sans-serif";
    content: "”";
    color: #af271d;
    font-size: 10rem;
    line-height: 0;
    bottom: -3.5rem;
    right: 3rem;
  }
`

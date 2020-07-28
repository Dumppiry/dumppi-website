import React from "react"
import PortableText from "@sanity/block-content-to-react"
import styled from "styled-components"

import { ExternalLink, InternalLink } from "../link"

const serializers = {
  marks: {
    highlight: ({ children, mark }) => (
      <span style={{ color: "#AF271D" }}>{children}</span>
    ),
    internalLink: ({ mark, children }) => (
      <InternalLink id={mark.page._ref ?? mark.page._id}>
        {children}
      </InternalLink>
    ),
    externalLink: ({ mark, children }) => (
      <ExternalLink href={mark.url}>{children}</ExternalLink>
    ),
  },
}

const HeadingPortableText = ({ blocks, ...rest }) => {
  return <S.PortableText blocks={blocks} serializers={serializers} {...rest} />
}

export default HeadingPortableText

const S = {}

S.PortableText = styled(PortableText)`
  h2 {
    margin: 1.25rem 0;
    font-size: 2.5rem;
    color: #2c2c2c;
  }
  p {
    margin: 1.25rem 0;
    font-size: 1.25rem;
    color: #949494;
  }
`

import React from "react"
import PortableText from "@sanity/block-content-to-react"

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
  return <PortableText blocks={blocks} serializers={serializers} {...rest} />
}

export default HeadingPortableText

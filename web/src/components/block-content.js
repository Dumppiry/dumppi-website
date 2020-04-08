import React from "react"
import BaseBlockContent from "@sanity/block-content-to-react"

import config from "../../client-config"

import { ExternalLink, InternalLink } from "./link"

const serializers = {
  types: {},
  marks: {
    highlight: ({ children }) => (
      <span style={{ color: "#AF271D" }}>{children}</span>
    ),
    internalLink: ({ mark, children }) => (
      <InternalLink id={mark.page._ref}>{children}</InternalLink>
    ),
    externalLink: ({ mark, children }) => (
      <ExternalLink href={mark.url}>{children}</ExternalLink>
    ),
  },
}

const BlockContent = ({ blocks, ...rest }) => {
  return (
    <BaseBlockContent
      blocks={blocks}
      serializers={serializers}
      imageOptions={{ w: 570, h: 570, fit: "max" }}
      projectId={config.sanity.projectId}
      dataset={config.sanity.dataset}
      {...rest}
    />
  )
}

export default BlockContent

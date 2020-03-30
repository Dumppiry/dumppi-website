import React from "react"
import BaseBlockContent from "@sanity/block-content-to-react"

import config from "../../client-config"

const serializers = {
  types: {},
  marks: {
    highlight: ({ children }) => (
      <span style={{ color: "#AF271D" }}>{children}</span>
    ),
  },
}

const BlockContent = ({ blocks, ...rest }) => {
  return (
    <BaseBlockContent
      blocks={blocks}
      serializers={serializers}
      imageOptions={{ w: 720, h: 240, fit: "min" }}
      projectId={config.sanity.projectId}
      dataset={config.sanity.dataset}
      {...rest}
    />
  )
}

export default BlockContent

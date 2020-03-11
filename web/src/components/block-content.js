import React from "react"
import BaseBlockContent from "@sanity/block-content-to-react"

import config from "../../client-config"

const serializers = {
  types: {},
}

const BlockContent = ({ blocks }) => {
  return (
    <BaseBlockContent
      blocks={blocks}
      serializers={serializers}
      imageOptions={{ w: 720, h: 240, fit: "min" }}
      projectId={config.sanity.projectId}
      dataset={config.sanity.dataset}
    />
  )
}

export default BlockContent

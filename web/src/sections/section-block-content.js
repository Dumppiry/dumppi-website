import React from "react"
import BasePortableText from "@sanity/block-content-to-react"

import clientConfig from "../../client-config"

import BigHeadingSection from "./big-heading-section"

const serializers = {
  types: {
    bigHeadingSection: ({ node }) => <BigHeadingSection {...node} />,
  },
}

const SectionBlockContent = ({ blocks }) => {
  return (
    <BasePortableText
      blocks={blocks}
      serializers={serializers}
      {...clientConfig.sanity}
    />
  )
}

export default SectionBlockContent

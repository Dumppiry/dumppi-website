import React from "react"
import PortableText from "@sanity/block-content-to-react"

const serializers = {
  marks: {
    highlight: ({ children, mark }) => (
      <span style={{ color: "#AF271D" }}>{children}</span>
    ),
  },
}

const HeadingPortableText = ({ blocks }) => {
  return <PortableText blocks={blocks} serializers={serializers} />
}

export default HeadingPortableText

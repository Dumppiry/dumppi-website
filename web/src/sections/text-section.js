import React from "react"
import BlockContent from "../components/block-content"

const TextSection = ({ content }) => {
  return <BlockContent blocks={content} />
  return (
    <pre>
      <code>{JSON.stringify(content, null, 2)}</code>
    </pre>
  )
}

export default TextSection

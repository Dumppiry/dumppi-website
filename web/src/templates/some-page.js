import React from "react"

const SomePage = props => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  )
}

export default SomePage

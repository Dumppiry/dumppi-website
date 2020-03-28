import React from "react"

const RegistrationSubmissions = ({ submissions }) => {
  return (
    <ol>
      {submissions.map((s, index) => (
        <li key={index}>{s.nickname}</li>
      ))}
    </ol>
  )
}

export default RegistrationSubmissions

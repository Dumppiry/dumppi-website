import React from "react"
import styled from "styled-components"

const FormField = ({ label, required, children }) => {
  return (
    <S.Field>
      <S.Label>
        {label}
        {required && " *"}
      </S.Label>
      {children}
    </S.Field>
  )
}

export default FormField

const S = {}

S.Field = styled.div`
  margin: 1.25rem 0;
  display: flex;
  flex-direction: column;
`

S.Label = styled.label`
  margin-bottom: 0.625rem;
  color: #292929;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 24px;
`

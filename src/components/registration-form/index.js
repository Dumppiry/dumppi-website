import React, { useState } from "react"
import axios from "axios"
import styled from "styled-components"

import useForm from "../../hooks/useForm"
import Button from "../button"
import Input from "./input"

const RegistrationForm = ({
  eventId,
  defaultFields,
  fields,
  refresh,
  submitText,
  successText,
  errorText,
}) => {
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState(false)

  const dFields = defaultFields.map((df) => ({ _key: df._key, ...df.field }))

  const initialState = {}
  const allFields = [...dFields, ...fields]
  allFields.forEach((field) => {
    let value

    switch (field.inputType) {
      case "checkbox":
        value = true
        break

      case "radio":
        value = null
        break

      default:
        value = ""
        break
    }

    initialState[field.fieldId.current] = value
  })

  const submit = async () => {
    setLoading(true)
    setSuccess(false)
    setErrors(false)

    try {
      await axios.post("/.netlify/functions/send-registration-form", {
        eventId,
        fields: values,
      })
      reset()
      refresh()
      setSuccess(true)
    } catch (error) {
      console.log(error.response)
      setErrors(true)
    }
    setLoading(false)
  }

  const { values, reset, handleChange, handleSubmit } = useForm(
    submit,
    initialState
  )

  const [loading, setLoading] = useState(false)

  return (
    <S.Form onSubmit={handleSubmit}>
      {allFields.map((field) => (
        <S.Field key={field._key}>
          <S.Label>
            {field.label}
            {field.required && " *"}
          </S.Label>
          <Input
            id={field.fieldId.current}
            fieldLabel={field.label}
            type={field.inputType}
            name={field.label}
            placeholder={field.placeholder}
            inputValues={field.inputValues}
            required={field.required}
            value={values[field.fieldId.current]}
            handleChange={handleChange}
          />
        </S.Field>
      ))}
      <Button primary title={submitText} type="submit" loading={loading} />
      {success && <S.Success>{successText}</S.Success>}
      {errors && <S.Error>{errorText}</S.Error>}
    </S.Form>
  )
}

export default RegistrationForm

const S = {}

S.Form = styled.form`
  margin: 1.25rem 0;
`

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

S.Success = styled.p`
  color: #54c754;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
`

S.Error = styled.p`
  color: #af271d;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
`

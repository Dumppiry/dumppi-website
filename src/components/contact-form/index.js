import React, { useState } from "react"
import axios from "axios"
import styled from "styled-components"

import FormField from "../form/form-field"
import Input from "../registration-form/input"
import Button from "../button"
import PortableText from "../block-content"

import useForm from "../../hooks/useForm"

const ContactForm = ({ form }) => {
  const { fields, submitText, successMessage, errorMessage } = form

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const initialState = {}
  fields.forEach((field) => {
    let value

    switch (field._type) {
      case "checkbox":
        value = false
        break

      case "singleSelection":
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
    setError(false)

    try {
      await axios.post(
        "/.netlify/functions/send-contact-form-email",
        {
          formId: form._id,
          formTitle: form.title,
          values,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      reset()
      setSuccess(true)
    } catch (error) {
      console.log(error.response)
      setError(true)
    }

    setLoading(false)
  }

  const { values, reset, handleChange, handleSubmit } = useForm(
    submit,
    initialState
  )

  const renderField = (field) => {
    switch (field._type) {
      case "textField":
        return (
          <Input
            id={field.fieldId.current}
            type={field.multiline ? "textarea" : "input"}
            required={field.required}
            value={values[field.fieldId.current]}
            handleChange={handleChange}
          />
        )

      case "singleSelection":
        return (
          <Input
            id={field.fieldId.current}
            type="radio"
            required={field.required}
            inputValues={field.selectionOptions}
            value={values[field.fieldId.current]}
            handleChange={handleChange}
          />
        )

      case "checkbox":
        return (
          <Input
            id={field.fieldId.current}
            type="checkbox"
            required={field.required}
            value={values[field.fieldId.current]}
            handleChange={handleChange}
          />
        )

      default:
        return null
    }
  }

  if (success) return <PortableText blocks={successMessage} />
  return (
    <S.Form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField
          key={field._key}
          label={field.label}
          required={field.required}
        >
          {renderField(field)}
        </FormField>
      ))}
      <Button primary title={submitText} type="submit" loading={loading} />
      {error && <S.Error>{errorMessage}</S.Error>}
    </S.Form>
  )
}

export default ContactForm

const S = {}

S.Form = styled.form``

S.Error = styled.p`
  color: #af271d;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
  margin: 1.5rem 0;
`

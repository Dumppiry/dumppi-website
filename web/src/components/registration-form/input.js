import React from "react"
import styled, { css } from "styled-components"

const Input = ({ id, type, inputValues, required, value, handleChange }) => {
  switch (type) {
    case "input":
      return (
        <S.TextInput
          name={id}
          value={value}
          onChange={handleChange}
          required={required}
          maxLength="200"
        />
      )

    case "textarea":
      return (
        <S.TextArea
          name={id}
          value={value}
          onChange={handleChange}
          required={required}
          maxLength="800"
        />
      )

    case "checkbox":
      return (
        <input
          type="checkbox"
          name={id}
          value={value}
          onChange={handleChange}
          required={required}
        />
      )

    case "radio":
      return (
        <fieldset
          style={{ display: "flex", flexDirection: "column", border: "none" }}
        >
          {inputValues.map((inputValue) => (
            <div
              style={{
                display: "flex",
                marginBottom: "0.5em",
              }}
            >
              <input
                type="radio"
                id={inputValue}
                checked={inputValue === value}
                value={inputValue}
                onChange={handleChange}
                name={id}
                required={required}
                style={{ marginRight: "0.5em" }}
              />
              <label htmlFor={inputValue} name={id}>
                {inputValue}
              </label>
            </div>
          ))}
        </fieldset>
      )

    default:
      return null
  }
}

export default Input

const S = {}

const inputStyles = css`
  border: none;
  background-image: none;
  box-shadow: none;

  border-radius: 10px;
  background-color: #f0f0f0;
  padding: 1.125rem 1.25rem;
`

S.TextInput = styled.input`
  ${inputStyles}
`

S.TextArea = styled.textarea`
  ${inputStyles}
`

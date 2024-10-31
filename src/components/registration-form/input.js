import React from "react"
import styled, { css } from "styled-components"

const Input = (props) => {
  const {
    id,
    type,
    placeholder,
    inputValues,
    required,
    value,
    handleChange,
  } = props

  switch (type) {
    case "input":
      return (
        <S.TextInput
          name={id}
          placeholder={placeholder}
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
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required={required}
          rows="5"
          maxLength="800"
        />
      )

    case "checkbox":
      return (
        <S.Checkbox
          type="checkbox"
          name={id}
          value={value}
          checked={value}
          onChange={handleChange}
          required={required}
        />
      )

    case "radio":
      return (
        <fieldset
          style={{
            display: "flex",
            flexDirection: "column",
            border: "none",
            margin: 0,
          }}
        >
          {inputValues.map((inputValue, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                marginBottom: "0.5em",
                alignItems: "center",
              }}
            >
              <S.Radio
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

  color: #292929;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 24px;

  ::placeholder {
    color: #949494;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.35px;
    line-height: 24px;
  }
`

S.TextInput = styled.input`
  ${inputStyles}
`

S.TextArea = styled.textarea`
  ${inputStyles}
  resize: none;
`

S.Checkbox = styled.input`
  appearance: none;
  border: none;
  background-image: none;
  box-shadow: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  --size: 1.75em;
  height: var(--size);
  width: var(--size);

  border-radius: 5px;
  background-color: #f0f0f0;

  transition: all 200ms ease-in-out;

  :checked {
    background-color: #af271d;

    ::after {
      content: "";
      display: block;
      width: 50%;
      height: 35%;

      --border-width: calc(var(--size) * 0.075);
      border-left: var(--border-width) solid white;
      border-bottom: var(--border-width) solid white;
      transform: rotate(-45deg) translate(15%, -25%);
    }
  }
`

S.Radio = styled.input`
  appearance: none;
  border: none;
  background-image: none;
  box-shadow: none;
  position: relative;

  --size: 1.75em;
  height: var(--size);
  width: var(--size);

  ::before,
  ::after {
    content: "";
    display: block;
    border-radius: 100%;
    transition: all 200ms ease-in-out;
  }

  ::before {
    height: 100%;
    width: 100%;
    background-color: #f0f0f0;
  }

  ::after {
    height: 50%;
    width: 50%;
    position: absolute;
    top: 25%;
    left: 25%;
    transform: scale(0);
    background-color: #af271d;
  }

  :checked {
    ::before {
      background-color: transparent;
      border: calc(var(--size) * 0.1) solid #af271d;
    }
    ::after {
      transform: scale(1);
    }
  }
`

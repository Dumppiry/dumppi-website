import { useState } from "react"

const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    callback()
  }

  const handleChange = (event) => {
    event.persist()

    let value

    switch (event.target.type) {
      case "checkbox":
        value = event.target.checked
        break

      default:
        value = event.target.value
        break
    }

    setValues((values) => ({
      ...values,
      [event.target.name]: value,
    }))
  }

  const reset = () => {
    setValues(initialState)
  }

  return {
    handleChange,
    handleSubmit,
    reset,
    values,
  }
}

export default useForm

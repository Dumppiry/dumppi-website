const axios = require("axios")

const formatValues = (values) => {
  return Object.keys(values)
    .filter((key) => values[key])
    .map((key) => {
      return `
      *${key}:*
      ${values[key]}
      `
    })
    .join("\n")
}

exports.handler = async (event, context) => {
  const SLACK_URL = process.env.SLACK_WEBHOOK_URL
  console.log("SLACK_URL", SLACK_URL)

  const { formId, formTitle, values } = JSON.parse(event.body)
  const formattedValues = formatValues(values)

  console.log(values)

  const message = `
  Title: ${formTitle}
  ID: ${formId}

  ${formattedValues}
  `

  console.log("Sending message", { message })

  try {
    const res = await axios.post(SLACK_URL, JSON.stringify({ text: message }))

    return {
      statusCode: 200,
      body: JSON.stringify({ data: res.data }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ data: error.response.data }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  }
}

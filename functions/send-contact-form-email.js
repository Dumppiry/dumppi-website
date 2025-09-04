const axios = require("axios")

const formatValues = (values) => {
  return Object.keys(values)
    .filter((key) => values[key])
    .map((key) => {
      return {
        name: `${key}:`,
        value: `${values[key]}`
      }
    })
}

exports.handler = async (event, context) => {
  const TEAMS_URL = process.env.TEAMS_WEBHOOK_URL
  console.log("TEAMS_URL", TEAMS_URL)

  const { formId, formTitle, values } = JSON.parse(event.body)
  const formattedValues = formatValues(values)

  console.log(values)

  const message = {
    type: "MessageCard",
    summary: "New contact request was send from dumppi.fi",
    sections: [
      {
        activityTitle: `# ${formTitle}`,
        activitySubtitle: `${formId}`,
        facts: formattedValues,
        markdown: true,
      },
    ],
  }

  console.log("Sending message", { message })

  try {
    const res = await axios.post(TEAMS_URL, message)

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

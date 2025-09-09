const { MailtrapClient } = require("mailtrap")

const formatValues = (values) => {
  return Object.keys(values)
    .filter((key) => values[key])
    .map((key) => {
      return {
        name: `${key}:`,
        value: `${values[key]}`,
      }
    })
}

exports.handler = async (event, context) => {
  const API_KEY = process.env.MAILTRAP_API_KEY
  const client = new MailtrapClient({
    token: API_KEY,
  })
  const sender = {
    email: "no-reply@dumppi.fi",
    name: "Dumppi.fi",
  }
  const recipients = [
    {
      email: "hallitus@dumppi.fi",
    },
  ]

  const { formId, formTitle, values } = JSON.parse(event.body)
  const formattedValues = formatValues(values)

  console.log(values)

  const details = {
    summary: "New contact request was send from dumppi.fi",
    activityTitle: `# ${formTitle}`,
    activitySubtitle: `${formId}`,
    facts: formattedValues,
  }
  const message = `${details.summary}\n\n${details.activityTitle}\n${
    details.activitySubtitle
  }\n\n${details.facts.map((fact) => `${fact.name} ${fact.value}`).join("\n")}`

  console.log("Sending message", { message })

  try {
    const res = await client.send({
      from: sender,
      to: recipients,
      subject: `${values.name} contacted from dumppi.fi`,
      text: message,
    })

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

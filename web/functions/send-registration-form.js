const axios = require("axios")
const sanityClient = require("@sanity/client")

const { sanity } = require("../client-config")

const { SANITY_WRITE_TOKEN } = process.env

const client = sanityClient({
  projectId: sanity.projectId,
  dataset: sanity.dataset,
  token: SANITY_WRITE_TOKEN,
  useCdn: false,
})

const validateFields = (allFields, submittedFields) => {
  const errors = []

  allFields.forEach(field => {
    const { required, inputType } = field
    const id = field.fieldId.current
    // console.log(`Validating ${id}, required: ${required}`)
    // console.log(`Content is ${submittedFields[id]}`)

    if (required && !!!submittedFields[id]) {
      errors.push(`Field ${id} is required.`)
    }
    if (inputType === "input" && submittedFields[id].length > 200) {
      errors.push(`Field ${id} is too long.`)
    }
    if (inputType === "textarea" && submittedFields[id].length > 800) {
      errors.push(`Field ${id} is too long.`)
    }
  })

  return errors
}

exports.handler = async (event, context) => {
  const sanityMutationUrl = `https://${sanity.projectId}.api.sanity.io/v1/data/mutate/${sanity.dataset}`

  const { eventId, fields } = JSON.parse(event.body)

  const query = `
    {
      'event': *[_id == $eventId][0]{ registrationForm->{fields}, registrationStartDate, registrationEndDate },
      "defFields": *[_type == 'eventSettings'][0].registrationDefaultFields
    }
  `
  const params = { eventId }
  const res = await client.fetch(query, params)

  const allFields = [
    ...res.defFields.map(df => df.field),
    ...res.event.registrationForm.fields,
  ]

  const errors = validateFields(allFields, fields)

  if (new Date(res.event.registrationStartDate) > new Date())
    errors.push("Registration not yet open")
  if (new Date(res.event.registrationEndDate) < new Date())
    errors.push("Registration not open anymore")

  if (errors.length > 0) {
    return {
      statusCode: 422,
      body: JSON.stringify({ errors }, null, 2),
    }
  }

  const data = {
    mutations: [
      {
        patch: {
          id: eventId,
          setIfMissing: {
            registrationSubmissions: [],
          },
          insert: {
            after: "registrationSubmissions[-1]",
            items: [JSON.stringify(fields)],
          },
        },
      },
    ],
  }

  try {
    const res = await axios({
      method: "post",
      url: sanityMutationUrl,
      data,
      headers: {
        Authorization: `Bearer ${SANITY_WRITE_TOKEN}`,
        "Content-Type": "application/json",
      },
    })

    return {
      statusCode: 200,
      body: JSON.stringify(res.data, null, 2),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.errorMessage, null, 2),
    }
  }
}

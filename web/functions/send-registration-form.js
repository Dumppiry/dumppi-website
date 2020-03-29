const axios = require("axios")

const { sanity } = require("../client-config")

// const { SANITY_WRITE_TOKEN } = process.env
const SANITY_WRITE_TOKEN =
  "skatQ8vjoBTJ8LSHErbc7OjdO4NjIHpQfi57Sc4Dir9jyKTO7qWx9JNcFXxwyxCogrRw8PasVKazemlgvcWt9YOoWlaM3UusmJaDv0C6e2S55BwDcd7bfHixwRvJsfSHpMv51Y9HhTZRxiHt9S8vohi4rOZ5DanNsCH5qzWHYfilYTFMI97O"

exports.handler = async (event, context) => {
  const sanityMutationUrl = `https://${sanity.projectId}.api.sanity.io/v1/data/mutate/${sanity.dataset}`

  const { eventId, fields } = JSON.parse(event.body)

  console.log(eventId, fields)

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
      body: JSON.stringify({ error, tried: data }, null, 2),
    }
  }
}

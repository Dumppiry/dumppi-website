const sanityClient = require("@sanity/client")

const { sanity } = require("../client-config")
const { SANITY_WRITE_TOKEN } = process.env

const client = sanityClient({
  projectId: sanity.projectId,
  dataset: sanity.dataset,
  token: SANITY_WRITE_TOKEN,
  useCdn: false,
})

exports.handler = async (event, context) => {
  const { eventId } = event.queryStringParameters

  try {
    const query = `*[_type == "event" && _id == $eventId][0]{registrationSubmissions}`
    const params = { eventId }
    const results = await client.fetch(query, params)

    const submissions =
      (results.registrationSubmissions &&
        results.registrationSubmissions.map(JSON.parse)) ||
      []

    return {
      statusCode: 200,
      body: JSON.stringify(submissions, null, 2),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error }, null, 2),
    }
  }
}

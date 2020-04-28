const sanityClient = require("@sanity/client")

const { sanity } = require("../client-config")
const { SANITY_WRITE_TOKEN } = process.env

const client = sanityClient({
  projectId: sanity.projectId,
  dataset: sanity.dataset,
  token: SANITY_WRITE_TOKEN,
})

exports.handler = async (event, context) => {
  const { eventIds } = event.queryStringParameters

  try {
    const query = `*[_type == "event" && _id in $eventIds]{_id, "submissionCount": count(registrationSubmissions)}`
    const params = { eventIds: eventIds.split(",") }
    const events = await client.fetch(query, params)

    return {
      statusCode: 200,
      body: JSON.stringify(events, null, 2),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error }, null, 2),
    }
  }
}

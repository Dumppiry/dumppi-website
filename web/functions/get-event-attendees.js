const sanityClient = require("@sanity/client")

const { sanity } = require("../client-config")
const { SANITY_WRITE_TOKEN } = process.env

const client = sanityClient({
  projectId: sanity.projectId,
  dataset: sanity.dataset,
  token: SANITY_WRITE_TOKEN,
})

exports.handler = async (event, context) => {
  const { eventId } = event.queryStringParameters

  try {
    const query = `*[_type == "event" && _id == $eventId][0]{registrationSubmissions}`
    const params = { eventId }
    const { registrationSubmissions } = await client.fetch(query, params)

    const submissions =
      (registrationSubmissions &&
        registrationSubmissions.map((rs) => {
          const submission = JSON.parse(rs)
          return [submission.nickname || submission.name, submission.comment]
        })) ||
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

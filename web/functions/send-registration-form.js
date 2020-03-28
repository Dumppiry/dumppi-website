const axios = require("axios")

const { sanity } = require("../client-config")

const SANITY_WRITE_TOKEN =
  "skZfqr8nv2G0NX74QZI0BsKnUPX6WeuENz2Xxxw3ZIONYQZ7hms8vib43xdUSfoDJ3k7hdnHxCsSQMKzf6JQq1K5R2CSnuhJDvFeiDPKdI1M1mI5VpO41gr5UWWYZJFgyUtif2Cw7DbqwRl0mJhouWbMiL8chc4PA5T3FSgQGtEePlnkrLDF"

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

const ics = require("ics")
const sanityClient = require("@sanity/client")
const moment = require("moment")

const { sanity } = require("../client-config")
const { SANITY_READ_TOKEN } = process.env

const client = sanityClient({
  projectId: sanity.projectId,
  dataset: sanity.dataset,
  token: SANITY_READ_TOKEN,
  useCdn: true,
})

const event = {
  start: [2020, 4, 25, 6, 30],
  duration: { hours: 6, minutes: 30 },
  title: "Bolder Boulder",
  description: "Annual 10-kilometer run in Boulder, Colorado",
  location: "Folsom Field, University of Colorado (finish line)",
  url: "http://www.bolderboulder.com/",
  categories: ["10k races", "Memorial Day Weekend", "Boulder CO"],
}

exports.handler = async (evt, context) => {
  const { lang = "fi" } = evt.queryStringParameters

  try {
    const query = `
      *[_type == "event"]{
        ...,
        location->{...}
      }
    `

    const results = await client.fetch(query)

    const events = results.map((event) => {
      const url = `https://confident-heisenberg-a5b89e.netlify.app/${
        lang === "fi" ? "tapahtumat" : "en/events"
      }/${event.slug[lang ? lang : "fi"].current}/`

      const start = moment(event.startDate)
      const end = moment(event.endDate)

      const duration = moment.duration(end.diff(start))

      const blocks = (event.description[lang ? lang : "fi"] || []).filter(
        (block) => block._type === "block"
      )

      const description = `
      ${blocks
        .map((block) =>
          block.children
            .filter((child) => child._type === "span")
            .map((span) => span.text)
            .join("")
        )
        .join("\n\n")}

        ${url}
      `

      return {
        start: [
          start.year(),
          start.month(),
          start.day(),
          start.hours(),
          start.minutes(),
        ],
        duration: { hours: duration.hours(), minutes: duration.minutes() },
        title: event.title[lang ? lang : "fi"],
        description,
        location: `${event.location.title}, ${event.location.address}`,
        url,
      }
    })

    const { error, value: calendar } = ics.createEvents(events)

    return {
      statusCode: 200,
      body: "BEGIN:VCALENDAR\n" + calendar,
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error }, null, 2),
    }
  }
}

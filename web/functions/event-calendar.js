const ics = require("ics")

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
  const { error, value } = ics.createEvent(event)

  return {
    statusCode: 200,
    body: value,
  }
}

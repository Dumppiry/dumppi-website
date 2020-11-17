import React from "react"

import EventList from "../components/event-list"

const PastEventsSection = ({ heading, ...rest }) => {
  return <EventList type="allPast" />
}

export default PastEventsSection

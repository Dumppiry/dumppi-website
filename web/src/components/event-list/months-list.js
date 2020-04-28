import React from "react"
import styled from "styled-components"
import _ from "lodash"
import moment from "moment"
// for some reason this needs to be imported, lol :D
import "moment/locale/fi"

import List from "./list"
import EventCard from "../event-card"

const getAllMonths = (start, end, locale) => {
  moment.locale(locale)
  const startDate = moment(start)
  const endDate = moment(end)
  let dates = []

  let month = moment(startDate) //clone the startDate

  if (endDate.isBefore(startDate)) {
    while (month.month() >= endDate.month()) {
      dates.push(month.format("MMMM YYYY"))
      month.add(-1, "month")
    }
  } else {
    while (month.month() <= endDate.month()) {
      dates.push(month.format("MMMM YYYY"))
      month.add(1, "month")
    }
  }

  return dates
}

const includeEmptyMonths = (months, eventsByMonths) => {
  let monthsObj = _.keyBy(months, (m) => m)
  _.keys(monthsObj).map(
    (key) =>
      (monthsObj[key] = eventsByMonths.hasOwnProperty(key)
        ? eventsByMonths[key]
        : [])
  )
  return monthsObj
}

const MonthsList = ({ events, noEventsText, showPast, locale, ...rest }) => {
  let eventData = _.groupBy(
    events.filter((n) =>
      !!showPast ? true : new Date(n.startDate) > new Date()
    ),
    (n) => n.month
  ) // { march: [], april: [] ...}

  const months = getAllMonths(
    events[0].startDate,
    events[events.length - 1].startDate,
    locale
  )

  if (months) eventData = includeEmptyMonths(months, eventData)

  return _.keys(eventData).map((month) => (
    <EventsForMonth
      key={month}
      month={month}
      events={eventData}
      locale={locale}
      noEventsText={noEventsText}
      {...rest}
    />
  ))
}

const EventsForMonth = ({ month, events, locale, noEventsText, ...rest }) => {
  return (
    <S.Container>
      <S.Title>{month}</S.Title>
      {events[month].length === 0 ? (
        <p>{noEventsText[locale]}</p>
      ) : (
        <List {...rest}>
          {events[month].map((event) => (
            <EventCard
              key={event._id}
              {...event}
              title={event.title[locale] ? event.title[locale] : event.title}
            />
          ))}
        </List>
      )}
    </S.Container>
  )
}

export default MonthsList

const S = {}

S.Title = styled.h1`
  text-transform: capitalize;
`
S.Container = styled.div`
  margin-top: 5rem;
`

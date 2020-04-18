import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { FiUserCheck, FiUserX, FiUserPlus } from "react-icons/fi"
import axios from "axios"
import _ from "lodash"

const EventStatus = ({
  _id,
  price,
  hasRegistration,
  registrationMaxCapacity,
  registrationStartDate,
  registrationEndDate,
  locale,
  ...rest
}) => {
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const [submissions, setSubmissions] = useState(undefined)

  useEffect(() => {
    if (!submissions) {
      axios
        .get(`/.netlify/functions/get-event-attendees?eventId=${_id}`)
        .then(({ data }) => {
          console.log(data)
          if (_.isArray(data)) setSubmissions(data)
        })
    }
    const interval = setInterval(() => {
      if (
        new Date(registrationStartDate) <= new Date() &&
        new Date(registrationEndDate) >= new Date()
      ) {
        setRegistrationOpen(true)
      } else setRegistrationOpen(false)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  const showSubmissions =
    hasRegistration && registrationOpen && registrationMaxCapacity

  const returnStatus = () => {
    if (price === 0 || !hasRegistration) return "free"
    if (showSubmissions && submissions.length < registrationMaxCapacity)
      return "open"
    if (showSubmissions && submissions.length >= registrationMaxCapacity)
      return "full"
    if (hasRegistration && new Date(registrationStartDate) < new Date())
      return "toBeOpen"
    if (hasRegistration && new Date(registrationEndDate) > new Date())
      return "closed"
    return undefined
  }
  console.log(registrationStartDate)
  const status = returnStatus()
  console.log(status)
  return (
    <S.StatusBar status={status}>
      <div>
        <S.Icon>{getIcon(status)}</S.Icon>
        <span>{getDisplayText(status, locale)}</span>
      </div>
      <span>
        {status === "toBeOpen"
          ? new Date(registrationStartDate).toLocaleString(locale, {
              day: "numeric",
              month: "numeric",
              hour: "numeric",
              minute: "numeric",
            })
          : showSubmissions
          ? `${submissions.length}/${registrationMaxCapacity}`
          : ""}
      </span>
    </S.StatusBar>
  )
}

const getIcon = status => {
  switch (status) {
    case "full":
      return <FiUserX />
    case "closed":
      return <FiUserX />
    case "open":
      return <FiUserCheck />
    case "free":
      return <FiUserCheck />
    default:
      return <FiUserPlus />
  }
}

const statusDisplayTexts = {
  full: {
    fi: "Kanta on täynnä",
    en: "Event is full",
  },
  free: {
    fi: "Vapaa pääsy",
    en: "Free entrance",
  },
  open: {
    fi: "Ilmo on auki",
    en: "Registration is open",
  },
  toBeOpen: {
    fi: "Ilmo aukeaa",
    en: "Registration will open",
  },
  closed: {
    fi: "Ilmo on loppunut",
    en: "Registration has ended",
  },
}

const getDisplayText = (status, locale) =>
  statusDisplayTexts[status][locale] ?? ""

export default EventStatus

const S = {}

const statusColors = {
  open: "#54c754",
  free: "#437ad3",
  full: "#af271d",
}

const FreeStyles = css`
  background-color: ${() => statusColors.free};
  color: white;
`

const OpenStyles = css`
  background-color: ${() => statusColors.open};
  color: white;
`

const FullStyles = css`
  background-color: ${() => statusColors.full};
  color: white;
`

S.StatusBar = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 0 0 10px 10px;
  padding: 1rem 1.5rem;
  color: #2c2c2c;
  display: flex;
  justify-content: space-between;

  ${props => {
    if (props.status === "free") return FreeStyles
    if (props.status === "open") return OpenStyles
    if (props.status === "full") return FullStyles
  }}
`

S.Icon = styled.span`
  margin-right: 0.5em;
`

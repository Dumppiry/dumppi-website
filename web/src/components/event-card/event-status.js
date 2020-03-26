import React from "react"
import styled, { css } from "styled-components"
import { FiUserCheck, FiUserX } from "react-icons/fi"

const EventStatus = ({ price, hasRegistration }) => {
  const status = price === 0 || !hasRegistration ? "free" : undefined

  return (
    <S.StatusBar status={status}>
      {status === "free" ? (
        <>
          <S.Icon>
            <FiUserCheck />
          </S.Icon>
          <span>Kukkuu</span>
        </>
      ) : (
        <>
          <S.Icon>
            <FiUserX />
          </S.Icon>
          <span>Kukkuu</span>
        </>
      )}
    </S.StatusBar>
  )
}

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

S.StatusBar = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 0 0 10px 10px;
  padding: 1rem 1.5rem;
  color: #2c2c2c;

  ${props => props.status === "free" && FreeStyles}
`

S.Icon = styled.span`
  margin-right: 0.5em;
`

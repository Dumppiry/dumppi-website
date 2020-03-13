import React from "react"
import styled from "styled-components"

import img from "../../images/gatsby-astronaut.png"

const EventCard = ({ event, ...rest }) => (
  <S.Container>
    <S.EventImage src={img} />
    <S.EventInfo>
      {event.time && <S.AdditionalInfo>{event.time}</S.AdditionalInfo>}
      <S.Name>{event.name}</S.Name>
      {event.location && (
        <S.AdditionalInfo>{`@ ${event.location}`}</S.AdditionalInfo>
      )}

      <S.Link>Lue lisää...</S.Link>
    </S.EventInfo>
    <S.StatusBar status={event.status} />
  </S.Container>
)

export default EventCard

const S = {}

S.Container = styled.div`
  height: 410px;
  width: 290px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 5px 40px 0 #f0f0f0;
`
S.EventImage = styled.img`
  width: 100%;
  height: 42%;
  border-radius: 10px 10px 0 0;
`

S.EventInfo = styled.div`
  height: 55%;
  display: flex;
  flex-direction: column;
  padding: 25px 25px 0 25px;
`
S.Name = styled.span`
  color: #2c2c2c;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  line-height: 24px;
`
S.AdditionalInfo = styled.span`
  color: #949494;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.31px;
  line-height: 17px;
`

S.Link = styled.span`
  height: 20px;
  width: 106px;
  color: #af271d;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.35px;
  line-height: 20px;
  margin-top: 20px;
`

const statusColors = {
  open: "#54c754",
  free: "#437ad3",
  full: "#af271d",
}

S.StatusBar = styled.div`
  width: 100%;
  height: 13%;
  background-color: ${({ status }) => statusColors[status] || "#f0f0f0"};
  border-radius: 0 0 10px 10px;
`

import React from "react"
import styled from "styled-components"

const RegistrationSubmissions = ({ submissions }) => {
  return (
    <S.List>
      {submissions.map((fields, index) => (
        <S.Item key={index}>
          <S.Content>
            <S.Title>{fields[0]}</S.Title>
            <S.Subtitle>{fields[1]}</S.Subtitle>
          </S.Content>
        </S.Item>
      ))}
    </S.List>
  )
}

export default RegistrationSubmissions

const S = {}

S.List = styled.ol`
  list-style: none;
  counter-reset: my-awesome-counter;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`

S.Item = styled.li`
  counter-increment: my-awesome-counter;
  display: flex;
  width: 100%;
  padding: 1.25rem 0;
  border-bottom: 2px solid #f0f0f0;

  ::before {
    content: counter(my-awesome-counter) ".";
    margin-right: 2rem;
    color: #af271d;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }
`

S.Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 2rem;
  width: 100%;
`

S.Title = styled.span`
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.44px;
  font-weight: 500;
  color: #2c2c2c;
`

S.Subtitle = styled.span`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.35px;
  font-weight: 500;
  color: #949494;
`

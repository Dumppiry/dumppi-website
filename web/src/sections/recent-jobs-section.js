import React from "react"
import styled from "styled-components"

import PortableText from "../components/portable-text/heading"
import RecentJobsList from "../components/jobs/recent-jobs-list"

const RecentJobsSection = ({ heading }) => {
  return (
    <S.Section>
      <PortableText blocks={heading} />
      <RecentJobsList />
    </S.Section>
  )
}

export default RecentJobsSection

const S = {}

S.Section = styled.section`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 1.25rem 0;
    font-size: 2.5rem;
    color: #2c2c2c;
  }
  p {
    margin: 1.25rem 0;
    font-size: 1.25rem;
    color: #949494;
  }
`

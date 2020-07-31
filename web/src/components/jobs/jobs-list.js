import React from "react"
import styled from "styled-components"

import JobCard from "./job-card"

const JobsList = ({ jobs, emptyStateMessage, ...rest }) => {
  const nonExpiredJobs = jobs.nodes.filter(
    (job) => new Date() < new Date(job.expireDate)
  )

  if (nonExpiredJobs.length <= 0) return <p>{emptyStateMessage}</p>
  return (
    <S.List {...rest}>
      {nonExpiredJobs.map((job) => (
        <JobCard key={job._id} {...job} />
      ))}
    </S.List>
  )
}

export default JobsList

const S = {}

S.List = styled.div`
  --grid-columns: 1;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-gap: 2rem;

  @media (min-width: 575px) {
    --grid-columns: 2;
  }
  @media (min-width: 768px) {
    --grid-columns: 3;
  }
`

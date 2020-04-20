import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import JobCard from "./job-card"

const JOBS_QUERY = graphql`
  query JobsQuery {
    allJobs: allSanityJob(sort: { fields: _updatedAt, order: DESC }) {
      nodes {
        ...JobFields
      }
    }
    recentJobs: allSanityJob(
      sort: { fields: _updatedAt, order: DESC }
      limit: 3
    ) {
      nodes {
        ...JobFields
      }
    }
  }

  fragment JobFields on SanityJob {
    _id
    title
    location
    link
    type {
      title {
        _type
        fi
        en
      }
      color {
        hex
      }
    }
    category {
      title {
        _type
        fi
        en
      }
    }
    company {
      _id
      name
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    expireDate
  }
`

const JobsList = ({ type, ...rest }) => {
  const { allJobs, recentJobs } = useStaticQuery(JOBS_QUERY)
  const jobs = type.includes("Recent") ? recentJobs : allJobs

  return (
    <S.List {...rest}>
      {jobs.nodes
        .filter((job) => new Date() < new Date(job.expireDate))
        .map((job) => (
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

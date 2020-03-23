import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import JobCard from "./job-card"

const JOBS_QUERY = graphql`
  query JobsQuery {
    jobs: allSanityJob(sort: { fields: _updatedAt, order: DESC }, limit: 3) {
      nodes {
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
      }
    }
  }
`

const RecentJobsList = ({ ...rest }) => {
  const { jobs } = useStaticQuery(JOBS_QUERY)

  return (
    <S.List {...rest}>
      {jobs.nodes.map(job => (
        <JobCard {...job} />
      ))}
    </S.List>
  )
}

export default RecentJobsList

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

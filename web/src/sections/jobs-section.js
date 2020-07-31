import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import PortableText from "../components/portable-text/heading"
import JobsList from "../components/jobs/jobs-list"
import ButtonLink from "../components/button-link"

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

const JobsSection = ({ heading, type, emptyStateMessage, cta, ...rest }) => {
  const { allJobs, recentJobs } = useStaticQuery(JOBS_QUERY)
  const jobs = type.includes("Recent") ? recentJobs : allJobs

  return (
    <S.Section>
      <PortableText blocks={heading} />
      <S.JobsList jobs={jobs} emptyStateMessage={emptyStateMessage} />
      {!!cta && <S.ButtonLink title={cta.title} link={cta.link[0]} />}
    </S.Section>
  )
}

export default JobsSection

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

S.JobsList = styled(JobsList)`
  margin: 2.5rem 0;
`

S.ButtonLink = styled(ButtonLink)`
  align-self: center;
`

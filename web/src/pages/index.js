import React from "react"
import { graphql } from "gatsby"

import localize from "../components/hoc/localize"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PrimaryButton, SecondaryButton } from "../components/button"
import EventCard from "../components/event-card"

const exampleEvents = [
  {
    status: "open",
    name: "Sitsit paikassa X tää jatkuu toiselle riville",
    location: "unknown",
    time: "Perjantai 16.4 klo 18:00 - 22:00",
  },
  {
    status: "free",
    name: "Korona info",
    location: "Agora",
    time: "Perjantai 16.4 klo 18:00 - 22:00",
  },
  {
    status: undefined,
    name: "KOROONAAAAA SATANA",
    location: "unknown",
    time: "Perjantai 16.4 klo 18:00 - 22:00",
  },
  {
    status: "full",
    name: "Ripuli-fest",
    location: "unknown",
    time: "Perjantai 16.4 klo 18:00 - 22:00",
  },
]

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Moro</h1>

      <PrimaryButton text="primary" onClick={() => console.log("moro")} />
      <SecondaryButton text="secondary" onClick={() => console.log("moro")} />
      <div style={{ marginTop: "20px" }}>
        {exampleEvents.map(e => (
          <EventCard event={e} />
        ))}
      </div>
    </Layout>
  )
}

export default localize(IndexPage)

export const query = graphql`
  query MyQuery {
    allSanityPage {
      edges {
        node {
          id
          title {
            _type
            fi
            en
          }
          _rawContent
        }
      }
    }
  }
`

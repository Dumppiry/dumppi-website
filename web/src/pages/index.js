import React from "react"
import { graphql } from "gatsby"

import localize from "../hoc/localize"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import EventCard from "../components/event-card"
import BigPersonCard from "../components/big-person-card"
import SmallPersonCard from "../components/small-person-card"
import JobCard from "../components/job-card"
import CompanyCard from "../components/company-card"

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

const person = {
  title: "Puheenjohtaja",
  name: "Emma Luukkonen",
  phone: "+358 44 2536783",
  email: "pj@dumioy.net",
}

const smallPersons = [
  {
    name: "Paavo Väänänen",
    phone: "+358 44 2536783",
    email: "bile@dumioy.ab",
  },
  {
    name: "Papi Vaan",
    phone: "+358 44 2536783",
    email: "bile@dumioy.ab",
    title: "Toimitusjohtaja",
  },
]

const job = {
  type: "Kesätyö",
  title: "Web Guru",
  location: "Jyväskylä",
  category: "Osa-aikainen",
}

const company = {
  name: "Solita",
  description:
    "Blaa blaa, vittu blaa. Digitalisaatio ja käsien heiluttelu yms. vessapapero hankinnat.",
}

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Moro</h1>

      <Button primary title="Primary" onClick={() => console.log("moro")} />
      <Button title="Secondary" onClick={() => console.log("moro")} />
      <div style={{ marginTop: "20px" }}>
        {exampleEvents.map(e => (
          <EventCard event={e} />
        ))}
      </div>
      <BigPersonCard person={person} />
      <div style={{ marginTop: "20px" }}>
        {smallPersons.map(sp => (
          <SmallPersonCard person={sp} />
        ))}
      </div>
      <JobCard job={job} />
      <CompanyCard company={company} />
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

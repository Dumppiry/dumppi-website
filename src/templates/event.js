import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event"
import FutureEventsSection from "../sections/future-events-section"

import localize from "../hoc/localize"
import { useCurrentPage } from "../hooks/current-page"

const EventTemplate = ({ data, pageContext, ...rest }) => {
  const { event, settings } = data
  const { setLocale, setCurrentPageId } = useCurrentPage()

  useEffect(() => {
    setLocale(pageContext.locale)
    setCurrentPageId(event._id)
  })

  return (
    <Layout>
      <SEO title={event.title} />
      <Event
        {...event}
        registrationDefaultFields={settings.registrationDefaultFields}
      />
      <FutureEventsSection heading={settings.defaultFutureEventsDescription} />
    </Layout>
  )
}

export default localize(EventTemplate)

export const query = graphql`
  query EventTemplateQuery($id: String!) {
    settings: sanityEventSettings {
      defaultFutureEventsDescription: _rawDefaultFutureEventsDescription
      registrationDefaultFields: _rawRegistrationDefaultFields
    }
    event: sanityEvent(_id: { eq: $id }) {
      _id
      _type
      title {
        _type
        en
        fi
      }
      image {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      location {
        title
        address
        googleMapsLink
      }
      category {
        title {
          _type
          fi
          en
        }
      }
      price
      ticketLink
      ticketSaleStartDate
      contactPerson: _rawContactPerson(resolveReferences: { maxDepth: 2 })
      startDate
      endDate
      description: _rawDescription(resolveReferences: { maxDepth: 3 })
      links {
        _key
        _type
        title
        url
      }
      hasRegistration
      registrationStartDate
      registrationEndDate
      registrationMaxCapacity
      registrationForm {
        _id
        fields: _rawFields
      }
    }
  }
`

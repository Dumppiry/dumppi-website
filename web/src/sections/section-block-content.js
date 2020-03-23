import React from "react"
import BasePortableText from "@sanity/block-content-to-react"

import clientConfig from "../../client-config"

import BigHeadingSection from "./big-heading-section"
import BigPeopleSection from "./big-people-section"
import FutureEventsSection from "./future-events-section"
import PartnersSection from "./partners-section"
import RecentJobsSection from "./recent-jobs-section"
import SmallPeopleSection from "./small-people-section"

const serializers = {
  types: {
    bigHeadingSection: ({ node }) => <BigHeadingSection {...node} />,
    bigPeopleSection: ({ node }) => <BigPeopleSection {...node} />,
    futureEventsSection: ({ node }) => <FutureEventsSection {...node} />,
    partnersSection: ({ node }) => <PartnersSection {...node} />,
    recentJobsSection: ({ node }) => <RecentJobsSection {...node} />,
    smallPeopleSection: ({ node }) => <SmallPeopleSection {...node} />,
  },
}

const SectionBlockContent = ({ blocks }) => {
  return (
    <BasePortableText
      blocks={blocks}
      serializers={serializers}
      {...clientConfig.sanity}
    />
  )
}

export default SectionBlockContent

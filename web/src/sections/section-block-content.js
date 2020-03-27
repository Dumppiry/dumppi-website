import React from "react"
import { motion } from "framer-motion"

import BigHeadingSection from "./big-heading-section"
import BigPeopleSection from "./big-people-section"
import FutureEventsSection from "./future-events-section"
import PartnersSection from "./partners-section"
import RecentJobsSection from "./recent-jobs-section"
import SmallPeopleSection from "./small-people-section"

const SectionBlockContent = ({ blocks }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: 0, y: 30 },
    show: { opacity: 1, x: 0, y: 0 },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {blocks.map(block => {
        let Component
        switch (block._type) {
          case "bigHeadingSection":
            Component = BigHeadingSection
            break

          case "bigPeopleSection":
            Component = BigPeopleSection
            break

          case "futureEventsSection":
            Component = FutureEventsSection
            break

          case "partnersSection":
            Component = PartnersSection
            break

          case "recentJobsSection":
            Component = RecentJobsSection
            break

          case "smallPeopleSection":
            Component = SmallPeopleSection
            break

          default:
            return null
        }
        return (
          <motion.div key={block._key} variants={item}>
            <Component {...block} />
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default SectionBlockContent

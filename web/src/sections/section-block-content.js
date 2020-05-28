import React from "react"
import { motion } from "framer-motion"
import { isEmpty } from "lodash"

import BigHeadingSection from "./big-heading-section"
import BigPeopleSection from "./big-people-section"
import FutureEventsSection from "./future-events-section"
import JobsSection from "./jobs-section"
import KeyFiguresSection from "./key-figures-section"
import MainPartnersSection from "./main-partners-section"
import PartnersSection from "./partners-section"
import PastEventsSection from "./past-events-section"
import PeopleProfilesSection from "./people-profiles-section"
import ProductsSection from "./products-section"
import SmallPeopleSection from "./small-people-section"
import TextSection from "./text-section"
import peopleProfilesSection from "../../../studio/schemas/objects/sections/peopleProfilesSection"

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

  if (isEmpty(blocks)) return null

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {blocks.map((block) => {
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

          case "jobsSection":
            Component = JobsSection
            break

          case "keyFiguresSection":
            Component = KeyFiguresSection
            break

          case "mainPartnersSection":
            Component = MainPartnersSection
            break

          case "partnersSection":
            Component = PartnersSection
            break

          case "peopleProfilesSection":
            Component = PeopleProfilesSection
            break

          case "productsSection":
            Component = ProductsSection
            break

          case "smallPeopleSection":
            Component = SmallPeopleSection
            break

          case "textSection":
            Component = TextSection
            break

          case "pastEventsSection":
            Component = PastEventsSection
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

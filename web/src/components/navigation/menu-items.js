import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import styled from "styled-components"

import { InternalLink } from "../link"

import { useCurrentPage } from "../../hooks/current-page"

const MenuItems = ({ items }) => {
  const { locale } = useCurrentPage()

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 0, y: 30 },
    show: { opacity: 1, x: 0, y: 0 },
  }

  return (
    <S.Items variants={listVariants} initial="hidden" animate="show">
      {items.map(item => (
        <S.TopLevelItem key={item._key} variants={itemVariants}>
          <S.Link id={item.page._id} activeClassName="active">
            {item.page.title[locale]}
          </S.Link>
          {item.subPages.length > 0 && (
            <S.SubItems>
              {item.subPages.map(sp => (
                <S.SubLevelItem>
                  <S.Link id={sp._id} activeClassName="active">
                    {sp.title[locale]}
                  </S.Link>
                </S.SubLevelItem>
              ))}
            </S.SubItems>
          )}
        </S.TopLevelItem>
      ))}
    </S.Items>
  )
}

export default MenuItems

const S = {}

S.Items = styled(motion.ul)`
  list-style: none;
  margin: 2.5rem 0 10rem;
`

S.SubItems = styled.ul`
  --grid-columns: 1;

  list-style: none;
  margin-left: 0;

  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);

  @media (min-width: 575px) {
    --grid-columns: 2;
  }
  @media (min-width: 768px) {
    --grid-columns: 3;
  }
`

S.TopLevelItem = styled(motion.li)`
  font-size: 2.5rem;
  color: #2c2c2c;
  font-weight: 600;
  margin-bottom: 3rem;
`

S.SubLevelItem = styled.li`
  font-size: 1.75rem;
  color: #949494;
  font-weight: 600;
  margin: 1.25rem 0;
`

S.Link = styled(InternalLink)`
  text-decoration: none;
  color: inherit;
  transition: color 200ms ease-in-out;

  &.active {
    color: #af271d;
  }

  :hover {
    color: #af271d;
  }
`

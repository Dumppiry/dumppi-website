import React from "react"
import styled from "styled-components"
import Masonry from "react-masonry-css"

import { InternalLink } from "../link"

import { useCurrentPage } from "../../hooks/current-page"

const Nav = ({ items, ...rest }) => {
  const { locale } = useCurrentPage()

  return (
    <S.Masonry
      breakpointCols={{
        default: 4,
        991: 3,
        768: 2,
        460: 1,
      }}
      columnClassName="masonry-grid_column"
      {...rest}
    >
      {items.map((item) => (
        <S.TopLevelItem key={item._key}>
          <S.Link id={item.page._id}>{item.page.title[locale]}</S.Link>
          {item.subPages.length > 0 && (
            <S.SubItems>
              {item.subPages.map((sp) => (
                <S.SubLevelItem key={sp.page._id}>
                  <S.Link id={sp.page._id}>{sp.page.title[locale]}</S.Link>
                </S.SubLevelItem>
              ))}
            </S.SubItems>
          )}
        </S.TopLevelItem>
      ))}
    </S.Masonry>
  )
}

export default Nav

const S = {}

S.Masonry = styled(Masonry)`
  --gutter-size: 1.75rem;
  display: flex;
  margin-left: calc(-1 * var(--gutter-size));
  width: auto;

  .masonry-grid_column {
    padding-left: var(--gutter-size);
    background-clip: padding-box;
  }
`

S.SubItems = styled.ul`
  list-style: none;
  margin-left: 0;
  margin-top: 1.5em;

  display: flex;
  flex-direction: column;
`

S.TopLevelItem = styled.li`
  color: #ffffff;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.31px;
  line-height: 17px;
  text-transform: uppercase;
  margin-bottom: 2.5em;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: stretch;
  flex-grow: 1;
`

S.SubLevelItem = styled.li`
  color: #949494;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.31px;
  line-height: 17px;
  text-transform: none;
  margin-bottom: 1.5em;
`

S.Link = styled(InternalLink)`
  text-decoration: none;
  color: inherit;
  transition: color 200ms ease-in-out;

  :hover {
    color: #f0f0f0;
  }
`

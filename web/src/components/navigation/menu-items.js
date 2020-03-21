import React from "react"
import styled from "styled-components"

import Link from "../link"

import { useCurrentPage } from "../../hooks/current-page"

const MenuItems = ({ items }) => {
  const { locale } = useCurrentPage()

  return (
    <S.Items>
      {items.map(item => (
        <S.TopLevelItem>
          <S.Link id={item.page._id}>{item.page.title[locale]}</S.Link>
          {item.subPages.length > 0 && (
            <S.SubItems>
              {item.subPages.map(sp => (
                <S.SubLevelItem>
                  <S.Link id={sp._id}>{sp.title[locale]}</S.Link>
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

S.Items = styled.ul`
  width: 100%;
  max-width: 940px;
  margin: auto;
  padding: 0 2rem;
  list-style: none;

  height: 100%;
  overflow: auto;
  /* & > ul {
    overflow: auto;
  } */
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

S.TopLevelItem = styled.li`
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

S.Link = styled(Link)`
  text-decoration: none;
  color: inherit;

  :hover {
    color: #af271d;
  }
`

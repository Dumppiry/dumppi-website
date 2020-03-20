// TODO: All styling and stuff :D
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { useCurrentPage } from "../../hooks/current-page"
import Link from "../link"

const FullPageNavQuery = graphql`
  query MyQuery {
    nav: sanityFullNavigation {
      items: topLevelItems {
        _key
        page {
          ...PageFragment
        }
        subPages {
          ...PageFragment
        }
      }
    }
  }

  fragment PageFragment on SanityPage {
    _id
    title {
      fi
      en
    }
  }
`

const FullPageNav = () => {
  const { nav } = useStaticQuery(FullPageNavQuery)
  const { locale } = useCurrentPage()

  return (
    <nav>
      <ul>
        {nav.items.map(item => (
          <li>
            <Link id={item.page._id}>{item.page.title[locale]}</Link>
            {item.subPages && (
              <ul>
                {item.subPages.map(sp => (
                  <li>
                    <Link id={sp._id}>{sp.title[locale]}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FullPageNav

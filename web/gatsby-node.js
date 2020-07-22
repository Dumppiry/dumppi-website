// Get your list of languages from somewhere, env file, config.json, etc
// for sake of this snippet I am putting it here
const { zipFunctions } = require("@netlify/zip-it-and-ship-it")

const extraLanguages = ["en"] // Finnish is currently the default so it isn't needed here.

const createLocalePage = (page, createPage, locale, reporter) => {
  const { context, ...rest } = page

  let localePage
  if (extraLanguages.includes(locale)) {
    localePage = {
      ...rest,
      path: `/${locale}${page.path}`,
      // every page for each language gets the language code as a prefix
      // to its path: "/es/blog/<some-slug>" for example
      context: {
        ...context,
        locale,
      },
    }
  } else {
    localePage = {
      ...rest,
      context: {
        ...context,
        locale,
      },
    }
  }
  reporter.info(`Creating page: ${localePage.path}`)
  createPage(localePage)
}

const createFrontPage = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      sanityFrontPage {
        _id
      }
    }
  `)

  if (result.errors) throw result.errors

  const locales = ["fi", ...extraLanguages]
  locales.map((locale) => {
    const page = {
      path: `/`,
      component: require.resolve("./src/templates/front-page.js"),
      context: {
        id: result.data.sanityFrontPage._id,
      },
    }
    createLocalePage(page, createPage, locale, reporter)
  })
}

const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      nav: sanityFullNavigation(
        topLevelItems: { elemMatch: { _type: { ne: "eventsPage" } } }
      ) {
        topLevelItems {
          page {
            __typename
            ...PageFragment
            ...BenefitsPageFragment
            ...EventsPageFragment
          }
          subPages {
            page {
              __typename
              ...PageFragment
              ...BenefitsPageFragment
              ...EventsPageFragment
            }
          }
        }
      }
    }

    fragment PageFragment on SanityPage {
      _id
      title {
        _type
        fi
        en
      }
      slug {
        fi {
          current
        }
        en {
          current
        }
      }
    }

    fragment BenefitsPageFragment on SanityBenefitsPage {
      _id
      title {
        _type
        fi
        en
      }
      slug {
        fi {
          current
        }
        en {
          current
        }
      }
    }

    fragment EventsPageFragment on SanityEventsPage {
      _id
      title {
        _type
        fi
        en
      }
      slug {
        fi {
          current
        }
        en {
          current
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const topLevelItems = (result.data.nav || {}).topLevelItems || []

  const locales = ["fi", ...extraLanguages]
  locales.map((locale) => {
    topLevelItems.map((node) => {
      const topPath = node.page.slug[locale].current

      const subNavigationItems =
        node.page.__typename === "SanityEventsPage"
          ? [{ page: node.page }, ...node.subPages]
          : node.subPages

      const page = {
        path: `/${topPath}`,
        component: resolvePageTemplate(node.page.__typename),
        context: {
          id: node.page._id,
          parent: null,
          subNavigationItems,
        },
      }
      createLocalePage(page, createPage, locale, reporter)

      node.subPages.map((sp) => {
        const page = {
          path: `/${topPath}/${sp.page.slug[locale].current}`,
          component: resolvePageTemplate(sp.page.__typename),
          context: {
            id: sp.page._id,
            parent: node.page,
            subNavigationItems,
          },
        }
        createLocalePage(page, createPage, locale, reporter)
      })
    })
  })
}

const createEventPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityEvent {
        nodes {
          _id
          slug {
            fi {
              current
            }
            en {
              current
            }
          }
        }
      }
      sanityEventsPage {
        _id
        slug {
          fi {
            current
          }
          en {
            current
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const events = (result.data.allSanityEvent || {}).nodes || []

  const locales = ["fi", ...extraLanguages]
  locales.map((locale) => {
    const basePath = result.data.sanityEventsPage.slug[locale].current

    events.map((node) => {
      const path = node.slug[locale].current
      const page = {
        path: `/${basePath}/${path}`,
        component: require.resolve("./src/templates/event.js"),
        context: {
          id: node._id,
        },
      }
      createLocalePage(page, createPage, locale, reporter)
    })
  })
}

const resolvePageTemplate = (type) => {
  switch (type) {
    case "SanityBenefitsPage":
      return require.resolve("./src/templates/benefits-page.js")

    case "SanityEventsPage":
      return require.resolve("./src/templates/events-page.js")

    default:
      return require.resolve("./src/templates/page.js")
  }
}

exports.createPages = ({ graphql, actions, reporter }) => {
  createFrontPage({ graphql, actions, reporter })
  createPages({ graphql, actions, reporter })
  createEventPages({ graphql, actions, reporter })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type SitePage implements Node {
      context: SitePageContext
    }

    type SitePageContext {
      id: String
      locale: String
    }
  `
  createTypes(typeDefs)
}

// Make sure that Netlify functions work also after building in GitHub actions
// Similar case: https://www.gatsbyjs.com/docs/netlify/getting-started/#does-gatsby-cloud-work-with-netlify-functions
exports.onPostBuild = async ({ reporter }) => {
  // Configure where the functions are kept and where we want to move them.
  const zipped = await zipFunctions("functions", "public/functions")
  reporter.info(`Zipped ${zipped.length || 0} functions:`)
  zipped.map((f) => console.log(`  - ${f.path}`))
}

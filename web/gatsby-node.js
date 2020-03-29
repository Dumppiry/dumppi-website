// Get your list of languages from somewhere, env file, config.json, etc
// for sake of this snippet I am putting it here

const extraLanguages = ["en"] // English is currently the default so it isn't needed here.

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
  locales.map(locale => {
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
      allSanityPageRoute {
        nodes {
          page {
            ... on SanityPage {
              _id
            }
            ... on SanityBenefitsPage {
              _id
            }
          }
          slug {
            _type
            en {
              current
            }
            fi {
              current
            }
          }
          subRoutes {
            page {
              ... on SanityPage {
                _id
              }
              ... on SanityBenefitsPage {
                _id
              }
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
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageNodes = (result.data.allSanityPageRoute || {}).nodes || []

  const locales = ["fi", ...extraLanguages]
  locales.map(locale => {
    pageNodes.map(node => {
      const topPath = node.slug[locale].current
      const page = {
        path: `/${topPath}`,
        component:
          node.page._id === "benefitsPage"
            ? require.resolve("./src/templates/benefits-page.js")
            : require.resolve("./src/templates/page.js"),
        context: {
          id: node.page._id,
        },
      }
      createLocalePage(page, createPage, locale, reporter)

      node.subRoutes.map(sr => {
        const page = {
          path: `/${topPath}/${sr.slug[locale].current}`,
          component: require.resolve("./src/templates/page.js"),
          context: {
            id: sr.page._id,
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
  locales.map(locale => {
    const basePath = result.data.sanityEventsPage.slug[locale].current
    const page = {
      path: `/${basePath}`,
      component: require.resolve("./src/templates/events-page.js"),
      context: {
        id: result.data.sanityEventsPage._id,
      },
    }
    createLocalePage(page, createPage, locale, reporter)

    events.map(node => {
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

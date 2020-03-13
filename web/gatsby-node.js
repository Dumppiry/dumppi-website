// Get your list of languages from somewhere, env file, config.json, etc
// for sake of this snippet I am putting it here

const extraLanguages = ["en"] // English is currently the default so it isn't needed here.

const createLocalePage = (page, createPage, locale) => {
  const { context, ...rest } = page

  if (extraLanguages.includes(locale)) {
    createPage({
      ...rest,
      path: `/${locale}${page.path}`,
      // every page for each language gets the language code as a prefix
      // to its path: "/es/blog/<some-slug>" for example
      context: {
        ...context,
        locale,
      },
    })
  } else {
    createPage({
      ...rest,
      context: {
        ...context,
        locale,
      },
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityPageRoute {
        nodes {
          page {
            _id
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
              _id
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
        component: require.resolve("./src/templates/some-page.js"),
      }
      createLocalePage(page, createPage, locale)

      node.subRoutes.map(sr => {
        const page = {
          path: `/${topPath}/${sr.slug[locale].current}`,
          component: require.resolve("./src/templates/some-page.js"),
        }
        createLocalePage(page, createPage, locale)
      })
    })
  })

  // generate your dynamic content here...
  // const page = {
  //   path: "some-page",
  //   component: require.resolve(`./src/templates/some-page.js`),
  //   context: {
  //     slug: "some-page-slug",
  //   },
  // }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)

  createLocalePage(page, createPage)
}

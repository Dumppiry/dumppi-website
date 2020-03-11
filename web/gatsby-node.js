// Get your list of languages from somewhere, env file, config.json, etc
// for sake of this snippet I am putting it here

const extraLanguages = ["en"] // English is currently the default so it isn't needed here.

const createLocalePage = (page, createPage) => {
  const { context, ...rest } = page

  createPage({
    ...rest,
    context: {
      ...context,
      locale: process.env.LOCALE,
    },
  })

  if (extraLanguages.length) {
    extraLanguages.forEach(code => {
      const { path, context, ...rest } = page

      createPage({
        ...rest,
        path: `/${code}${path}`,
        // every page for each language gets the language code as a prefix
        // to its path: "/es/blog/<some-slug>" for example
        context: {
          ...context,
          locale: code,
        },
      })
    })
  }
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  // generate your dynamic content here...
  const page = {
    path: "some-page",
    component: require.resolve(`./src/templates/some-page.js`),
    context: {
      slug: "some-page-slug",
    },
  }

  createLocalePage(page, createPage)
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)

  createLocalePage(page, createPage)
}

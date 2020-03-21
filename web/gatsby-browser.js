/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const PropTypes = require("prop-types")
const { ApolloProvider } = require("@apollo/react-hooks")

const { client } = require("./src/apollo-client")
const { CurrentPageProvider } = require("./src/hooks/current-page")
const { NavigationProvider } = require("./src/hooks/navigation")

const Wrapper = ({ element }) => (
  <ApolloProvider client={client}>
    <NavigationProvider>
      <CurrentPageProvider>{element}</CurrentPageProvider>
    </NavigationProvider>
  </ApolloProvider>
)

Wrapper.propTypes = {
  element: PropTypes.node,
}

exports.wrapRootElement = Wrapper

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const PropTypes = require("prop-types")

const { CurrentPageProvider } = require("./src/hooks/current-page")
const { NavigationProvider } = require("./src/hooks/navigation")

const Wrapper = ({ element }) => (
  <NavigationProvider>
    <CurrentPageProvider>{element}</CurrentPageProvider>
  </NavigationProvider>
)

Wrapper.propTypes = {
  element: PropTypes.node,
}

exports.wrapRootElement = Wrapper

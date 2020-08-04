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

const { PrankProvider } = require("./src/hooks/prank")

const Wrapper = ({ element }) => (
  <PrankProvider>
    <NavigationProvider>
      <CurrentPageProvider>{element}</CurrentPageProvider>
    </NavigationProvider>
  </PrankProvider>
)

Wrapper.propTypes = {
  element: PropTypes.node,
}

exports.wrapRootElement = Wrapper

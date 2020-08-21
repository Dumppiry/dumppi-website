// Load variables from `.env` as soon as possible
require("dotenv").config()

const clientConfig = require("./client-config")

const isProd = process.env.NODE_ENV === "production"
// const isDeployPreview = process.env.CONTEXT === "deploy-preview"

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dumppi ry`,
        short_name: `Dumppi`,
        start_url: `/`,
        background_color: `#AF271D`,
        theme_color: `#AF271D`,
        display: `minimal-ui`,
        icon: `src/images/pingviini.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: false,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "fullpage-menu",
        id: "fullpage-menu",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-174510815-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}

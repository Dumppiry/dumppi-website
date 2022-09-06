module.exports = {
  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID || "ubo8m1s0",
    dataset: process.env.GATSBY_SANITY_DATASET || "production",
    apiUrl:
      process.env.GATSBY_SANITY_API_URL ||
      "https://ubo8m1s0.api.sanity.io/v1/graphql/production/default",
  },
}

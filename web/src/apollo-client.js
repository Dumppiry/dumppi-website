import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { sanity } from "../client-config"

export const client = new ApolloClient({
  uri: sanity.apiUrl,
  fetch,
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${process.env.SANITY_READ_TOKEN}`,
      },
    })
  },
})

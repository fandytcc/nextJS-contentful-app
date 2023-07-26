import { endpoint } from "@/codegen";
import { GraphQLClient } from "graphql-request";

export const gqlClient  = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});
import type { CodegenConfig } from "@graphql-codegen/cli";

export const endpoint = `${process.env.CONTENTFUL_GRAPHQL_ENDPOINT!}/${process.env.CONTENTFUL_SPACE_ID}/environments/master`

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [endpoint!]: {
        headers: {
          "Authorization": `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  documents: "app/lib/graphql/**/*.graphql",
  generates: {
    "app/lib/__generated/graphql.ts": {
      config: {
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        enumsAsTypes: true,
        scalars: {
          numeric: "number",
        },
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
  },
};

export default config;
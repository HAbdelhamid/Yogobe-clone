import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://devenv.yogobe.com/graphql",
  documents: "gql/queries/*.graphql",
  generates: {
    "./gql/generated/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withComponent: false,
      },
    },
    "./gql/generated/apollo-helpers.ts": {
      plugins: ["typescript-apollo-client-helpers"],
    },
  },
};

export default config;

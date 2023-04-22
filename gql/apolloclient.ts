import {
  ApolloClient,
  ApolloLink,
  concat,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

// const httpLink = new HttpLink({
//   uri: "http://localhost:3000/api/graphql",
// });

// const uploadLink = createUploadLink({
//   uri: "http://localhost:3000/graphql",
// });

// const link = concat(httpLink, createUploadLink());

const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:3000/api/graphql",
  }),

  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          videos: {
            keyArgs: [],
            merge(existing = { data: [] }, incoming) {
              return {
                ...incoming,
                data: [...existing.data, ...incoming.data],
              };
            },
          },
          getFavoriteVideos: {
            merge: true,
          },
          video: {
            merge: true,
          },
          currentUser: {
            merge: true,
          },
        },
      },
    },
  }),
});
export default client;
